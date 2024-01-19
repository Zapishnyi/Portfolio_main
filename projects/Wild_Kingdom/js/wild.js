const hero_container = document.querySelector(".hero__centre");
let pets_border = [];
let pets = [];
for (i = 0; i < 5; i++) {
  pets_border.push(document.createElement("div"));
  pets.push(document.createElement("div"));

  pets_border[i].className = `hero_pet_${i + 1} slide_pet_outside`;
  pets[i].className = `pet_${i + 1} slide_pet_inside`;
  hero_container.appendChild(pets_border[i]);
  pets_border[i].appendChild(pets[i]);
}

let hero_pet_scroll = setInterval(() => {
  pets_border.forEach((element, index) => {
    let n = element.className.split("").find((letter) => {
      return Number.isInteger(parseInt(letter));
    });
    n == 1 ? (n = 5) : n--;
    element.className = `hero_pet_${n} slide_pet_outside`;
  });
}, 5000);
