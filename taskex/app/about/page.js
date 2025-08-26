"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Globe, 
  Award, 
  Target, 
  CheckCircle2, 
  TrendingUp,
  Lightbulb,
  Shield,
  Heart,
  Zap,
  Sparkles
} from "lucide-react";
import Image from "next/image";

export default function About() {
  const values = [
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We constantly push boundaries to deliver cutting-edge solutions that give our clients a competitive advantage. Our culture of innovation drives us to explore emerging technologies and creative approaches that transform business challenges into opportunities."
    },
    {
      icon: Heart,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering measurable business outcomes and building long-term partnerships. Every project we undertake is measured by the value it creates for your organization and the lasting impact it delivers."
    },
    {
      icon: Shield,
      title: "Excellence",
      description: "We maintain the highest standards of quality in everything we do, from code to customer service. Our commitment to excellence ensures that every solution we deliver meets the highest industry standards and exceeds client expectations."
    },
    {
      icon: Zap,
      title: "Agility",
      description: "We adapt quickly to changing business needs and technology landscapes to deliver value faster. Our agile approach enables us to respond rapidly to market changes and deliver solutions that keep our clients ahead of the competition."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Chief Executive Officer",
      bio: "20+ years of experience in technology consulting and digital transformation. Sarah has led hundreds of successful digital transformation initiatives and is recognized as a thought leader in enterprise technology strategy.",
                        image: "/images/customer1.jpg"
    },
    {
      name: "Michael Chen",
      role: "Chief Technology Officer",
      bio: "Expert in AI, cloud architecture, and emerging technologies. Michael brings deep technical expertise and has pioneered innovative solutions that have transformed how organizations leverage technology for competitive advantage.",
                        image: "/images/customer2.jpg"
    },
    {
      name: "Emily Rodriguez",
      role: "Chief Operations Officer",
      bio: "Specializes in process optimization and change management. Emily ensures operational excellence across all client engagements and has successfully managed complex transformation programs for Fortune 500 companies.",
                        image: "/images/customer3.jpg"
    },
    {
      name: "David Kim",
      role: "Head of Strategy",
      bio: "Strategic advisor with deep industry knowledge and business acumen. David helps organizations align technology investments with business objectives, ensuring maximum ROI and strategic value from every initiative.",
                        image: "/images/customer4.jpg"
    }
  ];

  const milestones = [
    {
      year: "2003",
      title: "Company Founded",
      description: "Started as a small technology consulting firm with a vision to transform businesses through innovation. Founded by a team of passionate technologists who believed technology could solve complex business challenges."
    },
    {
      year: "2010",
      title: "First Fortune 500 Client",
      description: "Secured our first major enterprise client, marking a significant milestone in our growth. This partnership validated our approach and established our credibility in the enterprise market."
    },
    {
      year: "2015",
      title: "Global Expansion",
      description: "Expanded operations to Europe and Asia, establishing our international presence. This expansion enabled us to serve global clients and bring diverse perspectives to our solutions."
    },
    {
      year: "2020",
      title: "AI & ML Division",
      description: "Launched our dedicated AI and Machine Learning practice to meet growing client demands. This strategic move positioned us at the forefront of emerging technology adoption."
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Named one of the top technology consulting firms by leading industry publications. This recognition reflects our commitment to excellence and our proven track record of delivering exceptional results."
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10">
        {/* Animated Background Elements - Behind Text Only */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Golden Glitter Burst Behind "About Taskex" Text */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.9, 1, 0.9],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-32 left-1/2 transform -translate-x-1/2 w-96 h-96 z-10"
        >


          {/* Individual Sparkles Only */}
          <motion.div
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute inset-0"
          >
            {/* Outer Ring of Sparkles */}
            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-1/2 w-2 h-2 bg-[#BDF0E1] rounded-full shadow-lg shadow-[#BDF0E1]/80"
            />
            <motion.div
              animate={{
                y: [0, -8, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8
              }}
              className="absolute top-2 right-8 w-1.5 h-1.5 bg-[#16CA95] rounded-full shadow-lg shadow-[#16CA95]/80"
            />
            <motion.div
              animate={{
                y: [0, -12, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 4.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
              className="absolute top-4 left-12 w-1 h-1 bg-[#BDF0E1] rounded-full shadow-lg shadow-[#BDF0E1]/80"
            />
            <motion.div
              animate={{
                y: [0, -6, 0],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 3.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.1
              }}
              className="absolute top-6 right-4 w-2 h-2 bg-[#16CA95] rounded-full shadow-lg shadow-[#16CA95]/80"
            />
            <motion.div
              animate={{
                y: [0, -9, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.3
              }}
              className="absolute top-8 left-6 w-1.5 h-1.5 bg-[#BDF0E1] rounded-full shadow-lg shadow-[#16CA95]/80"
            />
            <motion.div
              animate={{
                y: [0, -7, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.8
              }}
              className="absolute top-10 right-10 w-1 h-1 bg-[#16CA95] rounded-full shadow-lg shadow-[#16CA95]/80"
            />
            <motion.div
              animate={{
                y: [0, -11, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3.9,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.6
              }}
              className="absolute top-12 left-8 w-1.5 h-1.5 bg-[#2563EB] rounded-full shadow-lg shadow-[#2563EB]/80"
            />
            <motion.div
              animate={{
                y: [0, -13, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 4.1,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.3
              }}
              className="absolute top-14 right-2 w-2 h-2 bg-[#BDF0E1] rounded-full shadow-lg shadow-[#BDF0E1]/80"
            />
            <motion.div
              animate={{
                y: [0, -9, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3.7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.9
              }}
              className="absolute top-16 left-4 w-1 h-1 bg-[#16CA95] rounded-full shadow-lg shadow-[#16CA95]/80"
            />
            <motion.div
              animate={{
                y: [0, -15, 0],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 4.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.7
              }}
              className="absolute top-18 right-6 w-1.5 h-1.5 bg-[#2563EB] rounded-full shadow-lg shadow-[#2563EB]/80"
            />
            <motion.div
              animate={{
                y: [0, -10, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4
              }}
              className="absolute top-20 left-10 w-2 h-2 bg-[#BDF0E1] rounded-full shadow-lg shadow-[#BDF0E1]/80"
            />
            <motion.div
              animate={{
                y: [0, -14, 0],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 4.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.0
              }}
              className="absolute top-22 right-8 w-1 h-1 bg-[#16CA95] rounded-full shadow-lg shadow-[#16CA95]/80"
            />
          </motion.div>

          {/* Additional Floating Sparkles */}
          <motion.div
            animate={{
              y: [0, -15, 0],
              x: [0, 8, 0],
              opacity: [0.6, 1, 0.6],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
            className="absolute top-12 left-1/2 w-2.5 h-2.5 bg-[#DBEAFE] rounded-full shadow-xl shadow-[#DBEAFE]/90"
          />
          <motion.div
            animate={{
              y: [0, -12, 0],
              x: [0, -6, 0],
              opacity: [0.7, 1, 0.7],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
            className="absolute top-16 right-6 w-2 h-2 bg-[#BDF0E1] rounded-full shadow-xl shadow-[#BDF0E1]/90"
          />
          <motion.div
            animate={{
              y: [0, -18, 0],
              x: [0, 10, 0],
              opacity: [0.6, 1, 0.6],
              scale: [0.9, 1.3, 0.9],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.7
            }}
            className="absolute top-20 left-8 w-1.5 h-1.5 bg-[#16CA95] rounded-full shadow-xl shadow-[#16CA95]/90"
          />

          {/* Many More Floating Sparkles */}
          <motion.div
            animate={{
              y: [0, -45, 0],
              x: [0, -35, 0],
              opacity: [0.5, 1, 0.5],
              scale: [0.9, 1.1, 0.9],
            }}
            transition={{
              duration: 6.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2
            }}
            className="absolute top-28 left-1/4 w-2.5 h-2.5 bg-[#2563EB] rounded-full shadow-xl shadow-[#2563EB]/70 z-10"
          />
          
          <motion.div
            animate={{
              y: [0, -30, 0],
              x: [0, 40, 0],
              opacity: [0.6, 1, 0.6],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 8.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.8
            }}
            className="absolute top-32 right-1/4 w-2 h-2 bg-[#BDF0E1] rounded-full shadow-xl shadow-[#BDF0E1]/70 z-10"
          />
          
          <motion.div
            animate={{
              y: [0, -55, 0],
              x: [0, -20, 0],
              opacity: [0.7, 1, 0.7],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: 7.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
            className="absolute top-40 left-1/6 w-3 h-3 bg-[#16CA95] rounded-full shadow-xl shadow-[#16CA95]/70 z-10"
          />
          
          <motion.div
            animate={{
              y: [0, -25, 0],
              x: [0, 45, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1.1, 0.9, 1.1],
            }}
            transition={{
              duration: 9.1,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.7
            }}
            className="absolute top-44 right-1/6 w-1.5 h-1.5 bg-[#2563EB] rounded-full shadow-xl shadow-[#2563EB]/70 z-10"
          />
          
          <motion.div
            animate={{
              y: [0, -60, 0],
              x: [0, -15, 0],
              opacity: [0.6, 1, 0.6],
              scale: [0.9, 1.2, 0.9],
            }}
            transition={{
              duration: 6.8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.3
            }}
            className="absolute top-52 left-1/3 w-2.5 h-2.5 bg-[#BDF0E1] rounded-full shadow-xl shadow-[#BDF0E1]/70 z-10"
          />
          
          <motion.div
            animate={{
              y: [0, -38, 0],
              x: [0, 28, 0],
              opacity: [0.7, 1, 0.7],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 8.7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3.1
            }}
            className="absolute top-56 right-1/3 w-2 h-2 bg-[#2563EB] rounded-full shadow-xl shadow-[#2563EB]/70 z-10"
          />
          
          <motion.div
            animate={{
              y: [0, -42, 0],
              x: [0, -32, 0],
              opacity: [0.5, 1, 0.5],
              scale: [0.8, 1.4, 0.8],
            }}
            transition={{
              duration: 7.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.9
            }}
            className="absolute top-60 left-1/2 w-1.5 h-1.5 bg-[#2563EB] rounded-full shadow-xl shadow-[#2563EB]/70 z-10"
          />
          
          <motion.div
            animate={{
              y: [0, -33, 0],
              x: [0, 38, 0],
              opacity: [0.6, 1, 0.6],
              scale: [1.2, 0.9, 1.2],
            }}
            transition={{
              duration: 9.4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6
            }}
            className="absolute top-64 right-1/2 w-2.5 h-2.5 bg-[#BDF0E1] rounded-full shadow-xl shadow-[#BDF0E1]/70 z-10"
          />
        </motion.div>

        {/* Sparkles Behind Values Section Text */}
        <motion.div
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[800px] left-1/2 transform -translate-x-1/2 w-80 h-80 z-0"
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
            className="absolute top-0 left-1/2 w-5 h-5 bg-white rounded-full shadow-2xl shadow-white/80"
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
            className="absolute top-10 left-2 w-3.5 h-3.5 bg-white rounded-full shadow-2xl shadow-white/80"
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
            className="absolute top-20 right-0 w-2.5 h-2.5 bg-white rounded-full shadow-2xl shadow-white/80"
          />
        </motion.div>

        {/* Sparkles Behind Team Section Text */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[1200px] left-1/2 transform -translate-x-1/2 w-72 h-72 z-0"
        >
          <motion.div
            animate={{
              y: [0, -18, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-2xl shadow-white/80"
          />
          <motion.div
            animate={{
              y: [0, -15, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6
            }}
            className="absolute top-8 right-2 w-2.5 h-2.5 bg-white rounded-full shadow-2xl shadow-white/80"
          />
          <motion.div
            animate={{
              y: [0, -20, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.1
            }}
            className="absolute top-16 left-0 w-3 h-3 bg-white rounded-full shadow-2xl shadow-white/80"
          />
        </motion.div>
      </div>

              {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-32">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/aboutsection-background-image.jpg"
              alt="About Taskex Technologies background"
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
              className="absolute top-12 left-1/2 w-2.5 h-2.5 bg-[#BDF0E1] rounded-full shadow-xl shadow-[#BDF0E1]/90"
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
              className="absolute top-16 right-6 w-2 h-2 bg-[#BDF0E1] rounded-full shadow-xl shadow-[#BDF0E1]/90"
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
              className="absolute top-20 left-8 w-1.5 h-1.5 bg-[#BDF0E1] rounded-full shadow-xl shadow-[#BDF0E1]/90"
            />
            <motion.div
              animate={{
                y: [0, 50, 0],
                rotate: [0, -12, 0],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
              className="absolute top-28 left-1/4 w-2.5 h-2.5 bg-[#16CA95] rounded-full shadow-xl shadow-[#16CA95]/70 z-10"
            />
            <motion.div
              animate={{
                y: [0, -30, 0],
                rotate: [0, 8, 0],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
              className="absolute top-32 right-1/4 w-2 h-2 bg-[#BDF0E1] rounded-full shadow-xl shadow-[#BDF0E1]/70 z-10"
            />
            <motion.div
              animate={{
                y: [0, 40, 0],
                rotate: [0, -10, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.5
              }}
              className="absolute top-40 left-1/6 w-3 h-3 bg-[#16CA95] rounded-full shadow-xl shadow-[#16CA95]/70 z-10"
            />
            <motion.div
              animate={{
                y: [0, -35, 0],
                rotate: [0, 12, 0],
              }}
              transition={{
                duration: 22,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute top-44 right-1/6 w-1.5 h-1.5 bg-[#16CA95] rounded-full shadow-xl shadow-[#16CA95]/70 z-10"
            />
            <motion.div
              animate={{
                y: [0, 45, 0],
                rotate: [0, -8, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 3
              }}
              className="absolute top-52 left-1/3 w-2.5 h-2.5 bg-[#BDF0E1] rounded-full shadow-xl shadow-[#BDF0E1]/70 z-10"
            />
            <motion.div
              animate={{
                y: [0, -50, 0],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 28,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2
              }}
              className="absolute top-56 right-1/3 w-2 h-2 bg-[#16CA95] rounded-full shadow-xl shadow-[#16CA95]/70 z-10"
            />
            <motion.div
              animate={{
                y: [0, 55, 0],
                rotate: [0, -18, 0],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
              className="absolute top-60 left-1/2 w-1.5 h-1.5 bg-[#16CA95] rounded-full shadow-xl shadow-[#16CA95]/70 z-10"
            />
            <motion.div
              animate={{
                y: [0, -60, 0],
                rotate: [0, 20, 0],
              }}
              transition={{
                duration: 32,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.5
              }}
              className="absolute top-64 right-1/2 w-2.5 h-2.5 bg-[#BDF0E1] rounded-full shadow-xl shadow-[#BDF0E1]/70 z-10"
            />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            <div className="text-center">
              <motion.div
                className="relative max-w-4xl mx-auto"
              >
                {/* Enhanced Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-[#373743] px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg border border-white/30"
                >
                  <Sparkles className="w-4 h-4 text-[#16CA95]" />
                  <span className="font-semibold">ABOUT US</span>
                </motion.div>
                
                {/* Enhanced Main Heading */}
                <motion.h1
                  className="text-4xl lg:text-6xl font-bold text-white mb-6"
                >
                  About <span className="text-[#16CA95]">Taskex</span>
                </motion.h1>
                
                {/* Enhanced Description */}
                <motion.p
                  className="text-xl lg:text-2xl text-white/90 mb-8 font-medium"
                >
                  We are a team of passionate technologists, innovators, and problem-solvers dedicated to transforming businesses through cutting-edge technology solutions.
                </motion.p>
                
                {/* Company Highlights */}
                <motion.div
                  className="flex flex-wrap justify-center gap-4 text-white/90"
                >
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-[#16CA95]" />
                    <span>Expert Team</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="w-5 h-5 text-[#16CA95]" />
                    <span>Global Reach</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#16CA95]" />
                    <span>Proven Results</span>
                  </div>
                </motion.div>
              </motion.div>
              

            </div>
          </div>
        </section>



      {/* Values Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F0FDF4] via-[#ECFDF5] to-[#D1FAE5]"></div>
        
        {/* Floating Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-[#16CA95]/10 to-[#BDF0E1]/10 rounded-full blur-3xl"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-[#16CA95]/8 to-[#BDF0E1]/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-36 h-36 bg-gradient-to-br from-[#16CA95]/12 to-[#BDF0E1]/12 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-28 h-28 bg-gradient-to-br from-[#16CA95]/15 to-[#BDF0E1]/15 rounded-full blur-3xl"></div>
        </div>

        {/* Dot Pattern Background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #16CA95 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-[#16CA95] px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg border border-white/50"
            >
              <span className="w-2 h-2 bg-[#16CA95] rounded-full"></span>
              Our Foundation
            </motion.div>
            
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold text-[#373743] mb-4"
            >
              Our Core Values
            </motion.h2>
            
            <motion.p 
              className="text-xl text-[#6B7280] max-w-2xl mx-auto"
            >
              These fundamental principles guide everything we do, shape how we work with our clients, 
              and define the culture that drives our success. They're not just words—they're the 
              foundation of every decision we make and every solution we deliver.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 overflow-hidden group"
              >
                {/* Card Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#16CA95]/5 to-[#BDF0E1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Decorative Corner Elements */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#16CA95]/20 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-br from-transparent to-[#BDF0E1]/20 rounded-tr-full"></div>
                
                <div className="relative">
                  <div className="bg-gradient-to-br from-[#16CA95] to-[#14B885] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#373743] mb-4">
                    {value.title}
                  </h3>
                  
                  <p className="text-[#6B7280] leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FA] via-[#F0FDF4] to-[#ECFDF5]"></div>
        
        {/* Floating Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-16 w-36 h-36 bg-gradient-to-br from-[#16CA95]/8 to-[#BDF0E1]/8 rounded-full blur-3xl"></div>
          <div className="absolute top-24 right-24 w-44 h-44 bg-gradient-to-br from-[#16CA95]/6 to-[#BDF0E1]/6 rounded-full blur-3xl"></div>
          <div className="absolute bottom-24 left-24 w-32 h-32 bg-gradient-to-br from-[#16CA95]/10 to-[#BDF0E1]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-16 w-40 h-40 bg-gradient-to-br from-[#16CA95]/7 to-[#BDF0E1]/7 rounded-full blur-3xl"></div>
        </div>

        {/* Geometric Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `linear-gradient(45deg, #16CA95 25%, transparent 25%), linear-gradient(-45deg, #16CA95 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #16CA95 75%), linear-gradient(-45deg, transparent 75%, #16CA95 75%)`,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-[#16CA95] px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg border border-white/50"
            >
              <span className="w-2 h-2 bg-[#16CA95] rounded-full"></span>
              Leadership Excellence
            </motion.div>
            
            <motion.h2 
              className="text-3xl lg:text-4xl font-bold text-[#373743] mb-4"
            >
              Meet Our Leadership Team
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 1, y: 0 }}
              className="text-xl text-[#6B7280] max-w-2xl mx-auto"
            >
              Our leadership team brings together decades of combined experience in technology consulting, 
              digital transformation, and business strategy. These experienced professionals are passionate 
              about technology and committed to delivering exceptional results for your organization.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
              >
                {/* Card Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#16CA95]/3 to-[#BDF0E1]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Decorative Border Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#16CA95] to-[#BDF0E1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-[#16CA95] to-[#BDF0E1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative">
                  <div className="relative mb-4">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-[#16CA95]/20 bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                        priority={index < 2}
                        onError={(e) => {
                          console.error(`Failed to load image: ${member.image}`);
                        }}
                        onLoad={() => {
                          console.log(`Successfully loaded image: ${member.image}`);
                        }}
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#373743] mb-2">
                    {member.name}
                  </h3>
                  
                  <div className="text-[#16CA95] font-medium mb-3">
                    {member.role}
                  </div>
                  
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F0FDF4] via-[#ECFDF5] to-[#D1FAE5]"></div>
        
        {/* Floating Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-br from-[#16CA95]/6 to-[#BDF0E1]/6 rounded-full blur-3xl"></div>
          <div className="absolute top-32 right-32 w-36 h-36 bg-gradient-to-br from-[#16CA95]/8 to-[#BDF0E1]/8 rounded-full blur-3xl"></div>
          <div className="absolute bottom-32 left-32 w-44 h-44 bg-gradient-to-br from-[#16CA95]/5 to-[#BDF0E1]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-br from-[#16CA95]/10 to-[#BDF0E1]/10 rounded-full blur-3xl"></div>
        </div>

        {/* Wave Pattern Background */}
        <div className="absolute inset-0 opacity-15">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <defs>
              <pattern id="wave" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M0,10 Q5,5 10,10 T20,10" fill="none" stroke="#16CA95" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#wave)"/>
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-[#16CA95] px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg border border-white/50"
            >
              <span className="w-2 h-2 bg-[#16CA95] rounded-full"></span>
              Our Story
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 1, y: 0 }}
              className="text-3xl lg:text-4xl font-bold text-[#373743] mb-4"
            >
              Our Journey
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 1, y: 0 }}
              className="text-xl text-[#6B7280] max-w-2xl mx-auto"
            >
              Two decades of innovation, growth, and helping organizations achieve their digital transformation goals. 
              Our journey reflects our commitment to excellence and our evolution as a trusted technology partner 
              for businesses worldwide.
            </motion.p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-1 bg-gradient-to-b from-[#16CA95] via-[#BDF0E1] to-[#16CA95] shadow-lg"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 1, x: 0 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'lg:mr-auto lg:pr-8' : 'lg:ml-auto lg:pl-8'
                } lg:w-1/2`}
              >
                <div className={`relative ${
                  index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'
                }`}>
                  <div className={`absolute top-0 w-6 h-6 bg-gradient-to-br from-[#16CA95] to-[#14B885] rounded-full border-4 border-white shadow-lg ${
                    index % 2 === 0 ? 'lg:right-0 lg:transform lg:translate-x-3' : 'lg:left-0 lg:transform lg:-translate-x-3'
                  }`}></div>
                  
                  <motion.div 
                    whileHover={{ y: -5, scale: 1.02 }}
                    className={`relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 overflow-hidden group ${
                      index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                    }`}
                  >
                    {/* Card Background Pattern */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#16CA95]/3 to-[#BDF0E1]/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Decorative Corner Elements */}
                    <div className={`absolute top-0 ${
                      index % 2 === 0 ? 'right-0' : 'left-0'
                    } w-16 h-16 bg-gradient-to-br from-[#16CA95]/15 to-transparent rounded-bl-full`}></div>
                    
                    <div className="relative">
                      <div className="text-2xl font-bold text-[#16CA95] mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-[#373743] mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-[#6B7280] leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact & Achievements Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FA] via-[#F0FDF4] to-[#ECFDF5]"></div>
        
        {/* Floating Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-16 left-16 w-44 h-44 bg-gradient-to-br from-[#16CA95]/7 to-[#BDF0E1]/7 rounded-full blur-3xl"></div>
          <div className="absolute top-28 right-28 w-36 h-36 bg-gradient-to-br from-[#16CA95]/9 to-[#BDF0E1]/9 rounded-full blur-3xl"></div>
          <div className="absolute bottom-28 left-28 w-40 h-40 bg-gradient-to-br from-[#16CA95]/6 to-[#BDF0E1]/6 rounded-full blur-3xl"></div>
          <div className="absolute bottom-16 right-16 w-32 h-32 bg-gradient-to-br from-[#16CA95]/11 to-[#BDF0E1]/11 rounded-full blur-3xl"></div>
        </div>

        {/* Hexagonal Pattern Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2316CA95' fill-opacity='0.1'%3E%3Cpath d='M30 0l30 30-30 30L0 30z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm text-[#16CA95] px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg border border-white/50"
            >
              <span className="w-2 h-2 bg-[#16CA95] rounded-full"></span>
              By The Numbers
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 1, y: 0 }}
              className="text-3xl lg:text-4xl font-bold text-[#373743] mb-4"
            >
              Our Impact at a Glance
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 1, y: 0 }}
              className="text-xl text-[#6B7280] max-w-2xl mx-auto"
            >
              Two decades of delivering exceptional results and creating lasting impact for organizations 
              across industries. Our track record speaks to our commitment to excellence and client success.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div 
              initial={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="relative text-center group"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <CheckCircle2 className="w-10 h-10 text-white" />
                </div>
                {/* Floating Particles */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#16CA95]/60 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-[#BDF0E1]/60 rounded-full animate-pulse delay-100"></div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-[#373743] mb-2">1,200+</div>
              <div className="text-[#6B7280] font-medium">Successful Digital Projects</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="relative text-center group"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                {/* Floating Particles */}
                <div className="absolute -top-2 -left-2 w-2 h-2 bg-[#16CA95]/60 rounded-full animate-pulse delay-200"></div>
                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#BDF0E1]/60 rounded-full animate-pulse delay-300"></div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-[#373743] mb-2">50+</div>
              <div className="text-[#6B7280] font-medium">Enterprise Clients</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="relative text-center group"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Award className="w-10 h-10 text-white" />
                </div>
                {/* Floating Particles */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#16CA95]/60 rounded-full animate-pulse delay-400"></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-[#BDF0E1]/60 rounded-full animate-pulse delay-500"></div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-[#373743] mb-2">20+</div>
              <div className="text-[#6B7280] font-medium">Years of Excellence</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="relative text-center group"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Globe className="w-10 h-10 text-white" />
                </div>
                {/* Floating Particles */}
                <div className="absolute -top-2 -left-2 w-2 h-2 bg-[#16CA95]/60 rounded-full animate-pulse delay-600"></div>
                <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-[#BDF0E1]/60 rounded-full animate-pulse delay-700"></div>
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-[#373743] mb-2">25+</div>
              <div className="text-[#6B7280] font-medium">Countries Worldwide</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#16CA95] to-[#16CA95]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Start Our Journey Together?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our two decades of expertise and proven track record can help your organization 
              achieve breakthrough technology and business results. Our team is ready to partner with you 
              on your digital transformation journey.
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
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
