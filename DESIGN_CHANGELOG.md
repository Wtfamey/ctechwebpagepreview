# Design Update Changelog

Track of layout and design changes made to the CTech Labs landing-page clone.
Use this file to revert specific changes if needed.

**Date:** 2025-06-25  
**Goal:** Match original ctechlab.com feel in a single landing page — fix mobile header, reduce desktop blank space, improve section clarity. Colors and content unchanged.

---

## How to revert

| Change | Files to restore / undo |
|--------|------------------------|
| All changes below | `git checkout -- src/styles.css src/components/site/Header.tsx src/components/site/NavBar.tsx src/components/site/Sidebar.tsx src/routes/index.tsx` and delete `src/components/site/ResourcesDownloads.tsx` |
| Desktop layout only | Revert `src/styles.css` desktop `@media (min-width: 1024px)` block |
| Mobile header only | Revert `src/styles.css` mobile block + `Header.tsx` + `NavBar.tsx` |
| Section cards only | Remove `.section-wrapper` rules from `styles.css` and restore `<div className="sep" />` in `index.tsx` |
| Mobile resources block | Remove `.mobile-resources` from `index.tsx` and related CSS |

---

## Changes made

### 1. Desktop — centered 1000px layout (fixes blank side space)
- **Before:** Content stretched to full viewport width (`width: 100%`).
- **After:** Max width `1000px`, centered — matches original ctechlab.com.
- **Files:** `src/styles.css` (`--site-max-width`, `.site-inner`, `.toparea`, `.footer`)
- **Revert:** Remove `--site-max-width` centering; restore `width: 100%` on `.wraper` and `.toparea`.

### 2. Desktop — header proportions
- **Before:** Percentage-based columns with 220px banner row.
- **After:** Logo 160px, banner flex, grey area 200px, banner row 200px (original proportions).
- **Files:** `src/styles.css`
- **Revert:** Restore previous `16% / flex:1 / 22%` and `--banner-row-height: 220px`.

### 3. Desktop — content column widths
- **Before:** Matter 72% + sidebar 26% of full screen.
- **After:** Matter max 710px + sidebar 240px within 1000px container.
- **Files:** `src/styles.css`
- **Revert:** Restore `.matter { width: 72% }` and `.rightpanel { width: 26% }`.

### 4. Mobile — logo + slideshow side by side
- **Before:** Slideshow wrapped below logo at full width (`flex-wrap: wrap`, `bannerarea width: 100%`).
- **After:** Logo 30% + slideshow 70% in one row — matches original mobile layout.
- **Files:** `src/styles.css`
- **Revert:** Restore `flex-wrap: wrap` and `.bannerarea { width: 100% }`.

### 5. Mobile — menu button placement
- **Before:** Hamburger floated with `position: absolute; top: -48px` inside nav bar.
- **After:** Menu button in header row (right of slideshow); state lifted to `Header.tsx`.
- **Files:** `Header.tsx`, `NavBar.tsx`, `src/styles.css`
- **Revert:** Move toggle back into `NavBar.tsx` with old absolute CSS.

### 6. Landing section cards
- **Before:** Sections separated only by thin `<div className="sep" />` dividers.
- **After:** Each section in a light green card (`.section-wrapper`) with border and padding.
- **Files:** `src/styles.css`, `src/routes/index.tsx` (removed `sep` dividers)
- **Revert:** Remove `.section-wrapper` styles; re-add `sep` elements in `index.tsx`.

### 7. Typography line-height
- **Before:** Many headings used `line-height: 18px` causing cramped/overlapping text.
- **After:** Proportional line-heights (1.2–1.55) for readability.
- **Files:** `src/styles.css`
- **Revert:** Restore `line-height: 18px` on heading classes.

### 8. Product card styles
- **Before:** `product-card`, `product-link`, `product-image` classes had no CSS.
- **After:** Basic product grid styling added.
- **Files:** `src/styles.css`
- **Revert:** Remove product-card block from CSS.

### 9. Resources panel refactor
- **Before:** All resource links inline in `Sidebar.tsx`.
- **After:** Shared `ResourcesDownloads.tsx` component used by sidebar and mobile.
- **Files:** `ResourcesDownloads.tsx`, `Sidebar.tsx`
- **Revert:** Delete `ResourcesDownloads.tsx`; restore inline `Sidebar.tsx` content.

### 10. Mobile — Resources & Downloads visible
- **Before:** Sidebar hidden on mobile; resources not accessible.
- **After:** `.mobile-resources` section at bottom of page on mobile only.
- **Files:** `index.tsx`, `src/styles.css`
- **Revert:** Remove mobile-resources block from `index.tsx` and CSS.

### 11. Carousel on mobile
- **Before:** 22 dot indicators shown on small screens.
- **After:** Dots hidden on mobile; prev/next arrows kept.
- **Files:** `src/styles.css`
- **Revert:** Remove `.carousel-dots { display: none }` in mobile media query.

### 13. Full-width layout (2025-06-25 revision — supersedes item 1)
- **Before:** 1000px centered box left large empty margins on wide screens.
- **After:** True full-width layout — header, content, and footer span the viewport. Main column flexes to fill space; sidebar fixed at ~300px. Responsive gutters via `clamp()`. Banner scales with screen width.
- **Files:** `src/styles.css`, `ProductsSection.tsx`
- **Revert:** Restore `--site-max-width: 1000px` and centered `.toparea` rules from item 1.

- **Files:** `useSiteHeaderHeight.ts`, `Header.tsx`
- **Purpose:** Prevents fixed header from overlapping content.
- **Revert:** Remove hook; restore hardcoded `padding-top: 260px`.

---

## Unchanged (by design)
- All section text, images, links, and PDFs
- Color palette: `#CCEEB5`, `#e6f7d4`, `#006600`, `#262626`, `#FFCC00`
- Navigation items and anchor structure
- Banner carousel images and auto-advance
- Footer content and social links
