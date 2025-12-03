import { useState, useEffect, useRef } from 'react';
import profileImg from '../assets/profile.jpg';

function MessageComposer({ isOpen, onClose, onSubmit }) {
  const [message, setMessage] = useState('');
  const [animationStage, setAnimationStage] = useState(0);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Reset message to start with "Hello, Lovro"
      setMessage('Hello, Lovro 👋');
      
      // Animation stages
      setTimeout(() => setAnimationStage(1), 100);  // Show the morphing text
      setTimeout(() => setAnimationStage(2), 800);  // Transform into input
      setTimeout(() => {
        setAnimationStage(3); // Fully ready
        // Focus and position cursor after "Lovro"
        if (inputRef.current) {
          inputRef.current.focus();
          // Position cursor at the end
          const length = inputRef.current.value.length;
          inputRef.current.setSelectionRange(length, length);
        }
      }, 1200);
    } else {
      setAnimationStage(0);
      setMessage('');
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim() && message !== 'Hello, Lovro 👋') {
      onSubmit(message);
      setMessage('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="message-composer-overlay" onClick={onClose}>
      <div className="message-composer" onClick={(e) => e.stopPropagation()}>
        <button className="message-composer-close" onClick={onClose}>×</button>
        
        <div className="message-composer-content">
          <div className="message-header">
            <div className="message-composer-avatar">
              <img src={profileImg} alt="Lovro Buničić" />
            </div>
            <div className="message-composer-info">
              <h3>Message Lovro</h3>
              <p>I'll get back to you as soon as possible</p>
            </div>
          </div>

          {/* Morphing text that transitions into input */}
          <div className={`morphing-text-container stage-${animationStage}`}>
            {animationStage < 2 && (
              <div className="morphing-text">
                Hello, <span className="highlight-name">Lovro</span>
              </div>
            )}
          </div>

          {/* Input form that fades in */}
          <form className={`message-input-form stage-${animationStage}`} onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="message-input">Your Message</label>
              <textarea
                ref={inputRef}
                id="message-input"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hello, Lovro 👋"
                rows="6"
                className="message-textarea"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email-input">Your Email</label>
              <input
                type="email"
                id="email-input"
                placeholder="you@example.com"
                className="message-email-input"
                required
              />
            </div>

            <button 
              type="submit" 
              className="message-send-btn-full" 
              disabled={!message.trim() || message === 'Hello, Lovro 👋'}
            >
              Send Message
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="message-helper-text">
              Or email me directly at <a href="mailto:hello@temnadigital.com">hello@temnadigital.com</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MessageComposer;

