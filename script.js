const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));

const cards = document.querySelectorAll(".skill-card,.project-card,.edu-card,.timeline-item,.about-card");
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
},{threshold:.12});

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(22px)";
  card.style.transition = "all .7s ease";
  observer.observe(card);
});