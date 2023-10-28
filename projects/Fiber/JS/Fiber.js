const all_elements = document.querySelectorAll(".hide");
console.log("js working");
console.log(all_elements);
function fade_in() {
  all_elements.forEach((element) => {
    if (window.innerHeight - 150 > element.getBoundingClientRect().top) {
      console.log(element);
      if (element.className.includes("showed") === false) {
        element.className += " showed";
      }
    }
  });
}
document.addEventListener("scroll", () => {
  fade_in();
});
addEventListener("load", () => {
  fade_in();
});
