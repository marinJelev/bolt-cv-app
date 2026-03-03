import { Mail, Linkedin, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { Section } from '../layout/Section';

interface ContactSectionProps {
  onSubmit: (data: { name: string; email: string; message: string }) => Promise<void>;
}

export function ContactSection({ onSubmit }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await onSubmit(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact" className="bg-gray-50">
      <div className="space-y-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-600 mt-4">
            Have a project or opportunity? Let's collaborate.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2 max-w-4xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
              {!isSubmitting && <ArrowRight size={18} />}
            </button>

            {submitStatus === 'success' && (
              <p className="text-sm font-medium text-green-600">
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p className="text-sm font-medium text-red-600">
                Failed to send message. Please try again.
              </p>
            )}
          </form>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Other Ways to Connect
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:contact@example.com"
                  className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-white transition-colors"
                >
                  <Mail size={20} />
                  <span>Send an Email</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-white transition-colors"
                >
                  <Linkedin size={20} />
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>

            <div className="p-6 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-gray-900 mb-2">
                Quick Response
              </h4>
              <p className="text-sm text-gray-600">
                I typically respond to messages within 24-48 hours. Looking forward to hearing from you!
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
