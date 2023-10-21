const video_frame = document.querySelectorAll(".original");
console.log(window.innerHeight);
document.addEventListener("scroll", () => {
  video_frame.forEach((element) => {
    if (window.innerHeight - 60 > element.getBoundingClientRect().top) {
      console.log("heppened2" + element);
      element.parentElement.className = "block showed";
    }
  });
});
