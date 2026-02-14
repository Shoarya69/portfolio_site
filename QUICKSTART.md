# Quick Start Guide

## 🚀 Getting Started

Your professional portfolio website is ready to use! Here's everything you need to know.

## 📁 File Structure

```
/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── About.tsx              # Profile summary with stats
│   │   │   ├── Contact.tsx            # Contact form & info
│   │   │   ├── Education.tsx          # Academic background
│   │   │   ├── Footer.tsx             # Footer section
│   │   │   ├── Hero.tsx               # Hero section with animations
│   │   │   ├── LoadingState.tsx       # Skeleton loading components
│   │   │   ├── Navigation.tsx         # Header navigation
│   │   │   ├── ParticleBackground.tsx # Particle animation
│   │   │   ├── Projects.tsx           # Project showcase
│   │   │   ├── ScrollToTop.tsx        # Scroll-to-top button
│   │   │   ├── SEO.tsx                # Meta tags & SEO
│   │   │   ├── Skills.tsx             # Skills grid
│   │   │   └── ui/                    # Shadcn UI components
│   │   └── App.tsx                    # Main application
│   └── styles/
│       ├── fonts.css                  # Font imports
│       ├── index.css                  # Global styles
│       ├── tailwind.css               # Tailwind config
│       └── theme.css                  # Theme variables
├── README.md                          # Full documentation
├── FEATURES.md                        # Complete feature list
└── QUICKSTART.md                      # This file
```

## 🎨 Sections Overview

### 1. **Navigation**
- Sticky header with smooth scroll
- Mobile hamburger menu
- Dark/light mode toggle
- Links: Home, About, Skills, Projects, Education, Contact

### 2. **Hero**
- Animated particle background
- Floating gradient circles
- Profile image with animation
- Social links: GitHub, LinkedIn, Portfolio, Email
- CTA buttons: View Projects, Contact Me

### 3. **About**
- Professional summary
- 3 stat cards:
  - 10+ Projects Completed
  - 15+ Technologies
  - 2+ Years Experience

### 4. **Skills**
6 categories with badges:
- **Languages**: Python, C++, SQL, Java
- **Backend**: Flask, FastAPI, REST, GraphQL
- **Frontend**: HTML5, CSS3, JavaScript, React
- **Databases**: MySQL, MongoDB, Neo4j
- **CS Fundamentals**: DSA, OOP, Concurrency, DBMS
- **Tools**: Git, Linux, Docker

### 5. **Projects**
2 featured projects:

**Real-Time Chat Application**
- Tech: FastAPI, React, WebSockets, MongoDB, MySQL, JWT, Redis
- Key features: Real-time messaging, JWT auth, hybrid DB
- Links: GitHub, Live Demo

**Payment Gateway Integration**
- Tech: FastAPI, React, Cashfree API
- Key features: Secure payments, transaction verification
- Links: GitHub, Live Demo

### 6. **Education**
- BCA at Guru Nanak Dev University
- 8.0 CGPA (2nd Semester)
- Currently in 3rd Semester
- Coursework: DSA, DBMS, C/C++, Python

### 7. **Contact**
- Contact form with email integration
- Contact info: Email, Phone, Location
- Social links: GitHub, LinkedIn, Portfolio
- Availability status indicator

### 8. **Footer**
- Copyright information
- Tech stack credits
- Quick links

## 🎯 Key Features

✅ **Fully Responsive** - Works on mobile, tablet, and desktop
✅ **Dark/Light Mode** - Toggle between themes
✅ **Smooth Animations** - Using Motion (Framer Motion)
✅ **Smooth Scrolling** - Between sections
✅ **Contact Form** - With email integration
✅ **SEO Optimized** - Meta tags included
✅ **Performance** - Fast loading and rendering
✅ **Accessibility** - ARIA labels and semantic HTML

## 🎨 Customization

### Update Personal Information

**Contact Details** (`/src/app/components/Contact.tsx`):
```typescript
const contactInfo = {
  email: 'shoorayabansal@gmail.com',
  phone: '+91-9772525551',
  location: 'India',
};
```

**Social Links** (`/src/app/components/Hero.tsx`):
```typescript
const socialLinks = [
  { icon: Github, href: 'https://github.com/shoarya' },
  { icon: Linkedin, href: 'https://linkedin.com/in/shoarya-bansal-6972a7273' },
  { icon: ExternalLink, href: 'https://shoarya.dev' },
  { icon: Mail, href: 'mailto:shoorayabansal@gmail.com' },
];
```

### Update Colors

Edit `/src/styles/theme.css` to change theme colors:

```css
:root {
  /* Primary colors */
  --primary: #2563eb;      /* Blue */
  --secondary: #7c3aed;    /* Purple */
  --accent: #06b6d4;       /* Cyan */
}
```

### Add More Projects

Edit `/src/app/components/Projects.tsx`:

```typescript
const projects = [
  {
    id: 1,
    title: 'Your Project Title',
    subtitle: 'Subtitle',
    description: 'Description...',
    image: 'https://...',
    techStack: ['Tech1', 'Tech2'],
    features: ['Feature 1', 'Feature 2'],
    highlights: ['Highlight 1'],
    links: {
      live: 'https://...',
      github: 'https://github.com/...',
    },
  },
  // Add more projects here
];
```

### Add More Skills

Edit `/src/app/components/Skills.tsx`:

```typescript
const skillCategories = [
  {
    title: 'Category Name',
    skills: ['Skill1', 'Skill2', 'Skill3'],
    colors: ['#color1', '#color2', '#color3'],
  },
  // Add more categories here
];
```

## 🔧 Development

The portfolio uses:
- **React 18+** with TypeScript
- **Tailwind CSS v4** for styling
- **Motion** for animations
- **Shadcn/ui** for UI components
- **next-themes** for theme management
- **Lucide React** for icons

## 🌐 Deployment

This portfolio is ready to deploy to:
- Vercel (recommended)
- Netlify
- GitHub Pages
- Any static hosting service

## 📞 Contact Information

- **Email**: shoorayabansal@gmail.com
- **Phone**: +91-9772525551
- **GitHub**: https://github.com/shoarya
- **LinkedIn**: https://linkedin.com/in/shoarya-bansal-6972a7273
- **Portfolio**: https://shoarya.dev

## 🎨 Theme Toggle

Click the sun/moon icon in the navigation bar to switch between light and dark modes. The preference is saved automatically.

## 📱 Mobile Menu

On mobile devices, click the hamburger menu (three lines) to open the navigation drawer.

## 🔝 Scroll to Top

After scrolling down, a floating button appears in the bottom-right corner. Click it to scroll back to the top smoothly.

## 💡 Tips

1. **Performance**: The particle background is optimized for performance
2. **Images**: Project images are loaded from Unsplash
3. **Forms**: Contact form uses mailto: protocol
4. **Animations**: All animations are smooth and performant
5. **Responsive**: Test on different screen sizes

## 🐛 Troubleshooting

**Issue**: Theme not switching
- Solution: Check browser localStorage is enabled

**Issue**: Smooth scrolling not working
- Solution: Ensure `scroll-behavior: smooth` is in theme.css

**Issue**: Animations not playing
- Solution: Check Motion package is properly installed

## 📚 Documentation

For more details, see:
- `README.md` - Full project documentation
- `FEATURES.md` - Complete feature list
- Component files - Inline comments

---

**Built with ❤️ by Shoarya Bansal**
