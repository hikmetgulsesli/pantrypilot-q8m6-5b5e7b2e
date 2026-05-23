---
name: PantryPilot Q8M6
colors:
  surface: '#f8faf5'
  surface-dim: '#d9dbd6'
  surface-bright: '#f8faf5'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4ef'
  surface-container: '#edeee9'
  surface-container-high: '#e7e9e4'
  surface-container-highest: '#e1e3de'
  on-surface: '#191c19'
  on-surface-variant: '#414942'
  inverse-surface: '#2e312e'
  inverse-on-surface: '#f0f1ec'
  outline: '#717971'
  outline-variant: '#c1c9bf'
  surface-tint: '#376847'
  primary: '#316342'
  on-primary: '#ffffff'
  primary-container: '#4a7c59'
  on-primary-container: '#e1ffe5'
  inverse-primary: '#9dd3aa'
  secondary: '#595f68'
  on-secondary: '#ffffff'
  secondary-container: '#dde3ee'
  on-secondary-container: '#5f656e'
  tertiary: '#834751'
  on-tertiary: '#ffffff'
  tertiary-container: '#9f5f69'
  on-tertiary-container: '#fff5f5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b9efc5'
  primary-fixed-dim: '#9dd3aa'
  on-primary-fixed: '#00210e'
  on-primary-fixed-variant: '#1e5031'
  secondary-fixed: '#dde3ee'
  secondary-fixed-dim: '#c1c7d2'
  on-secondary-fixed: '#161c24'
  on-secondary-fixed-variant: '#414750'
  tertiary-fixed: '#ffd9dd'
  tertiary-fixed-dim: '#ffb2bc'
  on-tertiary-fixed: '#380b16'
  on-tertiary-fixed-variant: '#6d363f'
  background: '#f8faf5'
  on-background: '#191c19'
  surface-variant: '#e1e3de'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  mono-data:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 24px
---

## Brand & Style
The design system focuses on utility, efficiency, and calmness. Targeted at users managing personal or household inventory, the UI prioritizes clarity over decoration. The "dense but calm" aesthetic is achieved through a systematic application of whitespace within components, ensuring that high-density data remains legible and stress-free.

The style is **Corporate / Modern** with a lean toward **Minimalism**. It utilizes a structured grid and subtle tonal layering to keep the focus on the inventory items. The emotional response should be one of organized control—transforming the chore of inventory management into a precise, systematic experience.

## Colors
This design system employs a grounded, organic palette. **Sage Green** serves as the primary action color, signaling growth and replenishment. **Warm Slate** provides a professional anchor for secondary UI elements like icons and sub-headers.

The background is a high-contrast **Light Surface** to maintain a "clean" feel, while **Functional Accents** (Amber, Red, Blue) are reserved strictly for inventory status updates. Borders are kept light to define structure without adding visual noise.

## Typography
Inter is used exclusively for its exceptional legibility in data-heavy environments. The typography system prioritizes a tight scale to support the "dense" requirement.

Special attention is given to **tabular figures** (`tnum`) for quantity and date columns to ensure columns align perfectly for quick scanning. Labels use a slightly increased letter-spacing and uppercase styling to differentiate metadata from primary content.

## Layout & Spacing
The design system utilizes a **Fluid Grid** model built on a 4px baseline. In a pantry context, data density is critical; therefore, vertical rhythm is tight (8px or 16px) while horizontal margins remain generous (24px) to provide "calm" breathing room.

- **Desktop:** 12-column grid with 16px gutters.
- **Tablet:** 8-column grid with 16px gutters.
- **Mobile:** 4-column grid with 12px gutters.

Components should favor a "compact" density setting, reducing internal padding to allow more items to be visible on a single screen without scrolling.

## Elevation & Depth
Depth is communicated through **Tonal Layers** and **Low-Contrast Outlines**. 

- **Level 0 (Surface):** Used for the main application background (#F8F9FA).
- **Level 1 (Card/Container):** White (#FFFFFF) surfaces with a 1px border (#E9ECEF).
- **Level 2 (Interactive/Overlay):** A subtle ambient shadow (0px 2px 4px rgba(0,0,0,0.05)) is applied only to active elements like open menus or dragged list items. 

Shadows must remain extremely diffused and neutral, avoiding any heavy dark tones to keep the UI light and "airy."

## Shapes
A "Soft" roundedness (4px) is applied globally. This radius is small enough to maintain a professional, utility-first appearance while being large enough to feel modern and accessible.

- **Standard Buttons/Inputs:** 4px radius.
- **Badges/Status Chips:** Full pill-shape (100px) to distinguish them from interactive buttons.
- **Containers:** 8px radius for larger sections or cards to create a clear structural hierarchy.

## Components
### Buttons
Buttons use the Primary Sage Green for "Add" or "Confirm" actions. They are compact (32px height) with `body-sm` bold text. Secondary buttons use a 1px border with Warm Slate text.

### Inputs
Fields feature a 1px border in `#E9ECEF` that shifts to Sage Green on focus. Use `body-md` for input text and `label-bold` for field headers.

### Status Badges
Inventory levels use specific color coding:
- **In Stock:** Sage Green background (10% opacity) with solid Sage Green text.
- **Expiring:** Amber background (10% opacity) with solid Amber text.
- **Out of Stock:** Red background (10% opacity) with solid Red text.

### Data Lists
Items are presented in tight rows with a 1px bottom border. Hover states use a subtle grey (#F1F3F5) to highlight the current row.

### Quantity Toggles
A specialized component for pantry management: a compact group containing "minus", "number", and "plus" icons to allow rapid inventory adjustments without opening details.