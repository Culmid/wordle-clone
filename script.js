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
      for (let i = limit - 5; i < limit; i++) {
        if (cells[i].textContent === currentWord[i % 5]) {
          cells[i].style.backgroundColor = "#538d4e";
        } else if (currentWord.includes(cells[i].textContent)) {
          cells[i].style.backgroundColor = "#b59f3b";
        } else {
          cells[i].style.backgroundColor = "#3a3a3c";
        }
      }

      limit += 5;
    }
  });

  document.getElementById("back").addEventListener("click", () => {
    if (currentCell > limit - 5) {
      cells[--currentCell].textContent = "";
    }
  });
}
