export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'About', href: '#about', color: 'text-accent-blue' },
    { label: 'Experience', href: '#experience', color: 'text-accent-green' },
    { label: 'Skills', href: '#skills', color: 'text-accent-purple' },
    { label: 'Education', href: '#education', color: 'text-accent-red' },
    { label: 'Email', href: 'mailto:contact@example.com', color: 'text-accent-orange' },
    { label: 'LinkedIn', href: 'https://linkedin.com', color: 'text-accent-teal', external: true },
    { label: 'GitHub', href: 'https://github.com', color: 'text-accent-blue', external: true },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white border-t-2 border-gray-700">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex gap-6 text-xs">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                className={`font-semibold transition-all duration-300 hover:scale-110 ${link.color}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-gray-400 font-medium">
            © {currentYear} Marin • Built with <span className="text-accent-red">❤️</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
