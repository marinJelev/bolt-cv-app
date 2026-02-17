import { Download } from 'lucide-react';
import { useState, useEffect } from 'react';

interface AboutProps {
  isDarkMode: boolean;
  onExportPDF: () => void;
}

export function About({ isDarkMode, onExportPDF }: AboutProps) {
  const titles = ['Product Manager', 'Product Ninja', 'Product Enthusiast'];
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
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(title.slice(0, displayText.length - 1));
        }, 30);
      } else {
        setCurrentTitle((prev) => (prev + 1) % titles.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentTitle]);

  return (
    <section id="about" className="min-h-[60vh] flex items-center justify-center py-20">
      <div className="text-center space-y-6 max-w-2xl">
        <div>
          <h1 className={`text-5xl md:text-6xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Hi, I'm Marin
          </h1>
          <p className={`text-2xl md:text-3xl font-semibold h-12 ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`}>
            {displayText}
            <span className={`animate-pulse ${isDarkMode ? 'text-blue-400' : 'text-blue-500'}`}>|</span>
          </p>
        </div>

        <p className={`text-lg leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          With 8+ years of experience in product management, I've led cross-functional teams and driven product innovation at some of the world's leading tech companies. I'm passionate about building products that solve real problems and create meaningful impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a
            href="#contact"
            className={`px-8 py-3 rounded-lg font-semibold transition-colors ${isDarkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-500 text-white hover:bg-blue-600'}`}
          >
            Get in Touch
          </a>
          <button
            onClick={onExportPDF}
            className={`px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2 ${
              isDarkMode
                ? 'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700'
                : 'bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200'
            }`}
          >
            <Download size={20} />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}
