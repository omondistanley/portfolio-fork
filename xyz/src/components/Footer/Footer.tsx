import React from "react";
import { portfolioConfig } from "../../config/portfolio.config";
import "/src/components/Footer/_footer.scss";

const Footer: React.FC = () => {
  const config = portfolioConfig;

  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} {config.personal.name} | Connect on{" "}
        <a href={config.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> or{" "}
        <a href={config.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>.
      </p>
    </footer>
  );
};

export default Footer;
