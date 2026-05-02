# Marcus Piper Solutions

## Overview

A high-conversion digital services website for Marcus Piper, positioned as a practical builder for small businesses, nonprofits, and local operators. Brand: **Marcus Piper Solutions** — websites, tools, and automation systems for real-world problems.

Built with vanilla HTML5, CSS3, and JavaScript. Light cream/charcoal/emerald theme everywhere except a preserved dark Virginia-skyline hero banner used as a visual accent.

The site has four pages: home (services, featured projects bento, workflow, trust, about, contact form), projects (full project showcase), about (bento-timeline + contact form), and card (shareable digital business card).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Technology Stack**: Pure HTML5, CSS3, and vanilla JavaScript with no build tools or frameworks
- **Design Pattern**: Multi-page static site with directory-based URLs for GitHub Pages compatibility
- **Styling Approach**: Light theme with custom CSS variables. Cream background (#faf8f3), charcoal text (#1a1f2e), emerald accent (#059669), blue secondary (#2563eb). Cards are solid white with soft shadows (no glassmorphism). Inter and Montserrat fonts via Google Fonts.
- **Hero Banner**: Intentionally dark (Virginia skyline at sunset, brightness 0.55, dark overlay) — preserved as a visual accent that contrasts the light theme.
- **Page Structure**:
  - `index.html` - Home: hero banner, hero text, services, featured projects bento (7 tiles), workflow/process, why-work-with-me, about-me, final CTA, inline contact form
  - `projects/index.html` - Full solutions showcase (3 sections: client work, community apps, internal tools)
  - `about/index.html` - Bento-timeline layout, profile photo, full contact form with Project Type field
  - `card/index.html` - Shareable digital business card with vCard download, QR code, lead form

### Homepage Sections (in order)
1. **Header** — clean white sticky nav, "Marcus Piper Solutions" branding
2. **Hero Banner** — Virginia skyline (dark, preserved as accent) with glassmorphism badge
3. **Hero Section** — Headline "Websites, tools, and automation systems built for real-world problems." + dual CTA
4. **Value Bar** — Soft gradient tagline
5. **Services** — 5 cards (Business Websites & E-Commerce, Custom Web Apps & Tools, Automation & SMS Systems, Website Cleanup & Redesign, Integrations & APIs)
6. **Featured Projects** — Bento grid with 7 tiles, each with status badge (Live/Beta/Draft) and problem statement:
   - Rev. Dr. Doshie Piper (large, video preview, Live)
   - Netta McGee Creations (medium, video preview, Live)
   - WasteNot Alexandria (third, Live)
   - CurveLink (third, Beta)
   - Southern Charm BBQ (third, Draft)
   - LaunchFrame (half, Beta)
   - ShowcaseFlow (half, Beta)
7. **How I Work** — 5-step process (Discover, Plan, Build Fast, Test on Mobile, Improve) with note about AI-assisted dev (Replit, ChatGPT, Gemini)
8. **Why Work With Me** — 4 trust points
9. **About Me** — Photo + practical-builder bio + skill chips
10. **Final CTA** — Dark gradient panel with white CTA button
11. **Contact Form** — Inline form with Project Type select (7 categories) + AJAX submission with success/error feedback
12. **Footer** — Brand line + nav links + copyright with auto-current-year
13. **Smart Interaction Card** — Floating "Chat with Marcus" button with quick links

### JavaScript Modules
- **chat.js**: Simple chatbot with predefined Q&A responses, no backend required
- **commit.js**: Fetches and displays recent GitHub commits from specified repositories using GitHub's public API
- **toggle.js**: Handles before/after image toggling and rotation for project showcases
- **Inline form handler** (in index.html and about/index.html): Async fetch to Formspree with success/error UI

### Deployment Strategy
- **Primary Hosting**: GitHub Pages (static site hosting)
- **Secondary Hosting**: Replit Static Deployment (configured, public dir = ".")
- **URL Structure**: Directory-based URLs (`/projects/`, `/about/`, `/card/`) with relative paths for GitHub Pages
- **GitHub Sync**: Push via `git push https://MarcusPiperAllen:$GITHUB_TOKEN@github.com/MarcusPiperAllen/Marcus_Hobby.git main`
- **GitHub Token**: Stored in Replit Secrets as `GITHUB_TOKEN`
- **Replit Deployment**: Published at `marcus-piper-solutions.replit.app`

### Design Decisions
- **No Build Process**: Chosen for simplicity and ease of maintenance; all files are served directly
- **Vanilla JavaScript**: No frameworks to minimize complexity and load times
- **CSS Variables**: Used extensively for consistent theming and easy customization
- **Hybrid Theme**: Light cream/white throughout for trust and readability; dark hero banner kept as a single high-impact visual moment
- **Solid white cards** instead of glassmorphism in the body (glassmorphism was preserved only in the dark hero banner badge)
- **Charcoal section headings** (font-weight 800, letter-spacing -1px) instead of emerald, for clarity and a modern boutique-agency feel
- **Status badges on every project tile** (Live / Beta / Draft) so visitors immediately understand what's shipped vs. in-progress
- **Problem-first project copy**: every featured project tile leads with the real problem it solves
- **Relative Paths**: All navigation uses relative paths (`./`, `../`) for GitHub Pages compatibility
- **Directory-Based URLs**: Pages stored as `folder/index.html` for clean URLs on static hosting
- **Version Cache Busting**: CSS and JS files include `?v=2.0` query parameters

## Featured Projects (live URLs)

- **Rev. Dr. Doshie Piper** — https://marcuspiperallen.github.io/rev-dr-doshie-piper-site/
- **Netta McGee Creations** — https://netta-mcgee-creations.netlify.app/#product-grid
- **WasteNot Alexandria** — https://wastenot.replit.app/
- **CurveLink** — https://curve-link.replit.app/
- **Southern Charm BBQ** — https://southern-cha.replit.app/
- **LaunchFrame** — internal tool, beta (no public URL yet)
- **ShowcaseFlow** — internal tool, beta (no public URL yet)

## External Dependencies

### Third-Party Services
- **GitHub API**: Public commits endpoint for project activity display (no auth required)
- **Google Analytics**: GA4 integration prepared (placeholder `G-XXXXXXXXXX`, needs real Measurement ID)
- **Google Fonts**: Inter and Montserrat font families via CDN
- **Formspree**: Contact form submission on home and about pages (placeholder endpoint `xjgewzkp` — needs real ID)
- **QR Server API**: Generates QR codes for the digital business card (public, no auth)

### Hosting Platforms
- **GitHub Pages**: Primary production at `https://marcuspiperallen.github.io/Marcus_Hobby/`
- **Replit Static Deployment**: `marcus-piper-solutions.replit.app`
- **Replit Workspace**: Development environment with live preview via `python -m http.server 5000`

### Contact
- **Email**: marcuspiperallen@gmail.com
- **Phone**: 210-392-2392
- **LinkedIn**: https://www.linkedin.com/in/marcus-piper-87a6a61a9/
- **GitHub**: https://github.com/MarcusPiperAllen

### No Backend Required
Fully static site with no server-side processing, database, or authentication. All interactivity is client-side JavaScript.
