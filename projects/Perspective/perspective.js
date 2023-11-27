const wrapper = document.querySelector(".wrapper");
wrapper.style.cssText = `perspective-origin: 50% ${
  Math.abs(wrapper.getBoundingClientRect().y) + window.innerHeight / 2
}px;`;
// wrapper.style.cssText = `height: ${window.innerHeight * 3}px`;
addEventListener("scroll", (event) => {
  console.log(Math.abs(wrapper.getBoundingClientRect().y));
  console.log();
  wrapper.style.cssText = `perspective-origin: 50% ${
    Math.abs(wrapper.getBoundingClientRect().y) + window.innerHeight / 2
  }px;`;
});

window.addEventListener("resize", () => {
  wrapper.style.cssText = `perspective-origin: 50% ${
    Math.abs(wrapper.getBoundingClientRect().y) + window.innerHeight / 2
  }px;`;
});
