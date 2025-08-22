# Personal Website - Terminal Theme

A modern, terminal-themed personal portfolio website built with React, TypeScript, and pnpm. Features an interactive terminal interface, contact form with database integration, and responsive design.

## 🚀 Features

- **Terminal Aesthetic**: Matrix-style green theme with retro terminal design
- **Interactive Terminal**: Functional command-line interface with custom commands
- **Contact Form**: Database-integrated contact form with rate limiting
- **Responsive Design**: Mobile-friendly terminal interface
- **Performance Optimized**: Built with Vite and optimized for speed
- **Type Safety**: Full TypeScript implementation

## 🛠️ Tech Stack

- **Frontend**: React 19, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Package Manager**: pnpm
- **Routing**: React Router
- **Animations**: Framer Motion
- **Database**: Vercel Postgres
- **Deployment**: Vercel
- **Styling**: Tailwind CSS with custom terminal theme

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd personal-website
   ```

2. **Install pnpm** (if not already installed)
   ```bash
   npm install -g pnpm
   ```

3. **Install dependencies**
   ```bash
   pnpm install
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your database credentials
   ```

5. **Start development server**
   ```bash
   pnpm dev
   ```

## 🎮 Terminal Commands

The interactive terminal supports the following commands:

- `help` - Show available commands
- `about` - Display bio information
- `skills` - List technical skills
- `projects` - Show project portfolio
- `contact` - Display contact information
- `resume` - Download resume
- `clear` - Clear terminal
- `goto [page]` - Navigate to specific page
- `sudo hire me` - Easter egg command

## 🗄️ Database Setup

The contact form requires a PostgreSQL database. Set up your database with:

```sql
-- Run the schema.sql file to create the required tables
psql -d your_database < schema.sql
```

Required environment variables:
- `POSTGRES_URL` - Your database connection string
- `POSTGRES_URL_NON_POOLING` - Non-pooling connection string

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build
- `pnpm lint` - Run ESLint
- `pnpm format` - Format code with Prettier
- `pnpm type-check` - Run TypeScript type checking
- `pnpm clean` - Clean build artifacts and dependencies

## 🚀 Deployment

### Vercel Deployment

1. **Install Vercel CLI**
   ```bash
   pnpm add -g vercel
   ```

2. **Login and deploy**
   ```bash
   vercel login
   vercel
   ```

3. **Set up environment variables in Vercel dashboard**
   - Add your database credentials
   - Configure any additional environment variables

### Manual Deployment

1. **Build the project**
   ```bash
   pnpm build
   ```

2. **Deploy the `dist` folder** to your hosting provider

## 🎨 Customization

### Terminal Theme Colors

Edit `tailwind.config.js` to customize the terminal colors:

```javascript
colors: {
  'terminal-green': '#00ff41',      // Primary green
  'terminal-green-dark': '#00cc33', // Secondary green
  'terminal-bg': '#0a0a0a',         // Background
  'terminal-error': '#ff0040',      // Error messages
  'terminal-warning': '#ffaa00',    // Warnings
}
```

### Adding New Commands

Add commands in `src/components/Terminal/Terminal.tsx`:

```typescript
case 'your-command':
  output = 'Your command output';
  break;
```

### Customizing Content

- **Home page**: Edit `src/pages/Home.tsx`
- **About page**: Edit `src/pages/About.tsx`
- **Projects**: Update the projects array in `src/pages/Projects.tsx`
- **Contact info**: Update social links in `src/pages/Contact.tsx`

## 🔧 Performance Optimization

- Code splitting with React.lazy
- Optimized images and assets
- Efficient bundle size with pnpm
- CSS purging with Tailwind
- Preload critical resources

## 📱 Mobile Support

The terminal interface is fully responsive and includes:
- Touch-friendly command input
- Collapsible sidebar for mobile
- Optimized terminal window sizing
- Gesture support for navigation

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🐛 Issues

If you encounter any issues or have suggestions, please open an issue on GitHub.

---

Built with ❤️ using pnpm, React, and TypeScript