const welcome = document.querySelector(".welcome_page");
const content_1 = document.querySelector(".projects");
const content_2 = document.querySelector(".contacts");
const content_3 = document.querySelector(".about_me");
const content = document.querySelectorAll(".section");

const button_1 = document.querySelector(".button_1");
const button_2 = document.querySelector(".button_2");
const button_3 = document.querySelector(".button_3");
let content_height = window.innerHeight;
const buttons = [button_1, button_2, button_3];
const content_array = [content_1, content_2, content_3];
let button_colors = ["255, 161, 161", "255, 161, 161", "255, 161, 161"];

function section_size() {
  content_height = window.innerHeight;

  content.forEach((item) => {
    item.style.cssText = "height :" + (content_height - 80) + "px;";
  });
}
section_size();

function button_color_switch() {
  console.log(button_colors);
  content_array.forEach((element, index) => {
    (element.getBoundingClientRect().y <= 80) &
    (element.getBoundingClientRect().y >= -(content_height - 161))
      ? ((button_colors[index] = "207, 129, 129"),
        (buttons[index].style.cssText =
          "background-color : rgb(" + button_colors[index] + ");"))
      : ((button_colors[index] = "255, 161, 161"),
        (buttons[index].style.cssText =
          "background-color : rgb(" + button_colors[index] + ");"));
  });
  console.log(button_colors);
}

function button_up(button, color, scroll_psn) {
  button.target.style.cssText =
    "box-shadow: 2px 2px 8px rgb(100, 100, 100);background-color : rgb(" +
    color +
    ");";
  window.scrollTo({ top: scroll_psn, behavior: "smooth" });
}
addEventListener("scroll", () => {
  console.log("scroll");
  button_color_switch();
});
document.querySelectorAll("li").forEach((element) => {
  element.addEventListener("click", (button) => {
    let index = button.target.className.slice(-1) - 1;
    console.log(index);
    button.target.style.cssText =
      "box-shadow: 0px 0px 0px rgb(100, 100, 100);background-color : rgb(" +
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
addEventListener("resize", () => {
  section_size();
});
