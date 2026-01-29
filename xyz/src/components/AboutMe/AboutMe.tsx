import React from "react";
import { aboutContent } from "../../data/about";
import "./_about-me.scss";

const AboutMe: React.FC = () => {
  const content = aboutContent;

  return (
    <section id="about" className="my-4 about-me">
      <h2>Hi there!</h2>
      {content.learningFocus.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
      <h5>My interests mainly lie in: </h5>
      <ul>
        {content.interests.map((interest, index) => (
          <li key={index}>{interest}</li>
        ))}
      </ul>
      <p>{content.passionStatement}</p>
    </section>
  );
};

export default AboutMe;
