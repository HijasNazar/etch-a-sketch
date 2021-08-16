const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const clear = document.querySelector(".clear");
let childdiv;
let items;
let itemsArr;
let num = 10;
game(num);

btn.addEventListener("click", () => {
  let num1 = window.prompt("Enter a number b/w 1 to 100");
  if (!(num1 === "" || num1 === null) && num1 <= 100) {
    remove();
    game(num1);
  } else if (num1 > 100) alert("Dimension must not exceed 100!");
  else if (num1 === "") alert("Not Valid");
});

function game(num) {
  for (let i = 1; i <= Math.pow(num, 2); i++) {
    childdiv = document.createElement("div");
    let attr = childdiv.setAttribute("class", `item no-${i}`);
    container.appendChild(childdiv);
  }
  items = document.querySelectorAll(".item");
  itemsArr = Array.from(items);
  container.style.display = "grid";
  container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${num}, 1fr)`;

  itemsArr.forEach(function (element) {
    element.addEventListener("mouseover", function () {
      element.style.backgroundColor = "rgb(46, 235, 156)";
    });
  });
}

function remove() {
  items.forEach((element) => {
    element.remove();
  });
}
