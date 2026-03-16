import { useState, useEffect } from 'react';
import { MeteorIntro } from './components/MeteorIntro';
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
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Meteor intro animation */}
      {showIntro && <MeteorIntro onComplete={() => setShowIntro(false)} />}

      {/* Sticky navigation */}
      <StickyNav />

      {/* Enhanced space background with stars and galaxies */}
      <EnhancedSpaceBackground />
      
      {/* Shooting stars animation (5 seconds) */}
      <ShootingStars />
      
      {/* Main content */}
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
  );
}