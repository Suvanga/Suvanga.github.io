import { motion } from 'motion/react';
import { Briefcase, Building2, GraduationCap, Calendar, MapPin, Sparkles } from 'lucide-react';

export function ExperienceSection() {
  const experiences = [
    {
      company: 'Whirlpool',
      role: 'Software Engineer Intern',
      location: 'Marion, OH, USA',
      period: '05/2024 - 09/2024',
      type: 'Recent',
      achievements: [
        'Enterprise Automation: Engineered a robust data pipeline using JavaScript to automate manufacturing time-series data processing, increasing accuracy by 65% and eliminating manual entry errors',
        'Data Visualization: Developed a real-time production dashboard to visualize idle times and labor metrics, enabling leadership to identify bottlenecks and optimize assembly line throughput',
        'Refactored legacy parsing databases to implement dynamic job identifiers and modular logic, reducing runtime errors and improving system maintainability by 300% against data variability'
      ],
      gradient: 'from-blue-600 to-cyan-600',
      icon: Building2
    },
    {
      company: 'Whirlpool',
      role: 'Software Engineer Intern',
      location: 'Marion, OH, USA',
      period: '12/2022 - 05/2023',
      type: 'Previous',
      achievements: [
        'Performance Engineering: Optimized a critical internal web application through algorithmic refinement and asset compression, achieving a 23x reduction in file size and a 9x boost in load speeds',
        'Tool Development: Developed "Fixture Finder," an internal search tool using DOM manipulation that reduced part retrieval time by 30% and directly improved assembly efficiency',
        'Cost Engineering: Analyzed production data to optimize fixture weights, resulting in $35,000+ in immediate cost savings and a 67% long-term cost avoidance for the plant'
      ],
      gradient: 'from-purple-600 to-pink-600',
      icon: Building2
    },
    {
      company: 'University of Toledo',
      role: 'IT Technician',
      location: 'Toledo, OH, USA',
      period: '01/2022 - Current',
      type: 'Current',
      achievements: [
        'System Administration: Manage the hardware and software ecosystem for 500+ users, resolving complex technical tickets with a 95% success rate while reducing average ticket resolution time by 35%',
        'Enterprise Support: Maintain critical availability for the Epic EMR system, ensuring 99.9% uptime for medical staff and supporting high-stakes clinical operations',
        'Technology Implementation: Spearheaded the deployment of emerging technology updates across campus facilities, enhancing overall IT support efficiency by 20% through proactive maintenance',
        'Mentorship: Trained and onboarded new student technicians on hospital IT protocols, ticketing workflows, and hardware troubleshooting standards'
      ],
      gradient: 'from-green-600 to-emerald-600',
      icon: GraduationCap
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full mb-6"
            animate={{
              boxShadow: [
                "0 0 20px rgba(59,130,246,0.2)",
                "0 0 40px rgba(59,130,246,0.4)",
                "0 0 20px rgba(59,130,246,0.2)",
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Briefcase className="w-4 h-4 text-blue-300" />
            <span className="text-blue-200 text-sm font-semibold">Professional Journey</span>
          </motion.div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 px-2 leading-[1.3] pb-2">
            <span className="bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-300 bg-clip-text text-transparent">
              Work Experience
            </span>
          </h2>
          <p className="text-gray-400 text-lg sm:text-xl max-w-2xl mx-auto px-4">
            Delivering impactful solutions across manufacturing, healthcare IT, and enterprise systems
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <motion.div
                key={`${exp.company}-${exp.period}`}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <motion.div
                  className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl hover:border-blue-500/50 transition-all duration-300"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
                  }}
                >
                  {/* Gradient accent */}
                  <motion.div
                    className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${exp.gradient} rounded-t-3xl`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                  />

                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Icon and badge */}
                    <div className="flex flex-col items-center md:items-start">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${exp.gradient} flex items-center justify-center mb-3`}
                        whileHover={{
                          scale: 1.1,
                          rotate: 360
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      {exp.type === 'Current' && (
                        <motion.span
                          className="px-3 py-1 text-xs bg-green-500/20 text-green-300 rounded-full border border-green-500/30"
                          animate={{
                            boxShadow: [
                              "0 0 10px rgba(34,197,94,0.2)",
                              "0 0 20px rgba(34,197,94,0.4)",
                              "0 0 10px rgba(34,197,94,0.2)",
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Current
                        </motion.span>
                      )}
                      {exp.type === 'Recent' && (
                        <span className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30">
                          Recent
                        </span>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <h3 className="text-3xl font-bold text-white mb-2">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <span className="text-xl text-purple-300 font-semibold">{exp.company}</span>
                        <span className="flex items-center gap-1 text-gray-300">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </span>
                        <span className="flex items-center gap-1 text-gray-300">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </span>
                      </div>

                      {/* Achievements */}
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            className="flex gap-3 text-gray-300"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 + i * 0.1 }}
                          >
                            <motion.span
                              className="text-blue-400 mt-1.5 flex-shrink-0"
                              whileHover={{ scale: 1.5, rotate: 180 }}
                            >
                              ▹
                            </motion.span>
                            <span className="leading-relaxed">{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
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