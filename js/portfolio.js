const welcome = document.querySelector(".welcome_page");
const content = document.querySelectorAll(".section");
const nav_panel = document.querySelector(".nav_panel");
const wrapper = document.querySelector(".wrapper");
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
let nav_panel_height = nav_panel.offsetHeight;
let button_colors = ["202, 115, 115", "202, 115, 115", "202, 115, 115"];
let button_shadow = ["209, 115, 115", "209, 115, 115", "209, 115, 115"];

function section_size() {
  content_height = window.innerHeight;
  nav_panel_height = nav_panel.offsetHeight;
  content.forEach((item) => {
    item.style.cssText =
      "height :" + (content_height - nav_panel_height) + "px;";
  });
}

function button_color_switch() {
  nav_panel_height = nav_panel.offsetHeight;
  content_array.forEach((element, index) => {
    (element.getBoundingClientRect().y <= nav_panel_height + 1) &
    (element.getBoundingClientRect().y >=
      -(content_height - nav_panel_height * 2 - 1))
      ? ((button_colors[index] = "137, 255, 123"),
        (button_shadow[index] = "199, 255, 135"),
        (buttons[index].style.cssText =
          "background-color : rgb(" +
          button_colors[index] +
          ");box-shadow: 0px 0px 20px rgb(" +
          button_shadow[index] +
          ");"))
      : ((button_colors[index] = "202, 115, 115"),
        (button_shadow[index] = "209, 115, 115"),
        (buttons[index].style.cssText =
          "background-color : rgb(" +
          button_colors[index] +
          ");box-shadow: 0px 0px 20px rgb(" +
          button_shadow[index] +
          ");"));
  });
}

function button_up(scroll_psn) {
  wrapper.scrollTo({ top: scroll_psn, behavior: "smooth" });
  button_color_switch();
}

section_size();

wrapper.addEventListener("scroll", () => {
  button_color_switch();
});

addEventListener("resize", () => {
  section_size();
  button_color_switch();
});

document.querySelectorAll("li").forEach((element) => {
  element.addEventListener("click", (button) => {
    let index = button.target.className.slice(-1) - 1;
    button.target.style.cssText =
      "box-shadow: 0px 0px 0px rgb(209, 115, 115);background-color : rgb(" +
      button_colors[index] +
      ");";
    setTimeout(
      button_up,
      200,
      (content_height - nav_panel_height + 1) * (index + 1)
    );
  });
});

function project_details_expand(expand_icon) {
  console.log(expand_icon);
  document.querySelectorAll(".project_expand").forEach((element) => {
    element.style.cssText = " display: block;";
  });
  document.querySelectorAll(".project_roll_in").forEach((element) => {
    element.style.cssText = " display:none ;";
  });
  document.querySelectorAll(".project_exp").forEach((element) => {
    element.style.cssText = " height: 0;";
  });
  // document.querySelector(".project_exp").style.cssText = " height:0;";
  if (expand_icon.target.className === "project_expand expand_control") {
    console.log("heppend");
    expand_icon.target.style.cssText = " display: none;";
    expand_icon.target.parentElement.children[1].style.cssText =
      " display: block;";
    expand_icon.target.parentElement.parentElement.childNodes[3].style.cssText =
      "  height: " +
      expand_icon.target.parentElement.parentElement.children[1].scrollHeight +
      "px;";
  }
}
document.querySelectorAll(".expand_control").forEach((expand_icon) => {
  expand_icon.addEventListener("click", (expand_icon) => {
    project_details_expand(expand_icon);
  });
});

addEventListener("touchstart", () => {
  console.log("touch");
  if (document.querySelector("body").className !== "touch_screen") {
    document.querySelector("body").className = "touch_screen";
  }
});
