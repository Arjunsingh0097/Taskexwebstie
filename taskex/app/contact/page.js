"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2,
  MessageSquare,
  Calendar,
  Users,
  Globe,
  Building,
  Sparkles,
  ArrowRight,
  Award
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    projectDescription: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus({ type: 'success', message: result.message });
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          company: '',
          projectDescription: ''
        });
      } else {
        setSubmitStatus({ type: 'error', message: result.error || 'Failed to send message' });
      }
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Network error. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+91 9212715691"],
      color: "from-[#16CA95] to-[#BDF0E1]"
    },
    {
      icon: Mail,
      title: "Email",
      details: ["manager@taskex.in"],
      color: "from-[#16CA95] to-[#BDF0E1]"
    },
    {
      icon: Building,
      title: "Office Address",
      details: ["JMD Megapolis, Office No. 246, 2nd Floor", "Sohna Road, Sector 48, Gurugram"],
      color: "from-[#16CA95] to-[#BDF0E1]"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM", "Sun: Closed"],
      color: "from-[#16CA95] to-[#BDF0E1]"
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

        {/* Sparkles Behind Contact Form */}
        <motion.div
          animate={{
            rotate: [0, -360],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-[500px] right-1/4 w-40 h-40 z-10"
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
          className="absolute top-48 right-1/3 w-3 h-3 bg-[#16CA95] rounded-full shadow-2xl shadow-[#16CA95]/80 z-10"
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
      <section className="relative overflow-hidden bg-gradient-to-br from-[#F8F9FA] to-[#BDF0E1]/20 py-20 lg:py-32">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-[#16CA95]/20 to-[#BDF0E1]/30 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-[#16CA95]/20 to-[#BDF0E1]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-gradient-to-br from-[#16CA95]/15 to-[#BDF0E1]/25 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-[#BDF0E1] text-[#373743] px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 text-[#16CA95]" />
              Get Free Consultation
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-[#373743] mb-6">
              Get in <span className="text-[#16CA95]">Touch</span>
            </h1>
            <p className="text-xl lg:text-2xl text-[#6B7280] mb-8">
              Ready to transform your business? Let&apos;s discuss how our technology 
              solutions can help you achieve your goals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-[#6B7280]">
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-[#16CA95]" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#16CA95]" />
                <span>+91 9212715691</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#16CA95]" />
                <span>manager@taskex.in</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-[#16CA95]/5 to-[#BDF0E1]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-32 h-32 bg-gradient-to-br from-[#16CA95]/5 to-[#BDF0E1]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FA] to-[#BDF0E1]/20 rounded-3xl -z-10 transform rotate-1"></div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-[#373743] mb-8">
                  Start Your Project
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Status Messages */}
                  {submitStatus && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`p-4 rounded-xl ${
                        submitStatus.type === 'success' 
                          ? 'bg-green-100 border border-green-200 text-green-800' 
                          : 'bg-red-100 border border-red-200 text-red-800'
                      }`}
                    >
                      {submitStatus.message}
                    </motion.div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#373743] font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#16CA95] focus:outline-none transition-colors"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-[#373743] font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#16CA95] focus:outline-none transition-colors"
                        placeholder="Enter your last name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-[#373743] font-medium mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#16CA95] focus:outline-none transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-[#373743] font-medium mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#16CA95] focus:outline-none transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[#373743] font-medium mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#16CA95] focus:outline-none transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>

                  <div>
                    <label className="block text-[#373743] font-medium mb-2">
                      Project Description *
                    </label>
                    <textarea
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleInputChange}
                      rows={4}
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-[#16CA95] focus:outline-none transition-colors resize-none"
                      placeholder="Tell us about your project, goals, and requirements..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-4 rounded-xl font-semibold text-lg transition-colors shadow-lg hover:shadow-xl flex items-center justify-center gap-2 ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-[#16CA95] hover:bg-[#14B885] text-white'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </motion.button>

                  <p className="text-sm text-[#6B7280] text-center">
                    By submitting this form, you agree to our privacy policy and consent 
                    to be contacted about our services.
                  </p>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Decorative background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F8F9FA] to-[#DBEAFE]/20 rounded-3xl -z-10 transform -rotate-1"></div>
              
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                <h2 className="text-3xl font-bold text-[#373743] mb-8">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="flex items-start gap-4"
                    >
                      <div className={`w-12 h-12 bg-gradient-to-br ${info.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                        <info.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#373743] mb-2">
                          {info.title}
                        </h3>
                        <div className="space-y-1">
                          {info.details.map((detail, idx) => (
                            <p key={idx} className="text-[#6B7280]">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Why Choose Us */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-12 bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] rounded-2xl p-8 text-white relative overflow-hidden"
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                  
                  <h3 className="text-2xl font-bold mb-4 relative z-10">Why Choose Taskex?</h3>
                  <div className="space-y-3 relative z-10">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Free initial consultation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Expert team with 20+ years experience</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Proven track record of success</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5" />
                      <span>Ongoing support and maintenance</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Break Section */}
      <section className="py-16 bg-gradient-to-br from-[#F8F9FA] to-[#BDF0E1]/20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-1/4 w-32 h-32 bg-gradient-to-br from-[#16CA95]/20 to-[#BDF0E1]/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-1/4 w-28 h-28 bg-gradient-to-br from-[#16CA95]/20 to-[#BDF0E1]/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#373743] mb-2">Expert Team</h3>
              <p className="text-[#6B7280]">500+ certified professionals</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#373743] mb-2">Global Reach</h3>
              <p className="text-[#6B7280]">25+ countries served</p>
            </div>
            
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-[#16CA95] to-[#BDF0E1] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#373743] mb-2">Proven Results</h3>
              <p className="text-[#6B7280]">98% success rate</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-36 h-36 bg-gradient-to-br from-[#16CA95]/5 to-[#BDF0E1]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-28 h-28 bg-gradient-to-br from-[#16CA95]/5 to-[#BDF0E1]/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-[#373743] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-[#6B7280] max-w-2xl mx-auto">
              Get answers to common questions about our services and process.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "What is your typical project timeline?",
                answer: "Project timelines vary based on complexity and scope. Small projects typically take 4-8 weeks, while large enterprise transformations can take 6-18 months. We'll provide a detailed timeline during our initial consultation."
              },
              {
                question: "Do you provide ongoing support after project completion?",
                answer: "Yes, we offer comprehensive post-launch support including maintenance, updates, training, and optimization. We believe in building long-term partnerships with our clients."
              },
              {
                question: "What industries do you specialize in?",
                answer: "We have experience across multiple industries including financial services, healthcare, manufacturing, retail, and technology. Our solutions are tailored to each industry's specific requirements and compliance needs."
              },
              {
                question: "How do you ensure project quality and success?",
                answer: "We follow proven methodologies including agile development, continuous testing, stakeholder feedback loops, and regular progress reviews. Our 98% success rate speaks to our commitment to quality."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F8F9FA] rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-all duration-200"
              >
                <h3 className="text-lg font-semibold text-[#373743] mb-3">
                  {faq.question}
                </h3>
                <p className="text-[#6B7280]">
                  {faq.answer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#16CA95] to-[#16CA95] relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project requirements and explore how our expertise 
              can help you achieve your business objectives.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#16CA95] px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg flex items-center gap-2"
              >
                Schedule a Call
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              
                              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-[#16CA95] transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
