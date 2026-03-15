# $300k-Tier Ultra-Premium Website Creation Guide
## Master Reference Document - For Every Website Build

---

## SECTION 1: DESIGN SYSTEM REQUIREMENTS (Ultra-Premium)

### 1.1 Visual Design Principles
- **Luxury, minimal palette** with deep contrast and atmospheric gradients
- **Typography curated like brand identity**: modern sans-serif headers + refined body text
- **Strict design-system grid**, spacing tokens, modular components, consistent rhythm
- **Every section must feel composed, balanced, handcrafted**
- **No AI tropes**: no random blobs, neon gradients, chaotic shapes, generic hero layouts
- **Subtle textures, soft glows, layered depth** for premium feel

### 1.2 Color System (Example - Deep Space)
```css
:root {
  /* Core - Deep Space */
  --void: #050A15;
  --dark: #0A0E27;
  --surface: #0F1428;
  --surface-elevated: #141B2D;
  
  /* Brand - Electric */
  --cyan: #00D9FF;
  --cyan-dim: rgba(0, 217, 255, 0.1);
  --cyan-glow: rgba(0, 217, 255, 0.4);
  
  --magenta: #FF006E;
  --magenta-dim: rgba(255, 0, 110, 0.1);
  --magenta-glow: rgba(255, 0, 110, 0.4);
  
  /* Text */
  --text-primary: #F0F4F8;
  --text-secondary: #94A3B8;
  --text-muted: #64748B;
}
```

### 1.3 Typography System (3-Font Minimum)
```tsx
// Required fonts
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
```

**Hierarchy:**
| Role | Font | Usage | Weight | Letter-Spacing |
|------|------|-------|--------|----------------|
| Display | Space Grotesk | Hero headlines | 700 | -0.03em |
| Display Light | Space Grotesk | Subheadlines | 300 | -0.02em |
| Body | Inter | Paragraphs | 400 | -0.01em |
| Mono | JetBrains Mono | Labels, captions | 500 | 0.15em |

### 1.4 Spacing System
```css
.section-padding { padding: clamp(5rem, 12vh, 9rem) 0; }
.section-padding-sm { padding: clamp(3rem, 8vh, 5rem) 0; }
.container-premium {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 clamp(1.25rem, 4vw, 3rem);
}
```

---

## SECTION 2: ANIMATION LIBRARY (100+ Unique Motions)

### 2.1 Page-Load Animations (20+)

```tsx
// 1. Logo mark scale-in + glow fade
gsap.from('.logo', { scale: 0.8, opacity: 0, duration: 0.8, ease: 'expo.out' });
gsap.to('.logo-glow', { opacity: 0.4, duration: 1.2, delay: 0.3 });

// 2. Navigation staggered fade-in
gsap.from('.nav-item', { 
  y: -20, opacity: 0, duration: 0.5, 
  stagger: 0.1, ease: 'power3.out', delay: 0.2 
});

// 3. Hero headline line-by-line reveal
gsap.from('.hero-line', { 
  y: 100, opacity: 0, duration: 1, 
  stagger: 0.15, ease: 'expo.out', delay: 0.3 
});

// 4. Subheadline opacity + upward motion
gsap.from('.hero-subtitle', { 
  y: 30, opacity: 0, duration: 0.8, 
  ease: 'power3.out', delay: 0.6 
});

// 5. Background parallax drift
gsap.to('.bg-parallax', { 
  y: -50, ease: 'none', 
  scrollTrigger: { scrub: 1 } 
});

// 6. Ambient particles drifting
// (Use canvas or CSS animation for particles)

// 7. Soft light sweep across hero
gsap.fromTo('.light-sweep', 
  { x: '-100%', opacity: 0 },
  { x: '100%', opacity: 0.3, duration: 2, ease: 'power2.inOut' }
);

// 8. Gradient shift on load
gsap.to('.hero-gradient', { 
  backgroundPosition: '100% 100%', 
  duration: 3, ease: 'none' 
});

// 9. Hero image slide-in from depth
gsap.from('.hero-image', { 
  scale: 1.2, opacity: 0, duration: 1.2, 
  ease: 'expo.out', delay: 0.2 
});

// 10. Floating elements easing into orbit
gsap.from('.floating-element', { 
  y: 50, opacity: 0, rotation: -10,
  duration: 1.5, stagger: 0.2, ease: 'elastic.out(1, 0.5)' 
});

// 11. Button shimmer on load
gsap.from('.btn-shimmer', { 
  backgroundPosition: '-200% 0', 
  duration: 1.5, ease: 'power2.inOut' 
});

// 12. Icon micro-pops
gsap.from('.icon-pop', { 
  scale: 0, duration: 0.4, 
  stagger: 0.05, ease: 'back.out(2)', delay: 0.8 
});

// 13. Card stack fan-out
gsap.from('.card-stack', { 
  rotation: -5, x: -20, opacity: 0,
  duration: 0.6, stagger: 0.1, ease: 'power3.out' 
});

// 14. Section divider fade-in
gsap.from('.section-divider', { 
  scaleX: 0, duration: 0.8, 
  ease: 'expo.out', transformOrigin: 'left' 
});

// 15. Soft camera-like zoom
gsap.from('.camera-zoom', { 
  scale: 1.1, duration: 1.5, 
  ease: 'power2.out' 
});

// 16. Masked text reveal
gsap.from('.text-mask', { 
  clipPath: 'inset(0 100% 0 0)', 
  duration: 1, ease: 'expo.out' 
});

// 17. Split-text animation
// (Use SplitText plugin or manual span wrapping)

// 18. Noise-texture fade-in
gsap.from('.noise-texture', { opacity: 0, duration: 0.5 });

// 19. Soft shadow bloom
gsap.to('.shadow-bloom', { 
  boxShadow: '0 20px 60px rgba(0,0,0,0.3)', 
  duration: 1, delay: 0.5 
});

// 20. Layered depth parallax
// (Multiple layers with different scroll speeds)
```

### 2.2 Scroll-Triggered + Scroll-Reversible Animations (40+)

**CRITICAL: All scroll animations must reverse when scrolling up**

```tsx
// 1. Section headers sliding in from offset
gsap.fromTo('.section-header', 
  { x: -50, opacity: 0 },
  {
    x: 0, opacity: 1,
    scrollTrigger: {
      trigger: '.section-header',
      start: 'top 85%',
      end: 'top 50%',
      scrub: 1, // Makes it reversible
    }
  }
);

// 2. Paragraphs stagger-revealing
gsap.fromTo('.paragraph', 
  { y: 30, opacity: 0 },
  {
    y: 0, opacity: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.paragraphs-container',
      start: 'top 80%',
      scrub: 1,
    }
  }
);

// 3. Cards scaling + fading in
gsap.fromTo('.reveal-card', 
  { scale: 0.9, opacity: 0 },
  {
    scale: 1, opacity: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: '.cards-container',
      start: 'top 85%',
      scrub: 1,
    }
  }
);

// 4. Images parallaxing in multiple layers
gsap.to('.parallax-bg', { 
  y: -100, 
  scrollTrigger: { scrub: 1 } 
});
gsap.to('.parallax-mid', { 
  y: -50, 
  scrollTrigger: { scrub: 1 } 
});
gsap.to('.parallax-fg', { 
  y: -25, 
  scrollTrigger: { scrub: 1 } 
});

// 5. Background gradient shifts
gsap.to('.gradient-bg', {
  backgroundPosition: '100% 0',
  scrollTrigger: { scrub: 2 }
});

// 6. Floating elements drifting based on scroll velocity
// (Use velocity-based animation)

// 7. Scroll-scrubbed hero animation timeline
const heroTl = gsap.timeline({
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: 1,
    pin: true,
  }
});
heroTl.to('.hero-content', { y: -100, opacity: 0 })
      .to('.hero-image', { scale: 1.1 }, 0);

// 8. Icon rotations tied to scroll
gsap.to('.scroll-icon', {
  rotation: 360,
  scrollTrigger: { scrub: 2 }
});

// 9. Decorative shapes orbiting
gsap.to('.orbit-shape', {
  rotation: 180,
  x: 50,
  scrollTrigger: { scrub: 1 }
});

// 10. Soft 3D tilt on scroll
gsap.to('.tilt-scroll', {
  rotateX: 10,
  scrollTrigger: { scrub: 1 }
});

// 11. Split-image reveals
gsap.fromTo('.split-left', 
  { clipPath: 'inset(0 100% 0 0)' },
  { clipPath: 'inset(0 0% 0 0)', scrollTrigger: { scrub: 1 } }
);
gsap.fromTo('.split-right', 
  { clipPath: 'inset(0 0 0 100%)' },
  { clipPath: 'inset(0 0 0 0%)', scrollTrigger: { scrub: 1 } }
);

// 12. Masked section transitions
// (Use clip-path animations)

// 13. Scroll-activated blur → sharp transitions
gsap.fromTo('.blur-sharp', 
  { filter: 'blur(10px)' },
  { filter: 'blur(0px)', scrollTrigger: { scrub: 1 } }
);

// 14. Scroll-controlled color temperature shifts
gsap.to('.color-shift', {
  filter: 'hue-rotate(30deg)',
  scrollTrigger: { scrub: 2 }
});

// 15. Scroll-scrubbed SVG line drawing
// (Use stroke-dasharray/stroke-dashoffset)

// 16. Scroll-based opacity waves
gsap.to('.opacity-wave', {
  opacity: 0.5,
  stagger: 0.1,
  scrollTrigger: { scrub: 1 }
});

// 17. Scroll-based depth-of-field simulation
gsap.to('.dof-bg', { filter: 'blur(5px)', scrollTrigger: { scrub: 1 } });
gsap.to('.dof-fg', { filter: 'blur(0px)', scrollTrigger: { scrub: 1 } });

// 18. Scroll-scrubbed product mockup rotation
gsap.to('.mockup-3d', {
  rotateY: 30,
  scrollTrigger: { scrub: 1 }
});

// 19. Scroll-controlled spotlight movement
gsap.to('.spotlight', {
  x: 200,
  scrollTrigger: { scrub: 1 }
});

// 20. Scroll-activated grid distortion
gsap.to('.grid-distort', {
  skewX: 5,
  scrollTrigger: { scrub: 1 }
});

// 21-40. Additional scroll animations...
// (Continue pattern for remaining 20 scroll animations)
```

### 2.3 Hover Micro-Interactions (20+)

```tsx
// 1. Button lift + soft shadow
.hover-lift {
  transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1),
              box-shadow 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.hover-lift:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

// 2. Warm accent glow on hover
.hover-glow {
  transition: box-shadow 0.4s ease, border-color 0.4s ease;
}
.hover-glow:hover {
  box-shadow: 0 0 40px rgba(0, 217, 255, 0.15);
  border-color: rgba(0, 217, 255, 0.3);
}

// 3. Icon tilt + micro-rotation
.hover-tilt:hover {
  transform: rotate(-5deg) scale(1.1);
}

// 4. Link underline sweep
.link-sweep {
  position: relative;
}
.link-sweep::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: currentColor;
  transition: width 0.4s cubic-bezier(0.19, 1, 0.22, 1);
}
.link-sweep:hover::after {
  width: 100%;
}

// 5. Card depth pop
.card-pop {
  transition: transform 0.3s ease;
}
.card-pop:hover {
  transform: translateZ(20px) scale(1.02);
}

// 6. Magnetic cursor attraction (see MagneticButton component)

// 7. Soft color shift
.color-shift {
  transition: color 0.3s ease, background-color 0.3s ease;
}

// 8. Micro-pulse on icons
@keyframes micro-pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
.hover-pulse:hover {
  animation: micro-pulse 0.4s ease;
}

// 9. Card border glow
.border-glow:hover {
  border-color: rgba(0, 217, 255, 0.5);
  box-shadow: 0 0 20px rgba(0, 217, 255, 0.2);
}

// 10. Image zoom-in
.img-zoom {
  overflow: hidden;
}
.img-zoom img {
  transition: transform 0.6s cubic-bezier(0.19, 1, 0.22, 1);
}
.img-zoom:hover img {
  transform: scale(1.05);
}

// 11. Text highlight sweep
.text-highlight {
  background: linear-gradient(90deg, transparent 50%, rgba(0,217,255,0.2) 50%);
  background-size: 200% 100%;
  transition: background-position 0.4s ease;
}
.text-highlight:hover {
  background-position: -100% 0;
}

// 12. Soft ripple on hover
// (Use CSS or JS ripple effect)

// 13. Button gradient shift
.btn-gradient {
  background: linear-gradient(90deg, #00D9FF, #FF006E);
  background-size: 200% 100%;
  transition: background-position 0.4s ease;
}
.btn-gradient:hover {
  background-position: 100% 0;
}

// 14. Icon bounce
.hover-bounce:hover {
  animation: bounce 0.5s ease;
}

// 15. Card parallax tilt (see TiltCard component)

// 16. Soft blur → sharp on hover
.hover-sharp {
  transition: filter 0.4s ease;
  filter: blur(1px);
}
.hover-sharp:hover {
  filter: blur(0);
}

// 17. Micro-shadow bloom
.shadow-bloom:hover {
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

// 18. Accent shimmer
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.shimmer:hover {
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  background-size: 200% 100%;
  animation: shimmer 1s ease infinite;
}

// 19. Icon orbit micro-motion
.orbit-hover:hover .icon {
  transform: rotate(360deg);
  transition: transform 0.6s ease;
}

// 20. Hover-activated particle burst
// (Use canvas or CSS particles on hover)
```

### 2.4 Page Transitions (10+)

```tsx
// 1. Curtain reveal
const curtainReveal = {
  initial: { clipPath: 'inset(0 0 0 0)' },
  animate: { clipPath: 'inset(0 0 100% 0)' },
  exit: { clipPath: 'inset(0 0 0 0)' }
};

// 2. Fade-through
const fadeThrough = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};

// 3. Slide-in with easing
const slideIn = {
  initial: { x: '100%' },
  animate: { x: 0 },
  exit: { x: '-100%' },
  transition: { ease: [0.19, 1, 0.22, 1], duration: 0.5 }
};

// 4. Masked directional transitions
const maskReveal = {
  initial: { clipPath: 'circle(0% at 50% 50%)' },
  animate: { clipPath: 'circle(150% at 50% 50%)' },
  transition: { duration: 0.8, ease: 'expo.out' }
};

// 5. Soft zoom-through
const zoomThrough = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 1.1, opacity: 0 },
  transition: { duration: 0.4 }
};

// 6. Gradient wipe
const gradientWipe = {
  initial: { background: 'linear-gradient(to right, #000 50%, transparent 50%)' },
  animate: { background: 'transparent' },
  transition: { duration: 0.6 }
};

// 7. Split-screen transition
// (Divide screen and animate each half)

// 8. Parallax transition
// (Outgoing page moves at different speed than incoming)

// 9. Blur → clarity transition
const blurTransition = {
  initial: { filter: 'blur(10px)', opacity: 0 },
  animate: { filter: 'blur(0px)', opacity: 1 },
  exit: { filter: 'blur(10px)', opacity: 0 },
  transition: { duration: 0.4 }
};

// 10. Light sweep transition
// (Light beam sweeps across screen during transition)
```

---

## SECTION 3: MULTI-PAGE STRUCTURE

### 3.1 Required Pages

1. **Home Page**
   - Cinematic hero with scroll-scrubbed animation
   - Services overview with animated cards
   - Portfolio preview with hover-activated overlays
   - Testimonials with staggered reveals
   - CTA section with premium motion

2. **About Page**
   - Animated timeline
   - Team section with hover reveals
   - Mission + values with staggered text
   - Optional parallax background layers

3. **Services Page**
   - Detailed service cards
   - Scroll-based transitions between categories
   - Optional interactive pricing table

4. **Portfolio Page**
   - Masonry or grid layout
   - Case study cards with animated overlays
   - Smooth modal transitions

5. **Contact Page**
   - Clean form with focus animations
   - Map with subtle motion
   - Contact info with icon micro-interactions

6. **Optional Pages**
   - Blog
   - Careers
   - FAQ
   - Case studies
   - Resources

---

## SECTION 4: COPYWRITING REQUIREMENTS

- All text must sound **human, confident, brand-authentic**
- **No generic AI phrases**
- **Tone**: premium, concise, intentional, modern
- **Short, powerful sentences**

---

## SECTION 5: TECHNICAL REQUIREMENTS

- Fully responsive
- Accessible (WCAG AA)
- Clean, production-ready code
- Modern layout practices (CSS Grid, Flexbox)
- 60fps animations
- Reversible scroll timelines
- Seamless page transitions
- GPU-accelerated motion (transform, opacity only)

---

## SECTION 6: FILE STRUCTURE

```
app/
├── page.tsx                    # Home page
├── layout.tsx                  # Root layout with fonts
├── globals.css                 # Global styles + CSS variables
├── about/page.tsx              # About page
├── services/page.tsx           # Services page
├── portfolio/page.tsx          # Portfolio page
├── contact/page.tsx            # Contact page
└── ...other pages

components/
├── animations/
│   ├── MagneticButton.tsx      # Magnetic hover effect
│   ├── TiltCard.tsx            # 3D tilt with glare
│   ├── ScrollReveal.tsx        # Scroll-triggered reveals
│   ├── StaggerReveal.tsx       # Staggered children
│   ├── Parallax.tsx            # Parallax layers
│   └── PageTransition.tsx      # Page transition wrapper
├── ui/
│   ├── Navigation.tsx          # Header navigation
│   ├── Footer.tsx              # Site footer
│   ├── Button.tsx              # Premium button variants
│   └── Card.tsx                # Card components
└── sections/
    ├── Hero.tsx                # Hero section
    ├── Features.tsx            # Features grid
    ├── Stats.tsx               # Stats counter
    └── CTA.tsx                 # Call-to-action

hooks/
├── useScrollProgress.ts        # Scroll progress tracking
├── useMousePosition.ts         # Mouse position for effects
└── useReducedMotion.ts         # Respect prefers-reduced-motion

lib/
├── animations.ts               # Animation presets
├── easings.ts                  # Easing functions
└── utils.ts                    # Utility functions
```

---

## SECTION 7: BUILD CHECKLIST

### Pre-Build
- [ ] Brand colors defined
- [ ] Typography system selected (3+ fonts)
- [ ] Image assets collected and optimized
- [ ] Content/copy finalized
- [ ] Page structure planned

### Development
- [ ] Layout with fonts configured
- [ ] Global CSS with design tokens
- [ ] Animation components created
- [ ] All pages built with sections
- [ ] 100+ animations implemented
- [ ] Scroll-reversible animations working
- [ ] Hover micro-interactions added
- [ ] Page transitions configured
- [ ] Mobile responsive
- [ ] Accessibility checked

### Pre-Deploy
- [ ] Build completes without errors
- [ ] Lighthouse score 90+
- [ ] All animations 60fps
- [ ] Images optimized
- [ ] Code committed to Git
- [ ] Deployed to hosting

---

## SECTION 8: QUICK REFERENCE

### Essential Imports
```tsx
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';
```

### Essential CSS
```css
/* GPU acceleration */
.gpu {
  transform: translateZ(0);
  will-change: transform;
  backface-visibility: hidden;
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Hide scrollbar but keep functionality */
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.1);
  border-radius: 3px;
}
```

### Essential Hooks
```tsx
// Mobile detection
const isTouch = window.matchMedia('(hover: none)').matches;

// GSAP cleanup
const ctx = gsap.context(() => { /* animations */ });
return () => ctx.revert();
```

---

**Document Version**: 1.0  
**Last Updated**: March 15, 2026  
**Use For**: Every $250k+ tier website build
