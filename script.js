const $ = (s, p = document) => p.querySelector(s),
  $$ = (s, p = document) => [...p.querySelectorAll(s)];

const NEXUS_LINKS = {
  invite: "https://discord.com/oauth2/authorize?client_id=1526294310096470037",
  support: "",
  github: "https://github.com/spook20000",
};

const themes = ["purple", "cyan", "red"];
let themeIndex = 0,
  activeCategory = "all",
  toastTimer;

const toast = $("#toast"),
  toastText = $("#toastText");

function showToast(text) {
  toastText.textContent = text;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2300);
}

function setupLinks() {
  $$("[data-link]").forEach((el) => {
    const key = el.dataset.link,
      url = NEXUS_LINKS[key];
    if (url) {
      el.href = url;
      el.target = "_blank";
      el.rel = "noopener noreferrer";
    }
    el.addEventListener("click", (e) => {
      if (!NEXUS_LINKS[key]) {
        e.preventDefault();
        showToast(
          key === "invite"
            ? "Trage deinen Bot-Invite-Link in script.js ein."
            : "Trage deinen Link in script.js ein.",
        );
      }
    });
  });
}

function setupReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  $$(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${Math.min(i * 38, 220)}ms`;
    observer.observe(el);
  });
}

function animateCounters() {
  $$("[data-count]").forEach((el) => {
    const target = Number(el.dataset.count),
      start = performance.now(),
      duration = 1100;
    function tick(now) {
      const p = Math.min((now - start) / duration, 1);
      el.textContent = Math.floor(target * (1 - Math.pow(1 - p, 3)));
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

function setupCommands() {
  const input = $("#commandSearch"),
    items = $$(".command-list article"),
    empty = $("#emptyState");
  function filter() {
    const q = input.value.toLowerCase().trim();
    let count = 0;
    items.forEach((item) => {
      const okCategory =
        activeCategory === "all" || item.dataset.category === activeCategory;
      const okSearch =
        !q ||
        (item.textContent + " " + (item.dataset.search || ""))
          .toLowerCase()
          .includes(q);
      const show = okCategory && okSearch;
      item.classList.toggle("hidden", !show);
      if (show) count++;
    });
    empty.classList.toggle("show", count === 0);
  }
  $$(".tabs button").forEach((btn) =>
    btn.addEventListener("click", () => {
      $$(".tabs button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      activeCategory = btn.dataset.category;
      filter();
    }),
  );
  input.addEventListener("input", filter);
}

function setupFaq() {
  $$(".faq").forEach((item) => {
    const btn = $("button", item),
      answer = $(":scope > div", item);
    btn.addEventListener("click", () => {
      const open = item.classList.contains("open");
      $$(".faq").forEach((other) => {
        other.classList.remove("open");
        $(":scope > div", other).style.maxHeight = "";
      });
      if (!open) {
        item.classList.add("open");
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    });
  });
}

function setupCanvas() {
  const canvas = $("#stars"),
    ctx = canvas.getContext("2d");
  let w,
    h,
    stars = [];
  function resize() {
    const ratio = Math.min(devicePixelRatio || 1, 2);
    w = innerWidth;
    h = innerHeight;
    canvas.width = w * ratio;
    canvas.height = h * ratio;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    stars = Array.from(
      { length: Math.min(95, Math.floor((w * h) / 17000)) },
      () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        r: Math.random() * 1.2 + 0.25,
        s: Math.random() * 0.16 + 0.03,
        o: Math.random() * 0.55 + 0.12,
      }),
    );
  }
  function draw() {
    ctx.clearRect(0, 0, w, h);
    stars.forEach((star) => {
      star.y -= star.s;
      if (star.y < -5) {
        star.y = h + 5;
        star.x = Math.random() * w;
      }
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(210,220,255,${star.o})`;
      ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  resize();
  draw();
  addEventListener("resize", resize);
}

function startTyping() {
  const el = $("#typingCommand"),
    commands = [
      "quickstart",
      "ticket-panel",
      "verify-setup",
      "serverinfo",
      "help",
    ];
  let ci = 0,
    li = 0,
    deleting = false;
  function tick() {
    const text = commands[ci];
    if (!deleting) {
      li++;
      el.textContent = text.slice(0, li);
      if (li === text.length) {
        deleting = true;
        setTimeout(tick, 1100);
        return;
      }
    } else {
      li--;
      el.textContent = text.slice(0, li);
      if (li === 0) {
        deleting = false;
        ci = (ci + 1) % commands.length;
      }
    }
    setTimeout(tick, deleting ? 42 : 80);
  }
  tick();
}

function animateTerminal() {
  const bar = $("#terminalBar"),
    status = $("#terminalStatus");
  const states = [
    "Rollen werden erstellt...",
    "Kanäle werden eingerichtet...",
    "Berechtigungen werden gesetzt...",
    "Ticket-Panel wird erstellt...",
    "✓ Nexus Setup erfolgreich abgeschlossen.",
  ];
  let value = 0;
  const timer = setInterval(() => {
    value = Math.min(value + Math.random() * 8 + 3, 100);
    bar.style.width = value + "%";
    status.textContent =
      states[Math.min(Math.floor(value / 22), states.length - 1)];
    if (value >= 100) {
      clearInterval(timer);
      status.className = "success";
    }
  }, 420);
}

function buildUptimeBars() {
  $$(".uptime-bars").forEach((el) => {
    for (let i = 0; i < 12; i++) {
      const bar = document.createElement("i");
      bar.style.height = 62 + Math.random() * 38 + "%";
      el.appendChild(bar);
    }
  });
}

$("#themeBtn").addEventListener("click", () => {
  themeIndex = (themeIndex + 1) % themes.length;
  document.body.dataset.theme = themes[themeIndex];
  localStorage.setItem("nexus-theme", themes[themeIndex]);
  showToast(
    { purple: "Nexus Purple", cyan: "Cyber Cyan", red: "Core Red" }[
      themes[themeIndex]
    ],
  );
});

const saved = localStorage.getItem("nexus-theme");
if (themes.includes(saved)) {
  themeIndex = themes.indexOf(saved);
  document.body.dataset.theme = saved;
}

$("#menuBtn").addEventListener("click", () =>
  $("#mobileMenu").classList.toggle("open"),
);
$$(".mobile-menu a").forEach((a) =>
  a.addEventListener("click", () => $("#mobileMenu").classList.remove("open")),
);

addEventListener("scroll", () =>
  $("#header").classList.toggle("scrolled", scrollY > 24),
);
addEventListener("mousemove", (e) => {
  $("#cursorGlow").style.left = e.clientX + "px";
  $("#cursorGlow").style.top = e.clientY + "px";
});

window.addEventListener("load", () => {
  setTimeout(() => $("#loader").classList.add("hide"), 650);
  setTimeout(animateCounters, 850);
  setTimeout(animateTerminal, 1200);
});

$("#year").textContent = new Date().getFullYear();
$("#lastCheck").textContent = new Intl.DateTimeFormat("de-DE", {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
}).format(new Date());

setupLinks();
setupReveal();
setupCommands();
setupFaq();
setupCanvas();
startTyping();
buildUptimeBars();
