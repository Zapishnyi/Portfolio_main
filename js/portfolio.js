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
let button_colors = ["223, 223, 223", "223, 223, 223", "223, 223, 223"];
let button_text_color = ["0, 0, 0", "0, 0, 0", "0, 0, 0"];
let hover_indicator = 0;
let triger = 0;
let text_focus_indicator = 0;

// change height of each section while widow resized

function section_size() {
  content_height = window.innerHeight;
  nav_panel_height = nav_panel.offsetHeight;
  content.forEach((item) => {
    item.style.cssText =
      "height :" + (content_height - nav_panel_height) + "px;";
  });
}
// switch over button color on coresponded section in viewport
function button_color_switch(button_on_hover, hover_indicator) {
  nav_panel_height = nav_panel.offsetHeight;
  content_array.forEach((element, index) => {
    (element.getBoundingClientRect().y <= nav_panel_height + 1) &
    (element.getBoundingClientRect().y >=
      -(content_height - nav_panel_height * 2 - 1))
      ? ((button_colors[index] = "0, 0, 0"),
        (button_text_color[index] = "255, 255, 255"),
        (buttons[index].style.cssText =
          "background-color : rgb(" +
          button_colors[index] +
          ");color: rgb(" +
          button_text_color[index] +
          ");"))
      : button_on_hover === index
      ? ((button_colors[index] = "200, 200, 200"),
        (button_text_color[index] = "0, 0, 0"),
        (buttons[index].style.cssText =
          "background-color : rgb(" +
          button_colors[index] +
          ");color: rgb(" +
          button_text_color[index] +
          ");"),
        (hover_indicator = 0))
      : ((button_colors[index] = "223, 223, 223"),
        (button_text_color[index] = "0, 0, 0"),
        (buttons[index].style.cssText =
          "background-color : rgb(" +
          button_colors[index] +
          ");color: rgb(" +
          button_text_color[index] +
          ");"));
  });
}
// scroll screen till section chosen by user (button pressed)
function button_up(scroll_psn) {
  wrapper.scrollTo({ top: scroll_psn, behavior: "smooth" });
}

// determination of position to scroll after coresponded button pressed
function scroll_to_psn(scroll_indicator) {
  content_array.forEach((section, index) => {
    console.log(
      "section:" + index + " - - " + section.getBoundingClientRect().y
    );
    console.log("content height: ---" + content_height);
    if (
      (section.getBoundingClientRect().y > 40) &
      (section.getBoundingClientRect().y < 80) &
      (triger === 0) &
      (scroll_indicator === 1)
    ) {
      button_up((content_height - nav_panel_height + 1) * (index + 1));
      triger = index + 1;
    }
    if (
      (section.getBoundingClientRect().y > 40) &
      (section.getBoundingClientRect().y < 80) &
      (triger !== index)
    ) {
      triger = 0;
    }
  });
}
section_size();

wrapper.addEventListener("scroll", () => {
  button_color_switch();
  // let scroll_indicator = 0;
  // setTimeout((scroll_indicator = 1), 5000);
  // scroll_to_psn(scroll_indicator);
});

addEventListener("resize", () => {
  if ((text_focus_indicator = 0)) {
    section_size();
    button_color_switch();
  }
});

// Sections choise buttons functionality
buttons.forEach((element) => {
  element.addEventListener("click", (button) => {
    let index = button.target.className.slice(-1) - 1;
    setTimeout(
      button_up,
      200,
      (content_height - nav_panel_height + 1) * (index + 1)
    );
  });
});

// buttons hover effect in stupid way, ;) but to do it better need to rewrite half of code
buttons.forEach((element) => {
  element.addEventListener("mouseover", (button) => {
    let index = button.target.className.slice(-1) - 1;
    hover_indicator = 1;
    button_color_switch(index, hover_indicator);
  });
});

buttons.forEach((element) => {
  element.addEventListener("mouseout", () => {
    hover_indicator = 0;
    button_color_switch();
  });
});

// project details expand functionality
function project_details_expand(expand_icon) {
  document.querySelectorAll(".project_expand").forEach((element) => {
    element.style.cssText = " display: block;";
  });
  document.querySelectorAll(".project_roll_in").forEach((element) => {
    element.style.cssText = " display:none ;";
  });
  document.querySelectorAll(".project_exp").forEach((element) => {
    element.style.cssText = " height: 0; opacity: 0;";
  });
  if (expand_icon.target.className === "project_expand expand_control") {
    console.log("heppend");
    expand_icon.target.style.cssText = " display: none;";
    expand_icon.target.parentElement.children[1].style.cssText =
      " display: block;";
    expand_icon.target.parentElement.parentElement.childNodes[3].style.cssText =
      "  height: " +
      expand_icon.target.parentElement.parentElement.children[1].scrollHeight +
      "px; opacity: 1;";
  }
}

// projects details expand initialization
document.querySelectorAll(".expand_control").forEach((expand_icon) => {
  expand_icon.addEventListener("click", (expand_icon) => {
    project_details_expand(expand_icon);
  });
});

// check, is devise has touch screen
addEventListener("touchstart", () => {
  console.log("touch");
  if (document.querySelector("body").className !== "touch_screen") {
    document.querySelector("body").className = "touch_screen";
  }
});

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};

const message_field = document.querySelector(".message");
message_field.addEventListener("input", () => {
  textarea_expand();
  if (message_field.value === "") {
    document.querySelector("label").className = "";
  } else {
    console.log("heppend");
    document.querySelector("label").className = "message_hide";
  }
});

// expanding of texarea when not anought space
function textarea_expand() {
  console.log(message_field.scrollHeight);
  message_field.rows = 10;
  message_field.rows = (message_field.scrollHeight - 264) / 26 + 10;
}

message_field.addEventListener("focusin", () => {
  text_focus_indicator = 1;
});
message_field.addEventListener("focusout", () => {
  text_focus_indicator = 0;
});
