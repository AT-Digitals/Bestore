document.addEventListener("DOMContentLoaded", function () {
  const banner = document.getElementById("banner");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      banner.classList.add("scrolled");
    } else {
      banner.classList.remove("scrolled");
    }
  });
});
