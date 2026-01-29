export interface PortfolioConfig {
  personal: {
    name: string;
    bio: string;
    email: string;
    location: string;
    graduationDate: string;
  };
  links: {
    github: string;
    linkedin: string;
    portfolio: string;
    resume: string;
  };
  analytics: {
    googleAnalyticsKey?: string;
    gtmId?: string;
  };
  theme: {
    default: 'light' | 'dark';
  };
  spotify: {
    userId?: string;
  };
}

// TODO: Replace all values below with your personal information
export const portfolioConfig: PortfolioConfig = {
  personal: {
    name: "Stanley Omondi",
    bio: "I'm a Computer Science major with a Cognitive Science minor at Columbia University, graduating in May, 2026.",
    email: "omondistandley.oduor@gmail.com",
    location: "New York, NY",
    graduationDate: "May, 2026",
  },
  links: {
    github: "https://github.com/omondistanley",
    linkedin: "https://www.linkedin.com/in/stanley-omondi-723681262/",
    portfolio: "https://omondistandley.github.io/",
    resume: "https://drive.google.com/file/d/11Gvnth5xx4sTxxY0CJYJ4Jap0mPZxG3i/view?usp=sharing", // Replace with your Google Drive resume link
  },
  analytics: {
    // Optional: Add your Google Analytics 4 measurement ID directly here
    // Or set it via environment variable VITE_GOOGLE_ANALYTICS_KEY (will be used in App.tsx)
    googleAnalyticsKey: "", // Replace with your GA4 measurement ID (e.g., "G-XXXXXXXXXX")
    // Optional: Add your Google Tag Manager ID
    gtmId: "GTM-XXXXXXXX", // Replace with your GTM ID
  },
  theme: {
    default: "dark", // Change to "light" if you prefer light mode by default
  },
  spotify: {
    // Optional: Add your Spotify user ID for the "Current Mood" feature
    userId: "your_spotify_user_id", // Replace with your Spotify user ID
  },
};

