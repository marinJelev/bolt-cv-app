export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Education', href: '#education' },
    { label: 'Email', href: 'mailto:contact@example.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com', external: true },
    { label: 'GitHub', href: 'https://github.com', external: true },
  ];

  return (
    <footer className="bg-accent-dark text-white border-t-2 border-gray-700">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="flex gap-6 text-xs">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                className="font-semibold text-gray-300 hover:text-accent-blue transition-all duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <p className="text-xs text-gray-400 font-medium">
            © {currentYear} Marin
          </p>
        </div>
      </div>
    </footer>
  );
}
