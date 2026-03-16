import { motion } from 'motion/react';
import { Trophy, Award, Users, Shield, Rocket, Star } from 'lucide-react';

export function AchievementsSection() {
  const achievements = [
    {
      title: 'President',
      organization: 'Nepal Student Organization',
      description: '200+ members directed initiatives and managed operations',
      period: '08/2023 - 08/2024',
      icon: Users,
      gradient: 'from-purple-600 to-pink-600',
      stats: '200+ Members'
    },
    {
      title: 'Vice-President',
      organization: 'Cybersecurity Club',
      description: 'Led programming workshops and team lead for Cyber-Force Competition (Chicago)',
      period: 'Ongoing',
      icon: Shield,
      gradient: 'from-blue-600 to-cyan-600',
      stats: 'Competition Leader'
    },
    {
      title: 'Academic Excellence',
      organization: 'Intra-Academic Scholarship',
      description: 'Recognized for academic excellence and leadership potential with 90% scholarship',
      period: 'Ongoing',
      icon: Award,
      gradient: 'from-green-600 to-emerald-600',
      stats: '90% Scholarship'
    },
    {
      title: 'International Rocket Scholarship',
      organization: 'Excellence Recognition',
      description: 'Awarded $8,500 for exceptional managerial abilities and excellence in school',
      period: 'Awarded',
      icon: Rocket,
      gradient: 'from-orange-600 to-yellow-600',
      stats: '$8,500'
    }
  ];

  const securityExperience = {
    title: 'Network Defense Team Lead',
    competition: 'Cyber-Force Competition (Chicago)',
    achievements: [
      'Infrastructure Hardening: Led the university\'s "Blue Team" defense strategy, securing critical energy infrastructure simulations against active red-team cyberattacks and vulnerability exploits',
      'Incident Response: Coordinated real-time incident response protocols to mitigate system breaches, analyzing network traffic logs to identify and block malicious IP vectors'
    ]
  };

  return (
    <section id="achievements" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-yellow-600/20 rounded-full blur-3xl"
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
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full mb-6"
            animate={{
              boxShadow: [
                "0 0 20px rgba(234,179,8,0.2)",
                "0 0 40px rgba(234,179,8,0.4)",
                "0 0 20px rgba(234,179,8,0.2)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Trophy className="w-4 h-4 text-yellow-300" />
            <span className="text-yellow-200 text-sm font-semibold">Recognition & Leadership</span>
          </motion.div>

          <h2 className="text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-orange-300 to-yellow-300 bg-clip-text text-transparent">
            Achievements
          </h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Leadership roles, academic excellence, and competitive achievements
          </p>
        </motion.div>

        {/* Achievement cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <motion.div
                  className="h-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-yellow-500/50 transition-all duration-300 relative overflow-hidden"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                >
                  {/* Animated gradient background */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  {/* Content */}
                  <div className="relative">
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${achievement.gradient} flex items-center justify-center mb-4`}
                      whileHover={{
                        scale: 1.2,
                        rotate: [0, -10, 10, -10, 0]
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                    <p className="text-purple-300 text-sm font-semibold mb-3">{achievement.organization}</p>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{achievement.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{achievement.period}</span>
                      <motion.span
                        className={`px-3 py-1 text-xs bg-gradient-to-r ${achievement.gradient} text-white rounded-full font-semibold`}
                        whileHover={{ scale: 1.1 }}
                      >
                        {achievement.stats}
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Security & Competition Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <motion.div
            className="p-8 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-yellow-500/10 border border-red-500/20 rounded-3xl backdrop-blur-sm"
            whileHover={{
              borderColor: "rgba(239,68,68,0.5)",
              boxShadow: "0 20px 40px rgba(239,68,68,0.2)"
            }}
          >
            <div className="flex items-start gap-6">
              <motion.div
                className="w-20 h-20 rounded-2xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center flex-shrink-0"
                whileHover={{
                  scale: 1.1,
                  rotate: 360
                }}
                transition={{ duration: 0.6 }}
              >
                <Shield className="w-10 h-10 text-white" />
              </motion.div>

              <div className="flex-1">
                <h3 className="text-3xl font-bold text-white mb-2">{securityExperience.title}</h3>
                <p className="text-orange-300 text-lg font-semibold mb-6">{securityExperience.competition}</p>
                
                <ul className="space-y-4">
                  {securityExperience.achievements.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex gap-3 text-gray-400"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                    >
                      <motion.span
                        className="text-orange-400 mt-1.5 flex-shrink-0"
                        whileHover={{ scale: 1.5, rotate: 180 }}
                      >
                        ▹
                      </motion.span>
                      <span className="leading-relaxed">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}