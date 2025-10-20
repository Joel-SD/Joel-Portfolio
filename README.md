# 💼 Joel Carrasco - Portfolio

[![Deploy Status](https://github.com/Joel-SD/Joel_Portfolio/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/Joel-SD/Joel_Portfolio/actions)
[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://joel-sd.github.io/Joel_Portfolio/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

> Full Stack Developer Portfolio - Showcasing 3+ years of experience in React, React Native, C#/.NET, and more.

🌐 **Live Site**: [https://joel-sd.github.io/Joel_Portfolio/](https://joel-sd.github.io/Joel_Portfolio/)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional UI with smooth animations
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile
- 🌍 **Multi-language** - English and Spanish support with i18next
- 🌙 **Smooth Animations** - Engaging user interactions and transitions
- 📊 **Analytics Dashboard** - Visitor statistics and demographics (mock data + GA4 ready)
- 📧 **Contact Form** - Integrated with EmailJS
- 🚀 **Performance Optimized** - Fast loading with code splitting
- ♿ **Accessible** - WCAG compliant components
- 🔍 **SEO Friendly** - Optimized meta tags and semantic HTML

## 🛠️ Built With

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library
- **React Hook Form** - Form management
- **React Toastify** - Toast notifications

### Internationalization
- **i18next** - Internationalization framework
- **react-i18next** - React bindings for i18next

### Analytics & Tracking
- **React GA4** - Google Analytics 4 integration

### Communication
- **EmailJS** - Email service integration

### Deployment
- **GitHub Pages** - Hosting
- **GitHub Actions** - CI/CD pipeline

## 📁 Project Structure

```
Joel_Portfolio/
├── public/
│   ├── assets/
│   │   ├── companies/      # Company logos
│   │   ├── documents/      # CV/Resume PDFs
│   │   └── images/         # Images and icons
│   ├── logo_website.svg    # Favicon
│   └── .nojekyll          # GitHub Pages config
├── src/
│   ├── components/
│   │   ├── layout/        # Header, Footer, Layout
│   │   ├── sections/      # Page sections
│   │   │   ├── aboutMe/
│   │   │   ├── analytics/  # 📊 Analytics dashboard
│   │   │   ├── ContactMe/
│   │   │   ├── hero/
│   │   │   ├── myExperience/
│   │   │   └── skills/
│   │   └── ui/            # Reusable UI components
│   ├── context/           # React context providers
│   ├── data/              # Portfolio data
│   ├── hooks/             # Custom React hooks
│   ├── i18n/              # Translations (en, es)
│   ├── services/          # API services
│   ├── styles/            # Global styles
│   ├── utils/             # Utility functions
│   │   └── analytics.js   # 📊 Google Analytics config
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── .github/
│   └── workflows/
│       └── deploy.yml     # 🚀 Auto-deploy workflow
├── DEPLOYMENT.md          # 📖 Deployment guide
├── GOOGLE_ANALYTICS_SETUP.md  # 📊 Analytics setup
├── PRE_DEPLOY_CHECKLIST.md    # ✅ Pre-deploy checklist
├── QUICK_DEPLOY.md        # ⚡ Quick commands
└── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

```bash
# Clone the repository
git clone https://github.com/Joel-SD/Joel_Portfolio.git

# Navigate to project directory
cd Joel_Portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:3000`

## 📜 Available Scripts

```bash
# Development
npm run dev              # Start dev server
npm run dev-windows      # Start dev server (Windows optimized)

# Production
npm run build            # Build for production
npm run preview          # Preview production build

# Deployment
npm run deploy           # Deploy to GitHub Pages (manual)

# Code Quality
npm run lint             # Run ESLint
```

## 🌐 Deployment

### Automatic Deployment (Recommended)

The project uses GitHub Actions for automatic deployment. Simply push to the `master` branch:

```bash
git add .
git commit -m "Your changes"
git push origin master
```

The site will automatically deploy to GitHub Pages. Check progress at:
👉 [GitHub Actions](https://github.com/Joel-SD/Joel_Portfolio/actions)

### Manual Deployment

```bash
npm run deploy
```

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md)

## 📊 Google Analytics Setup

The portfolio includes Google Analytics 4 integration with a mock analytics dashboard.

To enable real analytics:

1. Get your GA4 Measurement ID from [Google Analytics](https://analytics.google.com/)
2. Update `src/utils/analytics.js`:
   ```javascript
   const MEASUREMENT_ID = 'G-YOUR-ID-HERE';
   ```

For complete setup instructions, see [GOOGLE_ANALYTICS_SETUP.md](./GOOGLE_ANALYTICS_SETUP.md)

## 🌍 Internationalization

The portfolio supports English and Spanish:

- Translations are in `src/i18n/translations/`
- Language detection is automatic based on browser settings
- Manual language switching via the header toggle

### Adding a New Language

1. Create a new translation file in `src/i18n/translations/`
2. Add the language to `src/i18n/config.js`
3. Update the language switcher component

## 📝 Customization

### Update Personal Information

Edit `src/data/portfolioData.js`:

```javascript
export const portfolioData = {
  personalInfo: {
    name: 'Your Name',
    title: { en: 'Your Title', es: 'Tu Título' },
    // ... more fields
  },
  // ... other sections
};
```

### Update Translations

Edit files in `src/i18n/translations/`:
- `en.json` - English translations
- `es.json` - Spanish translations

### Update Styles

Global CSS variables are in `src/styles/variables.css`:

```css
:root {
  --color-primary: #6366f1;
  --color-secondary: #8b5cf6;
  /* ... more variables */
}
```

### Update Analytics Mock Data

Edit `src/components/sections/analytics/Analytics.jsx`:

```javascript
const mockAnalyticsData = {
  totalVisits: 12547,
  uniqueVisitors: 8392,
  // ... update with your mock data
};
```

## 🎨 Color Scheme

The portfolio uses a modern color palette:

- **Primary**: Indigo (#6366f1)
- **Secondary**: Purple (#8b5cf6)
- **Text**: Slate shades
- **Background**: White with subtle grays

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Configuration Files

- `vite.config.js` - Vite configuration with GitHub Pages base URL
- `tailwind.config.js` - Tailwind CSS configuration
- `postcss.config.js` - PostCSS configuration
- `.github/workflows/deploy.yml` - GitHub Actions workflow

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Joel Carrasco**

- GitHub: [@Joel-SD](https://github.com/Joel-SD)
- LinkedIn: [joel-carrasco-cubilla](https://www.linkedin.com/in/joel-carrasco-cubilla)
- Email: joelcarrasco.sd@gmail.com

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Joel-SD/Joel_Portfolio/issues).

## ⭐ Show your support

Give a ⭐️ if you like this project!

## 📞 Contact

For any inquiries, feel free to reach out through:
- Email: joelcarrasco.sd@gmail.com
- LinkedIn: [joel-carrasco-cubilla](https://www.linkedin.com/in/joel-carrasco-cubilla)
- Portfolio Contact Form: [Contact Me](https://joel-sd.github.io/Joel_Portfolio/#contact)

## 🙏 Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Illustrations created with custom SVG components
- Inspired by modern portfolio designs

---

Made with ❤️ using React and Vite

**[View Live Demo](https://joel-sd.github.io/Joel_Portfolio/)** | **[Report Bug](https://github.com/Joel-SD/Joel_Portfolio/issues)** | **[Request Feature](https://github.com/Joel-SD/Joel_Portfolio/issues)**
