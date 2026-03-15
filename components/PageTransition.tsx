'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [displayChildren, setDisplayChildren] = useState(children);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    // Skip transition on initial load
    if (isInitialLoad) {
      setIsInitialLoad(false);
      setDisplayChildren(children);
      return;
    }

    if (pathname) {
      setIsTransitioning(true);
      
      const timer = setTimeout(() => {
        setDisplayChildren(children);
        setIsTransitioning(false);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [pathname, children, isInitialLoad]);

  // On initial load, just render children without transition
  if (isInitialLoad) {
    return <>{children}</>;
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <motion.div
            key="transition"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            exit={{ scaleY: 0 }}
            transition={{ 
              duration: 0.6, 
              ease: [0.76, 0, 0.24, 1]
            }}
            style={{ transformOrigin: 'top' }}
            className="fixed inset-0 z-[9999] bg-aurum"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <span className="font-display text-3xl text-void font-medium">Studio Aureum</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: isTransitioning ? 0 : 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        {displayChildren}
      </motion.div>
    </>
  );
}
