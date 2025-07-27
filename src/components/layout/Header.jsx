import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Header = ({ logoUrl, navigateTo }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 py-3 transition-all duration-300",
      scrolled ? "bg-white/90 backdrop-blur-lg shadow-md" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="cursor-pointer"
          onClick={() => navigateTo('home')}
        >
          <img 
            src={logoUrl} 
            alt="Logo MyRepublic" 
            className="h-8 md:h-9 transition-all duration-300"
          />
        </motion.div>
      </div>
    </header>
  );
};

export default Header;