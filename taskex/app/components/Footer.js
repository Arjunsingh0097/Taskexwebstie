"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Leadership', href: '/leadership' },
      { name: 'News & Press', href: '/news' }
    ],
    services: [
      { name: 'Digital Transformation', href: '/services/digital-transformation' },
      { name: 'AI & Automation', href: '/services/ai-automation' },
      { name: 'Cloud & DevOps', href: '/services/cloud-devops' },
      { name: 'Consulting', href: '/services/consulting' }
    ],
    resources: [
  
      { name: 'Case Studies', href: '/case-studies' },
      { name: 'Whitepapers', href: '/whitepapers' },
      { name: 'Webinars', href: '/webinars' }
    ],
    support: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Support Center', href: '/support' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', href: '#', icon: Linkedin },
    { name: 'Twitter', href: '#', icon: Twitter },
    { name: 'Facebook', href: '#', icon: Facebook },
    { name: 'Instagram', href: '#', icon: Instagram }
  ];

  return (
    <footer className="bg-[#1E293B] text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-[#16CA95]/5 to-[#BDF0E1]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-br from-[#16CA95]/5 to-[#BDF0E1]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-br from-[#16CA95]/3 to-[#BDF0E1]/8 rounded-full blur-2xl"></div>
        
        {/* Elegant Sparkle Effects */}
        <motion.div
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-32 w-3 h-3 bg-[#16CA95] rounded-full shadow-xl shadow-[#16CA95]/70"
        />
        <motion.div
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5
          }}
          className="absolute top-32 right-24 w-2 h-2 bg-[#16CA95] rounded-full shadow-xl shadow-[#16CA95]/70"
        />
        <motion.div
          animate={{
            opacity: [0.5, 0.9, 0.5],
            scale: [0.9, 1.3, 0.9],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2.8
          }}
          className="absolute bottom-32 left-1/4 w-2.5 h-2.5 bg-[#BDF0E1] rounded-full shadow-xl shadow-[#BDF0E1]/70"
        />
        <motion.div
          animate={{
            opacity: [0.4, 0.6, 0.4],
            scale: [1.1, 0.9, 1.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7
          }}
          className="absolute bottom-20 right-1/3 w-1.5 h-1.5 bg-[#BDF0E1] rounded-full shadow-xl shadow-[#BDF0E1]/70"
        />
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6 group">
              <div className="relative">
                <div className="bg-white rounded-lg p-2 shadow-lg">
                  <Image
                    src="/images/taskexlogo.png"
                    alt="Taskex Technologies Logo"
                    width={190}
                    height={190}
                    className="w-40 h-auto group-hover:scale-105 transition-transform duration-300"
                    priority
                  />
                </div>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering businesses through innovative technology solutions. We transform ideas into 
              scalable digital experiences that drive growth and efficiency.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gradient-to-br from-[#16CA95] to-[#14B885] rounded-lg flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 relative group"
                >
                  <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <social.icon className="w-5 h-5 relative z-10" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#16CA95]/5 to-[#BDF0E1]/10 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <h3 className="text-lg font-semibold mb-4 text-[#16CA95]">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#16CA95] transition-colors py-1 px-2 rounded-lg hover:bg-white/5 block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Links */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#16CA95]/5 to-[#BDF0E1]/10 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <h3 className="text-lg font-semibold mb-4 text-[#16CA95]">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#16CA95] transition-colors py-1 px-2 rounded-lg hover:bg-white/5 block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources & Support */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-[#16CA95]/5 to-[#BDF0E1]/10 rounded-xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <h3 className="text-lg font-semibold mb-4 text-[#16CA95]">Resources</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#16CA95] transition-colors py-1 px-2 rounded-lg hover:bg-white/5 block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="text-lg font-semibold mb-4 text-[#16CA95]">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-[#16CA95] transition-colors py-1 px-2 rounded-lg hover:bg-white/5 block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-600 pt-8 mb-8 relative">
          {/* Decorative line */}
          <div className="absolute top-0 left-0 w-32 h-0.5 bg-gradient-to-r from-[#16CA95] to-[#16CA95]"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#16CA95] to-[#14B885] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors">
              +919212715691</span>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#16CA95] to-[#14B885] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors">
              manager@taskex.in</span>
            </div>
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-[#16CA95] to-[#14B885] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <span className="text-gray-300 group-hover:text-white transition-colors">JMD Megapolis, office number 246, 2nd floor, Sohna Road, Sector 48,Gurugram</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 pt-8 relative">
          {/* Decorative line */}
          <div className="absolute top-0 left-0 w-24 h-0.5 bg-gradient-to-r from-[#16CA95] to-[#16CA95]"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Taskex. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-[#16CA95] transition-colors px-2 py-1 rounded hover:bg-white/5">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-[#16CA95] transition-colors px-2 py-1 rounded hover:bg-white/5">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-[#16CA95] transition-colors px-2 py-1 rounded hover:bg-white/5">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
