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
    }
  });

  document.getElementById("back").addEventListener("click", () => {
    if (currentCell > limit - 5) {
      cells[--currentCell].textContent = "";
    }
  });
}
