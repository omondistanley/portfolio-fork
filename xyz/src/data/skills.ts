/**
 * Skills and Courses Data
 * 
 * Customize your technical skills, current courses, and course highlights.
 * Update these sections to reflect your own skills and academic background.
 */

export interface TechnicalSkills {
  machineLearning: string[];
  languages: string[];
  frameworks: string[];
  databases: string[];
  tools: string[];
}

export interface Course {
  code: string;
  name: string;
}

export interface CourseCategory {
  category: string;
  courses: Course[];
}

export interface SkillsData {
  technicalSkills: TechnicalSkills;
  currentCourses: Course[];
  courseHighlights: CourseCategory[];
}

// TODO: Replace with your own skills and courses
export const skillsData: SkillsData = {
  technicalSkills: {
    machineLearning: [
      "Scikit-learn",
      "Keras",
      "TensorFlow",
      "PyTorch",
      "XGBoost",
      "OpenAI API",
      "Hugging Face",
      // Add or remove ML tools as needed
    ],
    languages: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "C++",
      "HTML/CSS",
      // Add or remove languages as needed
    ],
    frameworks: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "Django",
      "Flask",
      // Add or remove frameworks as needed
    ],
    databases: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQLAlchemy",
      // Add or remove databases as needed
    ],
    tools: [
      "Git/GitHub",
      "Docker",
      "AWS",
      "GCP",
      "Jupyter Notebook",
      "REST APIs",
      // Add or remove tools as needed
    ],
  },
  currentCourses: [
    { code: "CS 101", name: "Introduction to Computer Science" },
    { code: "CS 201", name: "Data Structures and Algorithms" },
    { code: "MATH 101", name: "Calculus I" },
    // Add your current courses here
  ],
  courseHighlights: [
    {
      category: "Computer Science",
      courses: [
        { code: "CS 101", name: "Intro to Computer Science" },
        { code: "CS 201", name: "Data Structures and Algorithms" },
        { code: "CS 301", name: "Software Engineering" },
        // Add your CS courses here
      ],
    },
    {
      category: "Math & Statistics",
      courses: [
        { code: "MATH 101", name: "Calculus I" },
        { code: "MATH 102", name: "Calculus II" },
        { code: "STAT 201", name: "Statistical Methods" },
        // Add your math/stat courses here
      ],
    },
    // Add more course categories as needed (e.g., Psychology, Philosophy, etc.)
  ],
};

