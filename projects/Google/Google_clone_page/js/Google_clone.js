const search_field_item = document.querySelector(".search_field");
const search_field_clear = document.querySelector(".clear_butt");

// expaning of search field function
function search_field_expand() {
  document.querySelector(".search_field").rows = 1;
  search_field_item.rows = (search_field_item.scrollHeight - 26) / 22 + 1;
}

// beheiviour of search field with content overflow while window resize
addEventListener("resize", () => {
  search_field_expand();
});
// search field input event and search field content clear button visibility control
search_field_item.addEventListener("input", () => {
  search_field_expand();
  if (search_field_item.value.length !== 0) {
    search_field_clear.style.cssText = "visibility: visible;";
  } else {
    search_field_clear.style.cssText = "visibility: hidden;";
  }
});
// search field clear function (clear button event)
search_field_clear.addEventListener("click", () => {
  search_field_item.value = "";
  search_field_clear.style.cssText = "visibility: hidden;";
  search_field_expand();
});
