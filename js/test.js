// &&

console.log("===== && =====");

console.log(12 && undefined); // undefined
console.log(12 && "message"); // message
console.log(null && 10); // null
console.log(NaN && undefined); // NaN

// ||

console.log("===== || =====");

console.log(28 || 23); // 28
console.log(NaN || 8); // 8
console.log(null || NaN); // NaN
console.log(null || undefined || 10 || NaN || "kapture" || null); // 10

// arrays

console.log("===== arrays =====");

var arraysFirst = [1, 5, 2, 6, 4];
console.log(arraysFirst);

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix[1][1]);
console.log("===== for, while =====");

for (var i = 0; i < 3; i++) {
  for (var j = 0; j < 9; j++) {
    console.log(matrix[i][j]);
  }
}
