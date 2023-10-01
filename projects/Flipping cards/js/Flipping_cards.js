// udjustable delay for flip cards
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
// number img assign, transcoded from svg
const num_list = [
  "data:image/svg+xml,%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_429_11154)'%3E%3Cpath d='M12 20C14.7614 20 17 17.7614 17 15V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V15C7 17.7614 9.23858 20 12 20Z' stroke='%23292929' stroke-width='2.5' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_429_11154'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_429_11003)'%3E%3Cpath d='M12 20V4L9 7' stroke='%23292929' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_429_11003'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_429_10997)'%3E%3Cpath d='M8 8C8 6.97631 8.39052 5.95262 9.17157 5.17157C10.7337 3.60947 13.2663 3.60947 14.8284 5.17157C16.3905 6.73366 16.3905 9.26632 14.8284 10.8284L9.17157 16.4853C8.42143 17.2354 8 18.2528 8 19.3137L8 20L16 20' stroke='%23292929' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_429_10997'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_429_10996)'%3E%3Cpath d='M8 19.0004C8.83566 19.6281 9.87439 20 11 20C13.7614 20 16 17.7614 16 15C16 12.2386 13.7614 10 11 10L16 4H8' stroke='%23292929' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_429_10996'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_429_11105)'%3E%3Cpath d='M10 4L8.47845 11.6078C8.23093 12.8453 9.17752 14 10.4396 14H16M16 14V8M16 14V20' stroke='%23292929' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_429_11105'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_429_10995)'%3E%3Cpath d='M8 19.0004C8.83566 19.6281 9.87439 20 11 20C13.7614 20 16 17.7614 16 15C16 12.2386 13.7614 10 11 10C9.87439 10 8.83566 10.3719 8 10.9996L9 4H16' stroke='%23292929' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_429_10995'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_429_11176)'%3E%3Cpath d='M13 4L7.77313 12.3279M17 15C17 17.7614 14.7614 20 12 20C9.23858 20 7 17.7614 7 15C7 12.2386 9.23858 10 12 10C14.7614 10 17 12.2386 17 15Z' stroke='%23292929' stroke-width='2.5' stroke-linecap='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_429_11176'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_429_11190)'%3E%3Cpath d='M8 4H16L10 20' stroke='%23292929' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_429_11190'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_429_10994)'%3E%3Ccircle cx='12' cy='15' r='5' stroke='%23292929' stroke-width='2.5' stroke-linejoin='round'/%3E%3Ccircle cx='12' cy='7' r='3' stroke='%23292929' stroke-width='2.5' stroke-linejoin='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_429_10994'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
  "data:image/svg+xml,%3Csvg width='800px' height='800px' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_429_10993)'%3E%3Cpath d='M11 20L16.2269 11.6721M7 9C7 6.23858 9.23858 4 12 4C14.7614 4 17 6.23858 17 9C17 11.7614 14.7614 14 12 14C9.23858 14 7 11.7614 7 9Z' stroke='%23292929' stroke-width='2.5' stroke-linecap='round'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_429_10993'%3E%3Crect width='24' height='24' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E",
];
// initial declaration, counter settings
let counter_after = "000000";
const card_index = ["first", "second", "third", "fourth", "fifth", "sixth"];
let flip_control_screen = document.querySelector(".flip_control");
flip_control_screen.textContent = "000000";
let counter = 0;
// card flip initiation function
function card_flip_initiation() {
  counter_before = counter_after;
  if (counter !== "999999") {
    counter++;
  }
  let counter_string = "000000" + counter;
  counter_after = counter_string.slice(-6);
  flip_control_screen.textContent = counter_string.slice(-6);
  let counter_before_array = counter_before.split("");
  let counter_after_array = counter_after.split("");
  card_flip(counter_before_array, counter_after_array);
}
// card flip function
function card_flip(counter_before_array, counter_after_array) {
  for (let cell_index = 5; cell_index != -1; cell_index--) {
    if (counter_before_array[cell_index] !== counter_after_array[cell_index]) {
      let temp_half_up = document.createElement("div");
      temp_half_up.className = "temp_half_up";
      let img_name_after = num_list[counter_after_array[cell_index]];
      let img_name_before = num_list[counter_before_array[cell_index]];
      // upper flip card style
      temp_half_up.style.cssText =
        'animation:card_rotate_1 0.2s linear forwards; background-image: url("' +
        img_name_before +
        '")';
      // upper flip card creation
      document
        .querySelector("." + card_index[cell_index] + ".card")
        .appendChild(temp_half_up);
      // upper base card animation, number
      document.querySelector(
        "." + card_index[cell_index] + ".upper"
      ).style.cssText = 'background-image: url("' + img_name_after + '")';
      let temp_half_down = document.createElement("div");
      temp_half_down.className = "temp_half_down";
      delay(200).then(() => {
        // upper flip card wiped
        temp_half_up.remove();
        // bottom flip card animation, number
        temp_half_down.style.cssText =
          'animation: card_rotate_2 0.2s  linear  forwards; background-image: url("' +
          img_name_after +
          '");';
        // bottom flip card creation
        document
          .querySelector("." + card_index[cell_index] + ".card")
          .appendChild(temp_half_down);
      });
      delay(400).then(() => {
        // bottom base card number change
        document.querySelector(
          "." + card_index[cell_index] + ".lower"
        ).style.cssText = 'background-image: url("' + img_name_after + '")';
        // lower flip card wipeed
        temp_half_down.remove();
      });
    }
  }
}
// wheel event initiation block
addEventListener("wheel", () => {
  card_flip_initiation();
});

// swipe event initiation block
addEventListener("touchmove", () => {
  card_flip_initiation();
});
