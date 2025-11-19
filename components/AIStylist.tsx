import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Sparkles, Loader2, Anchor } from 'lucide-react';
import { generateStylistResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { PRODUCTS } from '../constants';

const AIStylist: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: "Ahoy! I'm your Frame Finder. Got a lonely cushion or a sling without a home? Tell me what you're working with!", 
      timestamp: Date.now() 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = {
      role: 'user',
      text: inputValue,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsLoading(true);

    // Create a context string from the catalog
    const catalogContext = PRODUCTS.map(p => `${p.name} (${p.category}): $${p.price}. ${p.description}`).join('\n');

    const responseText = await generateStylistResponse(userMsg.text, catalogContext);

    const modelMsg: ChatMessage = {
      role: 'model',
      text: responseText,
      timestamp: Date.now()
    };

    setMessages(prev => [...prev, modelMsg]);
    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 bg-brand-600 text-white shadow-2xl hover:bg-brand-700 transition-all duration-300 rounded-full ${isOpen ? 'translate-y-24 opacity-0' : 'translate-y-0 opacity-100'}`}
      >
        <Anchor size={20} />
        <span className="font-medium">Ask Frame Finder</span>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl z-50 flex flex-col transition-all duration-300 origin-bottom-right border border-gray-100 overflow-hidden ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'}`} style={{ height: '500px' }}>
        {/* Header */}
        <div className="bg-brand-600 p-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-white">
            <Anchor size={18} className="text-brand-200" />
            <div>
              <h3 className="font-bold text-sm">Frame Finder</h3>
              <p className="text-xs text-brand-100">Powered by Gemini</p>
            </div>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-white/80 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-brand-50 space-y-4">
          {messages.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-brand-600 text-white rounded-tr-none' 
                  : 'bg-white text-gray-800 border border-brand-100 rounded-tl-none shadow-sm'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-brand-100 shadow-sm flex items-center gap-2">
                <Loader2 size={16} className="animate-spin text-brand-600" />
                <span className="text-xs text-gray-500">Measuring...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="relative">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="I have 24x24 navy blue cushions..."
              className="w-full pl-4 pr-12 py-3 bg-gray-100 border-none rounded-xl focus:ring-2 focus:ring-brand-500 focus:bg-white transition-all text-sm"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !inputValue.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-brand-600 hover:bg-brand-50 rounded-lg disabled:opacity-50 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIStylist;