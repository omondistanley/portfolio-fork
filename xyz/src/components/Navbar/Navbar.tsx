import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Navbar, Nav, Form } from "react-bootstrap";
import { portfolioConfig } from "../../config/portfolio.config";
import "./_navbar.scss";

const CustomNavbar: React.FC = () => {
  const config = portfolioConfig;
  
  // Use default theme from config, but respect user's stored theme preference
  const [theme, setTheme] = useState<string>(() => {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? storedTheme : config.theme.default;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Handle theme toggle
  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Save to local storage
  };

  return (
    <Navbar expand="lg" className="mb-4 custom-navbar">
      <Navbar.Brand href="/" className="navbar-brand">
        {config.personal.name.split(" ")[0] || "Portfolio"}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto navbar-links">
          <Nav.Link href="#about">Who Am I? </Nav.Link>
          <Nav.Link href="#experience">Technical Experience</Nav.Link>
          <Nav.Link href="#extra-experience">Extracurricular Experience</Nav.Link>
          <Nav.Link href="#custom-projects">Projects</Nav.Link>
          <Nav.Link href="#art-gallery">Random Flicks & Musings</Nav.Link>
          <Nav.Link href="/classic/index.html">🎨 Curious?</Nav.Link>
          {/*<Nav.Link href="#hobbies">Hobbies</Nav.Link>*/}
        </Nav>
        <Form.Check
          type="switch"
          id="theme-toggle"
          label={theme === "light" ? "Light Mode" : "Dark Mode"}
          onChange={handleThemeToggle}
          checked={theme === "dark"}
          className="theme-toggle"
        />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
