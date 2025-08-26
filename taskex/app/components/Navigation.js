"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { 
      name: 'Services', 
      href: '/services',
      dropdown: [
        { name: 'Digital Transformation', href: '/services/digital-transformation' },
        { name: 'AI & Automation', href: '/services/ai-automation' },
        { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
        { name: 'Consulting', href: '/services/consulting' }
      ]
    },

    { name: 'Contact', href: '/contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#16CA95]/5 to-[#BDF0E1]/10 rounded-full blur-2xl"></div>
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#16CA95]/5 to-[#BDF0E1]/10 rounded-full blur-2xl"></div>
        
        {/* Subtle Sparkle Effects */}
        <motion.div
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-4 left-20 w-2 h-2 bg-[#16CA95] rounded-full shadow-lg shadow-[#16CA95]/60"
        />
        <motion.div
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [0.9, 1.2, 0.9],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-6 right-16 w-1.5 h-1.5 bg-[#16CA95] rounded-full shadow-lg shadow-[#16CA95]/60"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-8 left-32 w-1 h-1 bg-[#BDF0E1] rounded-full shadow-lg shadow-[#BDF0E1]/60"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Image
                src="/images/taskexlogo.png"
                alt="Taskex Technologies Logo"
                width={190}
                height={190}
                className="w-50 h-auto group-hover:scale-105 transition-transform duration-300"
                priority
                onError={(e) => {
                  console.error('Failed to load logo:', e);
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                {item.dropdown ? (
                  <>
                    <div className="flex items-center space-x-1 cursor-pointer text-[#373743] hover:text-[#16CA95] transition-colors relative">
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                      {/* Hover indicator */}
                      <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#16CA95] group-hover:w-full transition-all duration-300"></div>
                    </div>
                    <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 border border-gray-100">
                      {/* Decorative background for dropdown */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FA] to-[#BDF0E1]/20 rounded-xl -z-10"></div>
                      {item.dropdown.map((subItem, index) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-6 py-3 text-[#373743] hover:text-[#16CA95] hover:bg-[#BDF0E1]/20 transition-all duration-200 first:rounded-t-xl last:rounded-b-xl relative group/item"
                        >
                          <span className="relative z-10">{subItem.name}</span>
                          <div className="absolute inset-0 bg-gradient-to-r from-[#16CA95]/5 to-[#16CA95]/5 rounded-xl opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></div>
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-[#373743] hover:text-[#16CA95] transition-colors font-medium relative group"
                  >
                    <span>{item.name}</span>
                    {/* Hover indicator */}
                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#16CA95] group-hover:w-full transition-all duration-300"></div>
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              href="/contact"
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#16CA95] to-[#14B885] rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-75"></div>
              <div className="relative px-6 py-3 bg-[#16CA95] text-white rounded-xl font-medium hover:bg-[#14B885] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Get Started
              </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-[#373743] hover:text-[#16CA95] transition-colors relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#16CA95]/10 to-[#BDF0E1]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
            <div className="relative z-10">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 relative overflow-hidden"
          >
            {/* Decorative background for mobile menu */}
            <div className="absolute inset-0">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-[#16CA95]/5 to-[#BDF0E1]/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-br from-[#2563EB]/5 to-[#DBEAFE]/10 rounded-full blur-2xl"></div>
            </div>
            
            <div className="px-4 py-6 space-y-4 relative z-10">
              {navItems.map((item) => (
                <div key={item.name}>
                  {item.dropdown ? (
                    <div className="space-y-2">
                      <div className="text-[#373743] font-medium">{item.name}</div>
                      <div className="pl-4 space-y-2">
                        {item.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block text-[#6B7280] hover:text-[#2563EB] transition-colors py-2 px-3 rounded-lg hover:bg-[#DBEAFE]/20"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="block text-[#373743] hover:text-[#2563EB] transition-colors font-medium py-2 px-3 rounded-lg hover:bg-[#DBEAFE]/20"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4">
                <Link
                  href="/contact"
                  className="block w-full text-center px-6 py-3 bg-[#16CA95] text-white rounded-xl font-medium hover:bg-[#14B885] transition-colors shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
