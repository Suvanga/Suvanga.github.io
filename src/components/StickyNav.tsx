import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { useState } from 'react';
import { Home, Briefcase, Code, Award, Mail, FileDown, Menu, X } from 'lucide-react';

export function StickyNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Show nav after scrolling down 200px
    setIsVisible(latest > 200);
  });

  const navItems = [
    { icon: Home, label: 'Home', href: '#' },
    { icon: Code, label: 'Projects', href: '#projects' },
    { icon: Briefcase, label: 'Experience', href: '#experience' },
    { icon: Award, label: 'Achievements', href: '#achievements' },
    { icon: Mail, label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4 bg-black/80 backdrop-blur-lg border-b border-white/10 hidden md:block"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo/Name */}
          <motion.a
            href="#"
            className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Suvanga Dhakal
          </motion.a>

          {/* Nav Links */}
          <div className="flex items-center gap-1">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: isVisible ? index * 0.05 : 0 }}
                  whileHover={{ y: -2 }}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.a>
              );
            })}

            {/* Resume Download Button */}
            <motion.a
              href="/resume.pdf"
              download="Suvanga_Dhakal_Resume.pdf"
              className="ml-2 flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold text-sm"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(16,185,129,0.5)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <FileDown className="w-4 h-4" />
              Resume
            </motion.a>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100, 
          opacity: isVisible ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed top-0 left-0 right-0 z-50 px-4 py-3 bg-black/80 backdrop-blur-lg border-b border-white/10 md:hidden"
      >
        <div className="flex items-center justify-between">
          <motion.a
            href="#"
            className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Suvanga Dhakal
          </motion.a>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-gray-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ 
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </a>
              );
            })}

            <a
              href="/resume.pdf"
              download="Suvanga_Dhakal_Resume.pdf"
              onClick={() => setIsMobileMenuOpen(false)}
              className="flex items-center gap-3 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold"
            >
              <FileDown className="w-5 h-5" />
              Download Resume (PDF)
            </a>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
}
