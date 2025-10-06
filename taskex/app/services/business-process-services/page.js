"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Settings, Target, TrendingUp, Clock, CheckCircle, Users, Zap, Shield, Brain, Globe, Award } from "lucide-react";

export default function BusinessProcessServices() {
  const features = [
    {
      icon: Target,
      title: "Company Formation & Legal Setup",
      description: "Complete business formation services from legal entity creation to compliance setup and ongoing legal support.",
      bullets: [
        "Business entity selection and registration (LLC, Corporation, Partnership)",
        "Articles of incorporation and operating agreement preparation",
        "Federal and state tax ID registration (EIN)",
        "Business license and permit acquisition",
        "Trademark and intellectual property protection",
        "Corporate governance structure setup",
        "Compliance monitoring and regulatory updates",
        "Annual report filing and maintenance",
        "Business insurance setup and management",
        "Contract template creation and review"
      ]
    },
    {
      icon: Users,
      title: "Human Resources & Payroll Management",
      description: "Comprehensive HR services covering recruitment, employee management, payroll processing, and benefits administration.",
      bullets: [
        "Job description creation and posting",
        "Candidate screening and interview coordination",
        "Employee onboarding and orientation programs",
        "Performance management system implementation",
        "Employee handbook and policy development",
        "Payroll processing and tax compliance",
        "Benefits administration (health, dental, retirement)",
        "Time and attendance tracking systems",
        "Employee relations and conflict resolution",
        "Training and development program management",
        "Exit interview and offboarding processes",
        "HR compliance and legal requirement management"
      ]
    },
    {
      icon: Zap,
      title: "Financial Management & Accounting",
      description: "Complete financial process management including bookkeeping, accounting, financial reporting, and tax preparation.",
      bullets: [
        "Chart of accounts setup and maintenance",
        "Daily bookkeeping and transaction recording",
        "Accounts payable and receivable management",
        "Bank reconciliation and cash flow monitoring",
        "Financial statement preparation and analysis",
        "Budget planning and variance analysis",
        "Tax preparation and filing (quarterly and annual)",
        "Audit preparation and support",
        "Financial forecasting and planning",
        "Expense management and reimbursement systems",
        "Financial compliance and reporting",
        "Investment tracking and portfolio management"
      ]
    },
    {
      icon: Settings,
      title: "Operations & Process Management",
      description: "Streamline business operations with process optimization, workflow automation, and operational excellence initiatives.",
      bullets: [
        "Business process mapping and documentation",
        "Workflow automation and digital transformation",
        "Inventory management and supply chain optimization",
        "Quality control and assurance systems",
        "Vendor and supplier relationship management",
        "Project management and tracking systems",
        "Customer service process optimization",
        "Document management and filing systems",
        "Communication and collaboration tools setup",
        "Performance metrics and KPI tracking",
        "Continuous improvement initiatives",
        "Risk management and mitigation strategies"
      ]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Complete Business Setup",
      description: "Get your business up and running quickly with comprehensive formation and setup services.",
      bullets: [
        "Business formation completed in 5-10 business days",
        "All legal requirements handled by experts",
        "One-stop solution for all business needs",
        "Compliance monitoring and updates",
        "Reduced time to market for new businesses",
        "Professional guidance throughout the process",
        "Cost-effective bundled services"
      ]
    },
    {
      icon: Users,
      title: "Streamlined HR Operations",
      description: "Comprehensive human resources management from recruitment to payroll processing.",
      bullets: [
        "Automated payroll processing and tax filing",
        "Employee self-service portals",
        "Automated benefits enrollment and management",
        "Performance tracking and review systems",
        "Compliance with labor laws and regulations",
        "Reduced HR administrative burden",
        "Improved employee satisfaction and retention"
      ]
    },
    {
      icon: Shield,
      title: "Financial Control & Compliance",
      description: "Maintain accurate financial records and ensure compliance with all financial regulations.",
      bullets: [
        "Real-time financial reporting and analysis",
        "Automated bookkeeping and reconciliation",
        "Tax compliance and filing automation",
        "Audit-ready financial documentation",
        "Cash flow monitoring and forecasting",
        "Expense management and approval workflows",
        "Financial risk assessment and mitigation"
      ]
    },
    {
      icon: TrendingUp,
      title: "Operational Excellence",
      description: "Optimize all business processes for maximum efficiency and profitability.",
      bullets: [
        "Process automation and digital transformation",
        "Performance metrics and KPI tracking",
        "Continuous improvement initiatives",
        "Quality control and assurance systems",
        "Vendor and supplier management",
        "Cost reduction and optimization strategies",
        "Scalable process frameworks"
      ]
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Business Assessment & Planning",
      description: "Comprehensive evaluation of your business needs, goals, and current state to develop a tailored service plan.",
      icon: Target,
      bullets: [
        "Business formation requirements analysis",
        "Legal structure and compliance assessment",
        "HR and payroll needs evaluation",
        "Financial management requirements review",
        "Technology infrastructure assessment",
        "Process maturity and gap analysis",
        "Resource and budget planning",
        "Timeline and milestone development"
      ]
    },
    {
      step: "02",
      title: "Service Setup & Implementation",
      description: "Set up all necessary systems, processes, and infrastructure to support your business operations.",
      icon: Settings,
      bullets: [
        "Business entity formation and registration",
        "Legal compliance and documentation setup",
        "HR systems and payroll processing setup",
        "Accounting and financial management systems",
        "Technology infrastructure deployment",
        "Process automation and workflow design",
        "Staff training and onboarding",
        "Quality control and monitoring systems"
      ]
    },
    {
      step: "03",
      title: "Operations & Management",
      description: "Ongoing management of all business processes including HR, payroll, accounting, and compliance.",
      icon: Zap,
      bullets: [
        "Daily payroll processing and tax compliance",
        "Employee management and HR administration",
        "Financial bookkeeping and reporting",
        "Process monitoring and optimization",
        "Compliance monitoring and updates",
        "Vendor and supplier management",
        "Performance tracking and analysis",
        "Continuous improvement initiatives"
      ]
    },
    {
      step: "04",
      title: "Optimization & Growth",
      description: "Continuous improvement and scaling of business processes to support growth and efficiency.",
      icon: TrendingUp,
      bullets: [
        "Performance analysis and reporting",
        "Process optimization and automation",
        "Technology upgrades and enhancements",
        "Compliance updates and regulatory changes",
        "Staff training and development",
        "Cost optimization and efficiency improvements",
        "Scalability planning and implementation",
        "Strategic planning and growth support"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-gradient-to-br from-white via-gray-50 to-[#BDF0E1]/30 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/consultitng.jpg"
            alt="Business Process Services Background"
            fill
            className="object-cover"
            style={{ objectPosition: 'center top' }}
            priority
          />
          {/* Dark Overlay - Very light overlay for maximum image visibility */}
          <div className="absolute inset-0 bg-black/15"></div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-[#16CA95]/10 to-[#BDF0E1]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-[#16CA95]/8 to-[#BDF0E1]/15 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#16CA95]/10 to-[#BDF0E1]/20 text-[#16CA95] px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg border border-[#16CA95]/20">
                <div className="w-2 h-2 bg-[#16CA95] rounded-full animate-pulse"></div>
                <span className="font-semibold">BUSINESS PROCESS SERVICES</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Streamline Your Business Operations with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#16CA95] to-[#14B885]">
                  Process Excellence
                </span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
                Transform your business operations through comprehensive process analysis, optimization, 
                and automation. We help you eliminate inefficiencies, reduce costs, and improve 
                productivity across your entire organization.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/contact'}
                  className="bg-gradient-to-r from-[#16CA95] to-[#14B885] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-[#16CA95]/25"
                >
                  Get Started Today
                </motion.button>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/contact'}
                  className="border-2 border-[#16CA95] text-[#16CA95] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-[#16CA95] hover:text-white transition-all duration-300"
                >
                  Schedule Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#373743] mb-6">
              Our Business Process Services
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Comprehensive solutions designed to optimize your business operations and drive sustainable growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative h-full"
              >
                <div className="relative bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#16CA95] mb-4 group-hover:text-[#14B885] transition-colors duration-300 flex-shrink-0">
                    {feature.title}
                  </h3>
                  
                  <p className="text-[#6B7280] leading-relaxed text-sm mb-4 flex-shrink-0">
                    {feature.description}
                  </p>
                  
                  <div className="flex-grow">
                    <ul className="space-y-2">
                      {feature.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start text-xs text-[#6B7280]">
                          <div className="w-1.5 h-1.5 bg-[#16CA95] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="leading-relaxed">{bullet}</span>
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

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-[#BDF0E1]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#373743] mb-6">
              Key Benefits
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Experience measurable improvements in efficiency, quality, and cost-effectiveness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative h-full"
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 text-center h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#16CA95] to-[#14B885] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#373743] mb-4 group-hover:text-[#16CA95] transition-colors duration-300 flex-shrink-0">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-[#6B7280] leading-relaxed text-sm mb-4 flex-shrink-0">
                    {benefit.description}
                  </p>
                  
                  <div className="flex-grow">
                    <ul className="space-y-2 text-left">
                      {benefit.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start text-xs text-[#6B7280]">
                          <div className="w-1.5 h-1.5 bg-[#16CA95] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="leading-relaxed">{bullet}</span>
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

      {/* Process Steps Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#373743] mb-6">
              Our Process Excellence Methodology
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              A proven approach to transforming your business processes for maximum efficiency and effectiveness.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative h-full"
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                    {step.step}
                  </div>
                  
                  <div className="w-16 h-16 bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-lg font-bold text-[#373743] mb-4 group-hover:text-[#16CA95] transition-colors duration-300 flex-shrink-0">
                    {step.title}
                  </h3>
                  
                  <p className="text-[#6B7280] leading-relaxed text-sm mb-4 flex-shrink-0">
                    {step.description}
                  </p>
                  
                  <div className="flex-grow">
                    <ul className="space-y-2">
                      {step.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start text-xs text-[#6B7280]">
                          <div className="w-1.5 h-1.5 bg-[#16CA95] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="leading-relaxed">{bullet}</span>
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

      {/* Comprehensive Business Services Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-[#BDF0E1]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#373743] mb-6">
              Complete Business Process Solutions
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              From company formation to payroll management - we handle every aspect of your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Company Formation & Legal",
                bullets: [
                  "Business entity selection and registration",
                  "Articles of incorporation preparation",
                  "Federal and state tax ID registration",
                  "Business license and permit acquisition",
                  "Trademark and IP protection",
                  "Corporate governance setup",
                  "Compliance monitoring and updates",
                  "Annual report filing",
                  "Business insurance setup",
                  "Contract template creation"
                ]
              },
              {
                title: "Human Resources Management",
                bullets: [
                  "Job posting and recruitment",
                  "Employee onboarding programs",
                  "Performance management systems",
                  "Employee handbook development",
                  "Benefits administration",
                  "Time and attendance tracking",
                  "Employee relations management",
                  "Training and development",
                  "Exit interview processes",
                  "HR compliance management"
                ]
              },
              {
                title: "Payroll & Tax Services",
                bullets: [
                  "Payroll processing and calculations",
                  "Tax withholding and remittance",
                  "Quarterly and annual tax filing",
                  "W-2 and 1099 preparation",
                  "State and local tax compliance",
                  "Payroll tax audits and corrections",
                  "Employee self-service portals",
                  "Direct deposit setup",
                  "Payroll reporting and analytics",
                  "Year-end tax preparation"
                ]
              },
              {
                title: "Accounting & Bookkeeping",
                bullets: [
                  "Chart of accounts setup",
                  "Daily transaction recording",
                  "Accounts payable management",
                  "Accounts receivable tracking",
                  "Bank reconciliation services",
                  "Financial statement preparation",
                  "Budget planning and analysis",
                  "Expense management systems",
                  "Financial forecasting",
                  "Audit preparation support"
                ]
              },
              {
                title: "Operations Management",
                bullets: [
                  "Process mapping and documentation",
                  "Workflow automation design",
                  "Inventory management systems",
                  "Quality control procedures",
                  "Vendor relationship management",
                  "Project management tools",
                  "Customer service optimization",
                  "Document management systems",
                  "Performance metrics tracking",
                  "Continuous improvement initiatives"
                ]
              },
              {
                title: "Technology & Automation",
                bullets: [
                  "Business software selection",
                  "System integration and setup",
                  "Data migration services",
                  "Cloud infrastructure setup",
                  "Security implementation",
                  "Backup and recovery systems",
                  "Mobile app development",
                  "API integration services",
                  "Performance monitoring",
                  "Technical support and maintenance"
                ]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="group relative h-full"
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                  <h3 className="text-lg font-bold text-[#373743] mb-4 group-hover:text-[#16CA95] transition-colors duration-300 flex-shrink-0">
                    {service.title}
                  </h3>
                  
                  <div className="flex-grow">
                    <ul className="space-y-2">
                      {service.bullets.map((bullet, bulletIndex) => (
                        <li key={bulletIndex} className="flex items-start text-xs text-[#6B7280]">
                          <div className="w-1.5 h-1.5 bg-[#16CA95] rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="leading-relaxed">{bullet}</span>
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#16CA95] to-[#14B885]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Optimize Your Business Processes?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our business process services can help you achieve 
              operational excellence and drive sustainable growth.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
                className="bg-white text-[#16CA95] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Process Optimization
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = '/contact'}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#16CA95] transition-all duration-300"
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
