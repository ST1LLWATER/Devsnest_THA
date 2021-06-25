const whitePixels = [
  105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 125, 134, 145, 147, 148,
  151, 152, 154, 165, 174, 185, 189, 190, 194, 205, 206, 207, 212, 213, 214,
  225, 227, 228, 229, 230, 231, 232, 234, 245, 254, 265, 266, 267, 268, 269,
  270, 271, 272, 271, 272, 273, 274,
];

function makePixel(i) {
  var pixel = document.createElement("div");
  if (whitePixels.includes(i)) {
    pixel.classList.add("white");
  } else {
    pixel.classList.add("black");
  }
  return pixel;
}

var container = document.querySelector(".container");
for (let i = 0; i < 400; i++) {
  container.appendChild(makePixel(i));
}

container.addEventListener("click", doTask);

function doTask(e) {
  console.log(e.id);
  var pixelClass = e.target.className;

  if (pixelClass == "black") {
    e.target.classList.remove("black");
    e.target.classList.add("white");
    console.log(e.target);
  } else {
    e.target.classList.remove("white");
    e.target.classList.add("black");
    console.log(e.target);
  }
}
