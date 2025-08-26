"use client";

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  CheckCircle2, 
  ArrowRight,
  Users,
  Settings,
  RefreshCw,
  BarChart3,
  Target,
  Zap,
  Shield,
  Globe,
  Award,
  Sparkles
} from "lucide-react";
import Image from "next/image";

export default function DigitalTransformation() {
  const features = [
    {
      icon: RefreshCw,
      title: "Legacy System Modernization",
      description: "Transform outdated systems into modern, scalable platforms that drive business growth and operational efficiency."
    },
    {
      icon: Settings,
      title: "Process Optimization",
      description: "Streamline business processes using digital tools and automation to eliminate bottlenecks and improve productivity."
    },
    {
      icon: Users,
      title: "Change Management",
      description: "Guide your organization through digital transformation with proven change management methodologies and training programs."
    },
    {
      icon: Target,
      title: "Digital Strategy Development",
      description: "Create comprehensive digital strategies aligned with your business objectives and market opportunities."
    },
    {
      icon: BarChart3,
      title: "Technology Roadmapping",
      description: "Develop clear technology roadmaps that prioritize initiatives and ensure successful digital transformation execution."
    },
    {
      icon: Zap,
      title: "Digital Culture Transformation",
      description: "Foster a digital-first culture that embraces innovation, agility, and continuous improvement."
    }
  ];

  const benefits = [
    "40-60% improvement in operational efficiency",
    "Enhanced customer experience and satisfaction",
    "Significant reduction in operational costs",
    "Increased business agility and scalability",
    "Improved data visibility and decision-making",
    "Competitive advantage in digital markets"
  ];

  const process = [
    {
      step: "01",
      title: "Assessment & Strategy",
      description: "Comprehensive analysis of current state, business objectives, and digital transformation opportunities."
    },
    {
      step: "02",
      title: "Roadmap Development",
      description: "Detailed transformation roadmap with prioritized initiatives, timelines, and resource requirements."
    },
    {
      step: "03",
      title: "Implementation",
      description: "Phased implementation of digital solutions with continuous monitoring and optimization."
    },
    {
      step: "04",
      title: "Change Management",
      description: "Comprehensive change management program to ensure successful adoption and maximize ROI."
    },
    {
      step: "05",
      title: "Optimization",
      description: "Continuous improvement and optimization based on performance metrics and business outcomes."
    }
  ];

  const industries = [
    "Financial Services",
    "Healthcare",
    "Manufacturing",
    "Retail & E-commerce",
    "Energy & Utilities",
    "Government & Public Sector"
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 pointer-events-none">
        {/* Sparkles Behind Hero Section */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-32 left-1/2 transform -translate-x-1/2 w-48 h-48 z-10"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-1/2 w-4 h-4 bg-[#16CA95] rounded-full shadow-2xl shadow-[#16CA95]/80"
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
            className="absolute top-8 right-4 w-3 h-3 bg-[#16CA95] rounded-full shadow-2xl shadow-[#16CA95]/80"
          />
          <motion.div
            animate={{
              y: [0, -18, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.1
            }}
            className="absolute top-16 left-2 w-2.5 h-2.5 bg-[#BDF0E1] rounded-full shadow-2xl shadow-[#BDF0E1]/80"
          />
        </motion.div>

        {/* Sparkles Behind Features Section */}
        <motion.div
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[700px] left-1/4 w-40 h-40 z-10"
        >
          <motion.div
            animate={{
              y: [0, -25, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-1/2 w-5 h-5 bg-[#16CA95] rounded-full shadow-2xl shadow-[#16CA95]/80"
          />
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
            className="absolute top-10 left-2 w-3.5 h-3.5 bg-[#16CA95] rounded-full shadow-2xl shadow-[#16CA95]/80"
          />
          <motion.div
            animate={{
              y: [0, -22, 0],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2
            }}
            className="absolute top-20 right-0 w-2.5 h-2.5 bg-[#BDF0E1] rounded-full shadow-2xl shadow-[#BDF0E1]/80"
          />
        </motion.div>

        {/* Additional Floating Sparkles */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 30, 0],
            opacity: [0.6, 1, 0.6],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-40 left-1/3 w-4 h-4 bg-[#16CA95] rounded-full shadow-2xl shadow-[#16CA95]/80 z-10"
        />
        
        <motion.div
          animate={{
            y: [0, -35, 0],
            x: [0, -25, 0],
            opacity: [0.7, 1, 0.7],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-48 right-1/4 w-3 h-3 bg-[#16CA95] rounded-full shadow-2xl shadow-[#16CA95]/80 z-10"
        />
        
        <motion.div
          animate={{
            y: [0, -50, 0],
            x: [0, 20, 0],
            opacity: [0.6, 1, 0.6],
            scale: [0.9, 1.4, 0.9],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-56 left-1/2 w-5 h-5 bg-[#BDF0E1] rounded-full shadow-2xl shadow-[#BDF0E1]/80 z-10"
        />
      </div>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/Digitalinfo.jpg"
            alt="Digital Transformation background"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none z-10">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-1/2 w-4 h-4 bg-[#16CA95] rounded-full shadow-2xl shadow-[#16CA95]/80"
          />
          <motion.div
            animate={{
              y: [0, 30, 0],
              rotate: [0, -8, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-8 right-4 w-3 h-3 bg-[#16CA95] rounded-full shadow-2xl shadow-[#16CA95]/80"
          />
          <motion.div
            animate={{
              y: [0, -40, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            className="absolute top-16 left-2 w-2.5 h-2.5 bg-[#BDF0E1] rounded-full shadow-2xl shadow-[#BDF0E1]/80"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative max-w-4xl mx-auto"
            >
              {/* Floating Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <motion.div
                  animate={{
                    y: [0, -30, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-0 left-1/2 w-5 h-5 bg-[#16CA95] rounded-full shadow-2xl shadow-[#16CA95]/80"
                />
                <motion.div
                  animate={{
                    y: [0, 40, 0],
                    rotate: [360, 180, 0],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-10 left-2 w-3.5 h-3.5 bg-[#16CA95] rounded-full shadow-2xl shadow-[#16CA95]/80"
                />
                <motion.div
                  animate={{
                    y: [0, -50, 0],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute top-20 right-0 w-2.5 h-2.5 bg-[#BDF0E1] rounded-full shadow-2xl shadow-[#BDF0E1]/80"
                />
              </div>
              
              {/* Enhanced Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-[#373743] px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg border border-white/30"
              >
                <Sparkles className="w-4 h-4 text-[#16CA95]" />
                <span className="font-semibold">DIGITAL TRANSFORMATION</span>
              </motion.div>
              
              {/* Enhanced Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl lg:text-6xl font-bold text-white mb-6"
              >
                Digital Transformation
              </motion.h1>
              
              {/* Enhanced Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl lg:text-2xl text-white/90 mb-8 font-medium"
              >
                Revolutionize your business with comprehensive digital transformation strategies. We modernize legacy systems, optimize processes, and implement change management frameworks that ensure successful adoption and measurable ROI.
              </motion.p>
              
              {/* Enhanced Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = '/contact'}
                  className="bg-gradient-to-r from-[#16CA95] to-[#14B885] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#16CA95]/25"
                >
                  Get Started
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = '/contact'}
                  className="border-2 border-[#16CA95] text-[#16CA95] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#16CA95] hover:text-white transition-all duration-300 hover:shadow-lg"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
            

          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#373743] mb-4">
              Comprehensive Digital Transformation Services
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Our end-to-end digital transformation approach covers every aspect of your journey, 
              from initial assessment to ongoing optimization and support.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-[#373743] mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-[#6B7280]">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#F8F9FA]/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[#373743] mb-6">
                Transform Your Business with Measurable Results
              </h2>
              <p className="text-lg text-[#6B7280] mb-8">
                Our digital transformation services deliver tangible business outcomes that 
                drive growth, efficiency, and competitive advantage. See the real impact 
                on your organization's performance and bottom line.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#16CA95] mb-2">40-60%</div>
                  <div className="text-[#6B7280]">Efficiency Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#16CA95] mb-2">95%</div>
                  <div className="text-[#6B7280]">Client Satisfaction</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Key Benefits</h3>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#373743] mb-4">
              Our Proven Digital Transformation Process
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              A structured, proven approach that ensures successful digital transformation 
              with minimal disruption and maximum business value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white font-bold text-2xl">
                  {step.step}
                </div>
                
                <h3 className="text-lg font-bold text-[#373743] mb-3">
                  {step.title}
                </h3>
                
                <p className="text-[#6B7280] text-sm">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-[#F8F9FA]/70 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#373743] mb-4">
              Industry Expertise
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              We've successfully delivered digital transformation solutions across diverse industries, 
              understanding the unique challenges and opportunities each sector presents.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#16CA95] rounded-full"></div>
                  <span className="font-semibold text-[#373743]">{industry}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#16CA95] to-[#14B885]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our digital transformation expertise can help your organization 
              achieve breakthrough results and sustainable competitive advantage in the digital age.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/contact'}
                className="bg-white text-[#16CA95] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
              >
                Start Our Journey
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => window.location.href = '/contact'}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#16CA95] transition-all duration-200"
              >
                Schedule Consultation
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
    </div>
  );
}
