document.addEventListener("DOMContentLoaded", function() {
  // JavaScript for Typing Effect
  const text = "Welcome to: Nanna Salugalu";
  const typingText = document.querySelector(".typing-text");
  let index = 0;
  let typingTimer;

  function startTyping() {
    if (index < text.length) {
      typingText.textContent += text.charAt(index);
      index++;
      typingTimer = setTimeout(startTyping, 100);
    } else {
      clearTimeout(typingTimer);
      index = 0; // Reset index for future typing effect iterations
      setTimeout(startTyping, 3000); // Pause for 3 seconds before starting again
    }
  }

  startTyping();
  
  // Increase font size by 30%
  typingText.style.fontSize = "130%";


});

  
  
  
  
  // JavaScript for Poetry Card Animation
  const cards = document.querySelectorAll(".card");

  function animateCards() {
    cards.forEach(function(card) {
      if (isElementInViewport(card)) {
        card.classList.add("animate");
      } else {
        card.classList.remove("animate");
      }
    });
  }

  function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  window.addEventListener("scroll", animateCards);
});


// Toggle navigation menu
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

// Close navigation menu when a menu item is clicked
const navLinks = document.querySelectorAll(".nav-menu li a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("show");
  });
});

// Close navigation menu when clicking outside
document.addEventListener("click", (event) => {
  const target = event.target;
  if (!target.closest(".nav-toggle") && !target.closest(".nav-menu")) {
    navMenu.classList.remove("show");
  }
});


// Preloader



