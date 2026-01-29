import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { projects } from "../../data/projects";

interface ProjectCardProps {
  name: string;
  technologies: string;
  date: string;
  description: string;
  links: {
    live?: string; // Optional live site link
    github?: string; // Optional GitHub link
  };
  isFeatured?: boolean; // Optional boolean to indicate if the project is featured
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  technologies,
  date,
  description,
  links,
  isFeatured,
}) => (
  <div className="project-card">
    {/* Render custom live button for site */}
    <h3>{name}</h3>
    <p>
      <strong>Technologies:</strong> {technologies}
    </p>
    <p>
      <strong>Date:</strong> {date}
    </p>
    <p>{description}</p>
    <div className={`links ${isFeatured ? "featured-links" : ""}`}>
      {isFeatured && links.live && (
        <Button
          className="live-button"
          href={links.live}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Live Site
        </Button>
      )}
      {/* Use default Button for GitHub link or regular projects */}
      {links.github && (
        <Button
          className="github-button"
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </Button>
      )}
    </div>
  </div>
);

const ProjectsShowcase: React.FC = () => (
  <section id="custom-projects" className="projects-section my-4">
    <h2>Projects</h2>
    <Row className="g-4 justify-content-left project grid">
      {projects.map((project, index) => (
        <Col key={index} xs={12} sm={6} md={6} lg={4} xl={3}>
          <ProjectCard key={index} {...project} isFeatured={index === 0} />
        </Col>
      ))}
    </Row>
  </section>
);

export default ProjectsShowcase;
