import React from "react";
import { Button } from "react-bootstrap";
import ReactGA from "react-ga4";
import { portfolioConfig } from "../../config/portfolio.config";
import "/src/components/ProfileDetails/_profile-details.scss";

const ProfileDetails: React.FC = () => {
  const config = portfolioConfig;

  // Event handlers for Google Analytics
  const handleDownloadResume = () => {
    ReactGA.event({
      category: "Resume",
      action: "Downloaded Resume",
      label: "Download Resume Button",
    });
  };

  const handleMessageMe = () => {
    ReactGA.event({
      category: "Contact",
      action: "Clicked Message Me",
      label: "Message Me Button",
    });
  };

  const handleGitHub = () => {
    ReactGA.event({
      category: "Contact",
      action: "Clicked GitHub",
      label: "GitHub Button",
    });
  };

  const handleLinkedIn = () => {
    ReactGA.event({
      category: "Contact",
      action: "Clicked LinkedIn",
      label: "LinkedIn Button",
    });
  };

  const handleClassicSite = () => {
    ReactGA.event({
      category: "Navigation",
      action: "Visited Classic Site",
      label: "Classic Site Button",
    });
  };

  const emailSubject = encodeURIComponent(`Hello ${config.personal.name}!`);
  const emailBody = encodeURIComponent("Hi, I visited your website and would like to get in touch!");

  return (
    <div className="hero-content text-left">
      <div className="profile-info">
        <h1>{config.personal.name}</h1>
        <h4>{config.personal.bio}</h4>
        <div className="hero-buttons mt-3">
          <Button
            variant="primary"
            href={config.links.resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownloadResume}
          >
            Download Resume
          </Button>
          <Button
            variant="primary"
            href={`mailto:${config.personal.email}?subject=${emailSubject}&body=${emailBody}`}
            target="_blank"
            onClick={handleMessageMe}
          >
            Contact
          </Button>
          <Button
            variant="outline-secondary"
            href={config.links.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleGitHub}
          >
            GitHub
          </Button>
          <Button
            variant="outline-secondary"
            href={config.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkedIn}
          >
            LinkedIn
          </Button>
          <Button
            variant="outline-secondary"
            href="/classic/index.html"
            onClick={handleClassicSite}
          >
            🎨 Retro Version
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
