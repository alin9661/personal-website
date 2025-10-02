# Personal Portfolio Website

A high-performance, visually stunning, and SEO-optimized personal portfolio website built with Next.js, TypeScript, and modern web technologies.

## 🚀 Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Graphics**: React Three Fiber & Drei
- **Deployment**: Vercel-ready

## 📁 Project Structure

```
new-personal/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Global layout with Navbar & Footer
│   │   ├── page.tsx            # Landing page with 3D background
│   │   ├── about/
│   │   │   └── page.tsx        # About page
│   │   ├── projects/
│   │   │   └── page.tsx        # Projects showcase
│   │   ├── blog/
│   │   │   └── page.tsx        # Blog/Research page
│   │   └── contact/
│   │       └── page.tsx        # Contact form
│   ├── components/
│   │   ├── Navbar.tsx          # Navigation component
│   │   ├── Footer.tsx          # Footer component
│   │   ├── TypingAnimation.tsx # Animated text typing
│   │   └── Scene3D.tsx         # 3D background scene
│   └── globals.css             # Global styles
├── public/                     # Static assets
└── README.md
```

## 🛠️ Installation & Setup

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd new-personal
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit `http://localhost:3000`

## 📄 Pages Overview

### 🏠 Landing Page (`/`)
- Full-screen hero section with your name
- Interactive 3D Icosahedron background
- JavaScript-powered typing animation for titles
- Smooth page transitions

### 👤 About Page (`/about`)
- Two-column layout with personal information
- Hobbies & travels image gallery
- Scroll-triggered animations using Framer Motion

### 💼 Projects Page (`/projects`)
- Responsive grid of project cards
- 3D tilt and scale effects on hover
- Projects focused on quantitative research and development

### 📝 Blog Page (`/blog`)
- Clean list of blog posts with summaries
- Mock API structure for easy CMS integration
- Publication dates and read times

### 📧 Contact Page (`/contact`)
- Centered contact form with animations
- Form field focus effects
- Ready for form submission handling

## 🎨 Features

- **Responsive Design**: Optimized for all screen sizes
- **SEO Optimized**: Metadata API implementation for all pages
- **Smooth Animations**: Framer Motion for page transitions and interactions
- **3D Elements**: React Three Fiber for interactive 3D graphics
- **Modern UI**: Clean, professional design with Tailwind CSS
- **TypeScript**: Full type safety throughout the application

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

## 📝 Customization

To personalize this portfolio:

1. Replace `[Your Name]` with your actual name in relevant files
2. Update the project descriptions in `src/app/projects/page.tsx`
3. Add your own blog posts in `src/app/blog/page.tsx`
4. Customize colors and styling in the Tailwind classes
5. Add your own images to the `public/` directory

## 🤝 Contributing

This is a personal portfolio project, but feel free to use it as a template for your own site!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
