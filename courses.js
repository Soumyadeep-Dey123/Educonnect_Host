document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const menuToggle = document.querySelector(".menu-toggle");
  
    menuToggle.addEventListener("click", function () {
      navbar.classList.toggle("active");
    });
  });