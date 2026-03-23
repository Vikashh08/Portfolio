import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if(data.success) {
        setStatus('Message Sent! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Error sending message.');
      }
    } catch (err) {
      console.error(err);
      setStatus('Server is unreachable. Please try again later.');
    }
  };

  return (
    <section id="contact" className="section bg-black px-6 py-24 fade-in-up">
      <div className="max-w-[980px] mx-auto flex flex-col md:flex-row gap-16">
        
        {/* Contact Info */}
        <div className="md:w-1/2">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-[#f5f5f7]">Let's Connect.</h2>
          <p className="text-xl md:text-2xl text-[#86868b] font-light mb-16 leading-relaxed">
            Building the modern web requires a team. Reach out to discuss software architecture, job opportunities, or simply to say hello.
          </p>

          <div className="space-y-8">
            <div>
               <h4 className="text-xs uppercase tracking-widest text-[#a1a1a6] font-semibold mb-2">Direct Mail</h4>
               <a href="mailto:vikashroy2333@gmail.com" className="text-2xl font-semibold text-white hover:text-[#0071e3] transition-colors">vikashroy2333@gmail.com ↗</a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:w-1/2">
          <div className="bg-[#1d1d1f] p-8 md:p-12 rounded-[30px] border border-white/[0.05]">
             <h3 className="text-2xl font-semibold text-white mb-8">Send a Message</h3>
             
             <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input 
                    type="text" 
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-black border border-[#424245] rounded-xl px-5 py-4 text-white placeholder-[#86868b] focus:outline-none focus:border-[#0071e3] transition-colors"
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    required
                    placeholder="Email Adddress"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-black border border-[#424245] rounded-xl px-5 py-4 text-white placeholder-[#86868b] focus:outline-none focus:border-[#0071e3] transition-colors"
                  />
                </div>
                <div>
                  <textarea 
                    required
                    rows="4"
                    placeholder="How can I help you?"
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-black border border-[#424245] rounded-xl px-5 py-4 text-white placeholder-[#86868b] focus:outline-none focus:border-[#0071e3] transition-colors resize-none"
                  ></textarea>
                </div>
                
                <button type="submit" className="w-full bg-[#0071e3] hover:bg-[#0077ED] text-white font-medium py-4 rounded-xl transition-colors mt-4">
                  Submit Form
                </button>
                
                {status && <p className={`text-sm mt-6 text-center font-medium ${status.includes('Sent') ? 'text-[#39d353]' : 'text-[#ff453a]'}`}>{status}</p>}
             </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
