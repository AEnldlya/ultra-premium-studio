# Project Learnings: Ultra Premium Studio Website

## Project Overview
Built a $250k-tier multi-page website with cinematic animations, 3D geometric shapes, and premium design for a digital studio.

---

## Technical Stack

### Core Technologies
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: GSAP + ScrollTrigger, Framer Motion
- **3D Graphics**: React Three Fiber + React Three Drei + Three.js
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React

### Build Configuration
- Static export for deployment
- Custom distDir: 'dist'
- Unoptimized images for static export

---

## Key Learnings

### 1. React Three Fiber Version Compatibility

**Problem**: 
```
npm error peer react@"^19" from @react-three/drei@10.7.7
```

**Root Cause**: React Three Fiber v9+ and Drei v10+ require React 19, but Next.js 14 uses React 18.

**Solution**: Use compatible versions:
```json
{
  "@react-three/drei": "^9.105.0",
  "@react-three/fiber": "^8.16.0",
  "three": "^0.163.0"
}
```

**Lesson**: Always check peer dependencies before installing packages. Major version bumps often require framework upgrades.

---

### 2. Static Export with Three.js

**Problem**: Three.js components fail during static generation (prerendering) because they access browser APIs (window, document, WebGL) that don't exist in Node.js.

**Solution**: Use dynamic imports with `ssr: false`:
```tsx
import dynamic from 'next/dynamic';

const FloatingShapesScene = dynamic(
  () => import('./FloatingShapesScene').then((mod) => mod.FloatingShapesScene),
  { ssr: false }
);
```

**Lesson**: Any component using browser-only APIs must be dynamically imported with SSR disabled for static exports.

---

### 3. Mobile Touch Device Detection

**Problem**: Hover effects (magnetic buttons, tilt cards) feel broken on touch devices and can cause performance issues.

**Solution**: Detect touch devices and disable effects:
```tsx
const [isTouchDevice, setIsTouchDevice] = useState(false);

useEffect(() => {
  setIsTouchDevice(window.matchMedia('(hover: none)').matches);
}, []);

if (isTouchDevice) {
  return <div className={className}>{children}</div>; // No effects
}
```

**Lesson**: Use CSS media query `(hover: none)` to detect touch devices, not just screen width. This catches tablets and hybrid devices.

---

### 4. GSAP ScrollTrigger Cleanup

**Problem**: Memory leaks and animation conflicts when navigating between pages.

**Solution**: Proper cleanup pattern:
```tsx
const triggersRef = useRef<ScrollTrigger[]>([]);

useEffect(() => {
  const ctx = gsap.context(() => {
    // Create animations
    const tween = gsap.to(element, {
      scrollTrigger: { /* config */ }
    });
    if (tween.scrollTrigger) {
      triggersRef.current.push(tween.scrollTrigger);
    }
  });

  return () => {
    triggersRef.current.forEach(trigger => trigger.kill());
    triggersRef.current = [];
    ctx.revert();
  };
}, []);
```

**Lesson**: Always kill ScrollTrigger instances and revert GSAP contexts in cleanup functions.

---

### 5. Responsive Typography with Tailwind

**Pattern**: Use responsive prefixes for text sizes:
```tsx
<h1 className="text-4xl sm:text-5xl lg:text-display-xl">
```

**Breakpoints**:
- Default: < 640px (mobile)
- `sm:`: 640px+
- `md:`: 768px+
- `lg:`: 1024px+
- `xl:`: 1280px+

**Lesson**: Design mobile-first, then enhance for larger screens. Never assume desktop-only.

---

### 6. GitHub Token Security

**Discovery**: Found GitHub credentials stored in `~/.git-credentials`

**Format**: `https://username:token@github.com`

**Lesson**: 
- Tokens provide scoped access to repositories
- Personal Access Tokens (classic) need `repo` scope for push access
- Never commit tokens to repositories
- Use environment variables or secure credential storage

---

### 7. Netlify Deployment Methods

**Option 1: CLI (requires auth)**
```bash
netlify deploy --auth=TOKEN --dir=dist --prod
```

**Option 2: API (token-based)**
```bash
# Create site
curl -X POST "https://api.netlify.com/api/v1/sites" \
  -H "Authorization: Bearer TOKEN" \
  -d '{"name":"site-name"}'

# Deploy (requires file upload - complex)
```

**Option 3: GitHub Integration (easiest)**
- Push to GitHub
- Connect repo in Netlify dashboard
- Auto-deploy on push

**Lesson**: GitHub integration is the most reliable method for continuous deployment.

---

### 8. TypeScript Strictness with Arrays

**Problem**: 
```
Type 'number[]' is not assignable to type '[number, number, number]'
```

**Solution**: Use type assertions for tuples:
```tsx
const position = [x, y, z] as [number, number, number];
```

**Lesson**: TypeScript treats arrays as variable-length by default. Use `as` assertions for fixed-length tuples.

---

### 9. CSS Scrollbar Hiding on Mobile

**Pattern**: Hide scrollbars on mobile, show on desktop:
```css
::-webkit-scrollbar {
  width: 0px;
  background: transparent;
}

@media (min-width: 768px) {
  ::-webkit-scrollbar {
    width: 8px;
  }
  /* ... */
}
```

**Lesson**: Mobile browsers handle scrolling differently. Hidden scrollbars create a cleaner native app feel.

---

### 10. Framer Motion AnimatePresence

**Pattern**: For exit animations on removed elements:
```tsx
<AnimatePresence mode="wait">
  {isOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
    >
      {content}
    </motion.div>
  )}
</AnimatePresence>
```

**Lesson**: Always wrap conditionally rendered animated elements in `AnimatePresence` for exit animations to work.

---

## Design System

### Color Palette
```
--color-void: #0a0a0b        (Deep black background)
--color-charcoal: #121214    (Card backgrounds)
--color-graphite: #1a1a1d    (Borders/dividers)
--color-aurum: #c9a962       (Primary gold accent)
--color-aurum-light: #e8d5a3 (Light gold)
--color-aurum-dark: #9a7b3d  (Dark gold)
--color-platinum: #e8e8e8    (Primary text)
--color-silver: #a8a8a8      (Secondary text)
```

### Typography Scale
```
text-display-xl: 3rem - 7rem (hero headings)
text-display-lg: 2.5rem - 4.5rem (section headings)
text-display-md: 1.75rem - 2.5rem (subsections)
text-body-lg: 1.125rem (large body)
text-body-md: 1rem (default body)
text-body-sm: 0.875rem (small text)
text-caption: 0.75rem (labels, uppercase)
```

### Spacing
```
section padding: 6rem - 10rem (responsive)
component gaps: 1.5rem (mobile) - 2rem (desktop)
card padding: 1.5rem (mobile) - 2.5rem (desktop)
```

---

## Animation Patterns

### 1. Scroll-Triggered Reveal
```tsx
<ScrollReveal delay={index * 0.1}>
  <Component />
</ScrollReveal>
```

### 2. Staggered Line Reveal
```tsx
<LineReveal
  lines={['Line 1', 'Line 2']}
  stagger={0.15}
/>
```

### 3. Counter Animation
```tsx
<AnimatedCounter end={127} suffix="+" />
```

### 4. Page Load Sequence
```tsx
const tl = gsap.timeline({ delay: 0.5 });
tl.from('.hero-line', { y: 100, opacity: 0, stagger: 0.15 })
  .from('.hero-subtitle', { y: 30, opacity: 0 }, '-=0.5');
```

---

## File Structure Best Practices

```
app/
├── page.tsx              # Home page
├── about/page.tsx        # About page
├── services/page.tsx     # Services page
├── portfolio/page.tsx    # Portfolio page
├── contact/page.tsx      # Contact page
├── layout.tsx            # Root layout
└── globals.css           # Global styles

components/
├── Navigation.tsx        # Header nav
├── Footer.tsx            # Site footer
├── ScrollReveal.tsx      # Scroll animation wrapper
├── TextReveal.tsx        # Text animation components
├── TiltCard.tsx          # 3D tilt effect card
├── MagneticButton.tsx    # Magnetic hover button
├── AnimatedCounter.tsx   # Number counter
├── FloatingShapes.tsx    # Dynamic 3D shapes loader
└── FloatingShapesScene.tsx # 3D scene component
```

---

## Deployment Checklist

- [ ] All TypeScript errors resolved
- [ ] Build completes successfully (`npm run build`)
- [ ] Static export generates HTML files
- [ ] 3D components use `ssr: false`
- [ ] GSAP ScrollTriggers cleaned up
- [ ] Mobile touch detection implemented
- [ ] Responsive text sizes applied
- [ ] Git pushed to repository
- [ ] Vercel/Netlify connected to repo

---

## Common Issues & Solutions

| Issue | Solution |
|-------|----------|
| `Cannot read properties of undefined (reading 'S')` | Use dynamic import with `ssr: false` for Three.js |
| `peer react@"^19"` conflict | Downgrade React Three Fiber to v8, Drei to v9 |
| ScrollTrigger not working | Register plugin: `gsap.registerPlugin(ScrollTrigger)` |
| Mobile hover effects broken | Detect touch with `(hover: none)` media query |
| Type 'number[]' not assignable | Use `as [number, number, number]` assertion |
| Build fails on Vercel | Check package.json versions match local |

---

## Resources

- **GSAP Docs**: https://greensock.com/docs/
- **React Three Fiber**: https://docs.pmnd.rs/react-three-fiber
- **Framer Motion**: https://www.framer.com/motion/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Next.js Static Export**: https://nextjs.org/docs/pages/building-your-application/deploying/static-exports

---

## Conclusion

This project demonstrated the complexity of combining modern web technologies:
- 3D graphics in React require careful SSR handling
- Animation libraries need proper cleanup to prevent memory leaks
- Mobile-first responsive design is essential
- Version compatibility is critical for stable builds
- Git-based deployment is the most reliable approach

**Total Build Size**: ~1.6MB
**First Load JS**: ~180KB per page
**Pages**: 5 (Home, About, Services, Portfolio, Contact)
