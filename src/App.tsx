import { useEffect, useState } from 'react';
import { supabase } from './lib/supabase';
import { Header } from './components/Header';
import { About } from './components/About';
import { Timeline } from './components/Timeline';
import { Education } from './components/Education';
import { ContactForm } from './components/ContactForm';
import { workExperience, education } from './data';
import { ContactSubmission } from './types';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExportPDF = () => {
    const element = document.body;
    const printWindow = window.open('', '', 'height=600,width=800');
    if (printWindow) {
      printWindow.document.write(element.innerHTML);
      printWindow.document.close();
      printWindow.print();
    }
  };

  const handleContactSubmit = async (data: ContactSubmission) => {
    try {
      const { error } = await supabase.from('contact_submissions').insert([
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
      ]);

      if (error) throw error;
    } catch (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }
  };

  return (
    <div className={`min-h-screen transition-colors ${isDarkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>
      <Header isDarkMode={isDarkMode} onThemeToggle={toggleTheme} onNavClick={handleNavClick} />

      <main>
        <About isDarkMode={isDarkMode} onExportPDF={handleExportPDF} />

        <Timeline
          experiences={workExperience}
          isDarkMode={isDarkMode}
          highlightedSkills={[]}
        />

        <Education educationData={education} isDarkMode={isDarkMode} />

        <ContactForm isDarkMode={isDarkMode} onSubmit={handleContactSubmit} />
      </main>

      <footer className={`border-t transition-colors ${isDarkMode ? 'bg-gray-900 border-gray-800' : 'bg-white border-gray-200'}`}>
        <div className="max-w-6xl mx-auto px-6 py-12 text-center">
          <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            © 2026 Marin Jelev
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
