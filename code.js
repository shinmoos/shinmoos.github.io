const youtubeLink = "https://www.youtube.com";
const daumLink = "https://www.daum.net";
const gptLink = "https://chat.openai.com/chat";

const youtubeMenuItem = document.querySelector(".dropdown-content a:first-child");
const daumMenuItem = document.querySelector(".dropdown-content a:nth-child(2)");
const gptMenuItem = document.querySelector(".dropdown-content a:nth-child(3)");

youtubeMenuItem.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = youtubeLink;
});

daumMenuItem.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = daumLink;
});

gptMenuItem.addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = gptLink;
});