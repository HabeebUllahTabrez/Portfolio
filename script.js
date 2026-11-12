/* ==========================================================================
   script.js: renders content.js into the page and handles small interactions.
   You shouldn't need to edit this to change what the site says.
   ========================================================================== */
(function () {
  const root = document.documentElement;
  const SITE = window.SITE || {};

  /* ---------- Draft mode ----------
     Placeholders (todo items) only show on a local preview or with ?draft. */
  const host = location.hostname;
  const DRAFT =
    location.protocol === "file:" ||
    host === "localhost" || host === "127.0.0.1" || host === "" ||
    new URLSearchParams(location.search).has("draft");
  if (DRAFT) {
    root.classList.add("is-draft");
    const badge = document.createElement("p");
    badge.className = "draft-badge";
    badge.textContent = "Draft view · placeholders in amber are hidden on the live site";
    badge.title = "Tap to dismiss";
    badge.addEventListener("click", () => { badge.remove(); root.classList.add("no-badge"); });
    document.body.appendChild(badge);
  }
  const keep = (item) => DRAFT || !(item && item.todo);

  /* ---------- Tiny DOM helper ---------- */
  function el(tag, attrs, ...children) {
    const node = document.createElement(tag);
    for (const [k, v] of Object.entries(attrs || {})) {
      if (v == null || v === false) continue;
      if (k === "class") node.className = v;
      else if (k === "html") node.innerHTML = v;
      else if (k === "text") node.textContent = v;
      else node.setAttribute(k, v === true ? "" : v);
    }
    children.flat().forEach((c) => c != null && node.append(c));
    return node;
  }
  const asItem = (x) => (typeof x === "string" ? { text: x } : x);
  const todoClass = (item, base) => [base, item.todo && "todo"].filter(Boolean).join(" ");

  /* ---------- Renderers ---------- */
  const renderers = {
    nowUpdated: (node) => { node.textContent = SITE.nowUpdated || ""; },

    now: (node) => {
      (SITE.now || []).filter(keep).forEach((item) => {
        node.append(el("div", { class: todoClass(item, "now__item") },
          el("dt", { text: item.label }),
          el("dd", { html: item.html })));
      });
    },

    gallery: (node) => {
      (SITE.gallery || []).filter(keep).forEach((item, i) => {
        const fig = el("figure", { class: todoClass(item, "gallery__item") });
        const img = el("img", { src: item.src, alt: item.alt || "", loading: "lazy", decoding: "async" });
        if (item.position) img.style.objectPosition = item.position;
        const cap = el("figcaption", null, el("span", { class: "mono", text: `fig. ${i + 2}` }), " ", item.caption);
        img.addEventListener("error", () => {
          if (DRAFT) {
            fig.classList.add("is-missing");
            fig.insertBefore(el("span", { class: "gallery__missing mono", text: item.src }), fig.firstChild);
          } else {
            fig.remove();
            if (!node.children.length) hideSection(node);
          }
        });
        fig.append(img, cap);
        node.append(fig);
      });
    },

    about: (node) => {
      (SITE.about || []).forEach((group) => {
        const items = (group.items || []).map(asItem).filter(keep);
        if (!items.length) return;
        node.append(el("div", { class: "about__row" },
          el("dt", { text: group.label }),
          el("dd", null, el("ul", { class: "terms" },
            items.map((it) => {
              const li = el("li", { class: todoClass(it, it.done && "is-done") });
              /* Done items stay on the list, struck through, with the year they happened */
              if (it.done) {
                li.append(el("s", { html: it.text }), el("span", { class: "visually-hidden", text: " (done)" }));
                if (it.done !== true) li.append(el("span", { class: "terms__year", text: ` ${it.done}` }));
              } else {
                li.innerHTML = it.text;
              }
              return li;
            })))));
      });
    },

    projects: (node) => {
      (SITE.projects || []).filter(keep).forEach((p) => {
        const links = el("p", { class: "project__links" },
          p.demoUrl ? el("a", { href: p.demoUrl, target: "_blank", rel: "noopener", text: "Live ↗" }) : null,
          p.githubUrl ? el("a", { href: p.githubUrl, target: "_blank", rel: "noopener", text: "Code ↗" }) : null);
        node.append(el("article", { class: todoClass(p, p.featured ? "project project--featured" : "project") },
          el("h3", { class: "project__title", text: p.title }),
          el("p", { class: "project__desc", text: p.description }),
          el("ul", { class: "project__tech", "aria-label": "Built with" }, (p.tech || []).map((t) => el("li", { text: t }))),
          links));
      });
    },
  };

  /* Hide a section when it ends up with nothing to show */
  function hideSection(node) {
    const section = node.closest("section");
    if (section) section.hidden = true;
  }

  document.querySelectorAll("[data-render]").forEach((node) => {
    const fn = renderers[node.dataset.render];
    if (!fn) return;
    fn(node);
    if (node.dataset.render !== "nowUpdated" && !node.children.length) hideSection(node);
  });

  /* ---------- Theme toggle: light (white) by default, dark on request ---------- */
  const themeBtn = document.querySelector(".theme-toggle");
  const themeMeta = document.querySelector('meta[name="theme-color"]');
  const syncTheme = () => {
    const dark = root.dataset.theme === "dark";
    if (themeBtn) {
      themeBtn.setAttribute("aria-pressed", String(dark));
      themeBtn.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
    }
    if (themeMeta) themeMeta.content = dark ? "#121212" : "#ffffff";
  };
  if (themeBtn) {
    themeBtn.addEventListener("click", () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      try { localStorage.setItem("theme", root.dataset.theme); } catch (e) {}
      syncTheme();
    });
  }
  syncTheme();

  /* ---------- Header border once scrolled ---------- */
  const header = document.querySelector(".site-header");
  if (header) {
    const onScroll = () => header.classList.toggle("is-scrolled", scrollY > 8);
    addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------- Fade sections in on scroll ---------- */
  if ("IntersectionObserver" in window && !matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-visible"); io.unobserve(e.target); }
      });
    /* threshold 0 + a small inset, so tall sections on short phone screens still reveal */
    }, { threshold: 0, rootMargin: "0px 0px -10% 0px" });
    document.querySelectorAll(".section, .contact").forEach((s) => { s.classList.add("reveal"); io.observe(s); });
  }

  document.querySelectorAll("[data-year]").forEach((n) => (n.textContent = new Date().getFullYear()));
})();
