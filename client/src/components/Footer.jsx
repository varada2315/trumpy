import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    console.log('Subscribed email:', email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="bg-primary dark:bg-surface-container-lowest w-full pt-20 pb-10 border-t border-outline-variant/20 text-on-primary">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        
        {/* Brand Information */}
        <div className="md:col-span-4">
          <div className="font-display-lg text-headline-md mb-6 tracking-tight font-bold">TRUMPY</div>
          <p className="text-on-primary/70 font-body-md mb-8 max-w-xs text-sm leading-relaxed">
            Redefining the standards of food and beverage through heritage, innovation, and a global vision. 
            "By India, From India, To World."
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 flex items-center justify-center border border-on-primary/20 rounded-full hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all text-on-primary/60 hover:text-on-primary" aria-label="Social Link">
              <span className="material-symbols-outlined text-lg">public</span>
            </a>
            <a href="#" className="w-10 h-10 flex items-center justify-center border border-on-primary/20 rounded-full hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all text-on-primary/60 hover:text-on-primary" aria-label="Share Link">
              <span className="material-symbols-outlined text-lg">share</span>
            </a>
            <a href="mailto:connect@trumpy.in" className="w-10 h-10 flex items-center justify-center border border-on-primary/20 rounded-full hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all text-on-primary/60 hover:text-on-primary" aria-label="Email Link">
              <span className="material-symbols-outlined text-lg">mail</span>
            </a>
          </div>
        </div>

        {/* Solutions Links */}
        <div className="md:col-span-2">
          <h4 className="font-bold text-secondary-fixed-dim mb-6 uppercase text-xs tracking-widest">Solutions</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link to="/services" className="text-on-primary/70 hover:text-on-primary transition-colors">
                Formulation
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-on-primary/70 hover:text-on-primary transition-colors">
                Manufacturing
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-on-primary/70 hover:text-on-primary transition-colors">
                Distribution
              </Link>
            </li>
          </ul>
        </div>

        {/* Company Links */}
        <div className="md:col-span-2">
          <h4 className="font-bold text-secondary-fixed-dim mb-6 uppercase text-xs tracking-widest">Company</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <Link to="/story" className="text-on-primary/70 hover:text-on-primary transition-colors">
                Brand Story
              </Link>
            </li>
            <li>
              <Link to="/partnership" className="text-on-primary/70 hover:text-on-primary transition-colors">
                Partnership
              </Link>
            </li>
            <li>
              <a href="#" className="text-on-primary/70 hover:text-on-primary transition-colors">
                Press Kit
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div className="md:col-span-4">
          <h4 className="font-bold text-secondary-fixed-dim mb-6 uppercase text-xs tracking-widest">Stay Connected</h4>
          <p className="text-on-primary/70 font-body-md mb-6 text-sm">
            Subscribe to stay updated with our latest launches, artisan stories, and global market insights.
          </p>
          <form onSubmit={handleSubscribe} className="flex border-b border-on-primary/20 pb-2 mb-4">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-transparent border-none focus:outline-none focus:ring-0 text-on-primary placeholder:text-on-primary/40 w-full text-sm py-1" 
              placeholder="Email Address" 
              required
            />
            <button 
              type="submit" 
              className="text-on-primary hover:text-secondary-fixed transition-colors flex items-center p-1"
              aria-label="Subscribe"
            >
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </form>
          {subscribed && (
            <p className="text-xs text-secondary-fixed-dim transition-opacity animate-pulse">
              Thank you for subscribing to our newsletter!
            </p>
          )}
        </div>

      </div>

      {/* Copyright & Legal Links */}
      <div className="mt-20 border-t border-outline-variant/20 pt-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-body-md text-xs text-on-primary/50 text-center md:text-left">
          © 2026 TRUMPY FOOD AND BEVERAGES PRIVATE LIMITED. All rights reserved.
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
          <a href="#" className="text-on-primary/50 hover:text-on-primary transition-colors text-xs uppercase tracking-widest">
            Privacy Policy
          </a>
          <a href="#" className="text-on-primary/50 hover:text-on-primary transition-colors text-xs uppercase tracking-widest">
            Terms of Service
          </a>
          <a href="#" className="text-on-primary/50 hover:text-on-primary transition-colors text-xs uppercase tracking-widest">
            Compliance
          </a>
        </div>
      </div>
    </footer>
  );
}
