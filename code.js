const youtubeLink = "https://www.youtube.com";
const daumLink = "https://www.daum.net";

const youtubeMenuItem = document.querySelector(".dropdown-content a:first-child");
const daumMenuItem = document.querySelector(".dropdown-content a:nth-child(2)");

youtubeMenuItem.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = youtubeLink;
});

daumMenuItem.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = daumLink;
});
