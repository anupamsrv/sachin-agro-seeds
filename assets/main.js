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