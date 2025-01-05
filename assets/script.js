// script.js

document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const sectionId = link.getAttribute("href").slice(1);
            const section = document.getElementById(sectionId);
            section.scrollIntoView({ behavior: "smooth" });
        });
    });
});
