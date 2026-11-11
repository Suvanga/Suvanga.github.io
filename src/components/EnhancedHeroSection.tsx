import { motion } from 'motion/react';
import { Sparkles, Brain, Code, Database, Mail, Github, Linkedin, ChevronDown, FileDown } from 'lucide-react';

export function EnhancedHeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 relative overflow-hidden">
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Floating particles with 3D effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-gradient-to-r from-purple-600/30 to-blue-600/30 border border-purple-500/40 rounded-full mb-8 backdrop-blur-sm max-w-full"
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(147,51,234,0.4)" }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(147,51,234,0.2)",
                "0 0 40px rgba(147,51,234,0.4)",
                "0 0 20px rgba(147,51,234,0.2)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-300 flex-shrink-0" />
            <span className="text-sm sm:text-base text-purple-200 font-semibold text-center">AI/ML Engineer & Full Stack Developer</span>
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-blue-300 flex-shrink-0" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-bold mb-8 px-2 leading-[1.3]">
            <motion.span
              className="inline-block bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent pb-3"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% auto"
              }}
            >
              Suvanga Dhakal
            </motion.span>
          </h1>
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-6 max-w-4xl mx-auto font-light px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Building intelligent systems that bridge
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 font-semibold"
            animate={{
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            {" "}AI innovation
          </motion.span>
          {" "}and
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-semibold"
            animate={{
              opacity: [1, 0.7, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: 1
            }}
          >
            {" "}full-stack excellence
          </motion.span>
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-3 justify-center mb-10 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { icon: Brain, text: 'Deep Learning', color: 'from-purple-500 to-pink-500' },
            { icon: Code, text: 'Full Stack', color: 'from-blue-500 to-cyan-500' },
            { icon: Database, text: 'Cloud & DevOps', color: 'from-green-500 to-emerald-500' },
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.text}
                className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 bg-gradient-to-r ${item.color} bg-opacity-10 border border-white/20 rounded-xl backdrop-blur-sm`}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" />
                <span className="text-sm sm:text-base text-white font-medium whitespace-nowrap">{item.text}</span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-8 px-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <motion.a
            href="/resume.pdf"
            download="Suvanga_Dhakal_Resume.pdf"
            className="px-6 sm:px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-full text-base sm:text-lg flex items-center justify-center gap-3 shadow-lg"
            whileHover={{
              scale: 1.08,
              boxShadow: "0 0 50px rgba(16,185,129,0.8)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <FileDown className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
            <span className="whitespace-nowrap">Download Resume (PDF)</span>
          </motion.a>
          <motion.a
            href="#projects"
            className="px-6 sm:px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full text-base sm:text-lg"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 40px rgba(147,51,234,0.6)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Projects
          </motion.a>
          <motion.a
            href="#contact"
            className="px-6 sm:px-8 py-4 border-2 border-purple-500/50 text-purple-200 font-semibold rounded-full backdrop-blur-sm text-base sm:text-lg"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(147,51,234,0.1)",
              borderColor: "rgba(147,51,234,0.8)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.a>
        </motion.div>

        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          {[
            { icon: Mail, href: 'mailto:suvangadhakal0@gmail.com', label: 'Email' },
            { icon: Github, href: 'https://suvanga.github.io', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/Suvanga', label: 'LinkedIn' },
          ].map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-white/5 hover:bg-purple-600/20 border border-white/20 rounded-xl backdrop-blur-sm"
                whileHover={{
                  scale: 1.2,
                  rotate: 360,
                  borderColor: "rgba(147,51,234,0.8)"
                }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
                aria-label={social.label}
              >
                <Icon className="w-5 h-5 text-gray-300" />
              </motion.a>
            );
          })}
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2 },
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-purple-300 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center pt-2">
            <motion.div
              className="w-2 h-2 bg-purple-400 rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}