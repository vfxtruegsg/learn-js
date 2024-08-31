// ===== && =====

// console.log("===== && =====");

// console.log(12 && undefined); // undefined
// console.log(12 && "message"); // message
// console.log(null && 10); // null
// console.log(NaN && undefined); // NaN

// ===== || =====

// console.log("===== || =====");

// console.log(28 || 23); // 28
// console.log(NaN || 8); // 8
// console.log(null || NaN); // NaN
// console.log(null || undefined || 10 || NaN || "kapture" || null); // 10

// ===== arrays =====

// console.log("===== arrays =====");

// var arraysFirst = [1, 5, 2, 6, 4];
// console.log(arraysFirst);

// var matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(matrix[1][1]);

// ===== cycle =====

// console.log("===== for, while =====");

// for (var i = 0; i < 3; i++) {
//   for (var j = 0; j < 9; j++) {
//     console.log(matrix[i][j]);
//   }
// }

// var j = 0;
// while (j < 10) {
//   console.log(j);
//   j += 2;
// }

// var x = 0;

// do {
//   console.log(x);
//   x += 10;
// } while (x <= 50);

// for (var i = 0; i <= 10; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   console.log(i);
// }

// var array = [1, 3, 5, 7, 9, 11, 13];

// for (var i = 0; i < array.length; i++) {
//   console.log(`Элемент массива ${i + 1}, индекс (${i}): ${array[i]}`);
// }

// ===== Всплывающие окна ======

// alert("Very Nice!!!");

// var questions = confirm("Do you at home now?");

// if (questions) {
//   alert("Very Nice!!!");
// } else {
//   alert("Hurry up and go home");
// }

// var ageQuestion = prompt("Please tell me how old are you?");
// console.log(ageQuestion);

// var person = null;
// if (confirm("Are you ready?")) {
//   person = prompt("Enter your name: ");
//   alert(`Hello ${person}`);
// } else {
//   alert("You clicked cancel");
// }

// console.log(person);

// ===== функции =====

// function sumArray(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// var array = [12, 2, 3, 12, 7];
// var resultSumArray = sumArray(array);
// console.log(`Result: ${resultSumArray}px`);

// ===== Cобытия и обработчик событий =====

// var count = 0;

// function onClickButton(el) {
//   count++;
//   el.innerHTML = "You pressed the button: " + count;
//   el.style.cssText =
//     "background-color: blue; border: none; text-align: center;";
// }

// ===== Управление HTML и обработка форм =====

// var textOne = document.getElementById("text");
// console.log(text.id);

// text.style.color = "tomato";
// text.style.marginBottom = "30px";

// var spans = document.getElementsByTagName("span");

// for (var i = 0; i < spans.length; i++) {
//   console.log(spans[i].innerHTML);
// }

// var spansSimpleText = document.getElementsByClassName("simple-text");

// for (var i = 0; i < spansSimpleText.length; i++) {
//   console.log(spansSimpleText[i].innerHTML);
// }

// function getEvenNumbers(start, end) {
//   var res = [];
//   for (let i = start; i <= end; i++) {
//     if (i % 2 === 0) {
//       res.push(i);
//     }
//   }
//   return res;
// }

// console.log(getEvenNumbers(2, 5));

// function calculateTotalPrice(order) {
//   var sum = 0;
//   for (var newArray of order) {
//     sum += newArray;
//   }
//   return sum;
// }

// console.log(calculateTotalPrice([164, 48, 291]));
