// Add a class to the header when the user scrolls down
window.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

// Toggle the hamburger menu
const navbar = document.querySelector(".navbar");
const hamburgerMenu = document.querySelector(".hamburger-menu");

hamburgerMenu.addEventListener("click", () => {
  navbar.classList.toggle("show-mobile-menu");
});

const playBtn = document.querySelector(".play-btn");
const videoBg = document.querySelector(".video-bg");

playBtn.addEventListener("click", () => {
  videoBg.style.filter = "brightness(1)";
  // Add code to play video here
});

// toggle the next and previous buttons

window.addEventListener("load", function () {
  let currentIndex = 0;
  const cards = document.querySelectorAll(".cards-container .card");
  const arrows = document.querySelectorAll(".arrows-container img");

  showCard(currentIndex);

  arrows[0].addEventListener("click", function () {
    cards[currentIndex].classList.remove("active");
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  });

  arrows[1].addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  });

  function showCard(index) {
    cards[index].classList.add("active");
  }
});

/* form validation */
const form = document.getElementById("subscribe-form");
const emailInput = document.getElementById("email");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const emailValue = emailInput.value.trim();
  if (!isValidEmail(emailValue)) {
    emailInput.classList.add("invalid");
  } else {
    emailInput.classList.remove("invalid");
    // TODO: submit the form data
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
