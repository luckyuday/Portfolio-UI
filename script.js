let cursor = document.querySelector("#cursor");
let body = document.querySelector("body");
body.addEventListener("mousemove", (e1) => {
  cursor.style.left = e1.clientX + "px";
  cursor.style.top = e1.clientY + "px";
});
body.addEventListener("wheel", (e2) => {
  cursor.style.top = e2.clientY + +"px";
});
