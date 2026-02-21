interface HeroProps {
  title: string;
  subtitle?: string;
  description?: string;
  actions?: Array<{
    label: string;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary';
  }>;
  children?: React.ReactNode;
}

export function Hero({ title, subtitle, description, actions, children }: HeroProps) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-24 px-6">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        {subtitle && (
          <p className="text-sm font-semibold uppercase tracking-wide text-gray-500">
            {subtitle}
          </p>
        )}

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900">
          {title}
        </h1>

        {description && (
          <p className="text-xl text-gray-600 leading-relaxed">
            {description}
          </p>
        )}

        {actions && actions.length > 0 && (
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            {actions.map((action, idx) => (
              <button
                key={idx}
                onClick={action.onClick}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  action.variant === 'secondary'
                    ? 'border border-gray-300 text-gray-900 hover:bg-gray-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}

        {children}
      </div>
    </div>
  );
}
