import Back from "../assets/images/back.svg";

function main() {
  const main = document.createElement("main");

  const gameWrapper = document.createElement("div");
  gameWrapper.className = "game-wrapper";
  main.appendChild(gameWrapper);

  const gameGridContainer = document.createElement("div");
  gameGridContainer.className = "game-grid-container";
  gameWrapper.appendChild(gameGridContainer);
  gameGridContainer.appendChild(gameGrid());

  gameWrapper.appendChild(keyboard());

  return main;
}

function gameGrid() {
  const grid = document.createElement("div");
  grid.className = "game-grid";

  for (let i = 0; i < 6; i++) {
    const row = document.createElement("div");
    row.className = "row";

    for (let j = 0; j < 5; j++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      row.appendChild(cell);
    }

    grid.appendChild(row);
  }

  return grid;
}

function keyboard() {
  const rows = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];

  const keyboard = document.createElement("div");
  keyboard.className = "game-keyboard";

  rows.forEach((x, i) => {
    const row = document.createElement("div");
    row.className = "row";

    [...x].forEach((x) => {
      const key = document.createElement("button");
      key.className = "key";
      key.innerHTML = x;

      row.appendChild(key);
    });

    if (i == 1) {
      row.classList.add("mid");
    }

    if (i == 2) {
      const enter = document.createElement("button");
      enter.className = "key big";
      enter.innerHTML = "enter";
      enter.id = "enter";
      row.prepend(enter);

      const backspace = document.createElement("button");
      backspace.className = "key big";
      backspace.id = "back";

      const back = new Image();
      back.src = Back;
      backspace.appendChild(back);

      row.appendChild(backspace);
    }

    keyboard.appendChild(row);
  });

  return keyboard;
}

export default main;
