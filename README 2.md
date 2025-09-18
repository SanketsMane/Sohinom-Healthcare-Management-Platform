# Sohin Om Healthcare Management Services

A modern, responsive multi-page healthcare management website built with React, Vite, Tailwind CSS, and React Router. This website is designed for Sohin Om Healthcare Management Services, a professional medical billing and revenue cycle management company based in Bangalore, India.

## 🏥 About Sohin Om Healthcare Management Services

**Sohin Om Healthcare Management Services** is your full-service professional medical billing partner, specializing in:
- Medical Billing Services
- Revenue Cycle Management (RCM)
- Healthcare Process Outsourcing
- HIPAA Compliant Operations

**Location:** 1681 6th Main Road, RPC Layout, Vijayanagar, Bangalore 560104, Karnataka, India

## 🚀 Features

### Website Pages
- **Home**: Hero section with company overview, services, process, and about sections
- **About Us**: Detailed company information, mission, vision, values, and why choose us
- **Services**: Comprehensive list of all healthcare management services offered
- **Specialities**: Detailed view of specialty services and expertise areas
- **How We Work**: Step-by-step process explanation and implementation methodology
- **Careers**: Job openings, benefits, and application process
- **Contact Us**: Contact form, office information, and business details

### Technical Features
- ⚡ **Vite** for fast development and building
- ⚛️ **React 18** with functional components and hooks
- 🧭 **React Router** for seamless multi-page navigation
- 🎨 **Tailwind CSS v4** for modern styling
- 📱 **Responsive Design** - works on all devices
- 🖼️ **Professional Logo Integration** in header and footer
- 🎯 **SEO-friendly** structure with proper routing
- ♿ **Accessible** navigation and content
- 🔗 **Active Link Highlighting** in navigation

## 🛠️ Technology Stack

- **Frontend Framework**: React 18
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Icons**: SVG icons (included)
- **Fonts**: Inter & Roboto (Google Fonts)
- **Assets**: Professional logo integration

## 📦 Installation & Setup

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173/`

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.jsx      # Navigation header with logo and routing
│   ├── Hero.jsx        # Hero/landing section
│   ├── WhatWeDo.jsx    # Services overview
│   ├── HowWeWork.jsx   # Process explanation
│   ├── WhoWeAre.jsx    # About us section
│   ├── Specialities.jsx # Detailed services
│   └── ContactFooter.jsx # Contact & footer with logo
├── pages/              # Individual page components
│   ├── Home.jsx        # Home page (landing)
│   ├── About.jsx       # About us page
│   ├── Services.jsx    # Services page
│   ├── SpecialitiesPage.jsx # Specialities page
│   ├── HowWeWorkPage.jsx # How we work page
│   ├── Careers.jsx     # Careers page
│   └── Contact.jsx     # Contact page
├── assets/             # Static assets including logo
│   └── Sohin.png       # Company logo
├── App.jsx            # Main app with routing setup
├── main.jsx           # App entry point
└── index.css          # Global styles & Tailwind
```

## 🎨 Design & Styling

The website follows a clean, professional design with:

### Color Palette
- **Primary Blue**: `#2563eb` (blue-600)
- **Secondary Colors**: Various shades of gray and slate
- **Accent Colors**: Teal and green for highlights

### Typography
- **Primary Font**: Inter (body text, navigation)
- **Secondary Font**: Roboto (headings)

### Layout Features
- Professional logo integration in header and footer
- Responsive navigation with active link highlighting
- Consistent page layouts and spacing
- Smooth hover transitions and animations
- Mobile-first design approach
- Professional healthcare industry aesthetic

## 🧭 Navigation Structure

The website uses React Router for client-side routing:

- **/** - Home page
- **/about** - About us page
- **/services** - Services page
- **/specialities** - Specialities page
- **/how-we-work** - Process and methodology
- **/careers** - Career opportunities
- **/contact** - Contact information and form

## 🔧 Customization

### Updating Company Information
1. **Logo**: Replace `src/assets/Sohin.png` with new logo file
2. **Contact Details**: Update `src/components/ContactFooter.jsx` and `src/pages/Contact.jsx`
3. **Service Descriptions**: Modify respective page components in `src/pages/`
4. **Company Story**: Edit `src/pages/About.jsx`

### Styling Changes
- Global styles: `src/index.css`
- Component-specific styles: Use Tailwind classes in component files
- Colors: Update Tailwind classes throughout components

### Adding New Pages
1. Create new page component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `src/components/Header.jsx` and `src/components/ContactFooter.jsx`

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All pages and components adapt seamlessly across devices.

## 🚀 Deployment

The built files in the `dist/` folder can be deployed to any static hosting service:
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Any web server

### Build for Production
```bash
npm run build
```

## 📊 Performance Features

- **Fast Loading**: Optimized with Vite's build system
- **Code Splitting**: Automatic code splitting by React Router
- **Asset Optimization**: Images and CSS are optimized during build
- **Modern JavaScript**: Uses latest ES6+ features with backwards compatibility

## 📄 License

This project is designed specifically for Sohin Om Healthcare Management Services.

## 🤝 Support

For technical support or customization requests, please contact the development team.

---

**Sohin Om Healthcare Management Services** - Your trusted partner in healthcare revenue cycle management.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
