export interface Experience {
  role: string;
  company: string;
  duration: string;
  location: string;
  description: string | string[];
}

export const experiences: Experience[] = [
  {
    role: "Solutions Engineering Intern",
    company: "Oracle Corporation",
    duration: "May 2025 - Aug 2025",
    location: "Redwood Shores, CA",
    description: [
      "Conducted deep root-cause analysis for high-priority service requests (SRs), debugging complex system failures and configuration issues, and coordinating targeted fixes with development teams to ensure timely resolution and minimal disruption to clients.",
      "Developed an integration pipeline for AI agents for payroll Formulas automation and debugging, integrating them into enterprise-scale Human Capital Management(HCM) environments to automate formula logic creation, detect errors, and reduced manual troubleshooting time by 35%.",
      "Leveraged internal tools to prototype and deploy low-code AI agents, accelerating the adoption of new UI and AI functionalities by simplifying the deployment process and translating client feedback into effective integration solutions across HCM SaaS applications."

    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Columbia Build Lab",
    duration: "Sep 2025 - Dec 2025",
    location: "New York, NY",
    description: [
      "Developed a structured research database pipeline for parsing unstructured data using Natural Language Processing and Retrieval-Augmented Generation techniques to normalize key sections for recommendation systems.",
      "Designed and implemented front-end visualization screens to present complex data, focusing on data scaling and transformation to enhance application usability and the user's understanding of underlying variables.",

    ],
  },
  {
    role: "Student Technician",
    company: "Columbia University",
    duration: "Feb 2023 - Present",
    location: "New York, NY",
    description: [
      "Collaborated with a team of four interns and staff to maintain and troubleshoot campus-wide IT systems supporting 1000+ students and faculty, ensuring high availability of academic services.",
      "Helped deploy and configure hybrid classroom technology (interactive displays, wireless systems), server upgrades and inventory managementimproving the learning experience in CUIT hyflex classrooms."
    ],
  },
  // Add more experiences as needed
];

