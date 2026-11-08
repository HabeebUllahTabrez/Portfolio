/* ==========================================================================
   content.js: the parts of the site you'll update most often.

   • Items wrapped in todo(...) or marked { todo: true } are PLACEHOLDERS.
     They show (in amber) when you preview locally or add ?draft to the URL,
     and are hidden on the live site. Fill one in, then remove the todo.
   • Fields named `html` are inserted as HTML, so they can contain links.
   ========================================================================== */

const todo = (text) => ({ text, todo: true });

window.SITE = {
  /* ---------- Right now (home page) ---------- */
  nowUpdated: "November 2026",
  now: [
    { label: "Working", html: 'At <strong>Wilya</strong>, taking features from requirements to production.' },
    { label: "Building", html: '<a href="https://www.winningsoninator.com" target="_blank" rel="noopener">WinningSon-inator</a>, an app for logging your daily wins and seeing your progress over time.' },
    { label: "Learning", html: "How AI tools are changing the way software gets built, and using them every day." },
    { label: "Making", html: 'Reels and little stories at <a href="https://www.instagram.com/habeebdoingthings/" target="_blank" rel="noopener">@habeebdoingthings</a>.' },
    { label: "Reading", html: "<em>The $100 Startup</em> by Chris Guillebeau." },
  ],

  /* ---------- Lately, in pictures (home page) ----------
     Put photos in images/life/ (WebP, ~1400px on the long side, under 200 KB). */
  gallery: [
    /* `position` (optional) picks which part of the photo survives the 4:5 crop, as CSS object-position */
    { src: "images/life/01.webp", position: "50% 62%", caption: "Travel",
      alt: "Habeeb silhouetted above the clouds, looking up at a huge overhanging rock shaped like a beast’s head" },
    { src: "images/life/02.webp", position: "44% 50%", caption: "Fitness",
      alt: "Habeeb deadlifting a loaded barbell in a gym" },
    { src: "images/life/03.webp", position: "50% 60%", caption: "Building",
      alt: "Habeeb at a café table with headphones on, working on a laptop" },
  ],

  /* ---------- More about me (home page) ----------
     Each group reads as a sentence: "Habeeb is into… / believes in… / wants to…".
     Items flow on one line, in this order. Plain text or HTML (use <em> for titles).

     When you've done something on the "Wants to" list, don't delete it. Mark it done
     and it stays on the list, crossed out, with the year:
       { text: "learn horse riding", done: "2027" }      (or done: true for no year) */
  about: [
    {
      label: "Into",
      items: [
        "food made with love",
        "exploring new places",
        "health &amp; fitness",
        "anime",
      ],
    },
    {
      label: "Believes in",
      items: [
        "putting happiness and mental health first",
        "doing hard things so normal life feels easy",
      ],
    },
    {
      label: "Wants to",
      items: [
        "master calisthenics",
        "learn horse riding",
        "travel as much as possible",
        "do great things with this life",
      ],
    },
  ],

  /* ---------- Projects (work page) ---------- */
  projects: [
    {
      title: "WinningSon-inator",
      description: "Log your daily wins and build a record of your contributions over time. Set goals and get AI-assisted analysis of your progress.",
      tech: ["Go", "React", "PostgreSQL"],
      demoUrl: "https://www.winningsoninator.com",
      featured: true,
    },
    {
      title: "E-Commerce Store",
      description: "An e-commerce platform built from scratch: authentication, product listings, and a complete cart and checkout flow.",
      tech: ["Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/habeebullahtabrez/e-commerce",
    },
    {
      title: "Chatrooms",
      description: "Real-time chat with multiple rooms and live messaging between users over WebSockets.",
      tech: ["Node.js", "Socket.io", "React", "HarperDB"],
      githubUrl: "https://github.com/habeebullahtabrez/chat-app",
    },
    {
      title: "Meetup Organizer",
      description: "Create, publish, and manage online events, with a real-time database keeping every attendee's view live.",
      tech: ["JavaScript", "Svelte", "Firebase"],
      githubUrl: "https://github.com/habeebullahtabrez/meetup-organizer",
    },
    {
      title: "Wave Portal",
      description: "A small Ethereum dApp for exploring the basics of smart contracts and wallet interaction.",
      tech: ["Solidity", "React", "Hardhat"],
      githubUrl: "https://github.com/habeebullahtabrez/wave-portal",
    },
  ],
};
