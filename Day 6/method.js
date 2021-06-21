console.log("TASK 01:\n");

function is_array(y) {
  return Array.isArray(y);
}
console.log("w3school");
console.log(is_array("w3school"));
console.log(is_array([1, 2, 3, 4]));

// TASK 2
console.log("\nTASK 02:\n");

function array_clone(y) {
  let ans = [];
  for (let i = 0; i < y.length; i++) {
    ans.push(y[i]);
  }
  return ans;
}
console.log(array_clone([1, 2, 4, 0]));
console.log("\n");
console.log(array_clone([1, 2, [4, 0]]));

// Task 3
console.log("\nTASK 03:\n");

function first(y, n = 0) {
  if (n < 0) {
    return [];
  }
  if (n === 0) {
    return y[0];
  } else {
    return y.slice(0, n);
  }
}
console.log(first([7, 9, 0, -2]));
console.log("\n");
console.log(first([], 3));
console.log("\n");
console.log(first([7, 9, 0, -2], 3));
console.log("\n");
console.log(first([7, 9, 0, -2], 6));
console.log("\n");
console.log(first([7, 9, 0, -2], -3));
console.log("\n");

// Task 4
console.log("\nTASK 04:\n");
myColor = ["Red", "Green", "White", "Black"];
// let m = myColor.join(",");
let m = myColor.toString();
console.log(m);

// Task 5
console.log("\nTASK 05:\n");
let arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];
arr1.sort();
console.log("Given Array:\n", arr1);
let count = 1;
let newcount;
let precount = 1;
let ans;
for (i = 0; i < arr1.length; i++) {
  if (arr1[i] == arr1[i + 1]) {
    count++;
  } else {
    newcount = count;
    count = 1;
    if (newcount > precount) {
      ans = arr1[i];
      precount = newcount;
    }
  }
}
console.log("\nMost Recurring Element:", ans, "\n");

let arr5 = [
  3,
  "a",
  "a",
  "a",
  2,
  3,
  "a",
  3,
  [
    "a",
    [
      [2, 4],
      [9, 3],
    ],
  ],
];
