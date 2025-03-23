# Quick Start Customization Guide

## Basic Settings
```scss
// In scss/style.scss - Theme Colors & Fonts
$theme-color: #49BD49;
$font-family-base: 'ClashDisplay-Variable';
$font-secondary: 'Inter';
```

## Tracking System
```javascript
// In js/index.js - Change tracking data source
async function fetchData() {
  return await fetch('your-api-endpoint');
  // or use static data:
  // return { "TRK123": { /* your tracking data */ } };
}
```

## Layout & Content
```html
<!-- Update logo -->
<a class="navbar-brand" href="./index.html">
  <img src="assets/images/your-logo.png" alt="Logo">
</a>

<!-- Modify contact info -->
<div class="contact-info">
  <span>your@email.com</span>
  <span>+1 234 567 890</span>
</div>
```

## Quick Tips
1. Put images in `assets/images/`
2. Edit styles in `scss/style.scss`
3. Update content in HTML files
4. Test all changes on mobile devices

## Build
```bash
npm install  # First time setup
npm start    # Development
npm run build  # Production
```
