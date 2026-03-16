import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface MeteorIntroProps {
  onComplete: () => void;
}

export function MeteorIntro({ onComplete }: MeteorIntroProps) {
  const [showExplosion, setShowExplosion] = useState(false);

  const handleSkip = () => {
    onComplete();
  };

  useEffect(() => {
    // Trigger explosion after meteor hits (faster timing)
    const explosionTimer = setTimeout(() => {
      setShowExplosion(true);
    }, 1200); // Reduced from 1800ms

    // Complete intro after explosion (faster timing)
    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2200); // Reduced from 3000ms

    return () => {
      clearTimeout(explosionTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: showExplosion ? 0 : 1 }}
      transition={{ duration: 0.8, delay: showExplosion ? 0.6 : 0 }} // Faster fade
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950 to-black" />

      {/* Stars in background */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Skip button */}
      <motion.button
        onClick={handleSkip}
        className="absolute top-8 right-8 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm border border-white/20 transition-all duration-300 hover:scale-105 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        whileHover={{ boxShadow: '0 0 20px rgba(255, 255, 255, 0.3)' }}
      >
        Skip Intro →
      </motion.button>

      {/* Meteor */}
      <motion.div
        className="absolute"
        initial={{
          left: '100%',
          top: '-10%',
        }}
        animate={{
          left: '50%',
          top: '50%',
          rotate: -45,
        }}
        transition={{
          duration: 1.2, // Faster from 1.8
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {/* Meteor body */}
        <div className="relative">
          <motion.div
            className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500"
            animate={{
              boxShadow: [
                '0 0 40px 10px rgba(251, 146, 60, 0.8)',
                '0 0 60px 20px rgba(239, 68, 68, 1)',
                '0 0 40px 10px rgba(251, 146, 60, 0.8)',
              ],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
            }}
          />
          
          {/* Meteor trail */}
          <motion.div
            className="absolute top-1/2 left-full h-1"
            style={{
              background: 'linear-gradient(to right, rgba(251, 146, 60, 1), rgba(251, 146, 60, 0))',
              transformOrigin: 'left center',
            }}
            animate={{
              width: ['200px', '400px', '200px'],
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
            }}
          />
          
          {/* Fire particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-orange-400"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                x: [0, Math.random() * 100 - 50],
                y: [0, Math.random() * 100 - 50],
                opacity: [1, 0],
                scale: [1, 0],
              }}
              transition={{
                duration: Math.random() * 0.5 + 0.3,
                repeat: Infinity,
                delay: Math.random() * 0.3,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Explosion effect */}
      {showExplosion && (
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Flash */}
          <motion.div
            className="absolute inset-0 bg-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.4 }} // Faster from 0.5
          />

          {/* Explosion rings */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border-4"
              style={{
                borderColor: i % 2 === 0 ? '#f97316' : '#eab308',
              }}
              initial={{
                width: 0,
                height: 0,
                opacity: 1,
              }}
              animate={{
                width: 1000 + i * 200,
                height: 1000 + i * 200,
                opacity: 0,
              }}
              transition={{
                duration: 1.2, // Faster from 1.5
                delay: i * 0.08, // Faster from 0.1
                ease: 'easeOut',
              }}
            />
          ))}

          {/* Explosion particles */}
          {[...Array(50)].map((_, i) => {
            const angle = (Math.PI * 2 * i) / 50;
            const distance = 300;
            return (
              <motion.div
                key={i}
                className="absolute w-3 h-3 rounded-full"
                style={{
                  background: `linear-gradient(135deg, ${
                    i % 3 === 0 ? '#f97316' : i % 3 === 1 ? '#eab308' : '#ef4444'
                  }, transparent)`,
                }}
                initial={{
                  x: 0,
                  y: 0,
                  scale: 1,
                  opacity: 1,
                }}
                animate={{
                  x: Math.cos(angle) * distance * (1 + Math.random()),
                  y: Math.sin(angle) * distance * (1 + Math.random()),
                  scale: [1, 2, 0],
                  opacity: [1, 0.8, 0],
                }}
                transition={{
                  duration: 1, // Faster from 1.2
                  ease: 'easeOut',
                }}
              />
            );
          })}

          {/* Star burst particles */}
          {[...Array(30)].map((_, i) => {
            return (
              <motion.div
                key={`star-${i}`}
                className="absolute w-1 h-20 bg-gradient-to-b from-yellow-200 to-transparent"
                style={{
                  transformOrigin: 'top center',
                }}
                initial={{
                  rotate: (360 * i) / 30,
                  scale: 0,
                  opacity: 1,
                }}
                animate={{
                  scale: [0, 1.5, 0],
                  opacity: [1, 0.5, 0],
                }}
                transition={{
                  duration: 0.8, // Faster from 1
                  delay: 0.1,
                  ease: 'easeOut',
                }}
              />
            );
          })}

          {/* Shockwave */}
          <motion.div
            className="absolute rounded-full bg-gradient-to-r from-transparent via-orange-500/30 to-transparent"
            initial={{
              width: 0,
              height: 0,
              opacity: 0.8,
            }}
            animate={{
              width: 2000,
              height: 2000,
              opacity: 0,
            }}
            transition={{
              duration: 1.2, // Faster from 1.5
              ease: 'easeOut',
            }}
          />
        </div>
      )}

      {/* Loading text before explosion */}
      {!showExplosion && (
        <motion.div
          className="absolute bottom-20 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="text-white text-2xl font-bold tracking-wider">
            INCOMING...
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}