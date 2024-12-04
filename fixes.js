window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  const backToTopBtn = document.querySelector(".back-to-top");
  if (
    window.innerHeight + window.scrollY >=
    document.body.offsetHeight - document.body.offsetHeight / 2
  ) {
    backToTopBtn.style.display = "block"; // Show the button
  } else {
    backToTopBtn.style.display = "none"; // Hide the button
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}




const projectsSection = document.querySelector(".projects-section");
projectsSectionOverlay = document.querySelector(".projects-section-overlay");
const projectsSectionRect = projectsSection.getBoundingClientRect();
projectsSectionOverlay.style.position = "absolute";
projectsSectionOverlay.style.top = projectsSectionRect.top + "px";
projectsSectionOverlay.style.left = "0";
projectsSectionOverlay.style.width = "100%";
projectsSectionOverlay.style.height =
document.body.offsetHeight - projectsSectionRect.top + "px";
projectsSectionOverlay.style.filter = "blur(2px) brightness(0.5) contrast(1.2)";
projectsSectionOverlay.style.background =
  "url(images/projects-bg.jpg) center center/cover no-repeat";
projectsSectionOverlay.style.backgroundSize = "cover";
projectsSectionOverlay.style.zIndex = "-1";

window.addEventListener("resize", function() {
  const projectsSectionRect = projectsSection.getBoundingClientRect();
  projectsSectionOverlay.style.top = projectsSectionRect.top + "px";
  projectsSectionOverlay.style.height = document.body.offsetHeight - projectsSectionRect.top + "px";
});