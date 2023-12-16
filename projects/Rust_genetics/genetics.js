const gens = { y: 0.6, g: 0.6, h: 0.6, w: 1, x: 1 };
const main_input = document.querySelector(".main_input");
const gen_list = document.querySelector(".gen_list");
const add_gens_button = document.querySelector(".add_new_gen");
const calculat_button = document.querySelector(".calculate");
let gen_result = {};
let gen_result_temp = [];
let gen_list_opp = [];

// gen calculation function
function gen_calc_function(gen_list_opp) {
  for (let stage = 1; stage <= gen_list_opp.length - 1; stage++) {
    let matrix_gen = [
      { y: 0, g: 0, h: 0, w: 0, x: 0 },
      { y: 0, g: 0, h: 0, w: 0, x: 0 },
      { y: 0, g: 0, h: 0, w: 0, x: 0 },
      { y: 0, g: 0, h: 0, w: 0, x: 0 },
      { y: 0, g: 0, h: 0, w: 0, x: 0 },
      { y: 0, g: 0, h: 0, w: 0, x: 0 },
    ];
    gen_result_temp[stage] = [];
    for (let index = 0; index <= stage; index++) {
      gen_result_temp[stage].push(gen_list_opp[index].join(""));

      gen_list_opp[index].forEach((gen_item, order_number) => {
        matrix_gen[order_number][gen_item] += gens[gen_item];
      });
    }

    let item_sorted = "";
    matrix_gen.forEach((item, index) => {
      item_sorted += Object.keys(
        Object.fromEntries(
          Object.entries(item)
            .sort(([, a], [, b]) => a - b)
            .splice(-1)
        )
      );
    });
    gen_result[item_sorted] = gen_result_temp[stage];
  }
}

// gen input field limitation and logic
main_input.addEventListener("input", (letter) => {
  main_input.value = main_input.value.slice(0, -1);
  main_input.value += letter.data.toLowerCase();
  if (letter.data.toLowerCase() in gens === false) {
    main_input.value = main_input.value.slice(0, -1);
  }

  if (main_input.value.length === 6) {
    add_gens_button.disabled = false;
  } else {
    add_gens_button.disabled = true;
  }
});
// add gen variant
add_gens_button.addEventListener("click", () => {
  const gen_item = document.createElement("li");
  const remove_btn = document.createElement("button");
  remove_btn.textContent = "Delite";
  gen_list.appendChild(gen_item);
  main_input.value.split("").forEach((letter) => {
    let letter_conteiner = document.createElement("span");
    letter_conteiner.textContent = letter;
    letter_conteiner.className = letter;
    gen_item.appendChild(letter_conteiner);
  });
  remove_btn.className = "remove_btn";
  gen_item.appendChild(remove_btn);

  remove_btn.addEventListener("click", () => {
    gen_list.removeChild(gen_item);
  });

  main_input.value = "";
  add_gens_button.disabled = true;
  calculat_button.disabled = false;
  main_input.focus();
});
// calculate gens
calculat_button.addEventListener("click", () => {
  document.querySelector(".wrapper").className = "wrapper visible";
  main_input.style.display = "none";
  add_gens_button.style.display = "none";
  gen_list.style.display = "none";
  document.querySelector(".save_print").style.display = "flex";
  document.querySelector(".calculate").style.display = "none";
  let gen_item = document.querySelectorAll("li");
  document.querySelectorAll(".remove_btn").forEach((element, item_index) => {
    gen_item[item_index].removeChild(element);
  });
  let gen_items_list = document.querySelectorAll("li");
  gen_items_list.forEach((item, index) => {
    gen_list_opp.push(item.textContent.split(""));
  });
  gen_items_list.forEach((item, index) => {
    gen_calc_function(gen_list_opp);
    let string_item = gen_list_opp.shift();
    gen_list_opp.push(string_item);
  });
  document.querySelector(".choise_opt_box ").style.display = "flex";

  result_output(gen_result);
});

main_input.focus();

document.querySelectorAll(".choise").forEach((radiobutton) => {
  radiobutton.addEventListener("change", (output_choise) => {
    document.querySelectorAll(".gens_ul").forEach((element) => {
      document.querySelector(".output").removeChild(element);
    });
    let gen_result_temp = [];
    let temp_array = [];
    let counter = 0;
    switch (output_choise.target.id) {
      case "all":
        gen_result_temp = Object.assign({}, gen_result);

        break;
      case "green":
        Object.entries(gen_result).forEach((element) => {
          counter = 0;
          element[0].split("").forEach((letter) => {
            if (letter === "w" || letter === "x") {
              ++counter;
            }
          });
          if (counter === 0) {
            temp_array.push(element);
          }
        });
        gen_result_temp = Object.fromEntries(temp_array);
        break;

      case "1n_green":
        Object.entries(gen_result).forEach((element) => {
          counter = 0;
          element[0].split("").forEach((letter) => {
            if (letter === "w" || letter === "x") {
              ++counter;
            }
          });
          if (counter <= 1) {
            temp_array.push(element);
          }
        });
        gen_result_temp = Object.fromEntries(temp_array);
        break;
      case "2n_green":
        Object.entries(gen_result).forEach((element) => {
          counter = 0;
          element[0].split("").forEach((letter) => {
            if (letter === "w" || letter === "x") {
              ++counter;
            }
          });
          if (counter <= 2) {
            temp_array.push(element);
          }
        });
        gen_result_temp = Object.fromEntries(temp_array);
        break;
    }

    result_output(gen_result_temp);
  });
});

// result output function
function result_output(gen_result) {
  // save file block
  const link = document.querySelector(".result_save");
  console.log(gen_result);
  let text = JSON.stringify(gen_result)
    .replace(/(\[|{|\]})/g, "")
    .replace(/\],/g, `\n`);
  link.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  // save file block end
  let no_data_counter = 0;
  Object.keys(gen_result).forEach((gen_received, index) => {
    ++no_data_counter;
    let list_gen = document.createElement("ul");
    list_gen.className = "gens_ul";
    let list_gen_name = document.createElement("li");
    gen_received.split("").forEach((letter) => {
      let letter_conteiner = document.createElement("span");
      letter_conteiner.textContent = letter;
      letter_conteiner.className = letter;
      list_gen_name.appendChild(letter_conteiner);
    });
    // output of calculation result

    document.querySelector(".output").appendChild(list_gen);
    list_gen.appendChild(list_gen_name);
    let list_child_gens = document.createElement("ul");
    list_gen_name.appendChild(list_child_gens);
    document.startViewTransition(() => {
      gen_result[gen_received].forEach((child_gen, index_2) => {
        let child_gen_item = document.createElement("li");
        child_gen.split("").forEach((letter) => {
          let letter_conteiner = document.createElement("span");
          letter_conteiner.textContent = letter;
          letter_conteiner.className = letter;
          child_gen_item.appendChild(letter_conteiner);
        });
        list_child_gens.appendChild(child_gen_item);
      });
    });
  });
  if (no_data_counter === 0) {
    let list_gen = document.createElement("ul");
    list_gen.className = "gens_ul";
    let no_data_message = document.createElement("p");
    no_data_message.textContent = "There is no data that match chosen criteria";

    list_gen.appendChild(no_data_message);

    document.querySelector(".output").appendChild(list_gen);
  }
}

document.querySelector(".print_icon").addEventListener("click", () => {
  window.print();
});
