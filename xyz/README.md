# Portfolio Template

A customizable, modern React portfolio template built with TypeScript, React 18, and SCSS. This template provides a clean, professional portfolio website that you can easily customize with your own information, projects, and experiences.

## Features

- 🎨 **Modern Design**: Clean, responsive design with dark/light theme support
- ⚙️ **Easy Customization**: Centralized configuration files for all content
- 📱 **Fully Responsive**: Works seamlessly on mobile, tablet, and desktop
- 🎯 **TypeScript**: Fully typed for better development experience
- 🎨 **SCSS Styling**: Modular SCSS architecture for easy styling customization
- 📊 **Analytics Ready**: Built-in support for Google Analytics and Google Tag Manager
- 🚀 **Fast Performance**: Built with Vite for optimal performance
- 📝 **Component-Based**: Clean React component architecture

## Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Navigate to the xyz folder**:
   ```bash
   cd xyz
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Customization Guide

This template is designed to be easily customizable. All personal information, projects, and experiences are stored in configuration and data files.

### Quick Customization Steps

1. **Update Personal Information**:
   - Open `src/config/portfolio.config.ts`
   - Replace all placeholder values with your information

2. **Add Your Projects**:
   - Open `src/data/projects.ts`
   - Replace example projects with your own

3. **Add Your Experience**:
   - Open `src/data/experiences.ts` for technical experience
   - Open `src/data/extraExperiences.ts` for extracurricular experience

4. **Update Skills and Courses**:
   - Open `src/data/skills.ts`
   - Customize your technical skills and courses

5. **Customize About Section**:
   - Open `src/data/about.ts`
   - Update your learning focus, interests, and passion statement

6. **Add Random Flicks & Musings**:
   - Open `src/data/art.ts`
   - Add your photos, thoughts, and creative musings
   - Place images in `public/art/` folder

7. **Update Images**:
   - Replace images in `src/assets/images/`:
     - `hero/hero-image.jpg` - Hero banner image
     - `profile/profile.jpeg` - Profile picture
     - `sidebar/qr-code.png` - QR code (optional)

7. **Update HTML Metadata**:
   - Open `index.html`
   - Update title and meta tags
   - Add your Google Analytics/GTM IDs (optional)

8. **Update Classic Portfolio** (optional):
   - Edit `public/classic/index.html`
   - Replace placeholder content with your information

### Configuration Files

All customization is done through these files:

- **`src/config/portfolio.config.ts`**: Main configuration (name, bio, links, analytics)
- **`src/data/about.ts`**: About section content
- **`src/data/experiences.ts`**: Technical work experience
- **`src/data/extraExperiences.ts`**: Extracurricular experience
- **`src/data/projects.ts`**: Portfolio projects
- **`src/data/art.ts`**: Random Flicks & Musings items (photos, thoughts, creative work)
- **`src/data/skills.ts`**: Technical skills and courses

For detailed customization instructions, see [CUSTOMIZATION.md](./CUSTOMIZATION.md).

## Project Structure

```
xyz/
├── public/
│   ├── classic/          # Classic HTML/CSS portfolio (optional)
│   └── portfolio-logo.png
├── src/
│   ├── assets/
│   │   └── images/      # Images (hero, profile, sidebar)
│   ├── components/       # React components
│   ├── config/          # Configuration files
│   │   └── portfolio.config.ts
│   ├── data/            # Data files (projects, experiences, etc.)
│   │   ├── about.ts
│   │   ├── experiences.ts
│   │   ├── extraExperiences.ts
│   │   ├── projects.ts
│   │   ├── art.ts
│   │   └── skills.ts
│   ├── styles/          # SCSS styles
│   ├── App.tsx
│   └── main.tsx
├── index.html
└── package.json
```

## Environment Variables

Create a `.env` file in the root directory (optional):

```env
VITE_GOOGLE_ANALYTICS_KEY=G-XXXXXXXXXX
```

Or set it directly in `src/config/portfolio.config.ts`.

## Deployment

### Netlify

1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Add environment variables if needed

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Vercel will auto-detect Vite settings
4. Deploy!

### Other Platforms

The built files in `dist/` can be deployed to any static hosting service:
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting
- Any static file server

## Features in Detail

### Theme Switching

The portfolio includes a dark/light theme toggle. The default theme can be set in `portfolio.config.ts`.

### Analytics Integration

- Google Analytics 4: Set `googleAnalyticsKey` in config
- Google Tag Manager: Set `gtmId` in config and update `index.html`

### Spotify Integration

Add your Spotify user ID in `portfolio.config.ts` to show your current listening status in the sidebar.

## Customization Tips

1. **Colors**: Edit `src/styles/abstracts/_variables.scss` to change theme colors
2. **Fonts**: Change the font family in `src/styles/base/_global.scss`
3. **Layout**: Modify component SCSS files in `src/components/`
4. **Components**: All components are in `src/components/` - feel free to modify or add new ones

## Troubleshooting

### Build Errors

- Make sure all TypeScript types are correct
- Check that all imports are valid
- Ensure all config values are filled in

### Styling Issues

- Clear browser cache
- Check SCSS compilation errors
- Verify CSS variable names match

### Analytics Not Working

- Verify your Google Analytics key is correct
- Check browser console for errors
- Ensure GTM script is properly loaded in `index.html`

## Contributing

This is a template project. Feel free to fork and customize it for your needs!

## License

MIT License - feel free to use this template for your portfolio.

## Support

For detailed customization help, see [CUSTOMIZATION.md](./CUSTOMIZATION.md).

---

**Happy Customizing!** 🚀

