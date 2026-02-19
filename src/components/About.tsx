import { ArrowRight, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

interface AboutProps {
  isDarkMode: boolean;
  onExportPDF: () => void;
}

export function About({ isDarkMode, onExportPDF }: AboutProps) {
  const titles = ['Senior Technical Product Manager', 'Product Strategist', 'Product Leader'];
  const [currentTitle, setCurrentTitle] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const title = titles[currentTitle];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < title.length) {
        timeout = setTimeout(() => {
          setDisplayText(title.slice(0, displayText.length + 1));
        }, 40);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2500);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(title.slice(0, displayText.length - 1));
        }, 25);
      } else {
        setCurrentTitle((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentTitle]);

  return (
    <section id="about" className={`min-h-screen flex items-center justify-center py-24 transition-colors ${isDarkMode ? 'bg-gray-950' : 'bg-white'}`}>
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="space-y-4">
          <h1 className={`text-5xl md:text-7xl font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Product management excellence
          </h1>
          <p className={`text-xl md:text-2xl font-medium h-12 transition-colors ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
            {displayText}
            <span className={`animate-pulse ml-1 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>_</span>
          </p>
        </div>

        <p className={`text-lg leading-relaxed max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          Experienced product leader with 8+ years driving platform optimization, product strategy, and cross-functional collaboration. Currently leading technical initiatives at neoshare.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="#contact"
            className={`inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-medium transition-all ${isDarkMode ? 'bg-white text-gray-950 hover:bg-gray-100' : 'bg-gray-900 text-white hover:bg-black'}`}
          >
            Get in Touch
            <ArrowRight size={18} />
          </a>
          <button
            onClick={onExportPDF}
            className={`inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-medium transition-all border ${isDarkMode ? 'border-gray-700 text-white hover:bg-gray-900' : 'border-gray-300 text-gray-900 hover:bg-gray-50'}`}
          >
            <Download size={18} />
            Download CV
          </button>
        </div>
      </div>
    </section>
  );
}
