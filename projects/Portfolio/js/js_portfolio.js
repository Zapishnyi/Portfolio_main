// document.querySelector('.wraper').style.cssText =
//   "transform: scale("+window.innerWidth/1777+")" ;
// window.addEventListener('resize',()=>{
//   document.querySelector('.wraper').style.cssText =
//   "transform: scale("+window.innerWidth/1777+")" ;
// });

//blur efect + movement of welcome message
let welcom_width = "100%";
let pointer_style = "none";
document.querySelector("html").onmousemove = (event) => {
  // document.querySelector(".x_mouse").textContent = event.clientX;
  // document.querySelector(".y_mouse").textContent = event.clientY;
  const mask_dynamik = document.querySelector(".blur_mask");
  let x_transform = (event.clientX * 100) / window.innerWidth;
  let y_transform = (event.clientY * 100) / window.innerHeight;
  mask_dynamik.style.cssText =
    "-webkit-mask-image: radial-gradient(circle at " +
    x_transform +
    "% " +
    y_transform +
    "%,transparent 2%, black 90%);";
  let x_rotate =
    ((event.clientX - window.innerWidth / 2) * 2) / window.innerWidth;
  let y_rotate =
    (-(event.clientY - window.innerHeight / 2) * 2) / window.innerHeight;
  welcom_panel.style.cssText =
    "transform: perspective(1000px) rotate3d(" +
    y_rotate +
    "," +
    x_rotate +
    ",0,10deg); width:" +
    welcom_width +
    ";cursor:" +
    pointer_style +
    ";";
  console.log(x_rotate);
};

// expanding of nav menu

function close_all_panels() {
  projects_panel.style.cssText = "height: 0; ";
  projects_button.style.cssText = "transform:scale(1.0);";
  projects_button.style.setProperty("--width_var", "0");
  about_panel.style.cssText = "height: 0;";
  about_button.style.cssText = "transform:scale(1.0);";
  about_button.style.setProperty("--width_var", "0");
  contacts_panel.style.cssText = "height: 0; ";
  contacts_button.style.cssText = "transform:scale(1.0);";
  contacts_button.style.setProperty("--width_var", "0");
}
function expand_panel(panel_name) {
  panel_name.style.cssText = "height: 100%; padding:10px;";
  welcom_panel.style.cssText = "width: 30%; cursor: pointer;";
}
const projects_button = document.querySelector(".projects");
const projects_panel = document.querySelector(".expand_project");
const about_button = document.querySelector(".about");
const about_panel = document.querySelector(".expand_about");
const contacts_button = document.querySelector(".contacts");
const contacts_panel = document.querySelector(".expand_contacts");
const nav_list = document.querySelectorAll("li, .welcom_message");
const welcom_panel = document.querySelector(".welcom_message");
nav_list.forEach((nav_item) => {
  nav_item.addEventListener("click", (nav) => {
    close_all_panels();
    switch (nav.target.className) {
      case "welcom_message":
        welcom_width = "100%";
        welcom_panel.style.cssText = "width: 100%;";
        pointer_style = "none;";
        break;
      case "projects":
        welcom_width = "30%";
        pointer_style = "pointer;";
        projects_button.style.cssText = "transform:scale(1.1);";
        projects_button.style.setProperty("--width_var", "100%");
        setTimeout(expand_panel, 300, projects_panel);
        break;
      case "about":
        welcom_width = "30%";
        pointer_style = "pointer;";
        about_button.style.cssText = "transform : scale(1.1);";
        about_button.style.setProperty("--width_var", "100%");
        setTimeout(expand_panel, 300, about_panel);
        break;
      case "contacts":
        welcom_width = "30%";
        pointer_style = "pointer;";
        contacts_button.style.cssText = "transform : scale(1.1);";
        contacts_button.style.setProperty("--width_var", "100%");
        setTimeout(expand_panel, 300, contacts_panel);
        break;
    }
  });
});
