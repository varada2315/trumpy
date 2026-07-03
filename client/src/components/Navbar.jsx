import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on page change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Brand Story', path: '/story' },
    { name: 'Partnership', path: '/partnership' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
        scrolled 
          ? 'py-2 bg-surface/95 backdrop-blur-md shadow-md h-16 border-outline-variant/30' 
          : 'py-2 bg-surface/80 backdrop-blur-sm shadow-sm h-20 border-outline-variant/10'
      }`}
    >
      <div className="flex justify-between items-center h-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto relative">
        {/* Abstract Architectural Line for Nav */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-outline-variant/5"></div>
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group z-50">
          <BrandLogo size={38} className="text-primary transition-transform duration-300 group-hover:scale-105" />
          <span className="font-display-lg text-headline-sm font-bold text-primary tracking-tight transition-colors duration-300 group-hover:text-secondary">
            TRUMPY
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center h-full relative">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`font-body-md text-label-caps uppercase tracking-widest text-[11px] relative py-2 transition-colors duration-300 ${
                  isActive ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-secondary'
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="activeNavLinkUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* Action Button & Hamburger */}
        <div className="flex items-center gap-4 z-50">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:inline-block bg-secondary-container hover:bg-secondary text-on-secondary-container hover:text-on-secondary px-6 py-2.5 font-body-md font-bold transition-all duration-300 rounded-none uppercase tracking-widest text-xs border border-transparent hover:border-secondary"
          >
            Order Reserve
          </motion.button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary hover:text-secondary focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer (with AnimatePresence) */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 z-40 w-72 bg-surface-container shadow-2xl border-l border-outline-variant/30 md:hidden flex flex-col justify-between pt-24 pb-12 px-8"
            >
              <div className="flex flex-col gap-6 text-left">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`font-body-md text-sm uppercase tracking-widest py-2 border-b border-outline-variant/10 transition-colors ${
                        isActive ? 'text-secondary font-bold' : 'text-on-surface-variant hover:text-secondary'
                      }`}
                    >
                      {link.name}
                    </Link>
                  );
                })}
                <button className="mt-4 bg-secondary text-on-secondary w-full py-4 font-body-md font-bold uppercase tracking-widest text-xs">
                  Order Reserve
                </button>
              </div>

              {/* Mobile Drawer Footer Info */}
              <div className="text-left">
                <p className="font-label-caps text-[9px] uppercase tracking-widest text-outline mb-1">Our Roots</p>
                <p className="font-display-lg text-sm italic text-primary">Vadodara, Gujarat</p>
              </div>
            </motion.div>
            
            {/* Drawer Overlay */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-30 bg-black md:hidden"
            />
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
