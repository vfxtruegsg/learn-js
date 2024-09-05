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

// document.getElementById("main-form").addEventListener("submit", checkForm);

// function checkForm(event) {
//   event.preventDefault();
//   var el = document.getElementById("main-form");

//   var name = el.name.value;
//   var pass = el.pass.value;
//   var repass = el.repass.value;

//   var fail = "";
//   if (name == "" || pass == "" || state == "") {
//     fail = "Заполните все поля";
//   } else if (name.length <= 1 || name.length > 50) {
//     fail = "Введите корректное имя";
//   } else if (pass != repass) {
//     fail = "Пароли не совпадают";
//   } else if (pass.includes("&")) {
//     fail = "Не должнно быть знаков &";
//   }

//   if (fail) {
//     document.getElementById("error").innerHTML = fail;
//     return false;
//   } else {
//     alert("Все данные корректно заполнены!");
//     window.location = "https://github.com/vfxtruegsg/learn-js";
//   }
//   return false;
// }

// function getLastElementMeta(array) {
//   let lastIndex = array.length - 1;
//   return `${lastIndex}, "${array[lastIndex]}"`;
// }

// console.log(getLastElementMeta(["apple", "peach", "pear", "banana"]));
// console.log(getLastElementMeta(["apple"]));

// function getExtremeElements(array) {
//   return `${array[0]}, ${array[array.length - 1]}`;
// }

// console.log(getExtremeElements(["Earth", "Mars", "Venus"]));

// function transformString(string) {
//   const words = string.split("_");
//   return words.join("-");
// }

// console.log(transformString("user_age"));
// console.log(transformString("price_per_droid"));

// function getLength(array) {
//   var str = String.array;
//   str.join("");
//   return str.length;
// }

// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
// console.log(getLength(["M", "a", "n", "g", "o"]));

// function calculateTotalPrice(order) {
//   var sumArray = 0;
//   for (var i = 0; i < order.length; i++) {
//     sumArray += order[i];
//   }
//   return sumArray;
// }

// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

// function createReversedArray() {
//   const args = Array.from(arguments);
//   return args.toReversed();
// }

// console.log(createReversedArray(12, 85, 37, 4));

// function calculateTax(amount, taxRate = 0.2) {
//   var percent = amount * taxRate;
//   return percent;
// }

// console.log(calculateTax(100, 0.1));
// console.log(calculateTax(100));

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags = apartment.tags.concat("trusted");

// const propName = "name";
// const user = {
//   age: 25,
// };

// user.propName = "Henry Sibola";
// console.log(user.propName);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", " adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Делаем первую букву заглавной
//   const capitalizedKey = key.charAt(0).toUpperCase() + key.slice(1);
//   console.log(`${capitalizedKey} дорівнює значенню: ${book[key]}`); // Ключ и значение
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };

// const keys = [];
// const values = [];

// for (const key in apartment) {
//   keys.push(key);
//   values.push(apartment[key]);
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// const keys = Object.keys(apartment);

// function countProps(object) {
//   let propCount = Object.keys(object).length;
//   console.log(propCount);

//   return propCount;
// }

// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//   getTotalPrice() {
//     let fullPrice = 0;
//     for (let countPrice of this.potions) {
//       fullPrice += countPrice.price;
//     }
//     return fullPrice;
//   },
//   getAveragePrice() {
//     let averagePrice = 0;
//     let fullPrice = 0;
//     for (let avrgPrice of this.potions) {
//       fullPrice += avrgPrice.price;
//       averagePrice = fullPrice / 2;
//     }
//     return averagePrice;
//   },
// };

// console.log(atTheOldToad.getTotalPrice());
// console.log(atTheOldToad.getAveragePrice());

// function add(...args) {
//   let sumArgs = 0;
//   for (let i = 0; i < args.length; i++) {
//     sumArgs += args[i];
//   }
//   return sumArgs;
// }

// console.log(add(1, 1, 1, 1, 1, 1, 1, 1, 1, 1));

// function getExtremeScores(scores) {
//   let objectScores = {
//     best: Math.max(...scores),
//     worst: Math.min(...scores),
//   };
//   return objectScores;
// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
