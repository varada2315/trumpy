---
name: Heritage Artisanal Reserve
colors:
  surface: '#fdf9f4'
  surface-dim: '#ddd9d5'
  surface-bright: '#fdf9f4'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f7f3ee'
  surface-container: '#f1ede8'
  surface-container-high: '#ebe8e3'
  surface-container-highest: '#e6e2dd'
  on-surface: '#1c1c19'
  on-surface-variant: '#4f453f'
  inverse-surface: '#31302d'
  inverse-on-surface: '#f4f0eb'
  outline: '#81756e'
  outline-variant: '#d2c4bc'
  surface-tint: '#705a4c'
  primary: '#26170c'
  on-primary: '#ffffff'
  primary-container: '#3d2b1f'
  on-primary-container: '#ac9181'
  inverse-primary: '#dec1af'
  secondary: '#ab3600'
  on-secondary: '#ffffff'
  secondary-container: '#fd6b34'
  on-secondary-container: '#5d1900'
  tertiary: '#301100'
  on-tertiary: '#ffffff'
  tertiary-container: '#502100'
  on-tertiary-container: '#d7814b'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#fbddca'
  primary-fixed-dim: '#dec1af'
  on-primary-fixed: '#28180d'
  on-primary-fixed-variant: '#574335'
  secondary-fixed: '#ffdbcf'
  secondary-fixed-dim: '#ffb59c'
  on-secondary-fixed: '#390c00'
  on-secondary-fixed-variant: '#822700'
  tertiary-fixed: '#ffdbc9'
  tertiary-fixed-dim: '#ffb68c'
  on-tertiary-fixed: '#321200'
  on-tertiary-fixed-variant: '#753401'
  background: '#fdf9f4'
  on-background: '#1c1c19'
  surface-variant: '#e6e2dd'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Montserrat
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Montserrat
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Montserrat
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style
The design system embodies a premium, artisanal narrative inspired by the noble lineage of Indian dog breeds—representing loyalty, resilience, and indigenous heritage. It targets a global epicurean audience seeking "By India, From India, To World" luxury. 

The aesthetic is **Modern Minimalist with Tactile Richness**. It avoids clutter to let the quality of the "ingredients" (typography and imagery) breathe, while utilizing deep, earthy tones to ground the experience in a sense of place and history. The emotional response should be one of quiet confidence, sophisticated warmth, and undeniable authority in the food and beverage craft.

## Colors
The palette is rooted in the earth, utilizing a "Tonal Espresso" base with high-energy "Terracotta" sparks.

*   **Primary (Espresso/Mahogany):** Used for primary text, deep backgrounds, and structural borders. It represents the strength and grounding of the heritage breeds.
*   **Secondary (Burnt Orange/Terracotta):** Used sparingly as a "touchup" accent—call-to-actions, notifications, or critical highlights. It provides the warmth of an Indian sunset.
*   **Tertiary (Clay/Saddle):** Used for subtle dividers, secondary iconography, and depth layers.
*   **Neutral (Parchment/Bone):** The primary canvas color. It is a warm, off-white that feels more premium and organic than pure white.

## Typography
Typography follows a "High-Contrast Heritage" logic. 

**Playfair Display** serves as the authoritative voice. It should be used for all storytelling elements, product names, and section headers. Its high-contrast strokes evoke the elegance of traditional Indian printing and luxury editorial design.

**Montserrat** provides the modern, functional counter-balance. It ensures high readability for descriptions, technical data, and interface labels. Use the `label-caps` style for small headers or category tags to create a systematic, architectural feel.

## Layout & Spacing
The layout philosophy is **Expansive & Breathable**. We use a 12-column fixed grid for desktop to ensure the "boutique" feel of a curated gallery. 

*   **Generous Negative Space:** Increase vertical padding between sections (80px - 120px) to signify luxury; never crowd the content.
*   **Asymmetric Balance:** Elements should often be offset or use wide margins to evoke a hand-crafted, editorial layout rather than a standard corporate grid.
*   **Mobile Reflow:** On mobile, margins tighten to 20px, and the 12-column grid collapses to a single-column flow, maintaining the serif headers as the primary visual anchor.

## Elevation & Depth
In this design system, depth is achieved through **Tonal Layering and Soft Ambient Shadows** rather than heavy 3D effects.

1.  **Base Layer:** The Neutral (Parchment) surface.
2.  **Raised Surface (Cards/Modals):** A slightly lighter version of the neutral or pure white, with an extremely soft, diffused shadow (`y: 4px, blur: 20px, opacity: 0.05, color: #3D2B1F`).
3.  **The "Heritage Border":** Use thin, 1px lines in the Tertiary (Clay) color to define sections without adding visual weight.
4.  **Glassmorphism (Overlays):** For high-end product discovery, use a very light backdrop blur (12px) on top of imagery to maintain a focus on the craft.

## Shapes
We utilize **Soft Geometry**. The `0.25rem` (4px) corner radius provides just enough softness to feel approachable while maintaining the sharp, clean lines of a professional, luxury brand. 

*   **Imagery:** Should remain sharp (0px radius) to emphasize the raw, natural quality of the food and beverages.
*   **Interactive Elements:** Buttons and input fields use the `Soft` radius to contrast against the sharp imagery.
*   **Decorative Accents:** Small circular motifs (representing the "bindi" or holistic unity) may be used for bullet points or page indicators.

## Components

### Buttons
*   **Primary:** Solid Espresso background, White Montserrat Bold text. No shadow, 1px Espresso border.
*   **Secondary:** Ghost style. 1px Espresso border, Espresso text. Transitions to a Terracotta border on hover.
*   **Call-to-Action:** Terracotta background for high-priority global actions (e.g., "Order Reserve").

### Cards
Cards should be "Ghost-style" on the neutral background—defined by thin 1px Clay borders. On hover, apply the soft ambient shadow to create a "lift" effect. Ensure a minimum of 32px internal padding to maintain the premium spacing.

### Input Fields
*   **Style:** Bottom-border only (underline) to mimic high-end stationery. 
*   **Label:** Uses the `label-caps` typography style, floating above the input.
*   **Focus State:** The underline transitions from Clay to Terracotta.

### Lists & Navigation
*   **Navigation:** Top-tier items in Montserrat Medium, 13px, with wide letter-spacing.
*   **Heritage Lists:** For product ingredients or features, use a custom icon of an Indian Breed silhouette or a minimalist grain icon in Terracotta.

### Premium Accents
*   **Texture Overlays:** Use a subtle "grain" or "handmade paper" texture at 3% opacity over the primary parchment background to add tactile depth.