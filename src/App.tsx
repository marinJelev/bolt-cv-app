import { supabase } from './lib/supabase';
import { Navigation, Footer } from './components/navigation';
import { HeroSection } from './components/sections/HeroSection';
import { ExperienceSection } from './components/sections/ExperienceSection';
import { EducationSection } from './components/sections/EducationSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ContactSection } from './components/sections/ContactSection';
import { workExperience, education, skills } from './data';
import { ContactSubmission } from './types';

function App() {
  const handleNavClick = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleExportPDF = () => {
    const link = document.createElement('a');
    link.href = '/MarinJelev.pdf';
    link.download = 'MarinJelev.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation onNavClick={handleNavClick} />

      <main>
        <HeroSection onExportPDF={handleExportPDF} onContactClick={() => handleNavClick('contact')} />

        <ExperienceSection experiences={workExperience} />

        <SkillsSection skills={skills} />

        <EducationSection educationData={education} />

        <ContactSection onSubmit={handleContactSubmit} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
