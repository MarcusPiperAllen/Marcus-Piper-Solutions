# Marcus Piper Digital Services

## Overview

A professional digital services website for web developer Marcus Piper, positioned as a boutique agency serving small businesses, community leaders, and local brands. Built with vanilla HTML5, CSS3, and JavaScript, featuring a dark navy (#0f172a) theme with glassmorphism effects and teal (#06b6d4) accents. The site includes three pages: home (services, client work, process, trust), projects (solutions showcase with video previews), and about (bento-timeline with contact form).

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Technology Stack**: Pure HTML5, CSS3, and vanilla JavaScript with no build tools or frameworks
- **Design Pattern**: Multi-page static site with directory-based URLs for GitHub Pages compatibility
- **Styling Approach**: Custom CSS with CSS variables for theming, glassmorphism effects, and responsive design using Inter and Montserrat fonts from Google Fonts
- **Page Structure**:
  - `index.html` - Home page with services, selected client work (bento grid), process, trust, and CTA sections
  - `projects/index.html` - Solutions showcase with video previews of client work
  - `about/index.html` - About page with bento-timeline layout, profile photo, and contact form

### Homepage Sections (in order)
1. **Hero Banner** - Virginia skyline with glassmorphism badge
2. **Hero Section** - Headline, subtext, two CTA buttons (View Client Work / Start a Project)
3. **Value Bar** - Short tagline
4. **Services** - 5 service cards (Websites, E-Commerce, Cleanup & Redesign, Custom Tools, Automation)
5. **Selected Client Work** - Bento grid with video hover previews (Rev. Dr. Doshie Piper, Netta McGee Creations)
6. **How I Work** - 4-step process (Discover, Build, Refine, Launch)
7. **Why Work With Me** - 4 trust points with checkmarks
8. **Final CTA** - Contact call-to-action
9. **Smart Interaction Card** - Floating "Chat with Marcus" card with quick links

### JavaScript Modules
- **chat.js**: Simple chatbot with predefined Q&A responses, no backend required
- **commit.js**: Fetches and displays recent GitHub commits from specified repositories using GitHub's public API
- **toggle.js**: Handles before/after image toggling and rotation for project showcases

### Deployment Strategy
- **Primary Hosting**: GitHub Pages (static site hosting)
- **Secondary Hosting**: Replit for development and preview
- **URL Structure**: Directory-based URLs (`/projects/`, `/about/`) with relative paths for GitHub Pages
- **GitHub Sync**: Push via `git push https://MarcusPiperAllen:$GITHUB_TOKEN@github.com/MarcusPiperAllen/Marcus_Hobby.git main`
- **GitHub Token**: Stored in Replit Secrets as `GITHUB_TOKEN`

### Design Decisions
- **No Build Process**: Chosen for simplicity and ease of maintenance; all files are served directly
- **Vanilla JavaScript**: No frameworks to minimize complexity and load times
- **CSS Variables**: Used extensively for consistent theming and easy customization
- **Relative Paths**: All navigation uses relative paths (`./`, `../`) instead of absolute for GitHub Pages compatibility
- **Directory-Based URLs**: Pages stored as `folder/index.html` for clean URLs on static hosting
- **Version Cache Busting**: CSS and JS files include `?v=1.1` query parameters

## External Dependencies

### Third-Party Services
- **GitHub API**: Public commits endpoint for project activity display (no auth required)
- **Google Analytics**: GA4 integration prepared (placeholder `G-XXXXXXXXXX`)
- **Google Fonts**: Inter and Montserrat font families via CDN
- **Formspree**: Contact form submission (placeholder endpoint — needs real ID)

### Hosting Platforms
- **GitHub Pages**: Primary production at `https://marcuspiperallen.github.io/Marcus_Hobby/`
- **Replit**: Development environment with live preview

### No Backend Required
Fully static site with no server-side processing, database, or authentication. All interactivity is client-side JavaScript.
