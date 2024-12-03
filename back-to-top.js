window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    const backToTopBtn = document.querySelector(".back-to-top");
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - document.body.offsetHeight / 2) {
        backToTopBtn.style.display = "block"; // Show the button
    } else {
        backToTopBtn.style.display = "none"; // Hide the button
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}