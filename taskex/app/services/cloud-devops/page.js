"use client";

import { motion } from "framer-motion";
import { 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  Cloud,
  GitBranch,
  Code,
  Lock,
  Activity,
  Server,
  Zap,
  Sparkles,
  Target,
  Globe
} from "lucide-react";
import Image from "next/image";

export default function CloudDevOps() {
  const features = [
    {
      icon: Cloud,
      title: "Cloud Migration",
      description: "Seamless migration to cloud platforms with minimal downtime and maximum cost optimization."
    },
    {
      icon: GitBranch,
      title: "CI/CD Pipeline Setup",
      description: "Automated build, test, and deployment pipelines that accelerate development cycles and improve quality."
    },
    {
      icon: Code,
      title: "Infrastructure as Code",
      description: "Manage and version control your infrastructure using modern IaC tools and best practices."
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      description: "Comprehensive security measures and compliance frameworks to protect your cloud infrastructure."
    },
    {
      icon: Activity,
      title: "Monitoring & Observability",
      description: "Real-time monitoring, logging, and alerting systems for proactive issue detection and resolution."
    },
    {
      icon: Server,
      title: "Performance Optimization",
      description: "Optimize cloud resources and application performance for maximum efficiency and cost savings."
    }
  ];

  const benefits = [
    "Scalable and flexible infrastructure",
    "Faster deployment and release cycles",
    "Improved security and compliance",
    "Cost optimization and resource management",
    "Enhanced reliability and availability",
    "Automated operations and reduced manual work"
  ];

  const process = [
    {
      step: "01",
      title: "Cloud Assessment",
      description: "Evaluate current infrastructure and identify cloud migration opportunities with cost-benefit analysis."
    },
    {
      step: "02",
      title: "Architecture Design",
      description: "Design scalable, secure cloud architecture that meets your business requirements and performance needs."
    },
    {
      step: "03",
      title: "Migration Planning",
      description: "Develop comprehensive migration strategy with detailed timelines, risk mitigation, and rollback plans."
    },
    {
      step: "04",
      title: "Implementation",
      description: "Execute migration with automated tools and continuous monitoring to ensure zero data loss."
    },
    {
      step: "05",
      title: "Optimization",
      description: "Continuous optimization of cloud resources, performance tuning, and cost management."
    }
  ];

  const cloudPlatforms = [
    "Amazon Web Services (AWS)",
    "Microsoft Azure",
    "Google Cloud Platform (GCP)",
    "Multi-cloud Solutions",
    "Hybrid Cloud Architecture",
    "Private Cloud Infrastructure"
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
        <div className="absolute inset-0">
          <Image
            src="/images/cloudcomputing.jpg"
            alt="Cloud Computing Background"
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
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#16CA95]/10 to-[#BDF0E1]/20 text-[#16CA95] px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-lg border border-[#16CA95]/20"
              >
                <Cloud className="w-4 h-4 text-[#16CA95]" />
                <span className="font-semibold">CLOUD & DEVOPS</span>
              </motion.div>
              
              {/* Enhanced Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl lg:text-6xl font-bold text-white mb-6"
              >
                Cloud & DevOps
              </motion.h1>
              
              {/* Enhanced Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl lg:text-2xl text-white/90 mb-8 font-medium"
              >
                Accelerate your digital transformation with modern cloud infrastructure and DevOps practices. We help you build, deploy, and scale applications faster with automated CI/CD pipelines and cloud-native solutions.
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
              Comprehensive Cloud & DevOps Services
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              Our end-to-end cloud and DevOps solutions cover every aspect of modern infrastructure, 
              from initial cloud migration to ongoing optimization and support.
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
                Transform Your Infrastructure with Cloud & DevOps
              </h2>
              <p className="text-lg text-[#6B7280] mb-8">
                Our cloud and DevOps solutions deliver measurable business outcomes that 
                drive agility, efficiency, and competitive advantage. Experience the power 
                of modern infrastructure management.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#16CA95] mb-2">10x</div>
                  <div className="text-[#6B7280]">Faster Deployments</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#16CA95] mb-2">99.9%</div>
                  <div className="text-[#6B7280]">Uptime Guarantee</div>
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
              Our Proven Cloud & DevOps Process
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              A structured, proven approach that ensures successful cloud migration and DevOps 
              implementation with maximum business value and minimal disruption.
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

      {/* Cloud Platforms Section */}
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
              Cloud Platform Expertise
            </h2>
            <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
              We have deep expertise across all major cloud platforms and can help you choose 
              the right solution for your business needs and budget requirements.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cloudPlatforms.map((platform, index) => (
              <motion.div
                key={platform}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-[#16CA95] rounded-full"></div>
                  <span className="font-semibold text-[#373743]">{platform}</span>
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
              Ready to Scale Your Infrastructure?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our cloud and DevOps expertise can help your organization 
              achieve scalable, secure, and efficient infrastructure for the digital age.
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
  );
}
