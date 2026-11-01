const menuButton = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#bookingForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const status = document.querySelector("#formStatus");
  const name = new FormData(event.currentTarget).get("name");
  status.textContent = `धन्यवाद ${name}! हमारी टीम जल्द आपसे संपर्क करेगी।`;
  event.currentTarget.reset();
});
