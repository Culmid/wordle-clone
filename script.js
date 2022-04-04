let words = [
  "which",
  "there",
  "their",
  "about",
  "would",
  "these",
  "other",
  "words",
  "could",
  "hello",
];

document.addEventListener("DOMContentLoaded", () => {
  main();
});

function main() {
  let currentWord = [..."hello"];

  const keys = Array.from(document.getElementsByClassName("key")).filter(
    (x) => x.classList.length == 1
  );
  const cells = Array.from(document.getElementsByClassName("cell"));

  let currentCell = 0;
  let limit = 5;

  keys.forEach((x) =>
    x.addEventListener("click", () => {
      if (currentCell < limit) {
        cells[currentCell++].textContent = x.textContent;
      }
    })
  );

  document.getElementById("enter").addEventListener("click", () => {
    if (currentCell == limit) {
      const word = cells
        .slice(limit - 5, limit)
        .reduce((p, c) => p + c.textContent, "");

      if (words.includes(word)) {
        for (let i = limit - 5; i < limit; i++) {
          setTimeout(() => {
            if (cells[i].textContent === currentWord[i % 5]) {
              cells[i].classList.add("correct");
            } else if (currentWord.includes(cells[i].textContent)) {
              cells[i].classList.add("wrong-place");
            } else {
              cells[i].classList.add("incorrect");
            }
          }, 250 * (i % 5));
        }

        limit += 5;
      } else {
        raiseAlert("Not in word list");
      }
    }
  });

  document.getElementById("back").addEventListener("click", () => {
    if (currentCell > limit - 5) {
      cells[--currentCell].textContent = "";
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
