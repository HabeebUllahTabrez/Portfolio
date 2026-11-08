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
    { label: "Working", html: 'Building backend systems at <strong>Wilya</strong>.' },
    { label: "Learning", html: "How AI tools are changing the way software gets built, and using them every day." },
    { label: "Making", html: 'Reels and little stories at <a href="https://www.instagram.com/habeebdoingthings/" target="_blank" rel="noopener">@habeebdoingthings</a>.' },
    { label: "Reading", html: "[the book you're reading]", todo: true },
  ],

  /* ---------- Lately, in pictures (home page) ----------
     Put photos in images/life/ (WebP, ~1200px on the long side, under 200 KB).
     Remove `todo: true` once the file exists. */
  gallery: [
    { src: "images/life/01.webp", alt: "", caption: "[caption]", todo: true },
    { src: "images/life/02.webp", alt: "", caption: "[caption]", todo: true },
    { src: "images/life/03.webp", alt: "", caption: "[caption]", todo: true },
  ],

  /* ---------- Things I like (home page) ---------- */
  likes: [
    { title: "Food", items: [todo("[a dish]"), todo("[a café or restaurant]")] },
    { title: "Places", items: [todo("[favourite city]"), todo("[next destination]")] },
    { title: "Watching & reading", items: [todo("[show or film]"), todo("[book]")] },
    { title: "Ideas I believe in", items: ["Learn by doing", "Say yes to the weird invite"] },
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
