import { motion } from 'motion/react';
import { ExternalLink, Github, Sparkles, DollarSign, TrendingUp, Brain, Bell, ShieldCheck } from 'lucide-react';
// @ts-ignore
import finalPresentation from '../assets/Final_presentation.pdf';
// @ts-ignore
import Final from '../assets/Final.pdf';
// @ts-ignore
import Working from '../assets/Working.png'

export function EnhancedProjectsSection() {
 const projects = [
  {
      title: 'Momentum',
      subtitle: 'AI-Powered Habit Intelligence',
      description: 'Intelligent habit tracking app with AI-driven insights and personalized coaching features',
      icon: TrendingUp,
      details: [
        'High-performance responsive UI built with React and Vite, pixel-perfect from Figma designs',
        '"Growth Coach" feature leveraging OpenAI API for personalized habit insights',
        'Interactive data visualization with completion rates and streak tracking',
        'Optimized component re-renders and local storage for seamless UX'
      ],
      tags: ['React', 'Vite', 'OpenAI API', 'Data Visualization', 'Local Storage'],
      link: 'https://github.com/Suvanga/Application_Every_3_Days/blob/main/BISWAS/Readme.md',
      demoLink: 'https://momentum.suvanga.com',
      secondaryActionText: 'Try it',
      gradient: 'from-purple-600 to-pink-600',
      glowColor: 'rgba(147, 51, 234, 0.4)'
    },  
    {
      title: 'Mediscan App',
      subtitle: 'AI-Powered X-Ray Diagnostics',
      description: 'Intelligent medical imaging platform designed to process and analyze X-ray scans using machine learning models.',
      icon: ShieldCheck, 
      details: [
        'Interactive frontend built to seamlessly upload and visualize medical imaging data',
        'Integration of machine learning models for automated X-ray scan analysis and insights',
        'Secure handling of image data with optimized processing pipelines',
        'Responsive UI ensuring accessibility across different clinical devices'
      ],
      tags: ['React', 'Machine Learning', 'Healthcare AI', 'Medical Imaging'],
      link: 'https://github.com/Suvanga/Mediscan',
      demoLink: 'https://xrayai.suvanga.com',
      secondaryActionText: 'Try it',
      gradient: 'from-teal-500 to-emerald-500',
      glowColor: 'rgba(20, 184, 166, 0.4)'
    },
    {
      title: 'MoneyMate',
      subtitle: 'FinTech Data Pipeline with AI',
      description: 'Splitwise-inspired expense sharing platform with OCR bill reading technology and AI-powered insights using OpenAI API. MongoDB was chosen for its flexible schema to handle complex relational financial data and dynamic expense splitting logic.',
      icon: DollarSign,
      details: [
        'Scalable Node.js/Express backend with complex MongoDB schemas optimized for relational financial data and transaction integrity',
        'OpenAI API integration for OCR receipt parsing and automated expense categorization',
        'OAuth2 authentication with Auth0 for secure user data and session management',
        'ACID compliance and edge-case transaction handling for financial integrity'
      ],
      tags: ['Node.js', 'MongoDB', 'Auth0', 'OpenAI API', 'OCR', 'Express.js'],
      link: 'https://github.com/Suvanga/moneymate',
      demoLink: finalPresentation, // Points to your PDF!
      secondaryActionText: 'View Final Project',
      gradient: 'from-green-600 to-emerald-600',
      glowColor: 'rgba(16, 185, 129, 0.4)'
    },
    {
      title: 'SilBells',
      subtitle: 'IoT Assistive Safety System',
      description: 'Real-time IoT safety system with hardware sensors and cloud integration for accessibility',
      icon: Bell,
      details: [
        'Real-time hardware sensor integration with sub-second vibration and light alerts',
        'Cloud backend with real-time communication protocols for instant alert delivery',
        'IoT edge device management ensuring consistent uptime and data transmission',
        'C++ firmware for embedded systems with minimal latency requirements'
      ],
      tags: ['IoT', 'C++', 'Cloud Integration', 'Real-Time Systems', 'Hardware'],
      link: 'https://github.com/Suvanga/Silent_Bell/blob/main/EECS%204020%20Final.pptx.pdf',
      demoLink: 'https://www.youtube.com/shorts/BbaNTW-YIa0',
      secondaryActionText: 'View Working Demo',
      gradient: 'from-orange-600 to-yellow-600',
      glowColor: 'rgba(249, 115, 22, 0.4)'
    },
    {
      title: 'DeepCLS',
      subtitle: 'Multimodal Cancer Detection AI',
      description: 'Advanced multimodal system integrating Computer Vision and LLMs for cancer diagnostics',
      icon: Brain,
      details: [
        'Hybrid AI pipeline combining CNN-based video classification with LLM clinical reasoning',
        'RAG (Retrieval-Augmented Generation) for medical database integration',
        'Multimodal pipeline with improved diagnostic consistency using vision-language models',
        'Trained on annotated cancer cell datasets with optimized classification accuracy'
      ],
      tags: ['Python', 'PyTorch', 'LLMs', 'Computer Vision', 'RAG', 'Healthcare AI'],
      demoLink: Working, 
      secondaryActionText: 'View Workflow',
      gradient: 'from-blue-600 to-cyan-600',
      glowColor: 'rgba(59, 130, 246, 0.4)'
    }
    
    
  ];

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              left: `${20 + i * 20}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full mb-6"
            animate={{
              boxShadow: [
                "0 0 20px rgba(147,51,234,0.2)",
                "0 0 40px rgba(147,51,234,0.4)",
                "0 0 20px rgba(147,51,234,0.2)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4 text-purple-300" />
            <span className="text-purple-200 text-sm font-semibold">Featured Work</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 px-2 leading-[1.3] pb-2">
            <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Projects & Applications
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto px-4">
            From AI-powered healthcare diagnostics to fintech platforms, showcasing full-stack and ML expertise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group relative"
              >
                <motion.div
                  className="h-full p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden"
                  whileHover={{
                    y: -10,
                    borderColor: "rgba(147,51,234,0.5)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Gradient top accent */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${project.gradient}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                  />

                  {/* Animated glow effect */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative">
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center mb-6`}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -10, 10, -10, 0]
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-purple-300 text-sm font-semibold mb-4">{project.subtitle}</p>
                    
                    {/* Description */}
                    <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

                    {/* Details */}
                    <ul className="space-y-3 mb-6">
                      {project.details.map((detail, i) => (
                        <motion.li
                          key={i}
                          className="flex gap-2 text-sm text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + i * 0.1 }}
                        >
                          <span className="text-purple-400 mt-1">•</span>
                          <span>{detail}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          className="px-3 py-1.5 text-xs bg-purple-500/20 text-purple-300 rounded-lg border border-purple-500/30"
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.15 + tagIndex * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-3">
                      {/* Only render Github button if project.link exists */}
                      {project.link && (
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} text-white rounded-xl font-semibold`}
                          whileHover={{
                            scale: 1.05,
                            boxShadow: `0 10px 30px ${project.glowColor}`
                          }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github className="w-4 h-4" />
                          View Code
                        </motion.a>
                      )}
                      <motion.a
                        href={project.demoLink || project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 text-gray-300 rounded-xl font-semibold"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        {project.secondaryActionText}
                      </motion.a>
                    </div>                 
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}