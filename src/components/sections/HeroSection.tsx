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
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-6xl md:text-8xl font-black tracking-tight text-accent-dark">
              Marin Jelev
            </h1>
            <p className="text-2xl md:text-4xl font-bold h-20 text-accent-blue">
              {displayText}
              <span className="animate-pulse ml-2">_</span>
            </p>
          </div>
        </div>

        <p className="text-lg leading-relaxed text-gray-700 max-w-2xl mx-auto font-medium">
          10+ years of expertise in <span className="text-accent-dark font-bold">product management</span>, <span className="text-gray-600 font-bold">strategy</span>, and <span className="text-accent-dark font-bold">cross-functional leadership</span>. Committed to building products that solve real problems and drive measurable impact.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <button
            onClick={onContactClick}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent-blue text-white rounded-lg font-bold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
          >
            Get In Touch
            <ArrowRight size={20} />
          </button>
          <button
            onClick={onExportPDF}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-accent-blue text-accent-blue rounded-lg font-bold hover:bg-blue-100 transition-all duration-300 text-lg"
          >
            <Download size={20} />
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
}
