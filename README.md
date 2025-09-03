# Sohin Om Healthcare Management Services

A professional healthcare management website built with React, Vite, and Tailwind CSS, specializing in medical billing and revenue cycle management services.

## 🌟 Features

- **Modern React Application** - Built with React 19 and Vite for optimal performance
- **Responsive Design** - Fully responsive across all devices and screen sizes
- **Professional UI/UX** - Clean, modern design with healthcare-focused aesthetics
- **SEO Optimized** - Complete meta tags, Open Graph, and Twitter Card support
- **Performance Optimized** - Lazy loading, code splitting, and optimized assets
- **Accessibility Ready** - WCAG compliant with proper ARIA labels and semantic HTML
- **PWA Support** - Progressive Web App capabilities with manifest.json
- **Error Handling** - Comprehensive error boundaries and 404 page
- **Navigation** - Smooth scroll-to-top on route changes

## 🏥 Services Offered

- Medical Coding (ICD-10, CPT, HCPCS)
- Claims Processing & Submission
- Denial Management & Appeals
- Accounts Receivable Management
- Prior Authorization Services
- Provider Credentialing
- Revenue Cycle Management

## 🚀 Tech Stack

- **Frontend**: React 19, Vite 7
- **Styling**: Tailwind CSS v4
- **Routing**: React Router DOM
- **Icons**: Lucide React, Heroicons
- **Build Tool**: Vite with optimized production builds
- **Deployment**: Static hosting ready (Netlify, Vercel, etc.)

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd SohinOM
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Create environment file**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview production build**
   ```bash
   npm run preview
   ```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Landing page hero section
│   ├── WhatWeDo.jsx    # Services section
│   ├── Specialities.jsx # Specialities showcase
│   ├── HowWeWork.jsx   # Process explanation
│   ├── WhoWeAre.jsx    # About section
│   ├── ContactFooter.jsx # Footer with contact info
│   ├── ScrollToTop.jsx  # Auto-scroll on navigation
│   ├── ErrorBoundary.jsx # Error handling
│   ├── Loading.jsx     # Loading component
│   └── NotFound.jsx    # 404 page
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── About.jsx       # About page
│   ├── Services.jsx    # Services page
│   ├── SpecialitiesPage.jsx # Specialities page
│   ├── HowWeWorkPage.jsx # Process page
│   ├── Careers.jsx     # Careers page
│   └── Contact.jsx     # Contact page
├── assets/             # Static assets
└── App.jsx            # Main app component
```

## 🌐 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects for SPA routing

### Vercel
1. Connect your repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `dist`

### Traditional Hosting
1. Build the project: `npm run build`
2. Upload contents of `dist` folder to your web server
3. Configure server for SPA routing (redirect all routes to index.html)

## 📊 SEO & Performance

- **SEO**: Complete meta tags, Open Graph, Twitter Cards
- **Performance**: Code splitting, lazy loading, optimized images
- **Accessibility**: WCAG 2.1 AA compliance
- **PWA**: Manifest.json for progressive web app features
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Proper crawling instructions

## 🎨 Design System

- **Colors**: Professional healthcare blue color scheme
- **Typography**: Inter (body) and Poppins (headings)
- **Components**: Consistent button styles, cards, and animations
- **Responsive**: Mobile-first approach with Tailwind CSS

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Configuration

### Environment Variables
Copy `.env.example` to `.env` and configure:
- Site URL and name
- Contact information
- Analytics IDs (optional)
- API configuration (if needed)

### Customization
- Colors: Update CSS custom properties in `src/index.css`
- Content: Modify component content and images
- Branding: Replace logo and favicon in `public/` folder

## 📞 Contact Information

- **Phone**: +91 80-41536750
- **Email**: info@sohinomhealthcare.com
- **Address**: 1681 6th Main Road, RPC Layout, Vijayanagar, Bangalore 560104
- **Website**: https://sohinomhealthcare.com

## 📄 License

This project is proprietary to Sohin Om Healthcare Management Services.

## 🤝 Support

For technical support or questions about the website, please contact the development team or refer to the documentation.

---

**Built with ❤️ for Sohin Om Healthcare Management Services**
