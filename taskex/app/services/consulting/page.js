"use client";

import { motion } from "framer-motion";
import { 
  Lightbulb, 
  CheckCircle2, 
  ArrowRight,
  Target,
  BarChart3,
  TrendingUp,
  Users,
  Globe,
  Award,
  Sparkles,
  BookOpen,
  Cpu,
  Shield,
  Zap,
  Building,
  Database
} from "lucide-react";
import Image from "next/image";

export default function Consulting() {
  const consultingServices = [
    {
      icon: Target,
      title: "Digital Strategy Consulting",
      description: "Comprehensive digital transformation strategies that align technology with business objectives and drive competitive advantage."
    },
    {
      icon: Building,
      title: "Business Transformation",
      description: "End-to-end business transformation consulting to modernize operations, processes, and technology infrastructure."
    },
    {
      icon: Cpu,
      title: "Technology Consulting",
      description: "Expert guidance on technology architecture, platform selection, and implementation strategies."
    },
    {
      icon: Database,
      title: "Data & Analytics Consulting",
      description: "Strategic data consulting to unlock insights, improve decision-making, and drive data-driven growth."
    },
    {
      icon: Shield,
      title: "Cybersecurity Consulting",
      description: "Comprehensive security assessments, strategy development, and implementation guidance."
    },
    {
      icon: Zap,
      title: "Innovation Consulting",
      description: "Cutting-edge innovation strategies to stay ahead of market trends and technological disruptions."
    }
  ];

  const benefits = [
    "Strategic alignment between technology and business goals",
    "Reduced implementation risks and costs",
    "Accelerated digital transformation timelines",
    "Improved operational efficiency and productivity",
    "Enhanced competitive advantage and market position",
    "Long-term technology roadmap and vision"
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "Comprehensive analysis of current state, business objectives, challenges, and opportunities."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Develop tailored strategies and roadmaps aligned with business goals and market conditions."
    },
    {
      step: "03",
      title: "Solution Design",
      description: "Design comprehensive solutions with detailed implementation plans and success metrics."
    },
    {
      step: "04",
      title: "Implementation Support",
      description: "Provide ongoing guidance and support throughout the implementation process."
    },
    {
      step: "05",
      title: "Optimization & Growth",
      description: "Continuous improvement and optimization based on performance metrics and business outcomes."
    }
  ];

  const industries = [
    "Financial Services & Banking",
    "Healthcare & Life Sciences",
    "Manufacturing & Industrial",
    "Retail & E-commerce",
    "Energy & Utilities",
    "Government & Public Sector",
    "Technology & Software",
    "Transportation & Logistics"
  ];

  const expertiseAreas = [
    "Digital Transformation Strategy",
    "Technology Architecture Design",
    "Cloud Strategy & Migration",
    "AI & Machine Learning Roadmap",
    "Data Strategy & Governance",
    "Cybersecurity & Compliance",
    "Process Optimization",
    "Change Management"
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
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
            className="absolute top-8 right-4 w-3 h-3 bg-[#2563EB] rounded-full shadow-2xl shadow-[#2563EB]/80"
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
            className="absolute top-0 left-1/2 w-5 h-5 bg-[#2563EB] rounded-full shadow-2xl shadow-[#2563EB]/80"
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
          className="absolute top-48 right-1/4 w-3 h-3 bg-[#2563EB] rounded-full shadow-2xl shadow-[#2563EB]/80 z-10"
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
        <div className="absolute inset-0">
          <Image
            src="/images/consultitng.jpg"
            alt="Consulting Background"
            fill
            className="object-cover"
            priority
          />
          {/* Dark Overlay - Very light overlay for maximum image visibility */}
          <div className="absolute inset-0 bg-black/15"></div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-[#16CA95]/20 to-[#BDF0E1]/30 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-[#16CA95]/20 to-[#BDF0E1]/30 rounded-full blur-3xl"
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
                className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg border border-white/30"
              >
                <Users className="w-4 h-4 text-[#16CA95]" />
                <span className="font-semibold">CONSULTING</span>
              </motion.div>
              
              {/* Enhanced Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl lg:text-6xl font-bold text-white mb-6"
              >
                Strategic Consulting
              </motion.h1>
              
              {/* Enhanced Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl lg:text-2xl text-white/90 mb-8 font-medium"
              >
                Transform your business with expert strategic guidance and technology consulting. Our experienced consultants help you navigate digital transformation, optimize operations, and achieve sustainable growth through innovative technology solutions.
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

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#373743] mb-4">
              Comprehensive Consulting Services
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Our consulting expertise spans the full spectrum of business and technology challenges, 
              providing strategic guidance that drives transformation and growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {consultingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-[#373743] mb-4">
                  {service.title}
                </h3>
                
                <p className="text-[#6B7280]">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[#373743] mb-6">
                Why Choose Our Consulting Services?
              </h2>
              <p className="text-lg text-[#6B7280] mb-8">
                Our consulting approach delivers measurable business outcomes that drive 
                growth, efficiency, and competitive advantage. Experience the power of 
                strategic guidance and expert insights.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#16CA95] mb-2">15+</div>
                  <div className="text-[#6B7280]">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#16CA95] mb-2">200+</div>
                  <div className="text-[#6B7280]">Projects Delivered</div>
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#373743] mb-4">
              Our Consulting Methodology
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              A proven, structured approach that ensures successful consulting engagement 
              with maximum business value and sustainable outcomes.
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
        <section className="py-20 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#373743] mb-4">
                Industries We Serve
              </h2>
              <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
                We have extensive experience across diverse industries, understanding unique challenges and opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#16CA95]/30 group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-4 h-4 bg-gradient-to-br from-[#16CA95] to-[#14B885] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="font-semibold text-[#373743] text-lg group-hover:text-[#16CA95] transition-colors duration-300">{industry}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Service Areas Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#373743] mb-4">
                Our Service Areas
            </h2>
              <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
                Comprehensive consulting services tailored to your specific business needs and objectives.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
              {expertiseAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#F8F9FA] to-[#BDF0E1] rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-3 h-3 bg-[#16CA95] rounded-full"></div>
                    <span className="font-semibold text-[#373743]">{area}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Leadership Team Section */}
        <section className="py-20 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-[#373743] mb-4">
                Meet Our Leadership Team
              </h2>
              <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
                Our leadership team brings together decades of combined experience in technology consulting, 
                digital transformation, and business strategy. These experienced professionals are passionate 
                about technology and committed to delivering exceptional results for your organization.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "Sarah Johnson",
                  title: "Chief Executive Officer",
                  description: "20+ years of experience in technology consulting and digital transformation. Sarah has led hundreds of successful digital transformation initiatives and is recognized as a thought leader in enterprise technology strategy.",
                  image: "/images/customer1.jpg"
                },
                {
                  name: "Michael Chen",
                  title: "Chief Technology Officer",
                  description: "Expert in AI, cloud architecture, and emerging technologies. Michael brings deep technical expertise and has pioneered innovative solutions that have transformed how organizations leverage technology for competitive advantage.",
                  image: "/images/customer2.jpg"
                },
                {
                  name: "Emily Rodriguez",
                  title: "Chief Operations Officer",
                  description: "Specializes in process optimization and change management. Emily ensures operational excellence across all client engagements and has successfully managed complex transformation programs for Fortune 500 companies.",
                  image: "/images/customer3.jpg"
                },
                {
                  name: "David Kim",
                  title: "Head of Strategy",
                  description: "Strategic advisor with deep industry knowledge and business acumen. David helps organizations align technology investments with business objectives, ensuring maximum ROI and strategic value from every initiative.",
                  image: "/images/customer4.jpg"
                }
              ].map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-[#16CA95]/20">
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
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] rounded-full flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#373743] mb-2">
                    {member.name}
                  </h3>
                  
                  <p className="text-[#16CA95] font-semibold mb-4">
                    {member.title}
                  </p>
                  
                  <p className="text-[#6B7280] text-sm leading-relaxed">
                    {member.description}
                  </p>
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
              transition={{ duration: 0.6 }}
              className="text-white"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how our consulting expertise can help you achieve your technology and business goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.href = '/contact'}
                  className="bg-white text-[#16CA95] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
                >
                  Start Our Journey
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05, y: -3 }}
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
  );
}
