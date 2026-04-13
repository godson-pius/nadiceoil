'use client'

import React, { useState, useEffect } from 'react';
import { X, Send, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const options = [
  "I want to place an order for Diesel.",
  "I'd like to know the current price of Diesel.",
  "I want to track my existing delivery.",
  "I want to know more about your services."
];

export default function WhatsAppFloatingButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('2349033341839');

  useEffect(() => {
    // Optionally fetch settings if needed, using the default from Footer for now
    const fetchSettings = async () => {
      try {
        const res = await fetch('/api/admin/settings');
        if (res.ok) {
          const data = await res.json();
          if (data && data.phone) {
            // Clean phone number: remove non-digits
            const cleanedPhone = data.phone.replace(/\D/g, '');
            if (cleanedPhone) setPhone(cleanedPhone);
          }
        }
      } catch (error) {
        console.error('Failed to fetch settings for WhatsApp contact');
      }
    };
    fetchSettings();
  }, []);

  const handleSend = () => {
    if (!message.trim()) return;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-2xl mb-4 w-[320px] sm:w-[360px] overflow-hidden border border-gray-100 flex flex-col"
          >
            {/* Header */}
            <div className="bg-[#25D366] p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <MessageCircle size={24} fill="currentColor" />
                <div>
                  <h3 className="font-semibold text-lg leading-tight">Chat with us</h3>
                  <p className="text-xs opacity-90">Typically replies immediately</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-white/20 p-1.5 rounded-full transition-colors"
                aria-label="Close chat"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-4 bg-[url('/whatsapp-bg.png')] bg-[#E5DDD5] max-h-[400px] overflow-y-auto flex flex-col gap-3 relative z-0 before:absolute before:inset-0 before:bg-white/70 before:-z-10">

              <div className="bg-white rounded-lg rounded-tl-none p-3 shadow-sm self-start max-w-[85%] text-sm text-gray-800">
                Hi there! 👋 How can we help you today? You can choose an option below or type your message.
              </div>

              <div className="flex flex-col gap-2 mt-2">
                {options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMessage(opt)}
                    className="bg-[#dcf8c6] hover:bg-[#c8e2b3] text-gray-800 rounded-lg p-2.5 text-sm text-left shadow-sm transition-colors border border-[#c4e8aa]"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Footer / Input */}
            <div className="p-3 bg-white border-t flex gap-2 items-end">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 bg-gray-100 rounded-xl p-3 text-sm focus:outline-none focus:ring-1 focus:ring-[#25D366] min-h-[44px] max-h-[120px] resize-none"
                rows={message.split('\n').length > 1 ? Math.min(3, message.split('\n').length) : 1}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
              />
              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className="bg-[#25D366] text-white p-3 rounded-xl hover:bg-[#20bd5a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
                aria-label="Send message"
              >
                <Send size={20} className="ml-[2px]" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#25D366] hover:bg-[#20bd5a] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 flex items-center justify-center relative group"
        aria-label="Open WhatsApp Chat"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="absolute opacity-0 group-hover:opacity-0 transition-opacity">
          {/* We'll just transition between lucide icons or simple CSS if needed, but lets use one main icon */}
        </svg>

        {isOpen ? (
          <X size={28} className="animate-in fade-in zoom-in duration-200" />
        ) : (
          <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" className="animate-in fade-in zoom-in duration-200">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
        )}

      </button>
    </div>
  );
}
