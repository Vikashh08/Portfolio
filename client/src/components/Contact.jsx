import React, { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      await emailjs.sendForm(
        'service_4l4atqh',       // Your Service ID
        'template_os42vnr',
        formRef.current,
        'eLQq72rMkgbnMoKr1'
      );
      setShowSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setStatus('');
      setTimeout(() => setShowSuccess(false), 4000);
    } catch (err) {
      console.error('EmailJS Error:', err);
      setStatus('Failed to send. Please try again.');
    }
  };

  const inputClasses = "w-full bg-white/[0.02] border border-white/[0.08] rounded-xl px-5 py-4 text-white text-sm placeholder-[#555] focus:outline-none focus:border-[#0071e3] focus:ring-1 focus:ring-[#0071e3]/30 transition-all duration-300";

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-[var(--bg-color)] reveal">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[var(--accent-color)]/[0.05] rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#a855f7]/[0.03] rounded-full blur-[120px]"></div>
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(var(--text-primary)_0.5px,transparent_0.5px)] [background-size:20px_20px]"></div>
      </div>

      <div className="max-w-[1240px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">

          {/* Left – Info */}
          <div className="lg:w-5/12">
            <h2 className="text-3xl md:text-5xl font-bold text-[var(--text-primary)] tracking-tight mb-6">Get in Touch</h2>
            <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed mb-12 max-w-md">
              Open to discussing software architecture, job opportunities, or collaborations. Feel free to reach out — I'd love to connect.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <a href="mailto:vikashroy2333@gmail.com" className="group/link flex items-center gap-4 p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] light-mode:bg-white hover:bg-[var(--bg-color)] hover:border-[var(--text-secondary)]/30 transition-all duration-400">
                <div className="w-10 h-10 rounded-lg bg-[#0071e3]/10 border border-[#0071e3]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#0071e3]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13 2 4" />
                  </svg>
                </div>
                <div className="flex-grow min-w-0">
                  <p className="text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-[0.15em] mb-0.5">Email</p>
                  <p className="text-[var(--text-primary)] text-sm font-medium group-hover/link:text-[#0071e3] transition-colors truncate">vikashroy2333@gmail.com</p>
                </div>
                <span className="ml-auto text-[var(--text-secondary)] group-hover/link:text-[var(--text-primary)] group-hover/link:translate-x-1 transition-all text-sm">↗</span>
              </a>

              {/* LinkedIn */}
              <a href="https://linkedin.com/in/kum-vikash" target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-4 p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-color)] hover:border-[var(--text-secondary)] transition-all duration-400">
                <div className="w-10 h-10 rounded-lg bg-[#0a66c2]/10 border border-[#0a66c2]/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#0a66c2]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className="flex-grow">
                  <p className="text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-[0.15em] mb-0.5">LinkedIn</p>
                  <p className="text-[var(--text-primary)] text-sm font-medium group-hover/link:text-[#0a66c2] transition-colors">Vikash Kumar</p>
                </div>
                <span className="ml-auto text-[var(--text-secondary)] group-hover/link:text-[var(--text-primary)] group-hover/link:translate-x-1 transition-all text-sm">↗</span>
              </a>

              {/* GitHub */}
              <a href="https://github.com/Vikashh08" target="_blank" rel="noopener noreferrer" className="group/link flex items-center gap-4 p-4 rounded-xl border border-[var(--border-color)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-color)] hover:border-[var(--text-secondary)] transition-all duration-400">
                <div className="w-10 h-10 rounded-lg bg-[var(--text-primary)]/[0.06] border border-[var(--border-color)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[var(--text-primary)]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
                <div className="flex-grow">
                  <p className="text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-[0.15em] mb-0.5">GitHub</p>
                  <p className="text-[var(--text-primary)] text-sm font-medium group-hover/link:text-[var(--text-primary)] transition-colors">Vikashh08</p>
                </div>
                <span className="ml-auto text-[var(--text-secondary)] group-hover/link:text-[var(--text-primary)] group-hover/link:translate-x-1 transition-all text-sm">↗</span>
              </a>
            </div>
          </div>

          {/* Right – Form */}
          <div className="lg:w-7/12">
            <div className="relative bg-[var(--bg-secondary)] light-mode:bg-white border border-[var(--border-color)] rounded-2xl p-8 md:p-10 hover:border-[var(--text-secondary)]/30 transition-colors overflow-hidden shadow-sm light-mode:shadow-md">
              
              {/* Success Animation Overlay */}
              {showSuccess && (
                <div className="absolute inset-0 z-20 bg-[var(--bg-color)]/95 backdrop-blur-sm flex flex-col items-center justify-center animate-[fadeIn_0.4s_ease-out]">
                  <div className="w-20 h-20 rounded-full border-2 border-[#39d353] flex items-center justify-center mb-6 animate-[scaleIn_0.5s_ease-out]">
                    <svg className="w-10 h-10 text-[#39d353] animate-[drawCheck_0.6s_ease-out_0.3s_both]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-[var(--text-primary)] mb-2 animate-[slideUp_0.5s_ease-out_0.4s_both]">Message Sent!</h4>
                  <p className="text-[var(--text-secondary)] text-sm animate-[slideUp_0.5s_ease-out_0.5s_both]">I'll get back to you soon.</p>
                </div>
              )}

              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-2 tracking-tight">Send a Message</h3>
              <p className="text-[var(--text-secondary)] text-xs mb-8">I'll respond as soon as possible.</p>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[var(--bg-color)] light-mode:bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl px-5 py-4 text-[var(--text-primary)] text-sm placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[#0071e3] transition-all duration-300 shadow-inner"
                  />
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="Email address"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[var(--bg-color)] light-mode:bg-[var(--bg-secondary)] border border-[var(--border-color)] rounded-xl px-5 py-4 text-[var(--text-primary)] text-sm placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[#0071e3] transition-all duration-300 shadow-inner"
                  />
                </div>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="How can I help you?"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-[var(--bg-color)] border border-[var(--border-color)] rounded-xl px-5 py-4 text-[var(--text-primary)] text-sm placeholder-[var(--text-secondary)]/50 focus:outline-none focus:border-[#0071e3] transition-all duration-300 resize-none shadow-inner"
                ></textarea>

                <button
                  type="submit"
                  disabled={status === 'Sending...'}
                  className="w-full bg-[#0071e3] hover:bg-[#0077ED] disabled:opacity-50 text-white text-sm font-semibold py-4 rounded-xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,113,227,0.3)] active:scale-[0.98] shadow-lg shadow-[#0071e3]/20"
                >
                  {status === 'Sending...' ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Sending...
                    </span>
                  ) : 'Send Message'}
                </button>

                {status && !status.includes('Sending') && !showSuccess && (
                  <p className="text-xs text-center font-medium mt-4 text-[#ff453a]">{status}</p>
                )}
              </form>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes scaleIn { from { transform: scale(0.5); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes slideUp { from { transform: translateY(10px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes drawCheck { from { stroke-dashoffset: 24; opacity: 0; } to { stroke-dashoffset: 0; opacity: 1; } }
      `}</style>
    </section>
  );
};

export default Contact;
