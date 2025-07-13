# David Robert - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my skills, projects, and professional experience as a full-stack developer.

## 🌟 Features

- **Modern Design**: Clean, professional, and responsive design
- **Interactive Animations**: Smooth animations powered by Framer Motion
- **Contact Form**: Functional contact form with email integration using Resend
- **Project Showcase**: Detailed project displays with live demos and source code links
- **Skills Section**: Visual representation of technical skills and expertise
- **Experience Timeline**: Professional experience with timeline visualization
- **Dark/Light Mode**: Theme switching capability
- **Mobile Responsive**: Optimized for all device sizes
- **Performance Optimized**: Built with Next.js for optimal performance and SEO

## 🚀 Tech Stack

### Frontend
- **Next.js 15** - React framework for production
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React

### UI Components & Styling
- **React Icons** - Icon library
- **Clsx** - Conditional CSS classes
- **React Hot Toast** - Toast notifications
- **React Intersection Observer** - Scroll-based animations
- **React Vertical Timeline Component** - Timeline visualization

### Email & Communication
- **Resend** - Email delivery service
- **React Email** - Email template components

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🏗️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/devdavidrobert/devdavidrobert.git
   cd devdavidrobert
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add your environment variables:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the result.

## 📁 Project Structure

```
david-robert/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── about.tsx          # About section
│   ├── contact.tsx        # Contact form
│   ├── header.tsx         # Navigation header
│   ├── intro.tsx          # Hero section
│   ├── projects.tsx       # Projects showcase
│   ├── skills.tsx         # Skills section
│   └── ...               # Other components
├── actions/               # Server actions
│   └── sendEmail.ts       # Email sending logic
├── lib/                   # Utility functions and data
│   ├── data.ts           # Static data (projects, skills, etc.)
│   ├── utils.ts          # Utility functions
│   └── types.ts          # TypeScript type definitions
├── context/               # React context providers
│   ├── active-section-context.tsx
│   └── theme-context.tsx
├── email/                 # Email templates
│   └── contact-form-email.tsx
├── public/               # Static assets
│   ├── images/           # Project images and assets
│   └── CV.pdf           # Resume/CV file
└── types/                # TypeScript declarations
```

## 🎨 Customization

### Adding New Projects
Edit `lib/data.ts` to add new projects:

```typescript
export const projectsData = [
  {
    title: "Your Project Name",
    description: "Project description...",
    tags: ["React", "Next.js", "TypeScript"],
    imageUrl: "/images/your-project.png",
    projectUrl: "https://your-project-url.com",
    githubUrl: "https://github.com/yourusername/project-repo"
  },
  // ... other projects
];
```

### Updating Skills
Modify the skills array in `lib/data.ts`:

```typescript
export const skillsData = [
  "JavaScript",
  "TypeScript", 
  "React",
  "Next.js",
  // ... add your skills
];
```

### Customizing Styles
- Global styles: `app/globals.css`
- Component-specific styles: Tailwind classes in component files
- Theme colors: Tailwind configuration in `tailwind.config.js`

## 📧 Contact Form Setup

The contact form uses Resend for email delivery. To set it up:

1. Sign up at [Resend](https://resend.com)
2. Get your API key
3. Add it to your `.env.local` file
4. Update the email template in `email/contact-form-email.tsx`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Set your environment variables in Vercel dashboard
4. Deploy automatically on every push

### Other Platforms
The app can be deployed to any platform that supports Next.js:
- Netlify
- Heroku
- AWS
- Digital Ocean
- Railway

### Build Commands
```bash
# Build for production
npm run build

# Start production server
npm run start

# Export static files (if using static export)
npm run export
```

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run export` - Build and export static files
- `npm run deploy` - Build and deploy to cPanel (custom script)

## 🤝 Contributing

While this is a personal portfolio, suggestions and feedback are welcome! Feel free to:

1. Open an issue for bugs or suggestions
2. Fork the repository
3. Create a feature branch
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

- **Website**: www.devdavidrobert.com
- **Email**: devdavidrobert@gmail.com
- **LinkedIn**: https://www.linkedin.com/in/david-robert-ny/

---

⭐ If you found this portfolio template helpful, please give it a star!
