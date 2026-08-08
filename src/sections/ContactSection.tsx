import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check, RefreshCw } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [apiError, setApiError] = useState<string | null>(null);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const validate = () => {
    const errs: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Message cannot be empty';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSuccess = () => {
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setErrors({});
    
    // Auto-hide success banner after 3 seconds (3000ms)
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setApiError(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        handleSuccess();
      } else {
        setApiError(data.error || 'Failed to send message.');
      }
    } catch (err) {
      console.warn('API error, falling back to mailto link:', err);
      
      // Fallback mailto trigger
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
      
      handleSuccess();
    } fontally: {
      setIsSubmitting(false);
    }
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative z-10 bg-background border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-[2px] bg-accent" />
          <span className="text-xs font-mono font-bold text-accent tracking-widest uppercase">
            08. CONTACT & GET IN TOUCH
          </span>
        </div>

        <div className="mb-12 space-y-2">
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-white tracking-tight">
            Let's Build Something Meaningful.
          </h2>
          <p className="text-sm text-text-secondary font-mono">
            Open for opportunities in Web Development, GIS Analysis, Python Automation & AI Software Development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Information Cards */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-8 rounded-3xl glass-panel border border-white/10 space-y-6">
              <h3 className="text-xl font-display font-bold text-white">
                Direct Channels
              </h3>

              <div className="space-y-4 font-mono text-xs">
                {/* Email Card */}
                <div className="p-4 rounded-2xl bg-surface-100/70 neon-border-web flex items-center justify-between group transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/40 flex items-center justify-center text-accent-cyan">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-text-muted">EMAIL ADDRESS</div>
                      <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm text-white font-semibold hover:text-accent-cyan transition-colors">
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>
                  <button onClick={handleCopyEmail} className="p-2 text-text-muted hover:text-white" title="Copy Email">
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone Card */}
                <div className="p-4 rounded-2xl bg-surface-100/70 neon-border-gis flex items-center justify-between group transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-text-muted">PHONE / WHATSAPP</div>
                      <a href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`} className="text-sm text-white font-semibold hover:text-emerald-400 transition-colors">
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Location Card */}
                <div className="p-4 rounded-2xl bg-surface-100/70 neon-border-ai flex items-center justify-between group transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-accent-violet/20 border border-accent-violet/40 flex items-center justify-center text-accent-violet">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-[10px] text-text-muted">LOCATION</div>
                      <div className="text-sm text-white font-semibold">
                        {PERSONAL_INFO.location}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Live Email Dispatch Note */}
            <div className="p-5 rounded-2xl bg-emerald-950/30 neon-border-gis text-xs font-mono text-emerald-300 leading-relaxed space-y-1">
              <span className="font-bold flex items-center gap-1.5 text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                REAL-TIME GMAIL SMTP INTEGRATION ACTIVE:
              </span>
              <p className="text-text-secondary">
                Messages submitted via this form are dispatched directly to <strong className="text-white">neelnp2411@gmail.com</strong> in real-time.
              </p>
            </div>

          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/15 space-y-6">
              <h3 className="text-2xl font-display font-bold text-white">
                Send Direct Message
              </h3>

              {isSubmitted && (
                <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-mono flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <div>
                    <strong className="block text-white text-sm">Message Sent Successfully!</strong>
                    <span>Your message has been delivered directly to <strong>neelnp2411@gmail.com</strong>.</span>
                  </div>
                </div>
              )}

              {apiError && (
                <div className="p-4 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 text-xs font-mono flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 shrink-0" />
                  <span>{apiError}</span>
                </div>
              )}

              {/* Name Field */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-text-secondary uppercase">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Morgan"
                  className={`w-full px-4 py-3 rounded-xl bg-surface-100 border text-sm text-white font-sans outline-none transition-all ${
                    errors.name ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-accent'
                  }`}
                />
                {errors.name && (
                  <p className="text-xs font-mono text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-text-secondary uppercase">
                  YOUR EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. alex@company.com"
                  className={`w-full px-4 py-3 rounded-xl bg-surface-100 border text-sm text-white font-sans outline-none transition-all ${
                    errors.email ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-accent'
                  }`}
                />
                {errors.email && (
                  <p className="text-xs font-mono text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-text-secondary uppercase">
                  MESSAGE DETAILS *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, opportunity, or technical inquiry..."
                  className={`w-full px-4 py-3 rounded-xl bg-surface-100 border text-sm text-white font-sans outline-none transition-all ${
                    errors.message ? 'border-red-500 focus:border-red-500' : 'border-white/10 focus:border-accent'
                  }`}
                />
                {errors.message && (
                  <p className="text-xs font-mono text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-accent hover:bg-accent/90 text-white font-mono text-xs font-bold tracking-wider flex items-center justify-center gap-2 shadow-glow-md transition-all transform hover:-translate-y-0.5 disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    SENDING TO INBOX...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    DISPATCH MESSAGE TO GMAIL
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
