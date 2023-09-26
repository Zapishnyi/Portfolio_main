const welcome = document.querySelector(".welcome_page");
const content = document.querySelectorAll(".section");
const buttons = [
  document.querySelector(".button_1"),
  document.querySelector(".button_2"),
  document.querySelector(".button_3"),
];
const content_array = [
  document.querySelector(".projects"),
  document.querySelector(".contacts"),
  document.querySelector(".about_me"),
];

let content_height = window.innerHeight;

let button_colors = ["105, 59, 59", "105, 59, 59", "105, 59, 59"];

function section_size() {
  content_height = window.innerHeight;
  content.forEach((item) => {
    item.style.cssText = "height :" + (content_height - 80) + "px;";
  });
}

function button_color_switch() {
  content_array.forEach((element, index) => {
    (element.getBoundingClientRect().y <= 80) &
    (element.getBoundingClientRect().y >= -(content_height - 161))
      ? ((button_colors[index] = "207, 129, 129"),
        (buttons[index].style.cssText =
          "background-color : rgb(" + button_colors[index] + ");"))
      : ((button_colors[index] = "105, 59, 59"),
        (buttons[index].style.cssText =
          "background-color : rgb(" + button_colors[index] + ");"));
  });
}

function button_up(button, color, scroll_psn) {
  button.target.style.cssText =
    "box-shadow: 0px 0px 20px rgb(199, 255, 135);background-color : rgb(" +
    color +
    ");";
  window.scrollTo({ top: scroll_psn, behavior: "smooth" });
}

section_size();

addEventListener("scroll", () => {
  button_color_switch();
});

addEventListener("resize", () => {
  section_size();
});

document.querySelectorAll("li").forEach((element) => {
  element.addEventListener("click", (button) => {
    let index = button.target.className.slice(-1) - 1;
    button.target.style.cssText =
      "box-shadow: 0px 0px 0px rgb(199, 255, 135);background-color : rgb(" +
      button_colors[index] +
      ");";
    setTimeout(
      button_up,
      200,
      button,
      button_colors[index],
      (content_height - 80) * (index + 1)
    );
  });
});
