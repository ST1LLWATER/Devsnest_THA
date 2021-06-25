const whitePixels = [
  100, 101, 102, 103, 104, 105, 114, 115, 116, 117, 118, 119, 121, 122, 123, 124, 125, 128, 131, 134, 135, 136, 137, 138, 141, 142, 143, 144, 145, 146, 148, 149, 150, 151, 153, 154, 155, 156, 157, 158, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 216, 223, 224, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 235, 236, 246, 247, 248, 249, 250, 251, 252, 253, 266, 267, 268, 269, 270, 271, 272, 273, 288, 289, 290, 291, 309, 310 ];
  
  function makePixel(i) {
    var pixel = document.createElement("div");
    if (whitePixels.includes(i)) {
      pixel.classList.add("white");
    } else {
      pixel.classList.add("black");
      pixel.id = '' + i;
    }
    return pixel;
  }
  
  var container = document.querySelector(".container");
  for (let i = 0; i < 400; i++) {
    container.appendChild(makePixel(i));
  }
  
  container.addEventListener("click", doTask);
  
  function doTask(e) {
      console.log(e.id)
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