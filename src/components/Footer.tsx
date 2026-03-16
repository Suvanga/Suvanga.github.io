import { motion } from 'motion/react';
import { FileText, GraduationCap, Linkedin, Github, Mail, Phone, Youtube, Facebook, Instagram, Twitter, Home, User, FolderOpen, Briefcase, Award } from 'lucide-react';

export function Footer() {
  const footerSections = [
    {
      title: 'Navigation',
      links: [
        { label: 'Home', icon: Home, href: '#' },
        { label: 'Skills', icon: User, href: '#skills' },
        { label: 'Projects', icon: FolderOpen, href: '#projects' },
        { label: 'Experience', icon: Briefcase, href: '#experience' },
        { label: 'Achievements', icon: Award, href: '#achievements' }
      ]
    },
    {
      title: 'Professional',
      links: [
        { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/Suvanga' },
        { label: 'Github', icon: Github, href: 'https://suvanga.github.io' },
        { label: 'Gmail', icon: Mail, href: 'mailto:suvangadhakal0@gmail.com' },
        { label: 'Phone', icon: Phone, href: 'tel:+14196990931' }
      ]
    },
    {
      title: 'Social Media',
      links: [
        { label: 'Youtube', icon: Youtube, href: 'https://www.youtube.com/@suvangadhz' },
        { label: 'Facebook', icon: Facebook, href: 'https://facebook.com/suvanga' },
        { label: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/suvanga_d/' },
        { label: 'Twitter', icon: Twitter, href: 'https://twitter.com/suvanga' }
      ]
    },
    {
      title: 'About',
      links: [
        { label: 'Education', icon: GraduationCap, href: '#contact' },
        { label: 'Contact', icon: Mail, href: '#contact' }
      ]
    }
  ];

  const socialIcons = [
    { icon: Github, href: 'https://suvanga.github.io', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/Suvanga', label: 'LinkedIn' },
    { icon: Facebook, href: 'https://facebook.com/suvanga', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/suvanga_d/', label: 'Instagram' },
    { icon: Twitter, href: 'https://twitter.com/suvanga', label: 'Twitter' }
  ];

  return (
    <footer className="relative mt-24 border-t border-white/10">
      {/* Animated gradient line */}
      <motion.div
        className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600"
        initial={{ width: '0%' }}
        whileInView={{ width: '100%' }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      />

      {/* Top section with links */}
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, sectionIndex) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: sectionIndex * 0.1 }}
              >
                <h3 className="font-semibold text-white text-lg mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => {
                    const Icon = link.icon;
                    return (
                      <li key={link.label}>
                        <motion.a
                          href={link.href}
                          className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors duration-200"
                          target={link.href.startsWith('http') ? '_blank' : undefined}
                          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          whileHover={{ x: 5 }}
                        >
                          <Icon className="w-4 h-4" />
                          <span>{link.label}</span>
                        </motion.a>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-white/10">
        <div className="px-6 py-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <motion.div
              className="text-white font-semibold text-xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Suvanga Dhakal
              </span>
            </motion.div>
            
            <motion.div
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © 2026 Suvanga Dhakal. All rights reserved
            </motion.div>
            
            <div className="flex items-center gap-3">
              {socialIcons.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center bg-white/5 hover:bg-purple-600/20 border border-white/10 hover:border-purple-500/50 rounded-lg text-gray-400 hover:text-purple-400 transition-all duration-300"
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{
                      scale: 1.1,
                      y: -5
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}