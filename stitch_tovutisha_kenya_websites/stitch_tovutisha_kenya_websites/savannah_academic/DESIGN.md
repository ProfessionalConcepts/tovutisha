# Design System Specification: The Academic Curator

## 1. Overview & Creative North Star
The Creative North Star for this design system is **"The Academic Curator."** 

Education in Kenya is an intersection of heritage, prestige, and future-forward ambition. This system moves away from the "clunky portal" aesthetic to an editorial, high-end experience. We treat information not as data to be managed, but as content to be curated. By utilizing a "High-End Editorial" lens, we employ intentional white space, sophisticated tonal layering, and authoritative typography to create a sense of calm, institutional trust, and digital excellence. 

The layout breaks the traditional grid through **asymmetric focal points**: hero sections may be offset, and secondary information is tucked into sophisticated "nested" layers, ensuring the interface feels like a premium publication rather than a standard software suite.

---

## 2. Colors & Surface Architecture

Our palette is rooted in the deep authority of Kenyan Navy and the warmth of the Savannah Gold. To achieve a premium feel, we strictly govern how these colors interact.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning or containment. Boundaries must be defined solely through background color shifts or tonal transitions.
*   *Implementation:* Use `surface-container-low` for a sidebar sitting on a `surface` background. The change in hex code provides the boundary; no line is required.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine Kenyan stationery.
*   **Background (`#f7fafc`):** The canvas.
*   **Surface Container Low:** The primary content area.
*   **Surface Container Lowest (`#ffffff`):** Reserved for high-priority floating cards to create a "lifted" effect.
*   **Surface Container High:** Used for utility panels or inset data sections.

### The "Glass & Gradient" Rule
To avoid a "flat" or "cheap" look, main CTAs and Hero backgrounds should utilize a **Signature Texture**.
*   **Primary Gradient:** Linear 135° from `primary` (#002045) to `primary_container` (#1a365d).
*   **Glassmorphism:** For floating navigation or modals, use `surface_container_lowest` at 80% opacity with a `24px` backdrop-blur. This softens edges and integrates the UI components into the environment.

---

## 3. Typography: Editorial Authority

We use **Inter** not as a generic sans-serif, but as a modern grotesque that conveys precision.

*   **Display (lg/md):** Used for enrollment numbers or school mottos. Set with `-0.02em` letter spacing to feel "tight" and professional.
*   **Headline (sm/md):** Reserved for section titles. These should never be paired with a border; let the weight of the type define the start of a new section.
*   **Body (md):** The workhorse. Always ensure a line height of `1.6` for readability in long-form application instructions.
*   **Label (sm/md):** Used for "Status" tags and metadata. These are always uppercase with `0.05em` letter spacing to distinguish them from body copy.

---

## 4. Elevation & Depth: Tonal Layering

Traditional "drop shadows" are often a crutch for poor layout. This system uses **Tonal Layering** first.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` background. This creates a soft, natural "lift" that mimics ambient light.
*   **Ambient Shadows:** Where a floating effect is required (e.g., a "New Application" FAB), use a shadow with a blur radius of `32px` and an opacity of `6%`. The shadow color must be a tint of `on-surface` (`#181c1e`), never pure black.
*   **The Ghost Border Fallback:** If accessibility requires a border (e.g., high-contrast mode), use the `outline_variant` token at **15% opacity**. 100% opaque borders are forbidden.

---

## 5. Components

### Navigation (The Horizon Bar)
*   **Style:** No bottom border. Use a subtle `surface_container_low` background.
*   **Interaction:** Active states are marked by a `secondary` (Gold) underline of `3px` height, but the line width should only be 60% of the menu text width for a bespoke, high-fashion feel.

### School Cards (The Insight Card)
*   **Visuals:** No borders. `surface-container-lowest` background. 
*   **Imagery:** School photos should use the `md` (0.75rem) corner radius. Overlay a subtle gradient from transparent to `primary` (40% opacity) at the bottom to allow white text labels to pop.
*   **Spacing:** Use "Breathing Room"—padding should be at least `xl` (1.5rem) to signify premium quality.

### Data Tables for Admins (The Clean Slate)
*   **Rules:** Forbid all vertical and horizontal lines. 
*   **Separation:** Use alternating row colors (Zebra striping) with `surface` and `surface-container-low`.
*   **Typography:** Column headers must be `label-sm` in `on_surface_variant` for a "Data-Journalism" aesthetic.

### Application Forms (The Guided Path)
*   **Inputs:** `surface-container-highest` background with a `2px` bottom-only stroke in `outline` that transitions to `secondary` (Gold) on focus.
*   **Layout:** Single-column layout with wide margins to reduce "form fatigue."
*   **Buttons:** 
    *   *Primary:* `primary` background, white text, `md` corner radius. 
    *   *Secondary:* `secondary_container` background with `on_secondary_container` text.

### Additional Component: Institutional Badges
*   **Usage:** For school accreditation or status.
*   **Style:** Pill-shaped (`full` roundedness) using `tertiary_fixed_dim` background with `on_tertiary_fixed` text for a sophisticated Teal-on-Teal look.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use `tertiary` (Teal) sparingly as an "Expert Insight" color—reserved for tips, help text, or active success states.
*   **Do** leverage the `xl` (1.5rem) spacing for outer page margins to create an "Editorial" frame.
*   **Do** use asymmetrical layouts where the main content occupies 7 columns and the sidebar/metadata occupies 3 in a 12-column grid.

### Don’t
*   **Don’t** use a shadow and a border at the same time. Choose one (ideally neither, favoring tonal shifts).
*   **Don’t** use 100% black text. Always use `on_surface` (`#181c1e`) for a softer, premium ink look.
*   **Don’t** use "Alert Red" for everything. Use `error_container` with `on_error_container` text for a more integrated, less jarring error state.