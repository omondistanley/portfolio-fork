import React from "react";
import { extraExperiences } from "../../data/extraExperiences";
import "./_extra-experience.scss";

interface ExperienceProps {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string | string[];
}

const ExperienceItem: React.FC<ExperienceProps> = ({
  role,
  company,
  duration,
  location,
  description,
}) => (
  <div className="experience-item">
    <h4>{role}</h4>
    <h5>
      {company} | {location}
    </h5>
    <p>
      <em>{duration}</em>
    </p>
    {Array.isArray(description) ? (
      <ul>
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : (
      <p>{description}</p>
    )}
  </div>
);

const ExperienceTimeline: React.FC = () => (
  <section id="extra-experience" className="my-4 experience-timeline">
    <h2>Extracurricular Experience</h2>
    {extraExperiences.map((experience, index) => (
      <ExperienceItem key={index} {...experience} />
    ))}
  </section>
);

export default ExperienceTimeline;
