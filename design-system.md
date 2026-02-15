# Design System - Bar a Features

## Vibe: Clean & Warm

Style inspire de Notion/Stripe. Fond clair creme, tons chauds (peach, amber, corail), beaucoup de whitespace, typographie propre, ombres douces, formes arrondies organiques. Pro et chaleureux.

## Colors

### Backgrounds
- `--bg-primary`: `#FDFAF6` (warm cream)
- `--bg-surface`: `#FFFFFF` (white cards)
- `--bg-surface-hover`: `#FFF8F0` (warm white hover)
- `--bg-subtle`: `#F7F3ED` (subtle warm gray)
- `--bg-dark`: `#1A1A1A` (dark sections for contrast)

### Text
- `--text-primary`: `#1A1A1A`
- `--text-secondary`: `#6B6B6B`
- `--text-tertiary`: `#9B9B9B`
- `--text-on-dark`: `#FFFFFF`
- `--text-on-dark-secondary`: `#B8B8B8`

### Accents
- `--accent-coral`: `#FF6B4A` (primary CTA, links)
- `--accent-coral-light`: `#FFF0ED`
- `--accent-amber`: `#FFB547` (highlights, badges)
- `--accent-amber-light`: `#FFF8E7`
- `--accent-peach`: `#FFAA8A` (gradients)
- `--accent-rose`: `#FF4081` (emphasis)
- `--accent-sage`: `#7CB69D` (success, positive)
- `--accent-sage-light`: `#F0F7F3`

### Borders
- `--border-light`: `#F0EBE3`
- `--border-medium`: `#E0D8CC`
- `--border-dark`: `#D0C8BC`

## Typography

- Headings: `font-family: 'Inter', system-ui, sans-serif; font-weight: 700-900`
- Body: `font-family: 'Inter', system-ui, sans-serif; font-weight: 400`
- Accent/Italic: Use serif italic for emphasis words (Georgia, serif)
- Sizes: Hero h1 `text-5xl md:text-7xl`, Section h2 `text-4xl md:text-5xl`, h3 `text-xl md:text-2xl`, body `text-base md:text-lg`

## Spacing
- Section padding: `py-24 md:py-32`
- Container: `max-w-7xl mx-auto px-6`
- Card padding: `p-8 md:p-10`
- Gap between elements: `gap-6 md:gap-8`

## Components

### Buttons
- Primary: `bg-[#1A1A1A] text-white rounded-2xl px-8 py-4 font-semibold hover:bg-[#333] transition-all shadow-lg hover:shadow-xl`
- Secondary: `bg-transparent border-2 border-[#1A1A1A] text-[#1A1A1A] rounded-2xl px-8 py-4 font-semibold hover:bg-[#1A1A1A] hover:text-white transition-all`
- Accent: `bg-[#FF6B4A] text-white rounded-2xl px-8 py-4 font-semibold hover:bg-[#E55A3A] transition-all shadow-lg`

### Cards
- `bg-white rounded-3xl border border-[#F0EBE3] p-8 shadow-sm hover:shadow-md transition-all duration-300`
- Hover: subtle lift `hover:-translate-y-1`

### Badges
- `inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF0ED] text-[#FF6B4A] text-sm font-medium`

### Inputs
- `w-full px-5 py-4 rounded-2xl border border-[#F0EBE3] bg-white text-[#1A1A1A] placeholder:text-[#9B9B9B] focus:outline-none focus:ring-2 focus:ring-[#FF6B4A]/20 focus:border-[#FF6B4A] transition-all`

## Animations
- Scroll reveal: fade-up with 0.6s duration, staggered 0.1s
- Hover on cards: translateY(-4px) + shadow increase
- Buttons: scale(1.02) on hover, scale(0.98) on tap
- Smooth transitions: 300ms ease on all interactive elements
- No confetti, no particles - keep it clean and elegant

## Layout
- Clean grid layouts, 2-3 columns on desktop
- Generous whitespace between sections
- Alternating white/cream backgrounds for section rhythm
- Cards with consistent border-radius (24px)
