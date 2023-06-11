"use strict";

const cursor = document.querySelector(".cursor");
const ballon = document.querySelectorAll(".ballon");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});

ballon.addEventListener("mouseover", (e) => {
  cursor.classList.add("ripple");
});

ballon.addEventListener("mouseleave", () => {
  cursor.classList.remove("ripple");
});
