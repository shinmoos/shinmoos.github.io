const youtubeLink = "https://www.youtube.com";

const youtubeMenuItem = document.querySelector(".dropdown-content a:first-child");

youtubeMenuItem.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = youtubeLink;
});
