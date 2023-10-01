// ul created
let ul_item = document.createElement("ul");
document.body.appendChild(ul_item);
// collected data from server
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((json) =>
    // forming articles list filled with data from
    json.forEach((element) => {
      let li_item = document.createElement("li");
      let span_item = document.createElement("span");
      let h4_item = document.createElement("h4");
      let p_item = document.createElement("p");
      let a_item = document.createElement("a");
      span_item.textContent = element.id;
      h4_item.textContent = element.title;
      p_item.textContent = element.body;
      p_item.className = "p" + element.id;
      a_item.textContent = "Read more";
      a_item.className = "a" + element.id;
      // publish list of aticles to the on the page
      ul_item.appendChild(li_item);
      li_item.append(span_item, h4_item, p_item, a_item);
      // click 'Read more' event
      document
        .querySelector(".a" + element.id)
        .addEventListener("click", (cliked_item) => {
          // close all articles readed before
          document.querySelectorAll("p").forEach((p_css_reset) => {
            p_css_reset.style.cssText = "display:-webkit-box;";
          });
          // expand interested article
          cliked_item.target.offsetParent.childNodes[2].style.cssText =
            "display:block;";
        });
    })
  )
  // fetch error mesege
  .catch((error) => (document.querySelector("h1").textContent = error));
