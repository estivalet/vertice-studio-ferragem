---
name: Robust Commerce
colors:
  surface: '#f9f9f9'
  surface-dim: '#dadada'
  surface-bright: '#f9f9f9'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3f3'
  surface-container: '#eeeeee'
  surface-container-high: '#e8e8e8'
  surface-container-highest: '#e2e2e2'
  on-surface: '#1a1c1c'
  on-surface-variant: '#444748'
  inverse-surface: '#2f3131'
  inverse-on-surface: '#f1f1f1'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c8c6c5'
  secondary: '#7b5900'
  on-secondary: '#ffffff'
  secondary-container: '#fdbb12'
  on-secondary-container: '#6c4d00'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271900'
  on-tertiary-container: '#ad7b00'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c8c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474746'
  secondary-fixed: '#ffdea4'
  secondary-fixed-dim: '#fdbb12'
  on-secondary-fixed: '#261900'
  on-secondary-fixed-variant: '#5d4200'
  tertiary-fixed: '#ffdea9'
  tertiary-fixed-dim: '#ffba2b'
  on-tertiary-fixed: '#271900'
  on-tertiary-fixed-variant: '#5e4100'
  background: '#f9f9f9'
  on-background: '#1a1c1c'
  surface-variant: '#e2e2e2'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '800'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '800'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.04em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 0.75rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies strength, durability, and practical efficiency, tailored for the construction, hardware, and renovation e-commerce sector. It addresses two distinct audiences: trade professionals (contractors, electricians, plumbers, masons) who need immediate specifications, high inventory transparency, and frictionless checkout, alongside DIY homeowners looking for confidence, clarity, and guidance.

The aesthetic blends **Corporate Modern** structure with industrial, tactile cues. High-contrast lead-slate elements (#121212 to #1A1A1A) project structural authority and resilience, while energetic construction amber/gold (#F5B400) commands focal urgency for actions and navigation. Clean, rational grid layouts and ample white space preserve legibility against dense catalog data.

## Colors

The palette leverages high-contrast industrial logic:

- **Primary (`#1A1A1A`):** Deep charcoal slate, delivering authoritative framing across top-level navigation, primary titles, and structural banners without the harsh eye fatigue of pure `#000000`.
- **Secondary (`#F5B400`):** Safety amber/gold, engineered specifically for CTAs, category highlights, conversion triggers, and promotional badges.
- **Tertiary (`#E0A000`):** Pressed golden ochre, designated for active states, hover transitions, and badge borders.
- **Neutral (`#F5F5F5` / `#FAFAFA`):** Clean architectural surfaces providing crisp backdrops for product imagery, technical spec tables, and clean component isolation.

Dark canvas contexts are isolated to utility ribbons and persistent top-level navigation, while the shopping experience operates in crisp, high-luminance light mode for maximal readability of SKUs, dimensions, and product reviews.

## Typography

Typography balances bold, industrial impact with dense transactional readability:

- **Headlines (Montserrat):** Geometric, solid, and assertive. Uppercase tracking is utilized selectively for utility pills, category banners, and hero subheadings (`letter-spacing: 0.08em`), establishing an industrial tone.
- **Body & Labels (Inter):** Highly legible, neutral sans-serif optimized for numerical values, technical parameters, unit pricing, and UI controls. Tabular lining numbers should be enforced for pricing and dimensions.

## Layout & Spacing

A 12-column grid anchors the desktop layout with a max-width container of `1280px` to maintain optimal scanning paths:

- **Desktop (1024px+):** 12 columns, `1.5rem` (24px) gutters, and `2rem` (32px) margins. Category quick-access grids run in 6 columns; product cards operate in 4 to 6 columns.
- **Tablet (768px - 1023px):** 8 columns, `1rem` (16px) gutters, `1.5rem` (24px) margins. Product showcases collapse to 3 columns.
- **Mobile (< 768px):** 4 columns, `0.75rem` (12px) gutters, and `1rem` (16px) margins. Catalog views transition into a 2-column card grid or horizontal scrolling rails for rapid finger scanning.

## Elevation & Depth

Visual depth combines crisp surface boundaries with subtle, neutral shadow drop:

- **Flat / Base Layer (`0dp`):** `#FAFAFA` and `#FFFFFF` background surfaces.
- **Contained Surface (`Card Level`):** Solid `#FFFFFF` background with a subtle border (`1px solid #E5E5E5`). On hover, product cards lift using an ambient shadow: `0 8px 24px -4px rgba(0, 0, 0, 0.08)`.
- **Raised Shells (`Dropdowns, Menus, Modals`):** `0 12px 32px -4px rgba(0, 0, 0, 0.16)` with a defining `#1A1A1A` or `#D4D4D4` micro-border.
- **Header Layer:** Static `#1A1A1A` dark container with no blur, relying on high tonal differentiation rather than drop shadows to isolate the control station.

## Shapes

The design system adopts a **Soft (Level 1)** rounding philosophy:
- Standard UI elements (inputs, CTA buttons, badges) use `0.25rem` (4px) to `0.375rem` (6px) radius.
- Product cards and category thumbnails utilize `0.5rem` (8px) corner radii.
- Pill forms are strictly forbidden for actionable purchase triggers to maintain an engineered, hardware-grade feel. Small utility indicators (such as cart notification counters) retain circular geometry.

## Components

### Buttons
- **Primary CTA ("Adicionar ao carrinho", "Comprar"):** Solid `#F5B400` background, `#1A1A1A` bold text (`font-weight: 700`), `0.25rem` corner radius, centered icon with a 6px offset. Hover state darkens to `#E0A000`. Active state applies `transform: scale(0.98)`.
- **Secondary / Outline:** White or transparent fill with a 2px `#1A1A1A` border and text. On dark headers, 1.5px `#FFFFFF` or `#F5B400` border.
- **Utility Action (Search Submit):** Integrated seamlessly as a solid `#F5B400` block within input modules.

### Product Cards
- Contained white box with `1px solid #E5E5E5` perimeter and `0.5rem` radius.
- Standard structure: square neutral image container (`#FFFFFF` or `#F8F8F8`), star rating row with numerical review counter, bold title clamped to 2 lines, prominent price display with per-unit calculation (`R$ 1,20 /unidade`), and a full-width gold primary action button pinned to the card bottom.

### Inputs & Search Bars
- Search bar features a robust dual-unit layout: white input box with clear typography, paired with a right-aligned square `#F5B400` submit button housing a bold magnifying icon. Focus ring is a clean `2px solid #F5B400`.

### Chips & Badges
- **Discount & Stock Badges:** High-contrast tags with `0.25rem` radius, positioned in the top-left corner of product thumbnails (`#1A1A1A` background with white text, or red `#DC2626` for clearances).
- **Category Filter Chips:** Subtle `#F0F0F0` backgrounds with `#1A1A1A` text; active state toggles to `#1A1A1A` background with `#FFFFFF` text.

### Form Elements (Checkboxes & Radios)
- Heavy `1.5px` border in `#737373`, snapping to `#F5B400` check/fill state when selected.

### Additional E-Commerce Components
- **Category Shortcut Cards:** Soft-grey floating cards displaying pure white backgrounds, subtle category artwork, and directional arrows (`→`).
- **Cart Count Indicator:** Vibrant `#F5B400` circular badge overlaying dark cart icons, keeping active order tallies legible against dark slate ribbons.