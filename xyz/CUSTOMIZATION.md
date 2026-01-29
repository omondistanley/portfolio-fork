# Detailed Customization Guide

This guide provides step-by-step instructions for customizing every aspect of the portfolio template.

## Table of Contents

1. [Personal Information](#personal-information)
2. [Projects](#projects)
3. [Experience](#experience)
4. [Skills and Courses](#skills-and-courses)
5. [About Section](#about-section)
6. [Random Flicks & Musings](#random-flicks--musings)
7. [Styling](#styling)
8. [Images](#images)
9. [Analytics](#analytics)
10. [Classic Portfolio](#classic-portfolio)

---

## Personal Information

### Location: `src/config/portfolio.config.ts`

Update the `personal` section:

```typescript
personal: {
  name: "Your Full Name",
  bio: "I'm a [Major] major with a [Minor] minor at [University], graduating in [Month, Year].",
  email: "your.email@example.com",
  location: "Your City, State/Country",
  graduationDate: "May, 2025",
}
```

**Fields:**
- `name`: Your full name (appears in hero, footer, navbar)
- `bio`: Short bio shown in hero section
- `email`: Contact email
- `location`: Your location
- `graduationDate`: Expected graduation date

### Social Links

Update the `links` section:

```typescript
links: {
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile",
  portfolio: "https://yourportfolio.com",
  resume: "https://drive.google.com/file/d/YOUR_RESUME_ID/view?usp=sharing",
}
```

**Resume Link:**
1. Upload your resume to Google Drive
2. Right-click → Get link → Set to "Anyone with the link"
3. Copy the file ID from the URL
4. Replace `YOUR_RESUME_ID` in the template

---

## Projects

### Location: `src/data/projects.ts`

Each project follows this structure:

```typescript
{
  name: "Project Name",
  technologies: "React, TypeScript, Node.js", // Comma-separated
  date: "Jan. 2025 - Present", // or "Jan. 2025 - Mar. 2025"
  description: "Brief description of what the project does and its key features.",
  links: {
    live: "https://yourproject.com", // Optional: live demo URL
    github: "https://github.com/yourusername/project", // Optional: GitHub repo
  },
}
```

**Tips:**
- The first project in the array is automatically "featured" and shows a "Visit Live Site" button
- You can have projects with only GitHub links (no live demo)
- Remove projects you don't want to display
- Add as many projects as you want

**Example:**
```typescript
{
  name: "E-Commerce Platform",
  technologies: "React, Node.js, MongoDB, Stripe",
  date: "Mar. 2024 - Present",
  description: "A full-stack e-commerce platform with user authentication, product management, and payment processing using Stripe.",
  links: {
    live: "https://myecommerce.com",
    github: "https://github.com/yourusername/ecommerce",
  },
}
```

---

## Experience

### Technical Experience
**Location:** `src/data/experiences.ts`

```typescript
{
  role: "Software Engineering Intern",
  company: "Company Name",
  duration: "May 2024 - Aug 2024",
  location: "City, State",
  description: [
    "First bullet point describing your achievement or responsibility.",
    "Second bullet point with metrics if possible (e.g., 'improved performance by 25%').",
    "Third bullet point highlighting technologies or skills used.",
  ],
}
```

**Tips:**
- Use bullet points (array) for multiple achievements
- Use a single string for simple descriptions
- Include metrics and impact when possible
- List technologies and tools used

### Extracurricular Experience
**Location:** `src/data/extraExperiences.ts`

Same structure as technical experience. Use this for:
- Leadership roles
- Volunteer work
- Student organizations
- Community involvement
- Non-technical internships

---

## Skills and Courses

### Location: `src/data/skills.ts`

### Technical Skills

Update each category:

```typescript
technicalSkills: {
  machineLearning: ["TensorFlow", "PyTorch", "Scikit-learn"],
  languages: ["Python", "JavaScript", "TypeScript", "Java"],
  frameworks: ["React", "Node.js", "Django", "Flask"],
  databases: ["MySQL", "PostgreSQL", "MongoDB"],
  tools: ["Git", "Docker", "AWS", "Jupyter Notebook"],
}
```

**Tips:**
- Add or remove items from each array
- Keep them relevant to your experience
- Order by proficiency (most skilled first) if desired

### Current Courses

```typescript
currentCourses: [
  { code: "CS 101", name: "Introduction to Computer Science" },
  { code: "MATH 201", name: "Linear Algebra" },
]
```

### Course Highlights

Organize by category:

```typescript
courseHighlights: [
  {
    category: "Computer Science",
    courses: [
      { code: "CS 101", name: "Intro to Computer Science" },
      { code: "CS 201", name: "Data Structures" },
    ],
  },
  {
    category: "Mathematics",
    courses: [
      { code: "MATH 101", name: "Calculus I" },
    ],
  },
]
```

**Tips:**
- Add or remove categories
- List courses you've completed or are taking
- Group related courses together

---

## About Section

### Location: `src/data/about.ts`

### Learning Focus

```typescript
learningFocus: [
  "🔭 I'm currently learning [what you're learning]. For example: 'I'm diving into machine learning by building neural networks from scratch.'",
  "🌱 I'm also exploring [another area]. For example: 'I'm learning cloud architecture with AWS and Docker.'",
  "👯 I love collaborating on [type of projects]. Check out my projects on GitHub!",
]
```

**Tips:**
- Keep emojis for visual appeal
- Be specific about what you're learning
- Show enthusiasm and passion

### Interests

```typescript
interests: [
  "Full-stack development",
  "Machine Learning & AI",
  "Cloud Computing",
  // Add or remove as needed
]
```

### Passion Statement

```typescript
passionStatement: "🪴 My passion lies in [your passion area]. For example: 'creating user-centered applications that solve real-world problems. My goal is to bridge the gap between technology and human needs.'"
```

---

## Random Flicks & Musings

### Location: `src/data/art.ts`

The Random Flicks & Musings section displays your photography, thoughts, and creative musings in a beautiful grid layout with modal viewing.

### Adding Art Items

Each art item follows this structure:

```typescript
{
  id: "unique-id", // Unique identifier
  title: "Artwork Title", // Optional: Title of the piece
  description: "Description of the artwork", // Optional: Detailed description
  imageUrl: "/art/your-image.jpg", // Path to image (place in public/art/)
  category: "photography", // Optional: Category for grouping
  date: "2024", // Optional: Creation date
}
```

### Image Setup

**Option 1: Using Public Folder (Recommended)**
1. Place images in `public/art/` folder
2. Use path: `imageUrl: "/art/your-image.jpg"`

**Option 2: Using Assets Folder**
1. Place images in `src/assets/images/art/`
2. Import at top of `art.ts`:
   ```typescript
   import example1 from "../../assets/images/art/example1.jpg";
   ```
3. Use: `imageUrl: example1`

### Example

```typescript
export const artItems: ArtItem[] = [
  {
    id: "1",
    title: "Sunset Over Mountains",
    description: "A breathtaking sunset captured during a hiking trip",
    imageUrl: "/art/sunset.jpg",
    category: "photography",
    date: "2024",
  },
  {
    id: "2",
    title: "Digital Abstract",
    description: "A digital art piece exploring color and form",
    imageUrl: "/art/abstract.png",
    category: "digital-art",
    date: "2024",
  },
];
```

### Categories

Categories are optional but help organize your work:
- `photography`
- `digital-art`
- `traditional`
- `sketch`
- `design`
- Or create your own categories

### Features

- **Grid Layout**: Responsive grid that adapts to screen size
- **Modal Viewing**: Click any image to view full-size in a modal
- **Hover Effects**: Beautiful overlay on hover showing title and category
- **Lazy Loading**: Images load as you scroll for better performance

### Tips

- Optimize images before adding (compress to reduce file size)
- Use consistent aspect ratios for a cleaner grid
- Add meaningful titles and descriptions
- Group related work with categories

---

## Styling

### Theme Colors
**Location:** `src/styles/abstracts/_variables.scss`

Update CSS variables:

```scss
:root {
  --bg-color: #d3dde2; // Light theme background
  --text-color: #000000; // Light theme text
  --button-bg: #0a66c2; // Button background
  --heading-color: #0a66c2; // Heading color
  // ... more variables
}

[data-theme="dark"] {
  --bg-color: #161b22; // Dark theme background
  --text-color: #f5f5f5; // Dark theme text
  // ... more variables
}
```

### Fonts
**Location:** `src/styles/base/_global.scss`

Change the font family:

```scss
body, html {
  font-family: 'Your Font', sans-serif;
}
```

Update the font import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

### Component Styles
Each component has its own SCSS file in `src/components/[ComponentName]/_*.scss`. Modify these to customize individual component styles.

---

## Images

### Required Images

1. **Hero Banner**: `src/assets/images/hero/hero-image.jpg`
   - Recommended size: 1920x1080px
   - Should be visually appealing and professional

2. **Profile Picture**: `src/assets/images/profile/profile.jpeg`
   - Recommended size: 400x400px (square)
   - Will be displayed as a circle

### Optional Images

3. **QR Code**: `src/assets/images/sidebar/qr-code.png`
   - Optional: Add a QR code linking to your portfolio or resume
   - Recommended size: 200x200px

4. **Random Flicks & Musings Images**: `public/art/` or `src/assets/images/art/`
   - Add your photography, thoughts, and creative musings
   - Recommended: Square aspect ratio (1:1) for best grid layout
   - Optimize file sizes for web (under 500KB each)

### Image Optimization Tips

- Use WebP format for better compression
- Compress images before adding (use tools like TinyPNG)
- Keep file sizes under 500KB for faster loading

---

## Analytics

### Google Analytics 4

1. **Get your Measurement ID**:
   - Go to [Google Analytics](https://analytics.google.com/)
   - Create a property or use existing one
   - Copy your Measurement ID (format: `G-XXXXXXXXXX`)

2. **Add to Config**:
   ```typescript
   analytics: {
     googleAnalyticsKey: "G-XXXXXXXXXX",
   }
   ```

   Or use environment variable:
   ```env
   VITE_GOOGLE_ANALYTICS_KEY=G-XXXXXXXXXX
   ```

### Google Tag Manager

1. **Get your GTM ID**:
   - Go to [Google Tag Manager](https://tagmanager.google.com/)
   - Create a container or use existing one
   - Copy your Container ID (format: `GTM-XXXXXXX`)

2. **Update Config**:
   ```typescript
   analytics: {
     gtmId: "GTM-XXXXXXX",
   }
   ```

3. **Update HTML**:
   - Open `index.html`
   - Replace `GTM-XXXXXXXX` with your GTM ID in both script tags

---

## Classic Portfolio

The classic portfolio is an alternative HTML/CSS version located in `public/classic/`.

### Updating Classic Portfolio

1. **Personal Information**:
   - Open `public/classic/index.html`
   - Search for "TODO" comments
   - Replace all placeholder text

2. **Projects**:
   - Find project sections (around line 478+)
   - Update project names, descriptions, and GitHub links
   - Replace `yourusername` with your GitHub username

3. **Contact Information**:
   - Update email addresses
   - Update phone numbers (if displayed)
   - Update location

4. **Social Links**:
   - Update GitHub and LinkedIn links in footer
   - Update any other social media links

### Classic Portfolio Features

- Particle.js background
- Animated text rotation
- Responsive design
- Smooth scrolling

---

## Advanced Customization

### Adding New Sections

1. Create a new component in `src/components/`
2. Add corresponding SCSS file
3. Import and use in `App.tsx` or `MainPortfolio`
4. Add navigation link in `Navbar.tsx`

### Modifying Component Structure

All components are in `src/components/`. Each component:
- Has its own folder
- Contains a `.tsx` file (component)
- Contains a `_*.scss` file (styles)

### Adding New Data Types

1. Create a new data file in `src/data/`
2. Define TypeScript interfaces
3. Export data array/object
4. Import and use in components

---

## Troubleshooting

### Common Issues

**Issue**: Build fails with TypeScript errors
- **Solution**: Check that all config values are filled in and types match

**Issue**: Images not loading
- **Solution**: Verify image paths and file names match exactly

**Issue**: Analytics not tracking
- **Solution**: Check browser console for errors, verify IDs are correct

**Issue**: Theme not switching
- **Solution**: Check localStorage in browser dev tools, verify theme values

### Getting Help

1. Check the browser console for errors
2. Verify all config files are properly formatted
3. Ensure all required fields are filled in
4. Check that file paths are correct

---

## Best Practices

1. **Keep it Updated**: Regularly update your projects and experience
2. **Optimize Images**: Compress images for faster loading
3. **Test Responsiveness**: Check on mobile, tablet, and desktop
4. **SEO**: Update meta tags in `index.html` for better SEO
5. **Performance**: Remove unused dependencies and optimize bundle size

---

**Happy Customizing!** 🎨

