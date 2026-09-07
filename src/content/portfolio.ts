import type { Portfolio } from "./types";

export const portfolio: Portfolio = {
  identity: {
    name: "Vijay Goyal",
    affiliation: "Computer Science + Combinatorics & Optimization at Waterloo",
    introduction:
      "I work on efficient machine learning, with a focus on knowledge distillation, inference systems, and optimization.",
    links: [
      { label: "Publications", href: "#publications" },
      { label: "Projects", href: "#work" },
      { label: "Experience", href: "#background" },
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
      kind: "publication",
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
      kind: "project",
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
      kind: "project",
      slug: "racey-car",
      title: "Racey-Car",
      eyebrow: "Reinforcement learning",
      summary:
        "A sim-to-real reinforcement-learning pipeline for autonomous driving on a physical racecar, backed by a configurable PyBullet environment.",
      problem:
        "Policies trained in simulation must transfer to a physical car despite differences in sensing, dynamics, and track conditions.",
      contribution:
        "Worked with the WAT.ai Design Team to build the training pipeline, evaluate reinforcement-learning policies, and connect simulated control decisions to Arduino-based hardware.",
      approach: [
        "Built a configurable PyBullet race environment with generated tracks, camera controls, and reward logic.",
        "Used segmentation masks for track extraction rather than relying on color filtering.",
        "Developed training paths for PPO, SAC, and a Dreamer-style world-model agent, with focused runtime and reward tests.",
      ],
      evidence: [
        "The documented development branch contains the simulator, track generator, environment, control stack, policy trainers, world-model components, and focused tests.",
        "The public résumé reports evaluation of more than five RL algorithms and more than twenty reward functions, with a 25 percent improvement in physical-track lap times.",
      ],
      limitations:
        "The repository does not publish the full physical-track benchmark protocol or raw lap-time results. Reported outcomes are attributed to the résumé, and the work is presented as a WAT.ai team project.",
      technologies: ["Python", "PyBullet", "PyTorch", "Stable-Baselines3", "Arduino"],
      repositoryUrl:
        "https://github.com/alonso130r/Racey-Car/tree/DreamerV3%2BStableBaselines-policy",
      verified: true,
    },
    {
      kind: "project",
      slug: "sophia-g",
      title: "SOPHIA-G",
      eyebrow: "Optimization research",
      summary:
        "A PyTorch optimizer that blends Sophia-style curvature clipping with AdamW-style moment tracking and weight decay.",
      problem:
        "Second-order information can improve an optimizer's update decisions, but full Hessian methods are expensive. This prototype explores a practical approximation within a familiar PyTorch optimizer interface.",
      contribution:
        "Designed and implemented a hybrid optimizer while working at Algoverse, combining Sophia-style clipping with AdamW-inspired normalization and configurable curvature estimates.",
      approach: [
        "Tracks exponential moving averages for gradients, squared gradients, and an approximate Hessian.",
        "Supports diagonal curvature estimates and blockwise estimates for two-dimensional parameter tensors.",
        "Includes an optional adaptive clipping threshold based on the observed rate of gradient sign changes.",
      ],
      evidence: [
        "The public implementation exposes the optimizer as a PyTorch Optimizer subclass with parameter validation and documented update modes.",
        "The repository contains the full optimizer in one inspectable Python module.",
      ],
      limitations:
        "The repository does not publish benchmark results or a reproducible evaluation suite, so no convergence or performance improvement is claimed.",
      technologies: ["Python", "PyTorch", "Optimization", "Hessian approximation"],
      repositoryUrl: "https://github.com/alonso130r/SOPHIA-G",
      verified: true,
    },
    {
      kind: "project",
      slug: "cpp-cnn-autodiff",
      title: "C++ CNN + Autodiff Engine",
      eyebrow: "Learning systems",
      summary:
        "A convolutional neural network and reverse-mode autodifferentiation engine implemented in C++ without machine-learning libraries.",
      problem:
        "Training a CNN requires tensor operations, gradient propagation, parameter updates, and layer composition. This project implements that stack directly to expose how the pieces interact.",
      contribution:
        "Implemented the CNN, computation graph, convolution and pooling operations, AMSGrad updates, and Python bindings for training and evaluation.",
      approach: [
        "Built modular convolution, max-pooling, and fully connected layers around a custom tensor and computation graph.",
        "Implemented reverse-mode differentiation and AMSGrad parameter updates in C++.",
        "Exposed the compiled model to Python through pybind11 for experiment orchestration.",
      ],
      evidence: [
        "The repository includes the layer templates, differentiation operations, optimizer, CMake build, and Python bindings.",
        "The public résumé reports a five-times multithreaded speedup over the single-threaded implementation and 90 percent CIFAR-10 classification accuracy.",
      ],
      limitations:
        "The repository README is brief and does not include the benchmark procedure or training configuration, so the reported results should be interpreted as résumé claims rather than independently reproducible measurements.",
      technologies: ["C++", "Autodiff", "CNN", "AMSGrad", "pybind11"],
      repositoryUrl: "https://github.com/alonso130r/12-finalproj-2",
      verified: true,
    },
    {
      kind: "project",
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
