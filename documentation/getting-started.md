# Getting Started

## Installation

1. Extract the downloaded zip file
2. You'll find the following directories:
   - `assets/` - Contains all images and other assets
   - `css/` - Contains compiled CSS files
   - `scss/` - Contains SCSS source files
   - `js/` - Contains JavaScript files
   - `fonts/` - Contains custom fonts

## Quick Start

1. Open `index.html` in your code editor
2. Customize the content as needed
3. To modify styles, edit files in the `scss` directory

## Development

### Prerequisites

- Node.js (for SCSS compilation)
- Basic knowledge of HTML, CSS, and JavaScript

### Setting Up Development Environment

1. Install dependencies:
```bash
npm install
```

2. Install required global packages:
```bash
npm install -g sass
npm install -g live-server
```

3. Start development server:
```bash
live-server
```

4. Watch SCSS changes:
```bash
sass --watch scss:css
```

### File Organization

- All HTML files are in the root directory
- Article pages are in the `articles/` directory
- Styles are in `scss/style.scss`
- Custom JavaScript is in `js/index.js`

### Deployment Checklist

1. Build Production Files
```bash
npm run build
```

2. Optimize Assets
- Compress images
- Minify CSS/JS files
- Enable GZIP compression

3. Testing
- Cross-browser testing
- Mobile responsiveness
- Form validation
- Tracking system functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)
