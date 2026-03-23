import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';
import { ChatMessage } from '../types'; 

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'model',
      text: "Hi! I'm Ashutosh's AI Assistant. Ask me anything about his projects, skills in RAG/AutoGen, or work experience!",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Function to send a message to the backend
  const sendMessageToGemini = async (message: string): Promise<string> => {
    const backendUrl = 'http://localhost:8000'; // Define your backend URL here

    try {
      const response = await fetch(`${backendUrl}/chat`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: message }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      return data.reply;

    } catch (error) {
      console.error("Failed to fetch reply from backend:", error);
      return "I'm sorry, I encountered an issue while processing your request. Please try again later.";
    }
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = {
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Call the function to send the message to the backend
    const responseText = await sendMessageToGemini(userMessage.text);

    const botMessage: ChatMessage = {
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close AI Chat" : "Open AI Chat"}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
          isOpen ? 'bg-gradient-to-br from-gradientStart to-gradientEnd rotate-90' : 'bg-gradient-to-br from-accent to-gradientEnd animate-bounce-slow'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-white" />
        ) : (
          <Bot className="w-6 h-6 text-primary" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-full max-w-sm bg-gradient-to-b from-secondary to-primary border border-accent/20 rounded-2xl shadow-2xl flex flex-col overflow-hidden h-[500px] animate-fade-in-up">
          {/* Header */}
          <div className="bg-gradient-to-r from-gradientStart/20 to-gradientEnd/20 p-4 border-b border-accent/30 flex items-center gap-3">
            <div className="p-2 bg-accent/20 rounded-full">
              <Bot className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h3 className="text-white font-bold text-sm">Portfolio Assistant</h3>
              <p className="text-xs text-accent/80 flex items-center gap-1">
                <span className="w-2 h-2 bg-terminal rounded-full animate-pulse"></span>
                Powered by Gemini 2.5 Flash
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-primary/30 to-secondary/30">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm ${
                    msg.role === 'user'
                      ? 'bg-gradient-to-r from-gradientStart to-gradientEnd text-white font-medium rounded-br-none shadow-lg'
                      : 'bg-secondary text-slate-200 border border-accent/20 rounded-bl-none shadow-md'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-secondary border border-accent/20 rounded-2xl rounded-bl-none px-4 py-3 shadow-md">
                  <Loader2 className="w-5 h-5 text-accent animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-4 bg-gradient-to-t from-secondary to-primary border-t border-accent/20">
            <div className="relative">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my RAG experience..."
                className="w-full bg-primary border border-accent/30 text-white rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/50 placeholder-accent/60"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="absolute right-2 top-2 p-1.5 text-accent/60 hover:text-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default AIChat;