// ===== Project data =====
const projects = {
  'masters-thesis': {
    category: "MASTER'S THESIS · APPLIED ML IN LOGISTICS",
    title: "Predicting transport delays in courier logistics using machine learning",
    subtitle: "Data-driven delay prediction on real operational data — identifying the factors that most strongly influence service reliability.",
    overview: "This project sits within the broader research area of applied machine learning in logistics and operations research. It explores how historical operational data from Jetpak can be used to predict transport delays and surface the underlying factors that most strongly influence performance, with the goal of improving service reliability through data-driven optimization.",
    screens: ["assets/delay_pred.jpg"],
    tags: ["Machine Learning", "AI", "Python", "PyTorch", "NumPy", "Research"],
    features: [
      "Pre-process a real-world dataset and enrich it with external information.",
      "Implement machine learning models from several different model families.",
      "Run an extensive comparative analysis across feature representation and engineering strategies."
    ],
    role: "This is my Master's thesis project, aimed to be completed by early June 2026. I'm responsible for the full pipeline — data preparation, model implementation, and the comparative evaluation of delay-prediction approaches.",
    github: null,
    pdf: null,
    inProgress: true,
    status: "IN PROGRESS · 2026"
  },
  'ea-seed': {
    category: "EA SEED · LLM + REINFORCEMENT LEARNING",
    title: "EA SEED — Hierarchical AI for smarter NPCs",
    subtitle: "Combining the strategic strengths of LLMs with the fast reflexes of RL to create smarter, more adaptive NPCs.",
    overview: "The goal of this project is to develop intelligent, adaptive NPCs for games by combining Reinforcement Learning with Large Language Models in a hierarchical system. RL agents handle fast, low-level behaviors such as navigation and combat, while the LLM oversees strategic decision-making and orchestrates which RL agents to activate based on the game state.",
    screens: ["assets/easeedscreenshot.png"],
    tags: ["Machine Learning", "AI", "Reinforcement Learning", "LLMs", "Unity"],
    features: [
      "Hierarchical AI control: an LLM for strategy paired with RL agents for fast, low-level actions.",
      "Adaptive NPC behavior: agents switch between sub-behaviors (defensive, aggressive) based on game state.",
      "Smarter, faster gameplay: balancing long-term planning with real-time responsiveness."
    ],
    role: "In this EA SEED project my primary role is setting up the training environment in Unity and preparing the RL agents for training. I also develop the sub-behaviours that the RL agents switch between.",
    github: "https://github.com/pontusfi/EA_SEED_PROJECT",
    pdf: null,
    inProgress: true,
    status: "ACTIVE PROJECT"
  },
  'bachelors': {
    category: "BACHELOR'S THESIS · HCI USER STUDY",
    title: "Auditory and visual feedback in First-Person Shooters",
    subtitle: "A user study comparing how visual and auditory feedback impact player performance and comprehension in FPS games.",
    overview: "Conducted together with Alexander Gemal, this study compares the impact of visual and auditory feedback on player performance in FPS games. It involved building a small FPS game in Unity as the test environment, then running user tests and analysing the results with both qualitative and quantitative methods.",
    screens: ["assets/kex_level.PNG", "assets/kexpresscreen.PNG", "assets/kexscreen.PNG"],
    tags: ["Unity", "C#", "Game Dev", "User Study"],
    features: [
      "Built a small test environment in Unity from a template.",
      "Conducted a user study using the custom test environment.",
      "Analysed results using both qualitative and quantitative methods."
    ],
    role: "Early on I focused on getting our Unity test game working to spec — mainly the level design for the test levels. The initial phase also involved extensive research into UI and audio in games and their role in player experience. The rest of the time went to running the user studies, analysing results, and composing the final report.",
    github: "https://github.com/pontusfi/KEX/tree/master",
    pdf: "assets/FULLTEXT01.pdf",
    inProgress: false,
    status: ""
  },
  'rnn-lstm': {
    category: "DEEP LEARNING · NLP",
    title: "RNN and LSTM — Text Synthesis",
    subtitle: "Evaluating and comparing a vanilla RNN against an LSTM for character-level text synthesis.",
    overview: "This project explores Recurrent Neural Networks and Long Short-Term Memory networks for character-level text generation, using a dataset of Shakespeare's plays. We implemented both a vanilla RNN and an LSTM and compared training, validation and test losses as well as generated-text quality. Hyperparameters were optimized via grid search, and we investigated the impact of hidden-state dimensionality. Evaluation combined quantitative metrics like n-gram accuracy and spelling correctness with qualitative reading. The results show LSTMs outperform vanilla RNNs at capturing long-range dependencies.",
    screens: ["assets/LSTM_1_layer_loss_plot.png", "assets/synthesizedtext.png"],
    tags: ["Deep Learning", "Python", "PyTorch", "NumPy", "Pickle"],
    features: [
      "Implemented both RNN and LSTM architectures.",
      "Implemented word2vec and BPE tokenization.",
      "Searched, tuned and evaluated hyperparameters via grid search."
    ],
    role: "I deepened my use of PyTorch for this task — having previously implemented an RNN from scratch in pure Python (forward pass and backprop), here I built the network in PyTorch and adapted it to our project, including the text-synthesis functionality. I also worked extensively on hyperparameter analysis: implementing a grid search, choosing which parameters and values to explore, and analysing training performance to decide on epoch counts. Along the way I gained a much better understanding of LSTMs and of how hidden-layer dimensionality affects results.",
    github: "https://github.com/HaraldHR/NLP_Project",
    pdf: "assets/NLP_Project_Report.pdf",
    inProgress: false,
    status: ""
  },
  'movieline': {
    category: "WEB · FULL-STACK",
    title: "Movieline",
    subtitle: "A web-based interactive timeline game — place as many movies in the correct order as you can.",
    overview: "Movieline is a web-based interactive timeline game where the goal is to place as many movies as possible in the correct chronological order. We built it in React with Vite and used Firebase to handle user data.",
    screens: ["assets/movieline.PNG", "assets/movieline_screen1.png", "assets/movieline_screen2.png"],
    tags: ["React", "Firebase", "JavaScript", "HTML", "CSS"],
    features: [
      "Created a timeline-based game built around movies.",
      "Used the OMDB API to fetch movie data.",
      "Built the app in React following the Model-View-Presenter architecture.",
      "Persisted user data in a Firebase database."
    ],
    role: "I focused heavily on the Presenters and Views within the MVP architecture, keeping a clean separation of concerns. I implemented much of the routing logic and the React Router setup for seamless navigation, and I was responsible for data persistence with Firebase — configuring the backend and implementing storing and retrieving data from the database.",
    github: "https://gits-15.sys.kth.se/pfilen/movieline_project_group_47",
    pdf: null,
    inProgress: false,
    status: ""
  },
  'ci-server': {
    category: "SOFTWARE ENGINEERING · DEVOPS",
    title: "Continuous Integration (CI) Server",
    subtitle: "A lightweight CI server built from scratch to master the core principles of continuous integration.",
    overview: "Built a lightweight CI server from scratch to master the core principles of continuous integration. The project implements essential CI features such as automated build triggering via webhooks, build execution, and status reporting. It was developed collaboratively using GitHub for version control, issues, and pull requests, with an emphasis on clean architecture and sound software-engineering practices throughout.",
    screens: ["assets/ciserverscreenshot.png"],
    tags: ["Java", "Maven", "JavaScript", "Webhooks", "Ngrok", "HTML", "CSS"],
    features: [
      "Webhook integration — triggers builds on new commits pushed to GitHub.",
      "Automated build execution — compiles and tests code on each trigger.",
      "Commit status reporting — sends build results back to the repository via REST."
    ],
    role: "I was responsible for the commit status reporting feature, integrating with the GitHub REST API to programmatically set each commit's status based on build results — giving clear feedback directly inside the repository. I also wrote unit tests to verify the correctness and reliability of this functionality, ensuring accurate status updates and robust error handling.",
    github: "https://github.com/Soffan-Group-3/CD-Server",
    pdf: null,
    inProgress: false,
    status: ""
  }
};

// ===== Mobile menu =====
const navBurger = document.getElementById('navBurger');
const mobileMenu = document.getElementById('mobileMenu');

navBurger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ===== Scroll progress bar + scroll hint =====
const progressBar = document.getElementById('progressBar');
const scrollHint = document.getElementById('scrollHint');

function onScroll() {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  const p = h > 0 ? window.scrollY / h : 0;
  progressBar.style.transform = 'scaleX(' + p + ')';

  const hide = window.scrollY > 60;
  scrollHint.style.opacity = hide ? '0' : '1';
  scrollHint.style.pointerEvents = hide ? 'none' : 'auto';
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('[data-reveal]');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = parseFloat(el.getAttribute('data-delay') || '0');
      setTimeout(() => el.classList.add('revealed'), delay);
      io.unobserve(el);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -7% 0px' });
revealEls.forEach((el) => io.observe(el));

// ===== Project overlay =====
const overlay = document.getElementById('projectOverlay');
const overlayHeaderCategory = document.getElementById('overlayHeaderCategory');
const overlayStatus = document.getElementById('overlayStatus');
const overlayCategory = document.getElementById('overlayCategory');
const overlayTitle = document.getElementById('overlayTitle');
const overlaySubtitle = document.getElementById('overlaySubtitle');
const overlayTags = document.getElementById('overlayTags');
const overlayScreens = document.getElementById('overlayScreens');
const overlayOverview = document.getElementById('overlayOverview');
const overlayFeatures = document.getElementById('overlayFeatures');
const overlayRole = document.getElementById('overlayRole');
const overlayActions = document.getElementById('overlayActions');

function openProject(id) {
  const p = projects[id];
  if (!p) return;

  overlayHeaderCategory.textContent = p.category;
  overlayCategory.textContent = p.category;
  overlayTitle.textContent = p.title;
  overlaySubtitle.textContent = p.subtitle;
  overlayOverview.textContent = p.overview;
  overlayRole.textContent = p.role;

  if (p.inProgress) {
    overlayStatus.textContent = p.status;
    overlayStatus.style.display = 'inline-block';
  } else {
    overlayStatus.style.display = 'none';
  }

  overlayTags.innerHTML = '';
  p.tags.forEach((tag) => {
    const span = document.createElement('span');
    span.className = 'tag mono';
    span.textContent = tag;
    overlayTags.appendChild(span);
  });

  overlayScreens.innerHTML = '';
  p.screens.forEach((src) => {
    const div = document.createElement('div');
    div.className = 'overlay-screen';
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    div.appendChild(img);
    overlayScreens.appendChild(div);
  });

  overlayFeatures.innerHTML = '';
  p.features.forEach((feat) => {
    const div = document.createElement('div');
    div.className = 'overlay-feature';
    div.innerHTML = '<span class="overlay-feature-bullet">▸</span><span class="overlay-feature-text">' + feat + '</span>';
    overlayFeatures.appendChild(div);
  });

  overlayActions.innerHTML = '';
  if (p.github) {
    const a = document.createElement('a');
    a.href = p.github;
    a.target = '_blank';
    a.rel = 'noopener';
    a.className = 'btn-primary';
    a.innerHTML = 'View on GitHub <span>↗</span>';
    overlayActions.appendChild(a);
  }
  if (p.pdf) {
    const a = document.createElement('a');
    a.href = p.pdf;
    a.target = '_blank';
    a.rel = 'noopener';
    a.className = 'btn-ghost';
    a.innerHTML = 'Read full report (PDF) <span>↗</span>';
    overlayActions.appendChild(a);
  }
  const backBtn = document.createElement('button');
  backBtn.className = 'btn-ghost';
  backBtn.textContent = '← Back to all work';
  backBtn.addEventListener('click', closeProject);
  overlayActions.appendChild(backBtn);

  document.body.style.overflow = 'hidden';
  overlay.classList.add('open');
  overlay.scrollTop = 0;
}

function closeProject() {
  document.body.style.overflow = '';
  overlay.classList.remove('open');
}

document.querySelectorAll('[data-pid]').forEach((el) => {
  el.addEventListener('click', () => openProject(el.getAttribute('data-pid')));
});

document.getElementById('overlayBack').addEventListener('click', closeProject);
document.getElementById('overlayBackBottom').addEventListener('click', closeProject);

// ===== Neural field canvas =====
(function initCanvas() {
  const cv = document.getElementById('neuralField');
  if (!cv) return;
  const ctx = cv.getContext('2d');
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  let W = 0, H = 0;

  function resize() {
    const r = cv.getBoundingClientRect();
    W = r.width; H = r.height;
    cv.width = Math.max(1, W * dpr);
    cv.height = Math.max(1, H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }
  resize();
  window.addEventListener('resize', resize);

  const N = 40;
  const nodes = [];
  for (let i = 0; i < N; i++) {
    nodes.push({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      r: Math.random() * 1.5 + 0.9
    });
  }

  const mouse = { x: -9999, y: -9999, active: false };
  cv.addEventListener('pointermove', (e) => {
    const r = cv.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
    mouse.active = true;
  });
  cv.addEventListener('pointerleave', () => { mouse.active = false; mouse.x = -9999; mouse.y = -9999; });

  const D = 118;
  const MD = 165;

  function draw() {
    ctx.clearRect(0, 0, W, H);
    for (let i = 0; i < N; i++) {
      const n = nodes[i];
      n.x += n.vx; n.y += n.vy;
      if (n.x < 0 || n.x > W) n.vx *= -1;
      if (n.y < 0 || n.y > H) n.vy *= -1;
      n.x = Math.max(0, Math.min(W, n.x));
      n.y = Math.max(0, Math.min(H, n.y));
      if (mouse.active) {
        const dx = mouse.x - n.x, dy = mouse.y - n.y;
        const dist = Math.hypot(dx, dy) || 1;
        if (dist < 150) { n.vx += (dx / dist) * 0.006; n.vy += (dy / dist) * 0.006; }
      }
      const sp = Math.hypot(n.vx, n.vy);
      if (sp > 0.55) { n.vx *= 0.96; n.vy *= 0.96; }
      if (sp < 0.12) { n.vx *= 1.04; n.vy *= 1.04; }
    }
    for (let i = 0; i < N; i++) {
      for (let j = i + 1; j < N; j++) {
        const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
        const d = Math.hypot(dx, dy);
        if (d < D) {
          const a = (1 - d / D) * 0.45;
          ctx.strokeStyle = 'rgba(240,168,96,' + a + ')';
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(nodes[j].x, nodes[j].y);
          ctx.stroke();
        }
      }
    }
    if (mouse.active) {
      for (let i = 0; i < N; i++) {
        const n = nodes[i];
        const d = Math.hypot(mouse.x - n.x, mouse.y - n.y);
        if (d < MD) {
          const a = (1 - d / MD) * 0.85;
          ctx.strokeStyle = 'rgba(246,201,140,' + a + ')';
          ctx.lineWidth = 0.85;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(n.x, n.y);
          ctx.stroke();
        }
      }
      ctx.fillStyle = 'rgba(246,201,140,0.95)';
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 3.2, 0, 6.2832);
      ctx.fill();
    }
    for (let i = 0; i < N; i++) {
      const n = nodes[i];
      ctx.fillStyle = 'rgba(240,168,96,0.12)';
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r * 3.2, 0, 6.2832);
      ctx.fill();
      ctx.fillStyle = 'rgba(244,190,128,0.95)';
      ctx.beginPath();
      ctx.arc(n.x, n.y, n.r, 0, 6.2832);
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }
  draw();
})();
