export interface Project {
  name: string;
  technologies: string;
  date: string;
  description: string;
  links: {
    live?: string; // Optional: URL to live demo
    github?: string; // Optional: URL to GitHub repository
    paper?: string; // Optional: URL to paper
  };
}

// TODO: Replace with your own projects
export const projects: Project[] = [
  {
    name: "Portfolio Website",
    technologies: "React (TypeScript, HTML, SCSS, JavaScript)",
    date: "Nov. 2024 - Present",
    description:
      "A responsive portfolio website showcasing my projects and skills, built with React and TypeScript.",
    links: {
      live: "https://yourportfolio.com",
      github: "https://github.com/yourusername/portfolio",
    },
  },
  {
    name: "Knowledge Distillation for Scalable Mixture of Expert Models",
    technologies: "Python, PyTorch, Jupyter Notebook, Wandb, Hugging Face Transformers, PEFT, LoRA",
    date: "Sept 2025 - Dec 2025",
    description:
  "Large language models are powerful but computationally expensive, motivating this research into combining Mixture-of-Experts (MoE) architectures with Knowledge Distillation for efficient scaling. Using sparse upcycling, I converted Mistral-7B (7.24B parameters) into an MoE architecture with 46.72B total parameters, 8 experts per layer, and Top-2 routing—achieving 69.7% MMLU accuracy with a 4.97% improvement over the baseline while reducing computational costs by 65.6%. I developed a memory-efficient training framework using LoRA adapters, bfloat16 mixed precision, and gradient checkpointing to systematically train and evaluate 10 architectural variants on a single GPU. Through this evaluation, I discovered that standard Knowledge Distillation actually degrades MoE performance by 4.3%—the dense teacher's output distribution suppresses expert specialization, revealing a fundamental dense-to-sparse architectural incompatibility. This finding challenged conventional assumptions about knowledge transfer, leading me to identify specific configurations, including mixed expert placement and router noise, that successfully overcome this incompatibility and enable effective cross-architecture knowledge transfer.",
    links: {
      paper: "https://github.com/omondistanley/MistralMoE/blob/master/MoE%20Final%20Paper.pdf",
      github: "https://github.com/omondistanley/MistralMoE.git",
    },
  },
  {
    name: "Novel View Synthesis with Transfer Learning",
    technologies: "Python, PyTorch, CUDA, torchVision, Python, imageio",
    date: "Sept 2025 - Nov 2025",
    description:
      "An equivariant neural rendering system that lifts a single RGB image into a spherical 3D scene representation, rotates it, and re-renders full 360° novel viewpoints. Applied transfer learning from a pretrained mugs model to bowls using a curriculum of progressive freezing, staged learning rates, and VGG-based perceptual alignment to preserve shape and texture fidelity during domain shift. The pipeline couples paired-view supervision (pose-swapped azimuth/elevation targets) with SSIM + L1 regression, then stabilizes fine-tuning via EMA, producing smooth multi-object rotations (mugs, bowls, chairs) and a ~70% faster convergence on bowl adaptation while retaining visual quality in GIF outputs.",
    links: {
      github: "https://github.com/omondistanley/Nerfs-and-transfer-learning.git",
      
    },
  },
  {
    name: "2048 Puzzle Solver",
    technologies: "Python",
    date: "Feb 2024 - March 2025",
    description:
      "An automated 2048 player in Python that lifts the board into an expectiminimax search space, rotates through moves, and re-renders full game states with colored terminal grids. It adapts a single-agent policy to stochastic computer placements via iterative deepening expectiminimax with alpha–beta pruning, staged by per-move time limits and heuristic alignment (empty-cell counts, monotonicity, smoothness penalties, max tile). The pipeline couples alternating player/computer turns with randomized tile injections and SSIM-like merge incentives (smoothness/monotonicity), then stabilizes play by logging max tiles to output2.txt, producing smooth, high-value runs and repeatable batch experiments.",
    links: {
      github: "https://github.com/omondistanley/2048-Puzzle-AI-Agent-Solver.git",
    },
  },
  // Add more projects as needed
];

