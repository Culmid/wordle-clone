import header from "./components/header";
import main from "./components/main";
import Data from "./assets/data/words.json";
import "./assets/styles/styles.css";

document.body.appendChild(header());
document.body.appendChild(main());

let words = Data.filter((x) => x.length == 5);
let currentCell = 0;
let limit = 5;
const correctLetters = [];

document.addEventListener("DOMContentLoaded", () => {
  eventHandler();
});

function eventHandler() {
  let randomIndex = Math.floor(Math.random() * (words.length + 1));
  let currentWord = [...words[randomIndex]];

  const keys = Array.from(document.getElementsByClassName("key")).filter(
    (x) => x.classList.length == 1
  );
  const cells = Array.from(document.getElementsByClassName("cell"));

  keys.forEach((x) =>
    x.addEventListener("click", () => fillCell(cells, x.textContent))
  );

  document
    .getElementById("enter")
    .addEventListener("click", () => submitGuess(cells, currentWord, keys));

  document
    .getElementById("back")
    .addEventListener("click", () => emptyCell(cells));

  document.addEventListener("keydown", (e) => {
    if (e.code.startsWith("Key")) {
      fillCell(cells, e.code.charAt(e.code.length - 1).toLowerCase());
    } else if (e.code === "Enter") {
      submitGuess(cells, currentWord, keys);
    } else if (e.code === "Backspace") {
      emptyCell(cells);
    }
  });
}

function raiseAlert(msg) {
  const alert = document.createElement("div");
  alert.textContent = msg;
  alert.className = "alert";

  const wrapper = document.getElementsByClassName("game-wrapper")[0];
  wrapper.appendChild(alert);

  setTimeout(() => {
    alert.style.opacity = "0";
  }, 1000);

  setTimeout(() => {
    wrapper.removeChild(alert);
  }, 1500);
}

function jiggleRow(row) {
  row.classList.add("animate-row");
  setTimeout(() => {
    row.classList.remove("animate-row");
  }, 250);
}

function fillCell(cells, txt) {
  if (currentCell < limit) {
    cells[currentCell].style.borderColor = "#565758";
    cells[currentCell++].textContent = txt;
  }
}

function emptyCell(cells) {
  if (currentCell > limit - 5) {
    cells[--currentCell].textContent = "";
    cells[currentCell].style.borderColor = "#3a3a3c";
  }
}

function submitGuess(cells, currentWord, keys) {
  if (currentCell == limit) {
    const word = cells
      .slice(limit - 5, limit)
      .reduce((p, c) => p + c.textContent, "");

    if (words.includes(word)) {
      for (let i = limit - 5; i < limit; i++) {
        setTimeout(() => {
          cells[i].classList.add("cell-transition");
          const key = keys.find((x) => x.textContent == cells[i].textContent);

          if (cells[i].textContent === currentWord[i % 5]) {
            cells[i].classList.add("correct");
            key.style.backgroundColor = "#538d4e";
            correctLetters.push(key.textContent);
          } else if (currentWord.includes(cells[i].textContent)) {
            cells[i].classList.add("wrong-place");
            if (!correctLetters.includes(key.textContent)) {
              key.style.backgroundColor = "#b59f3b";
            }
          } else {
            cells[i].classList.add("incorrect");
            key.style.backgroundColor = "#3a3a3c";
          }
        }, 250 * (i % 5));
      }

      limit += 5;
    } else {
      raiseAlert("Not in word list");
      jiggleRow(cells[limit - 5].parentElement);
    }
  } else {
    raiseAlert("Not enough letters");
    jiggleRow(cells[currentCell].parentElement);
  }
}
