import { MotionConfig } from 'motion/react';
import { StickyNav } from './components/StickyNav';
import { EnhancedSpaceBackground } from './components/EnhancedSpaceBackground';
import { ShootingStars } from './components/ShootingStars';
import { EnhancedHeroSection } from './components/EnhancedHeroSection';
import { SkillsSection } from './components/SkillsSection';
import { EnhancedProjectsSection } from './components/EnhancedProjectsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { AchievementsSection } from './components/AchievementsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative min-h-screen overflow-x-hidden">
        <StickyNav />
        <EnhancedSpaceBackground />
        <ShootingStars />
        <div className="relative z-10">
          <EnhancedHeroSection />
          <SkillsSection />
          <EnhancedProjectsSection />
          <ExperienceSection />
          <AchievementsSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </MotionConfig>
  );
}
