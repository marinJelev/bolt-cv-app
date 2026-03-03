import { ArrowRight, Download } from 'lucide-react';
import { useState, useEffect } from 'react';

interface HeroSectionProps {
  onExportPDF: () => void;
  onContactClick: () => void;
}

export function HeroSection({ onExportPDF, onContactClick }: HeroSectionProps) {
  const titles = ['Product Leader', 'Strategic Thinker', 'Innovation Driver'];
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
    <div id="about" className="min-h-screen flex flex-col items-center justify-center py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
            Marin Jelev
          </h1>
          <p className="text-2xl md:text-3xl font-medium h-16 text-gray-700">
            {displayText}
            <span className="animate-pulse ml-1 text-gray-700">_</span>
          </p>
        </div>

        <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto">
          10+ years of expertise in product management, strategy, and cross-functional leadership. Committed to building products that solve real problems and drive measurable impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <button
            onClick={onContactClick}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get In Touch
            <ArrowRight size={18} />
          </button>
          <button
            onClick={onExportPDF}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
          >
            <Download size={18} />
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
