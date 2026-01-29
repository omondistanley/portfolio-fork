/**
 * About Section Content
 * 
 * Customize the content displayed in the About Me section.
 * Update the learning focus, interests, and passion statement to reflect your own journey.
 */

export interface AboutContent {
  learningFocus: string[];
  interests: string[];
  passionStatement: string;
}

export const aboutContent: AboutContent = {
  learningFocus: [
    "🔭 I'm currently learning more about High Performance Computing, Deep Neural Networks, and Machine Learning, with a keen focus on scalable LLMs, Human Computer Interaction, AI and AI Agents",
    "🌱 I'm also exploring Computer Graphics and Vision, Neural Rendering, Language Processing, Ancient History, and Music(big fan of the synthesizer).",
    "👯 I love collaborating on projects, especially those challenging me to go outside my comfort zone to learn new things and are cross-disciplinary. Check out my projects on GitHub!",
  ],
  interests: [
    "Machine Learning and Artificial Intelligence",
    "Full-stack (both frontend & backend) development",
    "Web development",
    "Fintech and EdTech",
    "Cloud Computing and DevOps",
    "Computer Graphics and Vision",
    "Neural Rendering and Deep Neural Networks",
    "Language Processing and Art",
  ],
  passionStatement: "🪴 My passion lies in advancing technology to solve real-world problems while paying great attention to how users interact with the technology, their understanding of the technology and data, and its implications.",
};

