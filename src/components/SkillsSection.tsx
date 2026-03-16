import { motion } from 'motion/react';
import { Code2, Database, Cloud, Brain, Cpu, Network, Shield, Zap } from 'lucide-react';

export function SkillsSection() {
  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      skills: ['PyTorch', 'TensorFlow', 'Python', 'CNNs', 'Transformers', 'LLMs', 'RAG', 'OpenAI API', 'Hugging Face', 'Model Evaluation']
    },
    {
      title: 'Full Stack & Web',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: ['React', 'Node.js', 'Express.js', 'Redux', 'Vite', 'TypeScript', 'JavaScript (ES6+)', 'HTML5/CSS3', 'RESTful APIs', 'Microservices']
    },
    {
      title: 'Database & Backend',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: ['MongoDB', 'SQL', 'PostgreSQL', 'Vector Databases', 'Auth0', 'Data Analysis', 'Pandas', 'NumPy']
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-orange-500 to-yellow-500',
      skills: ['AWS (EC2, Lambda)', 'Azure', 'Docker', 'CI/CD', 'Linux', 'Git', 'Microservices Architecture']
    },
    {
      title: 'Programming Languages',
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500',
      skills: ['JavaScript', 'TypeScript', 'Python', 'C++', 'C#.NET', 'Java', 'Bash Scripting', 'PowerShell']
    },
    {
      title: 'Networking & Security',
      icon: Network,
      color: 'from-red-500 to-pink-500',
      skills: ['TCP/IP', 'DNS/DHCP', 'VPN Configuration', 'Network Security', 'OAuth2', 'Cybersecurity']
    },
    {
      title: 'IT Operations',
      icon: Shield,
      color: 'from-teal-500 to-cyan-500',
      skills: ['Active Directory', 'Epic EMR', 'Office 365', 'System Administration', 'Hardware Repair', 'Troubleshooting']
    },
    {
      title: 'IoT & Automation',
      icon: Zap,
      color: 'from-yellow-500 to-orange-500',
      skills: ['IoT', 'C++', 'Cloud Integration', 'Real-Time Systems', 'Hardware Sensors', 'Edge Computing']
    }
  ];

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 px-2"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-purple-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Technical Expertise
            </span>
          </motion.h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto px-4">
            A comprehensive toolkit spanning AI/ML, full-stack development, and cloud infrastructure
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="group"
              >
                <motion.div
                  className="h-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all duration-300"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                >
                  <motion.div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}
                    whileHover={{
                      scale: 1.1,
                      rotate: 360
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>
                  
                  <h3 className="text-xl font-semibold text-white mb-4">{category.title}</h3>
                  
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        className="px-3 py-1.5 text-xs bg-white/5 text-gray-300 rounded-lg border border-white/10 hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-200"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        whileHover={{
                          scale: 1.05,
                          y: -2
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
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