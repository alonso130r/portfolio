import type { Portfolio } from "./types";

export const portfolio: Portfolio = {
  identity: {
    name: "Vijay Goyal",
    affiliation: "Computer Science + Combinatorics & Optimization at Waterloo",
    introduction:
      "I study and build systems that make machine learning more efficient, from knowledge distillation experiments to inference scheduling and neural networks implemented from first principles.",
    links: [
      { label: "GitHub", href: "https://github.com/alonso130r" },
      {
        label: "Résumé",
        href: "https://github.com/alonso130r/resume/raw/main/Vijay_Goyal_resume.pdf",
      },
      { label: "Email", href: "mailto:vijay.goyal@uwaterloo.ca" },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/in/vijay-goyal-55aa37280",
      },
    ],
  },
  projects: [
    {
      slug: "knowledge-distillation",
      title: "Knowledge Distillation",
      eyebrow: "Research methodology",
      summary:
        "A research platform for studying how response-priming prompts change knowledge distillation from a large language model teacher to a smaller local model.",
      problem:
        "Large language models can be difficult to run locally. This study asks whether the way a teacher model is prompted can improve the signal transferred to a smaller student model.",
      contribution:
        "Co-authored the study and helped build the experimental pipeline for generating teacher logits, training LoRA adapters, and evaluating student models on GSM8K.",
      approach: [
        "Compared no-distillation and fine-tuning controls with several knowledge-distillation targets.",
        "Used a quantized Llama 3.1 405B teacher and trained student adapters with a controlled two-epoch setup.",
        "Applied a documented extraction procedure to score numerical answers, with manual review for unresolved responses.",
      ],
      evidence: [
        "The repository includes experiment notebooks, evaluation logic, logs, dependency versions, and a public paper.",
        "Results are described qualitatively here because percentages and listed correct-answer counts in the repository README do not fully agree.",
      ],
      limitations:
        "Reproduction requires substantial local hardware and exact legacy dependencies. Numerical results should be read from the paper and source logs after the README discrepancy is resolved.",
      technologies: ["Python", "PyTorch", "LoRA", "Hugging Face", "GSM8K"],
      repositoryUrl: "https://github.com/alonso130r/knowledge-distillation",
      supportingLinks: [
        { label: "Paper", href: "https://arxiv.org/abs/2412.17846" },
      ],
      verified: true,
    },
    {
      slug: "quickserve",
      title: "QuickServe",
      eyebrow: "Inference systems",
      summary:
        "An experimental C++ inference scheduler built on llama.cpp for comparing FIFO, continuous-batching, and heuristic AIMD policies on Apple Silicon.",
      problem:
        "Inference requests vary in arrival time and sequence length. A scheduler must decide how to batch work while balancing utilization and request-level behavior.",
      contribution:
        "Built a trace-driven platform that makes multiple scheduling policies comparable against the same llama.cpp backend and request workload.",
      approach: [
        "Implemented FIFO, continuous-batching, and heuristic AIMD scheduling policies behind a shared C++ interface.",
        "Added trace-driven benchmarks and focused tests for scheduler behavior.",
        "Designed the current development path around Apple Silicon, with an optional calibrated ProxQP policy.",
      ],
      evidence: [
        "The repository documents the build, test, calibration, and benchmark commands.",
        "The benchmark harness uses a prepared Azure LLM inference trace and supports a real GGUF backend test.",
      ],
      limitations:
        "The project is experimental, and its benchmark scripts currently assume local trace and model paths. No production-readiness or headline speedup claim is made.",
      technologies: ["C++17", "llama.cpp", "CMake", "Apple Silicon"],
      repositoryUrl: "https://github.com/alonso130r/QuickServe",
      verified: true,
    },
    {
      slug: "multinn-cpu",
      title: "multiNN-cpu",
      eyebrow: "Machine-learning fundamentals",
      summary:
        "A modular neural-network framework written in C++ without machine-learning libraries, organized around networks, layers, and neurons.",
      problem:
        "High-level frameworks hide much of the machinery behind training. This project explores that machinery through a direct CPU implementation.",
      contribution:
        "Implemented the object-based neural-network framework and maintained experimental branches for AdamW and batch-based training.",
      approach: [
        "Separated network, layer, and neuron responsibilities into C++ abstractions.",
        "Implemented a basic training path on the main branch without relying on an ML library.",
        "Explored AdamW updates and batch training on separate development branches.",
      ],
      evidence: [
        "The public repository describes the framework structure and the status of its training branches.",
      ],
      limitations:
        "The public documentation does not establish performance, model accuracy, or broad architecture support, so none is claimed here.",
      technologies: ["C++", "Neural networks", "CPU training", "AdamW"],
      repositoryUrl: "https://github.com/alonso130r/multiNN-cpu",
      verified: true,
    },
  ],
  experience: [
    {
      organization: "CIBC Global Asset Management",
      role: "ML Research Engineering Intern",
      period: "May 2026 – Aug. 2026",
      summary:
        "Built evaluation and GPU-accelerated modelling infrastructure for comparing interpretable financial models, including memory-bounded PyTorch tooling for large datasets.",
    },
    {
      organization: "WAT.ai, Design Team",
      role: "Technical Project Lead",
      period: "Apr. 2026 – Present",
      summary:
        "Leads an ML research and engineering team developing a world-model control stack for bimanual cloth folding.",
    },
  ],
  education: [
    {
      institution: "University of Waterloo",
      program: "Bachelor of Mathematics, Computer Science",
      period: "2025 – 2030",
    },
  ],
};
