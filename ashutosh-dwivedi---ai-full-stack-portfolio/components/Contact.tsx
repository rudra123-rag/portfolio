import React, { useState } from 'react';
import { Send, Mail, MapPin, Phone } from 'lucide-react';
import { PROFILE } from '../constants';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      const response = await fetch('https://back-6-6xpc.onrender.com/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setFormState({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="py-24 bg-gradient-to-b from-primary to-secondary relative overflow-hidden">
       {/* Background Glow */}
       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl font-bold text-white mb-6">Let's Build Something Amazing</h2>
            <p className="text-slate-400 text-lg mb-12">
              Have a project in mind, need a full-stack consultant, or just want to discuss the latest in AI? I'm always open to new opportunities and interesting conversations.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 text-accent shadow-lg shadow-accent/5">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 text-lg">Email Me</h3>
                  <p className="text-slate-400 hover:text-accent transition-colors">
                    <a href={`mailto:${PROFILE.social.email}`}>{PROFILE.social.email}</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 text-terminal shadow-lg shadow-terminal/5">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 text-lg">Location</h3>
                  <p className="text-slate-400">{PROFILE.location}</p>
                  <p className="text-slate-500 text-sm">(Open to Remote)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 text-accent shadow-lg shadow-accent/5">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1 text-lg">Call Me</h3>
                  <p className="text-slate-400 hover:text-accent transition-colors">
                    <a href={`tel:${PROFILE.social.phone}`}>{PROFILE.social.phone}</a>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-slate-900/60 p-8 rounded-3xl border border-slate-700/50 backdrop-blur-xl shadow-2xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-fade-in-up">
                <div className="w-20 h-20 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                    <Send className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                <p className="text-slate-400 max-w-xs mx-auto">Thanks for reaching out. I'll get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-accent hover:text-white transition-colors font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-2 ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({...formState, name: e.target.value})}
                    className="w-full bg-primary/50 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-600"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-2 ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({...formState, email: e.target.value})}
                    className="w-full bg-primary/50 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all placeholder:text-slate-600"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-2 ml-1">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    className="w-full bg-primary/50 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none placeholder:text-slate-600"
                    placeholder="Tell me about your project..."
                  />
                </div>
                {error && (
                  <div className="text-red-400 text-sm py-2">{error}</div>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accentHover text-primary font-bold py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 group shadow-lg shadow-accent/20 hover:shadow-accent/40"
                >
                  {isSubmitting ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
