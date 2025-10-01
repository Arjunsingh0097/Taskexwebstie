"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Users, Globe, Award, Sparkles, Brain, Cloud, Settings, Link, Radio, Shield, Zap, Target, TrendingUp, Clock, CheckCircle, Star, Rocket, Lightbulb, Trophy } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [selectedService, setSelectedService] = useState(null);
  
  const stats = [
    { label: "Projects Delivered", value: "1,200+", icon: CheckCircle },
    { label: "Client Satisfaction", value: "98%", icon: Star },
    { label: "Global Reach", value: "25+ Countries", icon: Globe },
    { label: "Team Members", value: "500+", icon: Users },
  ];

  const services = [
    {
      title: "Digital Transformation",
      description: "Revolutionize your business with comprehensive digital transformation strategies. We modernize legacy systems, optimize processes, and implement change management frameworks that ensure successful adoption and measurable ROI.",
      icon: TrendingUp,
      features: ["Legacy System Modernization", "Business Process Optimization", "Change Management & Training", "Digital Culture Transformation"],
      color: "from-[#16CA95] to-[#BDF0E1]"
    },
    {
      title: "AI & Automation",
      description: "Unlock the power of artificial intelligence to automate complex processes and drive innovation. Our AI solutions deliver intelligent automation, predictive insights, and machine learning capabilities that transform how you work.",
      icon: Zap,
      features: ["Machine Learning Solutions", "RPA & Process Automation", "Predictive Analytics", "AI-Powered Insights"],
      color: "from-[#16CA95] to-[#BDF0E1]"
    },
    {
      title: "Cloud & DevOps",
      description: "Build scalable, secure cloud infrastructure with modern DevOps practices. We help you migrate to the cloud, implement CI/CD pipelines, and ensure security compliance while optimizing costs and performance.",
      icon: Shield,
      features: ["Cloud Migration & Strategy", "CI/CD Pipeline Development", "Security & Compliance", "Performance Optimization"],
      color: "from-[#16CA95] to-[#BDF0E1]"
    },
    {
      title: "Strategic Consulting",
      description: "Get expert guidance to align technology with your business objectives. We develop comprehensive technology strategies, create digital roadmaps, and optimize ROI through strategic planning and execution.",
      icon: Target,
      features: ["Technology Strategy Development", "Digital Roadmap Planning", "ROI Optimization", "Technology Assessment"],
      color: "from-[#16CA95] to-[#BDF0E1]"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Bubbles */}
        <motion.div
          animate={{
            y: [0, -100, 0],
            x: [0, 50, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#16CA95]/20 to-[#BDF0E1]/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, 80, 0],
            x: [0, -30, 0],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-[#BDF0E1]/20 to-[#16CA95]/30 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [0, -60, 0],
            x: [0, 40, 0],
            rotate: [0, 90, 180],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-60 left-1/3 w-12 h-12 bg-gradient-to-br from-[#16CA95]/15 to-[#BDF0E1]/25 rounded-full blur-lg"
        />
        <motion.div
          animate={{
            y: [0, 70, 0],
            x: [0, -20, 0],
            rotate: [180, 270, 360],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-80 right-1/3 w-14 h-14 bg-gradient-to-br from-[#BDF0E1]/15 to-[#16CA95]/25 rounded-full blur-lg"
        />
        <motion.div
          animate={{
            y: [0, -90, 0],
            x: [0, 35, 0],
            rotate: [90, 180, 270],
          }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-32 left-2/3 w-18 h-18 bg-gradient-to-br from-[#16CA95]/10 to-[#BDF0E1]/20 rounded-full blur-xl"
        />
        
        {/* Sparkling Elements */}
        <motion.div
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-16 left-1/4 w-3 h-3 bg-[#16CA95] rounded-full shadow-2xl shadow-[#16CA95]/80"
        />
        <motion.div
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute top-24 right-1/4 w-2 h-2 bg-[#BDF0E1] rounded-full shadow-2xl shadow-[#BDF0E1]/80"
        />
        <motion.div
          animate={{
            opacity: [0.4, 1, 0.4],
            scale: [1.2, 0.8, 1.2],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-48 left-1/2 w-2.5 h-2.5 bg-[#16CA95] rounded-full shadow-2xl shadow-[#16CA95]/80"
        />
      </div>
      
      {/* Content Container */}
      <div className="relative z-10">
        {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
          {/* Enhanced Background with Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-[#0A0A0A] to-[#16CA95]/20"></div>
          
          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #16CA95 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative"
            >
                {/* Enhanced Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-[#16CA95]/20 to-[#16CA95]/10 text-[#16CA95] px-6 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg border border-[#16CA95]/40 relative overflow-hidden group"
              >
                  <div className="w-2 h-2 bg-[#16CA95] rounded-full animate-pulse"></div>
                  <span className="font-bold">TRUSTED BY FORTUNE 500 COMPANIES</span>
              </motion.div>
              
                {/* Enhanced Main Heading */}
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8 relative"
                >
                Transform Your Business with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16CA95] via-[#14B885] to-[#16CA95] drop-shadow-lg relative">
                  Next-Gen Technology
                    <motion.div
                      animate={{
                        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent bg-[length:200%_100%] opacity-30"
                    />
                </span>
                </motion.h1>
                
                {/* Enhanced Description */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl lg:text-2xl text-gray-300 mb-10 max-w-2xl font-medium leading-relaxed"
                >
                At Taskex Technologies, we're your strategic partner in digital transformation. 
                We combine cutting-edge AI, cloud innovation, and deep industry expertise to deliver 
                solutions that drive measurable business growth and competitive advantage.
                </motion.p>
                
                {/* Enhanced Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-6 mb-10"
                >
                <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = '/contact'}
                    className="relative overflow-hidden bg-gradient-to-r from-[#16CA95] to-[#14B885] text-white px-10 py-5 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#16CA95]/25 group"
                  >
                    <motion.div
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    />
                    <span className="relative z-10 flex items-center gap-3">
                  Start Our Journey
                      <ArrowRight className="w-6 h-6" />
                    </span>
                </motion.button>
                
                <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = '/contact'}
                    className="relative overflow-hidden border-2 border-[#16CA95] text-[#16CA95] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-[#16CA95] hover:text-white transition-all duration-300 hover:shadow-lg group"
                  >
                    <motion.div
                      animate={{
                        x: ["-100%", "100%"],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-[#16CA95]/10 to-transparent"
                    />
                    <span className="relative z-10">Schedule Consultation</span>
                </motion.button>
                </motion.div>
                

            </motion.div>
            
            <motion.div
                initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
                {/* Enhanced Card with Multiple Layers */}
              <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#16CA95]/20 to-[#16CA95]/10 rounded-3xl blur-xl"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-[#0A0A0A]/80 backdrop-blur-sm rounded-3xl border border-[#16CA95]/30"></div>
                  
                  <div className="relative bg-black/90 backdrop-blur-sm rounded-3xl p-10 shadow-2xl border border-[#16CA95]/50">
                    {/* Top Decorative Line */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#16CA95] to-[#BDF0E1] rounded-full"></div>
                    
                  <Image
                    src="/images/office-person.jpg"
                    alt="Professional team collaboration"
                    width={500}
                    height={400}
                      className="rounded-2xl w-full h-auto shadow-lg relative z-10"
                  />
                    
                    {/* Enhanced Stats Grid */}
                    <div className="mt-8 grid grid-cols-2 gap-6">
                    <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="relative overflow-hidden bg-gradient-to-r from-[#16CA95] to-[#14B885] p-6 rounded-2xl text-black shadow-lg group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="text-3xl font-bold relative z-10 mb-1">98%</div>
                        <div className="text-sm text-black/80 relative z-10 font-medium">Client Satisfaction</div>
                    </motion.div>
                    <motion.div
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="relative overflow-hidden bg-gradient-to-r from-[#14B885] to-[#16CA95] p-6 rounded-2xl text-black shadow-lg group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <div className="text-3xl font-bold relative z-10 mb-1">500+</div>
                        <div className="text-sm text-black/80 relative z-10 font-medium">Projects Delivered</div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
        <section className="py-20 bg-gradient-to-br from-black via-[#0A0A0A] to-[#16CA95]/10 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #16CA95 1px, transparent 0)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#16CA95]/5 to-[#BDF0E1]/10"></div>
          
          {/* Enhanced Floating Background Elements */}
          <div className="absolute inset-0 pointer-events-none">
              <motion.div
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-[#16CA95]/20 to-[#BDF0E1]/30 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 40, 0],
                rotate: [360, 180, 0],
                scale: [1, 0.8, 1],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-br from-[#BDF0E1]/20 to-[#16CA95]/30 rounded-full blur-lg"
            />
            <motion.div
              animate={{
                y: [0, -50, 0],
                rotate: [0, 90, 180],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
              className="absolute bottom-20 left-1/3 w-12 h-12 bg-gradient-to-br from-[#16CA95]/15 to-[#BDF0E1]/25 rounded-full blur-xl"
            />
            {/* Additional floating elements */}
            <motion.div
              animate={{
                y: [0, 60, 0],
                x: [0, 20, 0],
                rotate: [0, 270, 360],
              }}
              transition={{
                duration: 35,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-60 right-1/4 w-8 h-8 bg-gradient-to-br from-[#16CA95]/15 to-[#BDF0E1]/25 rounded-full blur-md"
            />
            <motion.div
              animate={{
                y: [0, -40, 0],
                x: [0, -15, 0],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
              className="absolute bottom-40 left-1/4 w-10 h-10 bg-gradient-to-br from-[#BDF0E1]/20 to-[#16CA95]/25 rounded-full blur-lg"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Enhanced Header */}
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#16CA95]/20 to-[#16CA95]/10 text-[#16CA95] px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg border border-[#16CA95]/40"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 bg-[#16CA95] rounded-full"
                />
                <span className="font-semibold">ACHIEVEMENTS</span>
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="text-4xl lg:text-5xl font-bold text-white mb-6"
              >
                Our Success Metrics
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="w-32 h-0.5 bg-gradient-to-r from-[#16CA95] to-[#BDF0E1] mx-auto mb-4"
              ></motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed"
              >
                Quantifying our impact through measurable achievements and client success stories.
              </motion.p>
              
              {/* Enhanced Decorative Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex items-center justify-center gap-4 mt-6"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#16CA95] rounded-full"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.5, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="w-2 h-2 bg-[#16CA95] rounded-full"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#16CA95] rounded-full"
                />
              </motion.div>
                </div>
            
            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50, scale: 0.8, rotateY: -15 }}
                  animate={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
                  transition={{ 
                    duration: 1, 
                    delay: index * 0.2, 
                    ease: "easeOut",
                    type: "spring",
                    stiffness: 80,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.08, 
                    y: -15, 
                    rotateY: 10,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  className="group relative h-full flex flex-col"
                >
                  {/* Enhanced Card Background Layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-[#0A0A0A]/60 rounded-2xl blur-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#16CA95]/10 to-[#16CA95]/5 rounded-2xl"></div>
                  
                  {/* Top Decorative Line */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-[#16CA95] to-[#BDF0E1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative bg-black/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#16CA95]/30 flex flex-col flex-grow h-full overflow-hidden">
                    {/* Enhanced Icon Container */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      className="w-24 h-24 bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden flex-shrink-0"
                    >
                      {/* Enhanced Shimmer Effect */}
                      <motion.div
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                      />
                      
                      <stat.icon className="w-12 h-12 text-white relative z-10" />
                      
                      {/* Enhanced Pulse Ring */}
                      <motion.div
                        animate={{
                          scale: [1, 1.4, 1],
                          opacity: [0.3, 0, 0.3],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 border-2 border-white/40 rounded-2xl"
                      />
                      
                      {/* Multiple Floating Particles */}
                      <motion.div
                        animate={{
                          y: [0, -15, 0],
                          opacity: [0, 1, 0],
                          scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.3
                        }}
                        className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full opacity-70"
                      />
                      <motion.div
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                          scale: [0.3, 1, 0.3],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.5
                        }}
                        className="absolute -top-2 -left-1 w-2 h-2 bg-white rounded-full opacity-50"
                      />
                    </motion.div>
                    
                    {/* Enhanced Stats Content */}
                    <div className="text-center flex-grow flex flex-col justify-center">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 + index * 0.15 }}
                        className="text-4xl lg:text-5xl font-bold text-white mb-2 group-hover:text-[#16CA95] transition-colors duration-300 leading-tight"
                      >
                  {stat.value}
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 + index * 0.15 }}
                        className="text-gray-400 font-semibold text-lg group-hover:text-gray-300 transition-colors duration-300 leading-tight"
                      >
                  {stat.label}
                      </motion.div>
                    </div>
                    
                    {/* Bottom Decorative Line on Hover */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-[#16CA95] to-[#BDF0E1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Enhanced Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#16CA95]/8 to-[#BDF0E1]/15 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Enhanced Corner Accent */}
                    <motion.div
                      animate={{
                        rotate: [0, 360],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                      className="absolute top-2 right-2 w-6 h-6 border-2 border-[#16CA95]/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    
                    {/* Additional Corner Element */}
                    <motion.div
                      animate={{
                        rotate: [360, 0],
                        scale: [0.8, 1, 0.8],
                      }}
                      transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="absolute bottom-2 left-2 w-4 h-4 border border-[#BDF0E1]/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                </div>
              </motion.div>
            ))}
          </div>
            
            {/* Enhanced Bottom CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, delay: 1.5, ease: "easeOut" }}
              className="text-center mt-16"
            >
              <motion.button
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#16CA95] to-[#14B885] text-white px-10 py-5 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#16CA95]/30 group"
              >
                <span>View Our Portfolio</span>
                <motion.div
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.div>
              </motion.button>
            </motion.div>
        </div>
      </section>

        {/* Services Section - Path Design */}
        <section className="py-20 bg-gradient-to-br from-black via-[#0A0A0A] to-[#16CA95]/10 relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#16CA95]/10 to-[#BDF0E1]/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-[#16CA95]/8 to-[#BDF0E1]/15 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-br from-[#16CA95]/5 to-[#BDF0E1]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          </div>
          
          {/* Dot Pattern Background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #16CA95 1px, transparent 0)`,
              backgroundSize: '60px 60px'
            }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Enhanced Header */}
            <div className="text-center mb-20">
          <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-[#16CA95]/20 backdrop-blur-sm text-[#16CA95] px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-xl border border-[#16CA95]/40"
              >
                <div className="w-3 h-3 bg-[#16CA95] rounded-full animate-pulse"></div>
                <span className="font-bold tracking-wide">OUR JOURNEY</span>
              </motion.div>
              
              <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-5xl lg:text-6xl font-bold text-white mb-8"
          >
              Our Core Services
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="w-48 h-1 bg-gradient-to-r from-[#16CA95] via-[#14B885] to-[#16CA95] mx-auto mb-6 rounded-full"
              ></motion.div>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-medium"
              >
                Follow the path of innovation as we guide you through comprehensive technology solutions 
                designed to transform your business and drive sustainable growth in the digital age.
              </motion.p>
                </div>
                
            {/* Path Design Container */}
            <div className="relative">
              {/* Main Path Line */}
              <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-[#16CA95] via-[#14B885] to-[#16CA95] transform -translate-x-1/2 z-0"></div>
              
              {/* Path Dots */}
              <div className="absolute top-1/4 left-1/2 w-4 h-4 bg-[#16CA95] rounded-full transform -translate-x-1/2 z-10 animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-[#14B885] rounded-full transform -translate-x-1/2 z-10 animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute top-3/4 left-1/2 w-4 h-4 bg-[#16CA95] rounded-full transform -translate-x-1/2 z-10 animate-pulse" style={{animationDelay: '1s'}}></div>
              
              {/* Services Path */}
              <div className="relative z-20">
                <div className="flex flex-col gap-16 lg:gap-24">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: index * 0.2 }}
                      whileHover={{ scale: 1.05, y: -10 }}
                      className={`group relative flex items-center ${
                        index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                      } gap-8 lg:gap-16`}
                    >
                      {/* Service Card */}
                      <div className={`relative flex-shrink-0 ${
                        index % 2 === 0 ? 'lg:mr-auto' : 'lg:ml-auto'
                      }`}>
                        {/* Card Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#16CA95]/20 to-[#BDF0E1]/30 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                        
                        {/* Main Card */}
                        <div className={`relative bg-black/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-[#16CA95]/30 w-80 h-96 flex flex-col justify-between transform transition-all duration-500 ${
                          selectedService === index 
                            ? 'bg-gradient-to-br from-[#16CA95] to-[#14B885] text-white scale-105 shadow-[#16CA95]/25' 
                            : 'group-hover:shadow-[#16CA95]/20'
                        }`}>
                          
                          {/* Top Decorative Elements */}
                          <div className="absolute top-4 left-4 w-3 h-3 bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] rounded-full opacity-60"></div>
                          <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-[#14B885] to-[#16CA95] rounded-full opacity-60"></div>
                          
                          {/* Service Icon/Image */}
                          <div className="text-center mb-6">
                            <div className="w-20 h-20 bg-gradient-to-br from-[#16CA95]/20 to-[#BDF0E1]/30 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                              {service.title === "AI & Automation" && (
                                <Image
                                  src="/images/Ai.webp"
                                  alt="AI & Automation"
                                  width={80}
                                  height={80}
                                  className="rounded-2xl w-full h-full object-cover"
                                  quality={75}
                                  placeholder="blur"
                                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/2wBDAAcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                                />
                              )}
                              {service.title === "Cloud & DevOps" && (
                                <Image
                                  src="/images/Cloud.webp"
                                  alt="Cloud & DevOps"
                                  width={80}
                                  height={80}
                                  className="rounded-2xl w-full h-full object-cover"
                                  quality={75}
                                  placeholder="blur"
                                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/2wBDAAcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                                />
                              )}
                              {service.title === "Digital Transformation" && (
                                <Image
                                  src="/images/Digital_transformation.webp"
                                  alt="Digital Transformation"
                                  width={80}
                                  height={80}
                                  className="rounded-2xl w-full h-full object-cover"
                                  quality={75}
                                  placeholder="blur"
                                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/2wBDAAcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                                />
                              )}
                              {service.title === "Strategic Consulting" && (
                                <Image
                                  src="/images/Stratergic_consultation.webp"
                                  alt="Strategic Consulting"
                                  width={80}
                                  height={80}
                                  className="rounded-2xl w-full h-full object-cover"
                                  quality={75}
                                  placeholder="blur"
                                  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
                                />
                              )}
                            </div>
                            
                            {/* Service Title */}
                            <h3 className={`text-xl font-bold mb-3 group-hover:text-[#16CA95] transition-colors duration-300 ${
                              selectedService === index ? 'text-white' : 'text-white'
                            }`}>
                  {service.title}
                </h3>
                          </div>
                
                          {/* Service Description */}
                          <p className={`text-sm leading-relaxed mb-6 flex-grow ${
                            selectedService === index ? 'text-white/90' : 'text-gray-400'
                          }`}>
                  {service.description}
                </p>
                
                          {/* Learn More Button */}
                          <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                              e.stopPropagation();
                              const serviceRoutes = {
                                "AI & Automation": "/services/ai-automation",
                                "Cloud & DevOps": "/services/cloud-devops",
                                "Digital Transformation": "/services/digital-transformation",
                                "Strategic Consulting": "/services/strategic-consulting"
                              };
                              const route = serviceRoutes[service.title];
                              if (route) {
                                window.location.href = route;
                              }
                            }}
                            className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                              selectedService === index
                                ? 'bg-white text-[#16CA95] hover:bg-gray-100'
                                : 'bg-gradient-to-r from-[#16CA95] to-[#14B885] text-white hover:shadow-lg'
                            }`}
                          >
                            Learn More
                          </motion.button>
                          
                          {/* Bottom Accent Line */}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-0.5 bg-gradient-to-r from-[#16CA95] to-[#BDF0E1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                        
                        {/* Floating Elements */}
                        <div className="absolute -top-2 -left-2 w-4 h-4 bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce"></div>
                        <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-gradient-to-br from-[#14B885] to-[#16CA95] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-bounce" style={{animationDelay: '0.2s'}}></div>
                      </div>
                      
                      {/* Connection Line to Center */}
                      <div className="hidden lg:block relative flex-1">
                        <div className={`absolute top-1/2 w-full h-0.5 bg-gradient-to-r ${
                          index % 2 === 0 
                            ? 'from-[#16CA95] to-[#14B885]' 
                            : 'from-[#14B885] to-[#16CA95]'
                        } transform -translate-y-1/2`}></div>
                      </div>
                      
                      {/* Service Info Panel */}
                      <div className={`hidden lg:flex flex-col justify-center flex-1 ${
                        index % 2 === 0 ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'
                      }`}>
                        <div className={`max-w-sm ${index % 2 === 0 ? 'lg:ml-8' : 'lg:mr-8'}`}>
                          <h4 className="text-2xl font-bold text-white mb-4">
                            {service.title}
                          </h4>
                          <p className="text-gray-400 leading-relaxed mb-6">
                            {service.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {service.features.slice(0, 3).map((feature, idx) => (
                              <span key={idx} className="inline-flex items-center gap-2 bg-[#16CA95]/10 text-[#16CA95] px-3 py-1 rounded-full text-sm font-medium">
                                <div className="w-2 h-2 bg-[#16CA95] rounded-full"></div>
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
              </motion.div>
            ))}
          </div>
        </div>
            </div>

            {/* Bottom CTA */}
          <motion.div
              initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center mt-20"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/services'}
                className="bg-gradient-to-r from-[#16CA95] to-[#14B885] text-white px-10 py-4 rounded-2xl font-bold text-lg hover:shadow-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#16CA95]/25"
              >
                Explore All Services
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Creative Process Section */}
        <section className="py-20 bg-black relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #16CA95 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Enhanced Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#16CA95]/20 to-[#16CA95]/10 text-[#16CA95] px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg border border-[#16CA95]/40">
                <div className="w-2 h-2 bg-[#16CA95] rounded-full"></div>
                <span className="font-semibold">METHODOLOGY</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Our Creative Process
              </h2>
              
              <div className="w-32 h-0.5 bg-gradient-to-r from-[#16CA95] to-[#BDF0E1] mx-auto mb-4"></div>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                A proven methodology that ensures successful project delivery and exceptional results.
              </p>
            </div>
            
            {/* Enhanced Process Steps */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  step: "01", 
                  title: "Discover", 
                  description: "Understanding your business needs and objectives",
                  icon: Target,
                  color: "from-[#16CA95] to-[#14B885]"
                },
                { 
                  step: "02", 
                  title: "Design", 
                  description: "Creating innovative solutions and architecture",
                  icon: TrendingUp,
                  color: "from-[#BDF0E1] to-[#16CA95]"
                },
                { 
                  step: "03", 
                  title: "Develop", 
                  description: "Building robust and scalable systems",
                  icon: Zap,
                  color: "from-[#16CA95] to-[#BDF0E1]"
                },
                { 
                  step: "04", 
                  title: "Deploy", 
                  description: "Launching and optimizing your solution",
                  icon: Rocket,
                  color: "from-[#14B885] to-[#16CA95]"
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -8 }}
                  className="group relative"
                >
                  {/* Card Background Layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-[#0A0A0A]/60 rounded-2xl blur-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#16CA95]/10 to-[#16CA95]/5 rounded-2xl"></div>
                  
                  {/* Top Decorative Line */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-[#16CA95] to-[#BDF0E1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative bg-black/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#16CA95]/30 text-center">
                    {/* Step Number */}
                    <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] rounded-full flex items-center justify-center text-white text-sm font-bold">
                      {process.step}
                    </div>
                    
                    {/* Enhanced Icon Container */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
            transition={{ duration: 0.6 }}
                      className={`w-20 h-20 bg-gradient-to-br ${process.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                    >
                      {/* Shimmer Effect */}
                      <motion.div
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                      
                      <process.icon className="w-10 h-10 text-white relative z-10" />
                      
                      {/* Pulse Ring */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 border-2 border-white/30 rounded-2xl"
                      />
                    </motion.div>
                    
                    {/* Process Title */}
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#16CA95] transition-colors duration-300">
                      {process.title}
                    </h3>
                    
                    {/* Process Description */}
                    <p className="text-gray-400 leading-relaxed text-sm">
                      {process.description}
                    </p>
                    
                    {/* Bottom Decorative Line on Hover */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-[#16CA95] to-[#BDF0E1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#16CA95]/5 to-[#BDF0E1]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Showcase Section */}
        <section className="py-20 bg-gradient-to-br from-black via-[#0A0A0A] to-[#16CA95]/10 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #16CA95 1px, transparent 0)`,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
          
          {/* Floating Tech Elements */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div
              animate={{
                y: [0, -30, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 left-10 w-16 h-16 bg-gradient-to-br from-[#16CA95]/20 to-[#BDF0E1]/30 rounded-full blur-xl"
            />
            <motion.div
              animate={{
                y: [0, 40, 0],
                rotate: [360, 180, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute top-40 right-20 w-12 h-12 bg-gradient-to-br from-[#BDF0E1]/20 to-[#16CA95]/30 rounded-full blur-lg"
            />
            <motion.div
              animate={{
                y: [0, -50, 0],
                rotate: [0, 90, 180],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 4
              }}
              className="absolute bottom-20 left-1/3 w-14 h-14 bg-gradient-to-br from-[#16CA95]/15 to-[#BDF0E1]/25 rounded-full blur-xl"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Enhanced Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#16CA95]/20 to-[#16CA95]/10 text-[#16CA95] px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg border border-[#16CA95]/40">
                <div className="w-2 h-2 bg-[#16CA95] rounded-full"></div>
                <span className="font-semibold">TECHNOLOGIES</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Cutting-Edge Technologies
              </h2>
              
              <div className="w-32 h-0.5 bg-gradient-to-r from-[#16CA95] to-[#BDF0E1] mx-auto mb-4"></div>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                We leverage the latest technologies to deliver innovative solutions that drive business transformation and competitive advantage.
              </p>
              
              {/* Decorative Elements */}
              <div className="flex items-center justify-center gap-4 mt-6">
                <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-[#16CA95] rounded-full"></div>
                <div className="w-2 h-2 bg-[#16CA95] rounded-full"></div>
                <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-[#16CA95] rounded-full"></div>
              </div>
            </div>
            
            {/* Enhanced Technology Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {[
                { 
                  name: "AI/ML", 
                  icon: Brain, 
                  description: "Machine Learning & Neural Networks",
                  color: "from-[#16CA95] to-[#14B885]"
                },
                { 
                  name: "Cloud", 
                  icon: Cloud, 
                  description: "Scalable Cloud Infrastructure",
                  color: "from-[#BDF0E1] to-[#16CA95]"
                },
                { 
                  name: "DevOps", 
                  icon: Settings, 
                  description: "Continuous Integration & Deployment",
                  color: "from-[#16CA95] to-[#BDF0E1]"
                },
                { 
                  name: "Blockchain", 
                  icon: Link, 
                  description: "Distributed Ledger Technology",
                  color: "from-[#14B885] to-[#16CA95]"
                },
                { 
                  name: "IoT", 
                  icon: Radio, 
                  description: "Internet of Things Solutions",
                  color: "from-[#BDF0E1] to-[#14B885]"
                },
                { 
                  name: "Cybersecurity", 
                  icon: Shield, 
                  description: "Advanced Security & Protection",
                  color: "from-[#16CA95] to-[#14B885]"
                }
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                  className="group relative"
                >
                  {/* Card Background Layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-[#0A0A0A]/60 rounded-2xl blur-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#16CA95]/10 to-[#16CA95]/5 rounded-2xl"></div>
                  
                  {/* Top Decorative Line */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-[#16CA95] to-[#BDF0E1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative bg-black/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#16CA95]/30 text-center">
                    {/* Enhanced Icon Container */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden`}
                    >
                      {/* Shimmer Effect */}
                      <motion.div
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                      
                      <tech.icon className="w-10 h-10 text-white relative z-10" />
                      
                      {/* Pulse Ring */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 border-2 border-white/30 rounded-2xl"
                      />
                    </motion.div>
                    
                    {/* Technology Name */}
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-[#16CA95] transition-colors duration-300">
                      {tech.name}
                    </h3>
                    
                    {/* Technology Description */}
                    <p className="text-xs text-gray-400 leading-tight opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {tech.description}
                    </p>
                    
                    {/* Bottom Decorative Line on Hover */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-[#16CA95] to-[#BDF0E1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#16CA95]/5 to-[#BDF0E1]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Bottom CTA */}
            <div className="text-center mt-16">
              <motion.button
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/services'}
                className="inline-flex items-center gap-3 bg-gradient-to-r from-[#16CA95] to-[#14B885] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#16CA95]/25 group"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-black relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Real feedback from businesses we've transformed
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Sarah Johnson", role: "CTO, TechCorp", text: "Taskex transformed our entire digital infrastructure. The results exceeded our expectations.", rating: 5 },
                { name: "Michael Chen", role: "CEO, InnovateLab", text: "Outstanding service and technical expertise. They delivered on every promise.", rating: 5 },
                { name: "Emily Rodriguez", role: "Director, GlobalTech", text: "Professional team with deep knowledge. Highly recommend for any tech project.", rating: 5 }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="bg-black/90 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#16CA95]/30"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#16CA95] fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-400 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Awards & Recognition Section */}
        <section className="py-20 bg-gradient-to-br from-black via-[#0A0A0A] to-[#16CA95]/10 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, #16CA95 1px, transparent 0)`,
              backgroundSize: '45px 45px'
            }}></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Enhanced Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#16CA95]/20 to-[#16CA95]/10 text-[#16CA95] px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg border border-[#16CA95]/40">
                <div className="w-2 h-2 bg-[#16CA95] rounded-full"></div>
                <span className="font-semibold">RECOGNITION</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Awards & Recognition
              </h2>
              
              <div className="w-32 h-0.5 bg-gradient-to-r from-[#16CA95] to-[#BDF0E1] mx-auto mb-4"></div>
              
              <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                Industry recognition for our excellence and innovation.
              </p>
            </div>
            
            {/* Enhanced Awards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { 
                  title: "Best Tech Company 2024", 
                  icon: Trophy,
                  description: "Recognized for outstanding technology leadership",
                  color: "from-[#16CA95] to-[#14B885]"
                },
                { 
                  title: "Innovation Award", 
                  icon: Lightbulb,
                  description: "Celebrating breakthrough innovations",
                  color: "from-[#BDF0E1] to-[#16CA95]"
                },
                { 
                  title: "Excellence in Service", 
                  icon: Star,
                  description: "Exceptional customer service delivery",
                  color: "from-[#16CA95] to-[#BDF0E1]"
                },
                { 
                  title: "Digital Transformation Leader", 
                  icon: Rocket,
                  description: "Leading digital transformation initiatives",
                  color: "from-[#14B885] to-[#16CA95]"
                }
              ].map((award, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -8, rotateY: 5 }}
                  className="group relative h-full flex flex-col"
                >
                  {/* Card Background Layers */}
                  <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-[#0A0A0A]/60 rounded-2xl blur-sm"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#16CA95]/10 to-[#16CA95]/5 rounded-2xl"></div>
                  
                  {/* Top Decorative Line */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-[#16CA95] to-[#BDF0E1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative bg-black/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#16CA95]/30 flex flex-col flex-grow h-full">
                    {/* Enhanced Icon Container */}
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                      className={`w-20 h-20 bg-gradient-to-br ${award.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300 relative overflow-hidden flex-shrink-0`}
                    >
                      {/* Shimmer Effect */}
                      <motion.div
                        animate={{
                          x: ["-100%", "100%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear"
                        }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                      
                      <award.icon className="w-10 h-10 text-white relative z-10" />
                      
                      {/* Pulse Ring */}
                      <motion.div
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                        className="absolute inset-0 border-2 border-white/30 rounded-2xl"
                      />
                    </motion.div>
                    
                    {/* Award Title - Fixed Height Container */}
                    <div className="text-center flex-grow flex flex-col justify-center min-h-[4rem]">
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#16CA95] transition-colors duration-300 leading-tight">
                        {award.title}
                      </h3>
                      
                      {/* Award Description - Always Visible */}
                      <p className="text-xs text-gray-400 leading-tight">
                        {award.description}
                      </p>
                    </div>
                    
                    {/* Bottom Decorative Line on Hover */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-[#16CA95] to-[#BDF0E1] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#16CA95]/5 to-[#BDF0E1]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#16CA95] to-[#14B885] relative overflow-hidden">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute bottom-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"
            />
          </div>
          
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }}></div>
          </div>
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive technology solutions can help you achieve 
              breakthrough business results, optimize operations, and create sustainable 
              competitive advantage in your industry.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/contact'}
                  className="relative overflow-hidden bg-white text-[#16CA95] px-10 py-5 rounded-2xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl group"
                >
                  <motion.div
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[#16CA95]/10 to-transparent"
                  />
                  <span className="relative z-10 flex items-center gap-3">
                Start Our Journey
                    <ArrowRight className="w-6 h-6" />
                  </span>
              </motion.button>
              
              <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/contact'}
                  className="relative overflow-hidden border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white hover:text-[#16CA95] transition-all duration-300 group"
                >
                  <motion.div
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  />
                  <span className="relative z-10">Schedule Consultation</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </div>
  );
}
