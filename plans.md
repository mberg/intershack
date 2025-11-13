# Intershack Website Conversion Plan - ASP.NET to Hugo

## Project Overview
Converting the Intershack website (Jay Peak, Vermont skiing & social group) from legacy ASP.NET to a modern Hugo static site with Tailwind CSS, deployed on Vercel.

## Site Analysis Summary
The current website is a legacy ASP.NET site with:
- Static HTML pages (converted from .aspx)
- Custom CSS with dated design patterns
- jQuery-based dropdown navigation
- Content-heavy homepage with news/events
- Photo galleries organized by year/event
- Member services and information pages
- No dynamic functionality currently active

## Phase 1: Project Setup & Structure ✅

### 1.1 Initialize Hugo Project
- [x] Create new Hugo site structure
- [x] Set up modern theme with Tailwind CSS
- [x] Configure build pipeline for Vercel
- [x] Set up development environment

### 1.2 Content Architecture
```
content/
├── _index.md (homepage)
├── about/
│   ├── _index.md
│   └── history.md
├── events/
│   ├── _index.md
│   ├── golf.md
│   ├── skiing.md
│   └── social.md
├── news/
│   └── (individual news posts as markdown)
├── membership/
│   └── _index.md
├── services/
│   ├── _index.md
│   ├── freds-energy.md
│   └── discounts.md
└── gallery/
    └── (photo galleries)
```

## Phase 2: Design System Implementation

### 2.1 Modern Theme with Tailwind
- [ ] Clean, responsive navigation with mobile menu
- [ ] Hero section with Jay Peak Vermont imagery
- [ ] Card-based layout for events/news
- [ ] Modern typography (Inter/Open Sans)
- [ ] Color scheme: Modernized blue/orange theme
- [ ] Dark mode support

### 2.2 Component Templates
- [ ] Navigation header (sticky)
- [ ] Event cards
- [ ] News feed
- [ ] Photo galleries (lightbox)
- [ ] Committee member cards
- [ ] Footer with contact/social

## Phase 3: Content Migration

### 3.1 Homepage Conversion
- [ ] Extract news/events to individual markdown files
- [ ] Create front matter for dates, categories
- [ ] Implement homepage sections:
  - Hero banner
  - Upcoming events
  - Latest news
  - Committee members
  - Quick links

### 3.2 Page Content Migration
- [ ] Convert History page to markdown
- [ ] Golf tournament results → structured data
- [ ] Membership info → markdown with forms
- [ ] Services pages → markdown
- [ ] Links → data file

### 3.3 Photo Gallery Migration
- [ ] Organize photos by event/year
- [ ] Create gallery pages with Hugo's image processing
- [ ] Implement lightbox functionality
- [ ] Add captions and metadata

## Phase 4: Features & Functionality

### 4.1 Dynamic Features
- [ ] Event calendar (using Hugo data files)
- [ ] News/blog system with pagination
- [ ] Photo galleries with filtering
- [ ] Search functionality
- [ ] RSS feed for news

### 4.2 Forms & Interactivity
- [ ] Contact form (Vercel Forms or Formspree)
- [ ] Membership signup
- [ ] Event RSVP system
- [ ] Newsletter subscription

## Phase 5: SEO & Performance

### 5.1 Optimization
- [ ] Image optimization/lazy loading
- [ ] Meta tags and Open Graph
- [ ] XML sitemap
- [ ] Structured data for events
- [ ] Google Analytics migration (UA-1390129-2)

### 5.2 Accessibility
- [ ] ARIA labels
- [ ] Keyboard navigation
- [ ] Alt text for images
- [ ] Contrast compliance

## Phase 6: Vercel Deployment

### 6.1 Deployment Setup
- [ ] Configure vercel.json
- [ ] Set up build commands
- [ ] Environment variables
- [ ] Custom domain configuration (intershack.com)

### 6.2 CI/CD Setup
- [ ] GitHub repository integration
- [ ] Auto-deploy on push
- [ ] Preview deployments
- [ ] Branch deployments

## Migration Checklist

- [ ] Extract all text content to markdown
- [ ] Organize and optimize images
- [ ] Create Hugo taxonomies (categories/tags)
- [ ] Set up redirects from old URLs
- [ ] Test all external links
- [ ] Mobile responsiveness testing
- [ ] Cross-browser testing
- [ ] Performance optimization
- [ ] 301 redirects from old site
- [ ] DNS configuration

## Technical Specifications

### Hugo Configuration
- Hugo Extended v0.120+ (for SCSS/Tailwind)
- Tailwind CSS v3
- Alpine.js for interactivity
- Responsive images
- JSON-LD structured data

### Vercel Configuration
- Build Command: `hugo --gc --minify`
- Output Directory: `public`
- Node.js 18.x
- Hugo installation via package.json

### Content Management
- Markdown files with front matter
- Data files for structured content
- Page bundles for galleries
- Shortcodes for common patterns

## Key Content Areas

### Current Sections
1. **Home** - News, events, announcements
2. **About** - History of Intershack (56+ years)
3. **Events** - Golf tournaments, skiing events, social gatherings
4. **Membership** - Registration and benefits
5. **Member Services** - Fred's Energy Propane, Merchant discounts
6. **Gallery** - Event photos from 2018-2025
7. **Links** - Jay Peak weather, conditions, other resources

### Committee Members
- Laurie Holdron (Social Events)
- Chuck Jaschke (Treasurer)
- Anne Ireland (Communications)
- Bill Wienand (Propane Rep)
- Ginny Malcolm (Membership)
- Mark & Claire Draper (Winter Downhill Events)

### Regular Events
- Annual Labor Day Golf Tournament (August 31)
- St. Patrick's Day Cocktail Party
- Valentine's Day Dinner
- Christmas Skating & Pizza Party
- Welcome Cocktail Party (November)
- Jay Peak Tailgate Party (April)
- George Syrovatka Ski Race

## Progress Log

### August 25, 2025
- Created initial plan document
- Analyzed existing site structure
- Identified content migration requirements
- Set up Vercel deployment strategy

### Current Status
- ✅ Hugo site initialized with custom theme
- ✅ Tailwind CSS integrated and configured
- ✅ Base templates created (header, footer, navigation)
- ✅ Responsive mobile navigation
- ✅ Homepage template with sections for news, events, committee
- ✅ Vercel configuration ready
- ✅ Local development server running at http://localhost:1313

### Next Steps
1. Migrate actual content from old site (no made-up content)
2. Copy images from oldsite directory
3. Create content pages for all sections
4. Set up photo galleries
5. Test and deploy to Vercel