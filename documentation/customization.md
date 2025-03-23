# Customization Guide

## Changing Colors

The main theme color is defined in `scss/style.scss`:

```scss
$theme-color: #49BD49;
```

## Modifying Layout

### Header

The header can be customized in `index.html`. The main navigation is within the `.navbar` class.

### Footer

Footer content can be modified in each HTML file within the `<footer>` tag.

## Tracking System

The tracking system uses `js/index.js`. To modify tracking functionality:

1. Edit the `searchParcel()` function
2. Modify the tracking data structure
3. Update the error handling as needed

## Forms

Contact and booking forms are using Bootstrap's form components. To customize:

1. Modify the form HTML structure
2. Add custom validation
3. Update form styling in SCSS

## Custom Fonts

The template uses:
- ClashDisplay (Variable Font)
- Inter (Google Font)

To change fonts:
1. Update the font imports in `scss/style.scss`
2. Modify the font-family properties in your CSS

## Advanced Customization

### SCSS Variables

Key variables in `scss/style.scss`:

```scss
$theme-color: #49BD49;
$container-max-width: 1320px;
$grid-breakpoints: (
  xs: 0,
  sm: 576px,
  md: 768px,
  lg: 992px,
  xl: 1200px,
  xxl: 1400px
);
```

### Animation Settings

Custom animations can be modified in:
- AOS configurations
- Swiper slider settings
- Custom CSS animations

### SEO Optimization

To optimize your courier service website for search engines, update the meta tags in each HTML file:

#### Meta Tags Example
```html
<meta name="description" content="MoveIt - Professional courier and logistics services offering fast, reliable delivery solutions for businesses and individuals. Track your parcels in real-time.">
<meta name="keywords" content="courier service, parcel delivery, logistics company, package tracking, express delivery, shipping services, MoveIt courier">
<meta name="author" content="MoveIt Courier Services">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

#### Open Graph Tags (For Social Media Sharing)
```html
<meta property="og:title" content="MoveIt - Professional Courier & Logistics Services">
<meta property="og:description" content="Fast and reliable courier services with real-time parcel tracking. Professional delivery solutions for your business needs.">
<meta property="og:image" content="assets/images/moveit-og-image.jpg">
<meta property="og:url" content="https://your-moveit-domain.com">
<meta property="og:type" content="website">
```

#### Twitter Card Tags
```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="MoveIt Courier Services">
<meta name="twitter:description" content="Professional courier and logistics services with real-time tracking. Fast, secure, and reliable delivery solutions.">
<meta name="twitter:image" content="assets/images/moveit-twitter-card.jpg">
```

#### Location Meta Tags (Important for Local SEO)
```html
<meta name="geo.region" content="Your-Region">
<meta name="geo.position" content="latitude;longitude">
<meta name="geo.placename" content="Your City">
```

#### Tips for Courier Website SEO
1. Include location-specific keywords for local SEO
2. Optimize tracking page for search terms like "track parcel" and "package tracking"
3. Use descriptive ALT tags for service-related images
4. Create unique meta descriptions for each service page
5. Regularly update your blog with logistics-related content
6. Ensure fast loading of the tracking system
7. Include customer testimonials with proper schema markup
8. Optimize for mobile users searching for tracking information

## License Management

### Tracking Your License

1. Purchase Verification:
   - Save your purchase receipt from ThemeForest
   - Note your unique Purchase Code
   - Store your order number

2. License Activation:
   ```html
   <!-- Add this comment at the top of your main HTML file -->
   <!--
   Theme: Moveit
   Purchase Code: Your-Purchase-Code
   Licensed to: Your-Name/Company
   License Type: Regular/Extended
   Licensed Domain: your-domain.com
   -->
   ```

3. Domain Registration:
   - Regular License: Register single domain
   - Extended License: Register multiple domains
   - Email support@yourdomain.com with:
     - Purchase code
     - Domain name(s)
     - License type

### License Verification

To verify your license status:
1. Visit: yourdomain.com/verify-license
2. Enter your purchase code
3. System will display:
   - License type
   - Activation date
   - Expiration date
   - Registered domain(s)
   - Support status

### Support Period Tracking

- Regular License:
  ```javascript
  Support Period: 6 months
  Start Date: Purchase Date
  End Date: Purchase Date + 6 months
  ```

- Extended License:
  ```javascript
  Support Period: 12 months
  Start Date: Purchase Date
  End Date: Purchase Date + 12 months
  ```

### Support Renewal

1. Regular License:
   - $29.99/6 months
   - Must renew before expiration
   - Includes all updates

2. Extended License:
   - $59.99/12 months
   - Priority support continues
   - Includes custom modifications
