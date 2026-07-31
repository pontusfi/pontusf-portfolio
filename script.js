// ===== Project data =====
const projects = {
  'studio': {
    category: "ASHFALL STUDIO · FULL-STACK PRODUCT",
    title: "Ashfall Studio: project management for music producers",
    subtitle: "Built around the way records actually get made: releases → tracks → tasks, with a fixed six-stage production pipeline driving every view.",
    overview: "Most general-purpose project-management tools make you invent a workflow. Music production already has one, so Ashfall Studio hardcodes it: every track moves through Pre-production → Tracking → Editing → Mixing → Mastering → Delivered, and that single axis drives the whole UI. The project is in its early stages, but the foundation is in place.",
    screens: ["assets/studio.png"],
    tags: ["React", "TypeScript", "Supabase", "Postgres", "TanStack Query", "Tailwind CSS"],
    features: [
      "A fixed six-stage pipeline drives every view: progress rings, pipeline board, stage matrix, and stage-filtered task boards.",
      "Invariants live in Postgres rather than the client, with multi-step operations as RPC functions so they commit as one transaction.",
      "Multi-tenant from day one, with row-level security as the actual security boundary rather than a client-side check.",
      "A dark-first design system built on CSS custom properties, re-theming to light at runtime."
    ],
    role: "I'm building Ashfall Studio solo: schema design, migrations, security policies, and the front end. It's early, so the current focus is getting the foundations right before adding surface area. Track versions, threaded feedback, and file attachments are already modelled in the schema and waiting on UI. Development is AI-assisted, with Claude Code used alongside code I write and review myself.",
    github: null,
    pdf: null,
    inProgress: true,
    status: "IN PROGRESS · 2026",
    aiAssisted: true
  },
  'masters-thesis': {
    category: "MASTER'S THESIS · APPLIED ML IN LOGISTICS",
    title: "Predicting transport delays in courier logistics using machine learning",
    subtitle: "Data-driven delay prediction on real operational data, identifying the factors that most strongly influence service reliability.",
    overview: "This project sits within the broader research area of applied machine learning in logistics and operations research. It explores how historical operational data from Jetpak can be used to predict transport delays and surface the underlying factors that most strongly influence performance, with the goal of improving service reliability through data-driven optimization.",
    screens: ["assets/delay_pred.jpg"],
    tags: ["Machine Learning", "AI", "Python", "PyTorch", "NumPy", "Research"],
    features: [
      "Pre-processed a real-world dataset and enriched it with external information.",
      "Implemented machine learning models from several different model families.",
      "Ran an extensive comparative analysis across feature representation and engineering strategies."
    ],
    role: "This was my Master's thesis project, completed in June 2026. I was responsible for the full pipeline: data preparation, model implementation, and the comparative evaluation of delay-prediction approaches.",
    github: null,
    pdf: null,
    inProgress: false,
    status: ""
  },
  'ea-seed': {
    category: "EA SEED · LLM + REINFORCEMENT LEARNING",
    title: "EA SEED: Hierarchical AI for smarter NPCs",
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
    role: "Early on I focused on getting our Unity test game working to spec, mainly the level design for the test levels. The initial phase also involved extensive research into UI and audio in games and their role in player experience. The rest of the time went to running the user studies, analysing results, and composing the final report.",
    github: "https://github.com/pontusfi/KEX/tree/master",
    pdf: "assets/FULLTEXT01.pdf",
    inProgress: false,
    status: ""
  },
  'rnn-lstm': {
    category: "DEEP LEARNING · NLP",
    title: "RNN and LSTM Text Synthesis",
    subtitle: "Evaluating and comparing a vanilla RNN against an LSTM for character-level text synthesis.",
    overview: "This project explores Recurrent Neural Networks and Long Short-Term Memory networks for character-level text generation, using a dataset of Shakespeare's plays. We implemented both a vanilla RNN and an LSTM and compared training, validation and test losses as well as generated-text quality. Hyperparameters were optimized via grid search, and we investigated the impact of hidden-state dimensionality. Evaluation combined quantitative metrics like n-gram accuracy and spelling correctness with qualitative reading. The results show LSTMs outperform vanilla RNNs at capturing long-range dependencies.",
    screens: ["assets/LSTM_1_layer_loss_plot.png", "assets/synthesizedtext.png"],
    tags: ["Deep Learning", "Python", "PyTorch", "NumPy", "Pickle"],
    features: [
      "Implemented both RNN and LSTM architectures.",
      "Implemented word2vec and BPE tokenization.",
      "Searched, tuned and evaluated hyperparameters via grid search."
    ],
    role: "I deepened my use of PyTorch for this task. Having previously implemented an RNN from scratch in pure Python (forward pass and backprop), here I built the network in PyTorch and adapted it to our project, including the text-synthesis functionality. I also worked extensively on hyperparameter analysis: implementing a grid search, choosing which parameters and values to explore, and analysing training performance to decide on epoch counts. Along the way I gained a much better understanding of LSTMs and of how hidden-layer dimensionality affects results.",
    github: "https://github.com/HaraldHR/NLP_Project",
    pdf: "assets/NLP_Project_Report.pdf",
    inProgress: false,
    status: ""
  },
  'movieline': {
    category: "WEB · FULL-STACK",
    title: "Movieline",
    subtitle: "A web-based interactive timeline game: place as many movies in the correct order as you can.",
    overview: "Movieline is a web-based interactive timeline game where the goal is to place as many movies as possible in the correct chronological order. We built it in React with Vite and used Firebase to handle user data.",
    screens: ["assets/movieline.PNG", "assets/movieline_screen1.png", "assets/movieline_screen2.png"],
    tags: ["React", "Firebase", "JavaScript", "HTML", "CSS"],
    features: [
      "Created a timeline-based game built around movies.",
      "Used the OMDB API to fetch movie data.",
      "Built the app in React following the Model-View-Presenter architecture.",
      "Persisted user data in a Firebase database."
    ],
    role: "I focused heavily on the Presenters and Views within the MVP architecture, keeping a clean separation of concerns. I implemented much of the routing logic and the React Router setup for seamless navigation, and I was responsible for data persistence with Firebase, configuring the backend and implementing storing and retrieving data from the database.",
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
      "Webhook integration: triggers builds on new commits pushed to GitHub.",
      "Automated build execution: compiles and tests code on each trigger.",
      "Commit status reporting: sends build results back to the repository via REST."
    ],
    role: "I was responsible for the commit status reporting feature, integrating with the GitHub REST API to programmatically set each commit's status based on build results, giving clear feedback directly inside the repository. I also wrote unit tests to verify the correctness and reliability of this functionality, ensuring accurate status updates and robust error handling.",
    github: "https://github.com/Soffan-Group-3/CD-Server",
    pdf: null,
    inProgress: false,
    status: ""
  }
};

// ===== Career & Experience expand/collapse =====
document.querySelectorAll('#experience .timeline-item').forEach((item) => {
  if (!item.querySelector('.exp-details')) return;

  const toggle = () => {
    const isOpen = item.classList.toggle('open');
    item.setAttribute('aria-expanded', String(isOpen));
  };

  item.addEventListener('click', toggle);
  item.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle();
    }
  });
});

// ===== Work section tag filters =====
(function initWorkFilters() {
  const filtersContainer = document.getElementById('workFilters');
  const projectsGrid = document.querySelector('.projects-grid');
  if (!filtersContainer || !projectsGrid) return;

  const projectCards = Array.from(projectsGrid.querySelectorAll('.project-card[data-pid]'));
  const tags = [];
  projectCards.forEach((card) => {
    const cardTags = Array.from(card.querySelectorAll('.project-tags .tag')).map((t) => t.textContent.trim());
    card.dataset.tags = JSON.stringify(cardTags);
    cardTags.forEach((tag) => {
      if (!tags.includes(tag)) tags.push(tag);
    });
  });
  tags.sort();

  function setActive(btn) {
    filtersContainer.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
  }

  function applyFilter(tag) {
    projectCards.forEach((card) => {
      const cardTags = JSON.parse(card.dataset.tags);
      const show = tag === 'All' || cardTags.includes(tag);
      card.classList.toggle('hidden', !show);
    });
  }

  function createFilterBtn(label, isAll) {
    const btn = document.createElement('button');
    btn.className = 'filter-btn mono' + (isAll ? ' active' : '');
    btn.type = 'button';
    btn.textContent = label;
    btn.addEventListener('click', () => {
      setActive(btn);
      applyFilter(label);
    });
    return btn;
  }

  filtersContainer.appendChild(createFilterBtn('All', true));
  tags.forEach((tag) => filtersContainer.appendChild(createFilterBtn(tag, false)));
})();

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
const overlayStatusRow = document.getElementById('overlayStatusRow');
const overlayAi = document.getElementById('overlayAi');
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

  overlayAi.style.display = p.aiAssisted ? 'inline-block' : 'none';
  overlayStatusRow.style.display = (p.inProgress || p.aiAssisted) ? 'flex' : 'none';

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

  const N = 44;
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
          const a = (1 - d / D) * 0.5;
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

// ===== Interactive hero terminal =====
(function initCli() {
  const cli = document.getElementById('cli');
  const log = document.getElementById('cliLog');
  const form = document.getElementById('cliForm');
  const input = document.getElementById('cliInput');
  if (!cli || !log || !form || !input) return;

  const sections = {
    about: 'About — background, stack and what I work on',
    education: 'Education — KTH, B.Sc. Media Technology & M.Sc. Computer Science',
    experience: 'Experience — roles, positions and what I did there',
    work: 'Work — selected projects, filterable by tag',
    contact: 'Contact — email and links',
    top: 'Top — back to the start'
  };
  const names = Object.keys(sections);
  const commands = ['help', 'ls', 'cd', 'whoami', 'open', 'clear'];

  function print(text, cls) {
    const line = document.createElement('div');
    line.className = 'cli-line' + (cls ? ' ' + cls : '');
    line.textContent = text;
    log.appendChild(line);
    log.scrollTop = log.scrollHeight;
    return line;
  }

  function goTo(id) {
    const el = document.getElementById(id);
    if (!el) return false;
    print('→ ' + id, 'cli-dim');
    // Let the line paint before the scroll starts.
    requestAnimationFrame(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
    return true;
  }

  function resolve(word) {
    if (!word) return null;
    const w = word.replace(/^\.?\/*/, '').replace(/\/+$/, '').toLowerCase();
    if (w === 'home' || w === '~' || w === '..') return 'top';
    if (names.indexOf(w) !== -1) return w;
    const hits = names.filter((n) => n.indexOf(w) === 0);
    return hits.length === 1 ? hits[0] : null;
  }

  function run(raw) {
    const line = raw.trim();
    if (!line) return;
    print('visitor@portfolio:~$ ' + line, 'cli-echo');

    const parts = line.split(/\s+/);
    const cmd = parts[0].toLowerCase();
    const arg = parts.slice(1).join(' ');

    if (cmd === 'clear') {
      log.innerHTML = '';
      return;
    }
    if (cmd === 'help') {
      print('cd <section>   jump to a section of the page');
      print('ls             list the sections');
      print('open <name>    open a project from the work grid');
      print('whoami         short bio');
      print('clear          clear this log');
      print('shortcut: just type a section name, e.g. "work"', 'cli-dim');
      return;
    }
    if (cmd === 'ls') {
      names.forEach((n) => print(n.padEnd(12) + sections[n], 'cli-dim'));
      return;
    }
    if (cmd === 'whoami') {
      print('Pontus Filén — AI · Machine Learning Engineer, Stockholm.');
      print('M.Sc. Computer Science, KTH (2026). Currently at Solvigo AB.');
      return;
    }
    if (cmd === 'open') {
      const cards = Array.from(document.querySelectorAll('.project-card[data-pid]'));
      const key = arg.toLowerCase().replace(/\s+/g, '');
      if (!key) {
        print('open: name a project — ' + cards.map((c) => c.getAttribute('data-pid')).join(', '), 'cli-dim');
        return;
      }
      const card = cards.find((c) => c.getAttribute('data-pid').toLowerCase().indexOf(key) === 0);
      if (card) {
        print('opening ' + card.getAttribute('data-pid') + '…', 'cli-dim');
        card.click();
      } else {
        print('open: no project matching "' + arg + '" — try `open` on its own to list them', 'cli-err');
      }
      return;
    }
    if (cmd === 'cd') {
      const target = resolve(arg);
      if (target) goTo(target);
      else print('cd: no such section: ' + (arg || '(nothing)'), 'cli-err');
      return;
    }

    const bare = resolve(cmd);
    if (bare) { goTo(bare); return; }
    print('command not found: ' + cmd + " — try 'help'", 'cli-err');
  }

  // --- history ---
  const history = [];
  let hIndex = -1;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = input.value;
    if (value.trim()) {
      history.push(value.trim());
      hIndex = history.length;
    }
    input.value = '';
    run(value);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowUp') {
      if (!history.length) return;
      e.preventDefault();
      hIndex = Math.max(0, hIndex - 1);
      input.value = history[hIndex];
    } else if (e.key === 'ArrowDown') {
      if (!history.length) return;
      e.preventDefault();
      hIndex = Math.min(history.length, hIndex + 1);
      input.value = hIndex === history.length ? '' : history[hIndex];
    } else if (e.key === 'Tab') {
      e.preventDefault();
      const parts = input.value.split(/\s+/);
      const last = (parts[parts.length - 1] || '').toLowerCase();
      const pool = parts.length > 1 ? names : commands.concat(names);
      const hits = pool.filter((c) => c.indexOf(last) === 0);
      if (hits.length === 1) {
        parts[parts.length - 1] = hits[0];
        input.value = parts.join(' ') + (parts.length === 1 && hits[0] === 'cd' ? ' ' : '');
      } else if (hits.length > 1) {
        print(hits.join('  '), 'cli-dim');
      }
    }
  });

  // Clicking anywhere in the strip focuses the prompt.
  cli.addEventListener('mousedown', (e) => {
    if (e.target.closest('.cli-chip') || e.target === input) return;
    e.preventDefault();
    input.focus();
  });

  cli.querySelectorAll('.cli-chip').forEach((chip) => {
    chip.addEventListener('click', () => {
      input.focus();
      run(chip.getAttribute('data-cmd'));
    });
  });

  // Idle placeholder that types out a rotating suggestion.
  const suggestions = ['cd work', 'ls', 'whoami', 'cd contact', 'help'];
  let sIndex = 0, cIndex = 0, erasing = false, idleTimer = null;

  function tick() {
    if (document.activeElement === input || input.value) {
      input.placeholder = '';
      idleTimer = setTimeout(tick, 900);
      return;
    }
    const text = suggestions[sIndex];
    input.placeholder = text.slice(0, cIndex) + (erasing ? '' : '▍');
    if (!erasing && cIndex < text.length) cIndex++;
    else if (!erasing) { erasing = true; idleTimer = setTimeout(tick, 1600); return; }
    else if (cIndex > 0) cIndex = Math.max(0, cIndex - 2);
    else { erasing = false; cIndex = 0; sIndex = (sIndex + 1) % suggestions.length; }
    idleTimer = setTimeout(tick, erasing ? 34 : 78);
  }

  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    idleTimer = setTimeout(tick, 1400);
  } else {
    input.placeholder = 'type help';
  }
  input.addEventListener('focus', () => { input.placeholder = ''; });
})();
