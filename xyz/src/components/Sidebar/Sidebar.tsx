import React from "react";
import { Card, CardTitle } from "react-bootstrap";
import { portfolioConfig } from "../../config/portfolio.config";
import { skillsData } from "../../data/skills";
import "./_sidebar.scss";
// import profileImage from "../../assets/images/sidebar/sidebargif.webp";
// import courseImage from "../../assets/images/sidebar/education.jpg";
import lastImage from "../../assets/images/sidebar/qr-code.png";

interface SidebarProps {
  className?: string;
}

const Sidebar: React.FC<SidebarProps> = ({ className = "" }) => {
  const config = portfolioConfig;
  const skills = skillsData;
  
  // Generate Spotify widget URL if userId is provided
  const spotifyUserId = config.spotify.userId || "your_spotify_user_id";
  const spotifyUrl = `https://spotify-github-profile.kittinanx.com/api/view.svg?uid=${spotifyUserId}&cover_image=true&theme=default&show_offline=true&background_color=121212&interchange=true&bar_color=53b14f&bar_color_cover=false`;
  const spotifyUrlNovatorem = `https://spotify-github-profile.kittinanx.com/api/view.svg?uid=${spotifyUserId}&cover_image=true&theme=novatorem&show_offline=true&background_color=121212&interchange=true&bar_color=53b14f&bar_color_cover=false`;

  return (
    <div className={`sidebar ${className}`}>
      <Card className="sidebar-card">
        {config.spotify.userId && (
          <h5>
            Current Mood 🎧
            <a href={`https://spotify-github-profile.kittinanx.com/api/view.svg?uid=${spotifyUserId}&redirect=true`} target="_blank" rel="noopener noreferrer">
              <i>
                <img src={spotifyUrl} alt="Spotify Now Playing" />
              </i>
            </a>
          </h5>
        )}
        <Card.Body>
          <Card.Title>Technical Skills</Card.Title>
          <ul className="skills-list">
            <li>
              <strong>Machine Learning: </strong>
              <span>{skills.technicalSkills.machineLearning.join(", ")}</span>
            </li>
            <li>
              <strong>Languages: </strong>
              <span>{skills.technicalSkills.languages.join(", ")}</span>
            </li>
            <li>
              <strong>Frameworks: </strong>
              <span>{skills.technicalSkills.frameworks.join(", ")}</span>
            </li>
            <li>
              <strong>Database: </strong>
              <span>{skills.technicalSkills.databases.join(", ")}</span>
            </li>
            <li>
              <strong>Tools: </strong>
              <span>{skills.technicalSkills.tools.join(", ")}</span>
            </li>
          </ul>
          {skills.currentCourses.length > 0 && (
            <>
              <CardTitle>Current Courses</CardTitle>
              <ul className="future-courses">
                {skills.currentCourses.map((course, index) => (
                  <li key={index}>{course.code}: {course.name}</li>
                ))}
              </ul>
            </>
          )}
          {config.spotify.userId && (
            <h5>
              🎧
              <a href={`https://spotify-github-profile.kittinanx.com/api/view.svg?uid=${spotifyUserId}&redirect=true`} target="_blank" rel="noopener noreferrer">
                <i>
                  <img src={spotifyUrlNovatorem} alt="Spotify Now Playing" />
                </i>
              </a>
            </h5>
          )}
          {skills.courseHighlights.length > 0 && (
            <>
              <Card.Title>Course Highlight</Card.Title>
              <ul className="course-highlight">
                {skills.courseHighlights.map((category, catIndex) => (
                  <li key={catIndex}>
                    <strong>{category.category}:</strong>
                    <ul>
                      {category.courses.map((course, courseIndex) => (
                        <li key={courseIndex}>{course.code}: {course.name}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </>
          )}
          <Card.Img
            variant="top"
            src={lastImage}
            alt="Profile"
            className="sidebar-profile-image"
            loading="eager"
          />
          <Card.Link href={config.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</Card.Link>
          <Card.Link href={config.links.github} target="_blank" rel="noopener noreferrer">GitHub</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Sidebar;
