let row = "<tr>";
for (i = 0; i < 6; i++) {
  row += '<td><i class="material-icons">person</i></td>';
}
row += "</tr>";
let content = "";
for (i = 0; i < 6; i++) {
  content += row;
}
document.getElementById("tab").innerHTML = content;
let count_empty = 36;
let count_filled = 0;
document.getElementById("show").innerHTML = "" + count_empty;
document.getElementById("show1").innerHTML = "" + count_filled;
let box = document.querySelectorAll("i");
console.log(box);
box.forEach((link) => {
  link.addEventListener("click", function () {
    console.log(link);
    if (link.classList.contains("seatfilled")) {
      link.classList.remove("seatfilled");
      link.innerHTML = "person";
      count_empty++;
      count_filled--;
      document.getElementById("show").innerHTML = "" + count_empty;
      document.getElementById("show1").innerHTML = "" + count_filled;
    } else {
      link.classList.add("seatfilled");
      link.innerHTML = "person_off";
      count_filled++;
      count_empty--;
      document.getElementById("show").innerHTML = "" + count_empty;
      document.getElementById("show1").innerHTML = "" + count_filled;
    }
  });
});
