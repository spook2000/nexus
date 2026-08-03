"use strict";

const DISCORD_CLIENT_ID = "1526294310096470037";
const DISCORD_PERMISSIONS = "8";
const DISCORD_SCOPE = "bot%20applications.commands";

const inviteUrl = `https://discord.com/oauth2/authorize?client_id=${encodeURIComponent(DISCORD_CLIENT_ID)}&permissions=${DISCORD_PERMISSIONS}&integration_type=0&scope=${DISCORD_SCOPE}`;

document.querySelectorAll(".invite-link").forEach((link) => {
  link.href = inviteUrl;
});

document.getElementById("year").textContent = new Date().getFullYear();

const siteHeader = document.querySelector(".site-header");
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");

function closeMenu() {
  mobileMenu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
  menuButton.textContent = "☰";
  document.body.classList.remove("menu-open");
}

menuButton.addEventListener("click", () => {
  const open = mobileMenu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
  menuButton.textContent = open ? "✕" : "☰";
  document.body.classList.toggle("menu-open", open);
});

mobileMenu.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("scrolled", window.scrollY > 20);
}, { passive: true });

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    revealObserver.unobserve(entry.target);
  });
}, { threshold: 0.08 });

document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

const toast = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 2500);
}

document.querySelectorAll(".copy-command").forEach((button) => {
  button.addEventListener("click", async () => {
    const text = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(text);
      showToast(`${text} wurde kopiert.`);
    } catch {
      showToast(`Kopiere diesen Command: ${text}`);
    }
  });
});

const faqItems = Array.from(document.querySelectorAll(".faq-item"));
faqItems.forEach((item) => {
  const button = item.querySelector("button");
  button.addEventListener("click", () => {
    const shouldOpen = !item.classList.contains("open");
    faqItems.forEach((other) => {
      other.classList.remove("open");
      other.querySelector("button").setAttribute("aria-expanded", "false");
      other.querySelector("button b").textContent = "+";
    });
    if (shouldOpen) {
      item.classList.add("open");
      button.setAttribute("aria-expanded", "true");
      button.querySelector("b").textContent = "−";
    }
  });
});

const commandSearch = document.getElementById("commandSearch");
const commandRows = Array.from(document.querySelectorAll(".command-row"));
const commandCount = document.getElementById("commandCount");
const emptyState = document.getElementById("emptyState");

function filterCommands() {
  const term = commandSearch.value.trim().toLowerCase();
  let visible = 0;

  commandRows.forEach((row) => {
    const haystack = `${row.textContent} ${row.dataset.search || ""}`.toLowerCase();
    const match = haystack.includes(term);
    row.hidden = !match;
    if (match) visible += 1;
  });

  commandCount.textContent = `${visible} ${visible === 1 ? "Command" : "Commands"}`;
  emptyState.hidden = visible !== 0;
}

commandSearch.addEventListener("input", filterCommands);
filterCommands();

const canvas = document.getElementById("particleCanvas");
const context = canvas.getContext("2d");
let particles = [];
let animationFrame = 0;

function createParticles() {
  const amount = Math.min(60, Math.max(20, Math.floor(window.innerWidth / 28)));
  particles = Array.from({ length: amount }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    radius: Math.random() * 1.4 + 0.35,
    dx: (Math.random() - 0.5) * 0.16,
    dy: (Math.random() - 0.5) * 0.16,
    alpha: Math.random() * 0.35 + 0.08
  }));
}

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(window.innerWidth * ratio);
  canvas.height = Math.floor(window.innerHeight * ratio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  createParticles();
}

function drawParticles() {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  particles.forEach((particle) => {
    particle.x += particle.dx;
    particle.y += particle.dy;

    if (particle.x < -5) particle.x = window.innerWidth + 5;
    if (particle.x > window.innerWidth + 5) particle.x = -5;
    if (particle.y < -5) particle.y = window.innerHeight + 5;
    if (particle.y > window.innerHeight + 5) particle.y = -5;

    context.beginPath();
    context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
    context.fillStyle = `rgba(188, 176, 255, ${particle.alpha})`;
    context.fill();
  });
  animationFrame = requestAnimationFrame(drawParticles);
}

function startParticles() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  resizeCanvas();
  cancelAnimationFrame(animationFrame);
  drawParticles();
}

window.addEventListener("resize", resizeCanvas);
startParticles();
