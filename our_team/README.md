# Our Team Page - Responsive Implementation

## Overview
This is a fully responsive "Our Team" page for the MedCheck project that combines the mobile and desktop designs into a single, semantic, mobile-first implementation using pure CSS (no JavaScript required). The page showcases all 18 team members across different roles including Project Managers, Data Analysts, UI/UX Designers, Front-End Engineers, Back-End Engineers, and Cybersecurity specialists.

## File Structure
```
our_team/
├── our_team.html          # Main HTML file (responsive, semantic)
├── our_team.css           # Consolidated CSS with media queries
├── README.md              # This documentation file
└── [image assets]         # Various team member photos and icons
```

## Key Features

### 🎯 **Responsive Design**
- **Mobile-first approach** with breakpoints at:
  - **600px**: Tablet styles (2-column team grid)
  - **1024px**: Desktop styles (3-column team grid, desktop navigation)
  - **1280px**: Large desktop (4-column team grid)

### 🔧 **CSS-Only Interactive Elements**
- **Expandable team member profiles** using radio buttons and CSS selectors
- **Mobile hamburger menu** with slide-down animation
- **Profile and notification dropdowns** with hover states
- **Smooth animations** and transitions throughout

### ♿ **Accessibility Features**
- Semantic HTML5 elements (`<main>`, `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`)
- Proper ARIA labels and landmarks
- Screen reader accessible text (`.sr-only` class)
- Keyboard navigation support with visible focus states
- Alternative text for all images with `loading="lazy"`
- Reduced motion support for users who prefer it

### 🎨 **Design System**
- **Colors**: Green theme (#059669 primary, #005f00 footer background)
- **Typography**: DM Sans font family with proper hierarchy
- **Grid System**: CSS Grid with responsive columns
- **Cards**: Elevated design with hover effects and smooth transitions

## Breakpoint Details

### Mobile (Default - up to 599px)
- Single column team grid
- Mobile hamburger menu
- Stacked footer sections
- Compact header with essential navigation only

### Tablet (600px - 1023px)
- Two-column team grid
- Same mobile navigation pattern
- Two-column footer layout
- Larger hero text and spacing

### Desktop (1024px - 1279px)
- Three-column team grid
- Full desktop navigation bar
- Four-column footer layout
- Desktop user profile display
- Enhanced hover effects

### Large Desktop (1280px+)
- Four-column team grid
- Larger typography scaling
- Maximum content width constraints

## CSS-Only Toggle Implementation

### Team Member Details
- Uses `input[type="radio"]` with `name="team-member"`
- Ensures only one member's details can be expanded at a time
- CSS selectors: `.member-toggle:checked ~ .member-details`
- Smooth expand/collapse animations with `max-height` transitions

### Navigation Dropdowns
- Uses `input[type="checkbox"]` for toggle state
- CSS selectors: `.profile-toggle:checked ~ .profile-dropdown`
- Fade-in animations with opacity and transform

### Mobile Menu
- Uses `input[type="checkbox"]` for open/close state
- Slide-down animation from top of viewport
- Full-screen overlay with smooth transitions

## Image Assets Required

### Team Member Photos
- `Rectangle 9.png` - Used for odd-numbered team members
- `Rectangle 10.png` - Used for even-numbered team members

### Navigation & UI Icons
- `logo.svg` - Main MedCheck logo
- `Frame 162.svg` - Profile dropdown icon
- `Frame 161.svg` - Notification bell icon
- `menu-line.svg` - Mobile hamburger menu icon
- `Group 23.png` - User profile picture (desktop)
- `Ellipse 9.png` - Notification avatar

### Social Media Icons
- `facebook-circle-fill.svg`
- `instagram-fill.svg`
- `linkedin-box-fill.svg`
- `twitter-x-line.svg`

### Footer Icons
- `001-facebook.svg`
- `003-twitter.svg`
- `004-instagram.png`
- `Submit.svg` - Newsletter submit button

## Browser Compatibility
- **Modern browsers**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **CSS Grid support**: All modern browsers (IE 11+ with prefixes)
- **CSS Custom Properties**: Modern browsers only
- **Flexbox**: Full support across all browsers

## Performance Optimizations
- **Lazy loading** for all images (`loading="lazy"`)
- **GPU acceleration** for smooth animations (`transform: translateZ(0)`)
- **Efficient CSS selectors** avoiding deep nesting
- **Minimal reflows** using transforms instead of layout properties
- **Preconnect** to Google Fonts for faster font loading

## Testing Instructions

### Desktop Testing (1024px+)
1. **Navigation**: Click desktop navigation items
2. **Profile dropdown**: Click profile icon to open/close dropdown
3. **Notifications**: Click notification icon to view dropdown
4. **Team interaction**: Click team member names to expand details
5. **Footer**: Test all footer links and newsletter signup

### Tablet Testing (600px - 1023px)
1. **Layout**: Verify 2-column team grid
2. **Navigation**: Test mobile menu functionality
3. **Touch interactions**: Tap team members to expand details
4. **Footer**: Check 2-column footer layout

### Mobile Testing (< 600px)
1. **Single column**: Verify single-column team layout
2. **Mobile menu**: Test hamburger menu slide-down
3. **Touch targets**: Ensure all interactive elements are adequately sized (44px minimum)
4. **Viewport**: Test in both portrait and landscape orientations

### Accessibility Testing
1. **Keyboard navigation**: Tab through all interactive elements
2. **Screen reader**: Test with VoiceOver (Mac) or NVDA (Windows)
3. **Focus visibility**: Ensure focus states are clearly visible
4. **Color contrast**: Verify WCAG AA compliance (4.5:1 ratio minimum)

### Cross-Browser Testing
- Test in Chrome, Firefox, Safari, and Edge
- Verify CSS Grid fallbacks work properly
- Check font loading and rendering
- Validate smooth animations across browsers

## Code Quality Standards
- **HTML**: Valid HTML5, semantic markup
- **CSS**: BEM-inspired class naming, mobile-first media queries
- **Performance**: Optimized for fast loading and smooth interactions
- **Maintainability**: Well-commented, organized code structure

## Future Enhancements
- Add team member search/filter functionality
- Implement dark mode support
- Add animation on scroll (AOS) effects
- Include team member role filtering
- Add print-specific styling optimizations

## Deployment Notes
- Ensure all image assets are in the same directory as HTML/CSS files
- Test font loading from Google Fonts CDN
- Validate HTML and CSS before deployment
- Run accessibility audit tools (aXe, WAVE)
- Test on actual mobile devices, not just browser dev tools

---

**Last Updated**: January 2025  
**Version**: 1.0  
**Author**: MedCheck Development Team
