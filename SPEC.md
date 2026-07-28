# Portfolio Website Specification

## 1. Concept & Vision

A professional developer portfolio that feels like a refined digital workshop — clean, intentional, and subtly memorable. The aesthetic balances modern minimalism with personality through thoughtful micro-interactions and a warm accent palette. It communicates competence through restraint, not flashiness.

**Personality**: Confident but approachable. Technical without being cold. Every element earns its place.

---

## 2. Design Language

### Aesthetic Direction
**Modern Editorial** — Inspired by well-designed developer documentation and premium design portfolios. High contrast, generous whitespace, typography-driven hierarchy with geometric accents.

### Color Palette
```
--bg-primary:       #0D1117    /* Deep navy-black (GitHub dark) */
--bg-secondary:     #161B22    /* Slightly lighter surface */
--bg-tertiary:      #21262D    /* Cards, elevated surfaces */
--text-primary:     #E6EDF3    /* Primary text */
--text-secondary:   #8B949E    /* Secondary/muted text */
--accent-primary:   #58A6FF    /* Primary blue accent */
--accent-warm:      #F78166    /* Warm coral for highlights */
--accent-green:     #3FB950    /* Success states */
--border:           #30363D    /* Subtle borders */
```

### Typography
- **Headings**: `Inter` (Google Fonts) — clean, highly legible, modern
- **Body**: `Inter` — consistency across headings and body
- **Code/Mono**: `JetBrains Mono` — for code snippets and tech details
- **Scale**: 16px base, 1.25 ratio (minor third)

### Spatial System
- Base unit: 4px
- Section padding: 80px vertical (desktop), 48px (mobile)
- Container max-width: 1200px
- Card padding: 24px
- Gap between cards: 24px

### Motion Philosophy
- **Entrance**: Fade-up (translateY 20px → 0, opacity 0 → 1), 400ms ease-out, staggered 80ms
- **Hover**: Subtle lift (translateY -2px) + shadow increase, 200ms ease
- **Focus**: Ring outline with accent color, 150ms
- **Page transitions**: Fade, 200ms

### Visual Assets
- **Icons**: Lucide React (MIT licensed, consistent stroke weight)
- **Images**: None required by default (avatar can be added as option)
- **Decorative**: Subtle gradient orbs in background, geometric line patterns

---

## 3. Layout & Structure

### Page Structure
Single-page portfolio with smooth-scroll navigation:

1. **Hero Section** (100vh)
   - Large name heading with subtle gradient text
   - Role/tagline beneath
   - Brief intro paragraph
   - CTA buttons: "View Projects" / "Contact"
   - Subtle animated background element (gradient orb)

2. **About Section**
   - Two-column layout (text + optional image)
   - Brief bio, skills/tech stack pills

3. **Projects Section**
   - Featured project cards (2-3)
   - Each card: title, description, tech tags, links
   - Hover reveals more detail

4. **Skills Section**
   - Visual skill bars or categorized pills
   - Grouped by domain (Frontend, Backend, Tools)

5. **Contact Section**
   - Simple contact info or form
   - Social links (GitHub, LinkedIn, Email)
   - Footer with copyright

### Responsive Strategy
- Mobile-first CSS
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Single column on mobile, expand to multi-column on larger screens
- Navigation collapses to hamburger on mobile

---

## 4. Features & Interactions

### Core Features
1. **Smooth scroll navigation** — Click nav links to scroll to sections
2. **Project showcase** — Cards with hover state showing full description
3. **Skill visualization** — Categorized tech stack display
4. **Contact section** — Click-to-copy email, social links
5. **Dark mode only** — Consistent dark theme (no toggle needed for v1)

### Interaction Details
- **Nav links**: Hover underline animation, click scrolls smoothly
- **Project cards**: Hover lifts card, reveals shadow, tech tags glow subtly
- **Social icons**: Hover scales up 1.1x with color shift
- **Email copy**: Click copies to clipboard, shows "Copied!" toast
- **Form inputs**: Focus ring animation, inline validation (if form added)

### Edge Cases
- All external links open in new tab with `rel="noopener noreferrer"`
- Fallback fonts if Google Fonts fail to load
- Graceful degradation if animations are disabled (prefers-reduced-motion)

---

## 5. Component Inventory

### NavBar
- Fixed top, backdrop-blur background
- Logo/name on left, nav links on right
- Mobile: hamburger menu with slide-down drawer
- States: default, scrolled (adds shadow), mobile-open

### HeroSection
- Full viewport height
- Animated gradient background orb
- Large heading, subtext, CTA buttons
- States: initial load animation

### ProjectCard
- Title, description, tech tags, links
- States: default, hover (elevated), focus (ring)

### SkillPill
- Rounded badge with icon and label
- States: default, hover (subtle glow)

### ContactSection
- Social link icons row
- Optional email with copy functionality
- States: default, copied (shows feedback)

### Button
- Primary (filled accent) and Secondary (outlined) variants
- States: default, hover, active, focus, disabled

### SectionHeading
- Large heading with decorative accent line
- Centered or left-aligned based on section

---

## 6. Technical Approach

### Stack
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite 5
- **Styling**: Tailwind CSS 3
- **Icons**: Lucide React
- **Deployment**: GitHub Pages via `gh-pages` npm package

### Project Structure
```
/
├── src/
│   ├── components/       # React components
│   ├── assets/           # Static assets
│   ├── App.tsx           # Main app
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles + Tailwind
├── public/               # Static files (favicon, etc.)
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.js
└── SPEC.md
```

### Cybersecurity Measures

1. **Content Security Policy (CSP)**
   - Implemented via meta tag in index.html
   - Restricts scripts to self + trusted CDNs
   - Blocks inline scripts (no `unsafe-inline` for scripts)
   - Blocks object/plugin content

2. **XSS Prevention**
   - React auto-escapes values (default behavior)
   - All user input sanitized before rendering
   - No `dangerouslySetInnerHTML` usage

3. **External Resource Integrity**
   - Google Fonts loaded with `crossorigin="anonymous"`
   - Subresource Integrity hash for any CDN scripts

4. **HTTPS Enforcement**
   - GitHub Pages auto-enforces HTTPS
   - Strict-Transport-Security header configured

5. **No Secrets in Frontend**
   - Zero API keys or secrets in frontend code
   - Environment variables prefixed with `VITE_` for build-time vars only

6. **Secure Headers**
   - `X-Content-Type-Options: nosniff`
   - `X-Frame-Options: DENY` (prevents clickjacking)
   - `Referrer-Policy: strict-origin-when-cross-origin`
   - `Permissions-Policy` restrictions

7. **Dependency Security**
   - `npm audit` run before build
   - Minimal dependencies (reduced attack surface)
   - No deprecated packages

### Deployment
1. Build: `vite build` produces static files in `dist/`
2. Deploy: GitHub Pages serves from `dist/` on `main` branch
3. Custom 404.html for SPA routing

---

## 7. Build Commands

```bash
npm install           # Install dependencies
npm run dev           # Start dev server
npm run build         # Build for production
npm run preview       # Preview production build
npm audit             # Security audit
```
