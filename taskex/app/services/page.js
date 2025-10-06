"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { 
  TrendingUp, 
  Zap, 
  Shield, 
  Target, 
  CheckCircle2, 
  ArrowRight,
  Users,
  Globe,
  Database,
  Cpu,
  Cloud,
  Lock,
  BarChart3,
  Code,
  Settings,
  Rocket,
  Sparkles
} from "lucide-react";

export default function Services() {
  const mainServices = [
    {
      icon: TrendingUp,
      title: "Digital Transformation",
      description: "Modernize legacy systems and transform business operations for the digital age.",
      features: [
        "Legacy System Modernization",
        "Process Optimization",
        "Change Management",
        "Digital Strategy Development",
        "Technology Roadmapping"
      ],
      benefits: [
        "Improved operational efficiency",
        "Enhanced customer experience",
        "Reduced operational costs",
        "Increased agility and scalability"
      ],
      color: "from-[#16CA95] to-[#BDF0E1]"
    },
    {
      icon: Zap,
      title: "AI & Automation",
      description: "Leverage artificial intelligence to automate processes and drive innovation.",
      features: [
        "Machine Learning Solutions",
        "RPA Implementation",
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision Applications"
      ],
      benefits: [
        "Automated repetitive tasks",
        "Data-driven insights",
        "Improved decision making",
        "Enhanced productivity"
      ],
      color: "from-[#16CA95] to-[#BDF0E1]"
    },
    {
      icon: Shield,
      title: "Cloud & DevOps",
      description: "Build scalable, secure cloud infrastructure with modern DevOps practices.",
      features: [
        "Cloud Migration",
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Security & Compliance",
        "Monitoring & Observability"
      ],
      benefits: [
        "Scalable infrastructure",
        "Faster deployment cycles",
        "Improved security posture",
        "Cost optimization"
      ],
      color: "from-[#16CA95] to-[#BDF0E1]"
    },
    {
      icon: Target,
      title: "Strategic Consulting",
      description: "Expert guidance to align technology with business objectives and drive growth.",
      features: [
        "Technology Strategy",
        "Digital Roadmap Planning",
        "ROI Optimization",
        "Risk Assessment",
        "Vendor Selection"
      ],
      benefits: [
        "Aligned technology strategy",
        "Optimized technology investments",
        "Reduced implementation risks",
        "Measurable business outcomes"
      ],
      color: "from-[#16CA95] to-[#BDF0E1]"
    },
    {
      icon: Settings,
      title: "Business Process Services",
      description: "Complete business operations management from company formation to payroll processing and everything in between.",
      features: [
        "Company Formation & Legal Setup",
        "Human Resources & Payroll Management",
        "Financial Management & Accounting",
        "Operations & Process Management",
        "Technology & Automation"
      ],
      benefits: [
        "Complete business setup in 5-10 days",
        "Automated payroll and tax compliance",
        "Real-time financial reporting",
        "Streamlined operations and processes"
      ],
      color: "from-[#16CA95] to-[#BDF0E1]"
    }
  ];

  const specializedServices = [
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform raw data into actionable insights for better decision making.",
      features: ["Data Warehousing", "Business Intelligence", "Advanced Analytics", "Data Visualization"]
    },
    {
      icon: Cpu,
      title: "Software Development",
      description: "Custom software solutions tailored to your specific business needs.",
      features: ["Web Applications", "Mobile Apps", "Enterprise Software", "API Development"]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Comprehensive cloud solutions for modern business requirements.",
      features: ["AWS/Azure/GCP", "Hybrid Cloud", "Cloud Security", "Cost Management"]
    },
    {
      icon: Lock,
      title: "Cybersecurity",
      description: "Protect your digital assets with comprehensive security solutions.",
      features: ["Security Audits", "Threat Detection", "Compliance", "Incident Response"]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We begin by understanding your current state, challenges, and objectives through comprehensive analysis.",
      activities: ["Stakeholder interviews", "Current state analysis", "Gap identification", "Success metrics definition"]
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a comprehensive roadmap with prioritized initiatives and clear milestones.",
      activities: ["Solution design", "Technology selection", "Implementation planning", "Resource allocation"]
    },
    {
      step: "03",
      title: "Implementation & Testing",
      description: "Execute the plan with agile methodologies and rigorous testing to ensure quality.",
      activities: ["Agile development", "Continuous testing", "Quality assurance", "Stakeholder feedback"]
    },
    {
      step: "04",
      title: "Deployment & Optimization",
      description: "Launch solutions and continuously optimize for maximum performance and value.",
      activities: ["Production deployment", "Performance monitoring", "Continuous improvement", "Knowledge transfer"]
    }
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

        {/* Sparkles Behind Services Grid */}
        <motion.div
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[600px] left-1/4 w-40 h-40 z-10"
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
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/services.png"
            alt="Taskex Services Background"
            fill
            className="object-cover"
            style={{ objectPosition: 'center top' }}
            priority
          />
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/15"></div>
        </div>
        
        {/* Background decorative elements */}
        <div className="absolute inset-0 z-10">
          <div className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-br from-[#16CA95]/20 to-[#BDF0E1]/30 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-[#2563EB]/20 to-[#DBEAFE]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-gradient-to-br from-[#16CA95]/15 to-[#BDF0E1]/25 rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-br from-[#2563EB]/15 to-[#DBEAFE]/25 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#16CA95]/10 to-[#BDF0E1]/20 text-[#16CA95] px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg border border-[#16CA95]/20">
              <Sparkles className="w-4 h-4 text-[#16CA95]" />
              Comprehensive Solutions
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Our <span className="text-[#16CA95]">Services</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 mb-8">
              Comprehensive technology solutions designed to transform your business, 
              optimize operations, and drive sustainable growth.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-[#16CA95]" />
                <span>500+ Projects Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-[#16CA95]" />
                <span>25+ Countries Served</span>
              </div>
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-[#16CA95]" />
                <span>98% Success Rate</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

              {/* Main Services */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-center mb-16"
            >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#373743] mb-4">
              Core Service Offerings
            </h2>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
              Our comprehensive suite of services addresses every aspect of your 
              technology transformation journey.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
                          <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
              className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-1 border border-gray-100"
            >
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <service.icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-[#373743] mb-4">
                  {service.title}
                </h3>
                
                <p className="text-lg text-[#6B7280] mb-6">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-[#373743] mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[#6B7280]">
                        <CheckCircle2 className="w-4 h-4 text-[#16CA95] flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-[#373743] mb-3">Business Benefits:</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-[#6B7280]">
                        <div className="w-2 h-2 bg-[#16CA95] rounded-full flex-shrink-0"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#373743] mb-4">
              Specialized Solutions
            </h2>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
              Additional expertise areas to address specific business challenges 
              and technology requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializedServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                              <div className="bg-[#16CA95] w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>
                
                <h3 className="text-xl font-bold text-[#373743] mb-4">
                  {service.title}
                </h3>
                
                <p className="text-[#6B7280] mb-4">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-[#6B7280]">
                      <CheckCircle2 className="w-4 h-4 text-[#16CA95] flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#373743] mb-4">
              Our Delivery Process
            </h2>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
              A proven methodology that ensures successful project delivery and 
              maximum value for your investment.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
                className="relative"
              >
                <div className="bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] rounded-3xl p-8 text-white">
                  <div className="text-4xl font-bold mb-4">{step.step}</div>
                  <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                  <p className="text-lg mb-6 opacity-90">{step.description}</p>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Key Activities:</h4>
                    <ul className="space-y-2">
                      {step.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#373743] mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
              We combine deep technical expertise with business acumen to deliver 
              solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Expert Team",
                description: "Certified professionals with deep technical and business knowledge across multiple industries."
              },
              {
                icon: Rocket,
                title: "Proven Results",
                description: "Track record of delivering measurable business outcomes and exceeding client expectations."
              },
              {
                icon: Settings,
                title: "Customized Approach",
                description: "Tailored solutions that address your specific business challenges and objectives."
              },
              {
                icon: Code,
                title: "Latest Technologies",
                description: "Cutting-edge tools and frameworks to ensure your solutions are future-ready."
              },
              {
                icon: Lock,
                title: "Security First",
                description: "Enterprise-grade security practices built into every solution we deliver."
              },
              {
                icon: BarChart3,
                title: "Continuous Support",
                description: "Ongoing support and optimization to ensure long-term success and value."
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-1"
              >
                <div className="bg-[#16CA95] w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-[#373743] mb-4">
                  {item.title}
                </h3>
                
                <p className="text-[#6B7280]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#16CA95] to-[#16CA95]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                  <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and explore how our services 
              can help you achieve your business objectives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-white text-[#16CA95] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg flex items-center gap-2"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#16CA95] transition-all duration-200">
                Download Service Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
