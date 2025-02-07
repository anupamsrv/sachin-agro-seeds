// Function to set the active class to the current page link
function setActiveLink() {
    const currentPage = window.location.pathname.split("/").pop(); // Get the current page name (e.g., index.html, about.html)
    
    // Get all the links in the navigation
    const navLinks = document.querySelectorAll("nav a");

    // Loop through all the links and add the 'active' class to the matching link
    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // Add the active class to the current page link
        } else {
            link.classList.remove("active"); // Remove the active class from other links
        }
    });
}
// header and footer components
function loadComponent(file, elementId) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}
window.onload = function() {
    loadComponent('assets/header.html', 'header-container');
    loadComponent('assets/footer.html', 'footer-container');
};

// hero crousel
let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".carousel-slide");
    let dots = document.querySelectorAll(".dot");

    // Hide all slides
    slides.forEach(slide => slide.style.display = "none");

    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove("active"));

    // Increment slide index
    slideIndex++;
    if (slideIndex > slides.length) slideIndex = 1;

    // Display the current slide and set the active dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");

    // Change slide every 5 seconds
    setTimeout(showSlides, 5000);
}

function prevSlide() {
    slideIndex -= 2;
    if (slideIndex < 0) slideIndex = document.querySelectorAll(".carousel-slide").length - 1;
    showSlides();
}

function nextSlide() {
    showSlides();
}

// Initialize the dots dynamically
function createDots() {
    const dotsContainer = document.querySelector(".dots-container");
    const slides = document.querySelectorAll(".carousel-slide");

    slides.forEach((_, index) => {
        let dot = document.createElement("span");
        dot.classList.add("dot");
        dot.setAttribute("onclick", `currentSlide(${index + 1})`);
        dotsContainer.appendChild(dot);
    });
}

// Show a specific slide when dot is clicked
function currentSlide(n) {
    slideIndex = n - 1;
    showSlides();
}

// Run the functions after the page loads
document.addEventListener("DOMContentLoaded", function () {
    createDots();
    showSlides();
});
