import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Globe } from 'lucide-react';

export function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'suvangadhakal0@gmail.com',
      href: 'mailto:suvangadhakal0@gmail.com',
      gradient: 'from-purple-600 to-pink-600'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '419-699-0931',
      href: 'tel:+14196990931',
      gradient: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'suvanga.github.io',
      href: 'https://suvanga.github.io',
      gradient: 'from-green-600 to-emerald-600'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/Suvanga',
      href: 'https://linkedin.com/in/Suvanga',
      gradient: 'from-orange-600 to-yellow-600'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
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
            <Send className="w-4 h-4 text-purple-300" />
            <span className="text-purple-200 text-sm font-semibold">Let's Connect</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 px-2 bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto px-4">
            Interested in collaborating on AI/ML projects or full-stack development? Let's talk!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all duration-300"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${contact.gradient} flex items-center justify-center`}
                      whileHover={{
                        scale: 1.2,
                        rotate: 360
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>
                    
                    <div>
                      <p className="text-gray-400 text-sm mb-1">{contact.label}</p>
                      <p className="text-white font-semibold text-lg">{contact.value}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.a>
            );
          })}
        </div>

        {/* Education info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <motion.div
            className="p-8 bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-3xl text-center backdrop-blur-sm"
            whileHover={{
              borderColor: "rgba(147,51,234,0.5)",
              boxShadow: "0 20px 40px rgba(147,51,234,0.2)"
            }}
          >
            <h3 className="text-3xl font-bold text-white mb-2">University of Toledo</h3>
            <p className="text-purple-300 text-lg font-semibold mb-4">Bachelor of Science in Computer Engineering</p>
            <div className="flex flex-wrap justify-center gap-4 text-gray-400">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Toledo, OH, USA
              </span>
              <span>•</span>
              <span>08/2021 - 05/2026</span>
            </div>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Relevant Coursework: Machine Learning, Artificial Intelligence, Data Structures, Algorithms, Computer Architecture
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}