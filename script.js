const footer = document.getElementById("footer");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const footerOffset = footer.offsetTop;

  if (scrollY + windowHeight > footerOffset + 100) {
    footer.classList.add("visible");
  }
});
