export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex gap-8">
            <div>
              <h3 className="font-semibold text-sm mb-2">Navigation</h3>
              <ul className="space-y-1 text-xs text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#experience" className="hover:text-white transition-colors">Experience</a></li>
                <li><a href="#skills" className="hover:text-white transition-colors">Skills</a></li>
                <li><a href="#education" className="hover:text-white transition-colors">Education</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm mb-2">Connect</h3>
              <ul className="space-y-1 text-xs text-gray-400">
                <li><a href="mailto:contact@example.com" className="hover:text-white transition-colors">Email</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a></li>
                <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
              </ul>
            </div>
          </div>

          <p className="text-xs text-gray-400">
            © {currentYear} Marin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
