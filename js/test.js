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

// function changeEven(numbers, value) {
//   let newArray = [];
//   numbers.forEach((element) => {
//     if (element % 2 === 0) {
//       newArray.push(element + value);
//     } else {
//       newArray.push(element);
//     }
//   });
//   return newArray;
// }

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap((bookGenres) => bookGenres.genres);
// console.log(genres);

// const getUserEmails = (users) => {
//   let emailArray = [];
//   emailArray = users.flatMap((emailUsers) => emailUsers.email);
// };

// const LOW_SCORE = 50;
// const HIGH_SCORE = 80;
// const students = [
//   { name: "Mango", score: 83 },
//   { name: "Poly", score: 59 },
//   { name: "Ajax", score: 37 },
//   { name: "Kiwi", score: 94 },
//   { name: "Houston", score: 64 },
// ];

// const best = students.filter((student) => student.score >= HIGH_SCORE);
// console.log(best); // Масив об'єктів з іменами Mango і Kiwi

// const worst = students.filter((student) => student.score < LOW_SCORE);
// console.log(worst); // Масив з одним об'єктом Ajax

// const average = students.filter(
//   (student) => student.score >= LOW_SCORE && student.score < HIGH_SCORE
// );
// console.log(average); // Масив об'єктів з іменами Poly і Houston

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((countPlayTime, number) => {
//   return (countPlayTime += number);
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime);

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((averageTime, number) => {
//   return (averageTime += number.playtime / number.gamesPlayed);
// }, 0);

// console.log(totalAveragePlaytimePerGame);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((firstAuthor, secondAuthor) =>
//   firstAuthor.author.localeCompare(secondAuthor.author)
// );

// const sortedByReversedAuthorName = books.toSorted((firstAuthor, secondAuthor) =>
//   secondAuthor.author.localeCompare(firstAuthor.author)
// );

// const sortedByAscendingRating = books.toSorted(
//   (firstRaiting, secondRaiting) => firstRaiting - secondRaiting
// );

// const sortedByDescentingRating = books.toSorted(
//   (firstRaiting, secondRaiting) => secondRaiting - firstRaiting
// );

// const students = [
//   { name: "Mango", score: 83, courses: ["mathematics", "physics"] },
//   { name: "Poly", score: 59, courses: ["science", "mathematics"] },
//   { name: "Ajax", score: 37, courses: ["physics", "biology"] },
//   { name: "Kiwi", score: 94, courses: ["literature", "science"] },
// ];

// const sortedByAscendingScore = students.toSorted((a, b) => a.score - b.score);
// console.log(sortedByAscendingScore);

// const names = sortedByAscendingScore.map((student) => student.name);
// console.log(names);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter((bookRating) => bookRating.rating > MIN_BOOK_RATING)
//   .flatMap((authors) => authors.author)
//   .toSorted((firstAuthor, secondAuthor) =>
//     firstAuthor.localeCompare(secondAuthor)
//   );

// const array = [1, 2, 3, 4, 5];

// const resultArray = array.map((numbers) => numbers * 2);
// console.log(resultArray);

// const array = ["apple", "banana", "cherry"];
// const arrayLength = array.map((wordLength) => wordLength.length);
// console.log(arrayLength);

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 35 },
// ];

// const strUsersArray = users.map(
//   (usersInf) => `${usersInf.name} is ${usersInf.age} years old`
// );

// const numbers = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];

// const oneArrayNumbers = numbers.flatMap((arraysNumber) => arraysNumber);
// console.log(oneArrayNumbers);

// const sentences = ["Hello world", "JavaScript is fun", "Map and flatMap"];
// const newArray = sentences.flatMap((everyWord) => everyWord.split(" "));
// console.log(newArray);

// const items = [
//   { name: "pen", categories: ["stationery", "writing"] },
//   { name: "notebook", categories: ["stationery", "paper"] },
//   { name: "apple", categories: ["fruit", "food"] },
// ];
// const arrayCategories = items.flatMap((CTG) => CTG.categories);

// const evenNumbersArray = [1, 2, 3, 4, 5, 6].filter(
//   (evenNumbers) => evenNumbers % 2 === 0
// );

// console.log(evenNumbersArray);

// const users = [
//   { name: "Alice", age: 22 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 28 },
//   { name: "David", age: 40 },
// ];

// const oldUsers = users.filter((usersAge) => usersAge.age >= 25);
// console.log(oldUsers);

// const strArray = ["short", "medium", "very long string"];
// const newStrArray = strArray.filter((str) => str.length >= 6);
// console.log(newStrArray);

// const numArray = [4, 9, 15, 23, 8].find((numTen) => numTen >= 10);
// console.log(numArray);

// const users = [
//   { name: "Alice", age: 22 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 28 },
// ];

// const bobUser = users.find((userWithNameBob) => userWithNameBob.name === "Bob");
// console.log(bobUser);

// const textArray = ["apple pie", "banana split", "cherry tart"];

// const newArray = textArray.find((cherryWord) => cherryWord.includes("cherry"));
// console.log(newArray);

// const evenNumbers = [2, 4, 6, 8, 10].every((evenNum) => evenNum % 2 == 0);
// console.log(evenNumbers);

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 18 },
//   { name: "David", age: 21 },
// ];

// const userVerification = users.every((usersAge) => usersAge.age >= 20);
// console.log(userVerification);

// const arrayNumbers = [1, -5, 3, 4, -2].some(
//   (negativeNumber) => negativeNumber < 0
// );

// console.log(arrayNumbers);

// const users = [
//   { name: "Alice", age: 22 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 28 },
// ];

// const userCharlie = users.some(
//   (userWithNameCharlie) => userWithNameCharlie.name === "Charlie"
// );

// console.log(userCharlie);

// const arrayNumbers = [10, 20, 30, 40, 50];

// const sumArrayNumbers = arrayNumbers.reduce((sumCount, number) => {
//   return (sumCount += number);
// }, 0);

// console.log(sumArrayNumbers);

// const cart = [
//   { name: "pen", quantity: 3 },
//   { name: "notebook", quantity: 2 },
//   { name: "apple", quantity: 5 },
// ];

// const sumQuantity = cart.reduce((countQuantity, number) => {
//   return (countQuantity += number.quantity);
// }, 0);

// console.log(sumQuantity);

// const array = [5, 3, 8, 1, 9];
// const sortedArray = array.toSorted((a, b) => a - b);
// console.log(sortedArray);

// const wordArray = ["banana", "apple", "cherry", "date"];
// const sortedWordArray = wordArray.toSorted((firstLetter, lastLetter) =>
//   firstLetter.localeCompare(lastLetter)
// );
// console.log(sortedWordArray);

// const people = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 20 },
// ];

// const sortedPeople = people.toSorted(
//   (minAge, maxAge) => minAge.age - maxAge.age
// );
// console.log(sortedPeople);

// const arrayNumber = [15, 42, 8, 23, 4];
// const sortedArrayNumber = arrayNumber.toSorted((a, b) => b - a);
// console.log(sortedArrayNumber);

// const arrayString = ["elephant", "dog", "cat", "hippopotamus"];
// const sortedArrayString = arrayString.toSorted(
//   (minWordLenth, maxWordLength) => minWordLenth.length - maxWordLength.length
// );
// console.log(sortedArrayString);

// const products = [
//   { name: "apple", category: "fruit", quantity: 10, price: 2 },
//   { name: "banana", category: "fruit", quantity: 5, price: 1 },
//   { name: "carrot", category: "vegetable", quantity: 8, price: 1 },
//   { name: "broccoli", category: "vegetable", quantity: 4, price: 3 },
//   { name: "cherry", category: "fruit", quantity: 15, price: 5 },
//   { name: "cucumber", category: "vegetable", quantity: 6, price: 2 },
// ];

// const productsFruit = products
//   .filter((nameProducts) => nameProducts.category === "fruit")
//   .map((product) => ({
//     name: product.name,
//     totalValue: product.quantity * product.price,
//   }))
//   .toSorted((minPrice, maxPrice) => maxPrice.totalValue - minPrice.totalValue);

// console.log(productsFruit);

// const allPrice = productsFruit.reduce(
//   (fullPrice, countPrice) => fullPrice + countPrice.totalValue,
//   0
// );
// console.log(allPrice);

// const pizzaPalace = {
//   pizzas: ["Supercheese", "Smoked", "Four meats"],
//   checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//   },
//   order(pizzaName) {
//     const isPizzaAvailable = this.checkPizza(pizzaName);

//     if (!isPizzaAvailable) {
//       return `Sorry, there is no pizza named «${pizzaName}»`;
//     }

//     return `Order accepted, preparing «${pizzaName}» pizza`;
//   },
// };

// console.log(pizzaPalace.order("Big Mike"));
// console.log(pizzaPalace.order("Smoked"));

// const numbers = [2, 4, 6, 8, 10];
// const numbers2 = [1, 3, 5, 7, 9];

// function sumArray(array) {
//   return array.reduce((sumNumbers, number) => sumNumbers + number, 0);
// }

// console.log(sumArray(numbers));
// console.log(sumArray(numbers2));

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   static role = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor(params) {
//     super(params.email);
//     this.access = params.access;
//     this.blacklistedEmails = params.blacklistedEmails;
//   }
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   }
//   isBlacklisted(email) {
//     this.blacklistedEmails.includes(email);
//   }
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   access: Admin.role.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.access); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

// const image = document.createElement("img");
// image.src = "https://picsum.photos/id/11/320/240";
// image.alt = "Nature";
// console.log(image); // <img

// image.classList.add("motorolla", "mazda");
// console.log(image);
// image.classList.replace("mazda", "toyota");
// image.classList.toggle("motorolla");
// console.log(image);

// const article = document.querySelector(".article");
// console.log(article.innerHTML);

// const title = document.querySelector(".article .title");
// console.log(title.innerHTML);

// const text = document.querySelector(".article .text");
// console.log(text.innerHTML);

// const link = document.querySelector(".article .link");
// console.log(link.innerHTML);

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

// const technologies = ["HTML", "CSS", "JavaScript", "React", "Node"];
// const list = document.querySelector(".list");

// const markup = technologies
//   .map((technology) => `<li class="list-item">${technology}</li>`)
//   .join("");

// // Check the console, you'll see a single string with HTML tags
// console.log(markup);

// // Adding all the markup in one operation
// list.innerHTML = markup;

// const btn = document.querySelector(".btn");

// btn.classList.replace("btn", "red-button");
// btn.classList.add("button-with-colorRed");
// btn.classList.toggle("button-with-colorRed");
// console.log(btn.classList.contains("red-button"));
// console.log(btn.classList);

// const natureImg = document.querySelector(".image");
// console.log(natureImg.hasAttribute("src"));
// console.log(natureImg.getAttribute("src"));
// natureImg.removeAttribute("alt");
// console.log(natureImg.getAttribute("alt"));
// natureImg.alt = "lalalala";
// console.log(natureImg.getAttribute("alt"));

// natureImg.setAttribute("alt", "bebebe");
// console.log(natureImg.getAttribute("alt"));

// const changeColor = () => {
//   btn.style.backgroundColor = "blue";
//   btn.style.color = "white";
//   btn.style.width = "320px";
// };

// const resetColor = () => {
//   btn.style.backgroundColor = "lightgray";
//   btn.style.color = "black";
//   btn.style.width = "150px";
// };
// btn.addEventListener("click", changeColor);

// const removeButton = document.querySelector(".remove-btn");

// removeButton.addEventListener("click", resetColor);

// document.addEventListener("keydown", event => {
//     console.log("key: ", event.key);
//     console.log("code: ", event.code);
//   });

// const registerForm = document.querySelector(".form");

// function returnInformation(event) {
//   event.preventDefault();
//   const form = event.target;
//   const login = form.elements.login.value;
//   const password = form.elements.password.value;

//   if (login === "" && password === "") {
//     return console.log("Fill in the fields");
//   } else if (login === "") {
//     return console.log("Login field is empty");
//   } else if (password === "") {
//     return console.log("Password field is empty");
//   }
//   console.log(`Your login: ${login} and your password: ${password}`);
// }

// registerForm.addEventListener("submit", returnInformation);

// const select = document.querySelector(".pizza-select");
// const textOutput = document.querySelector(".text-output");

// function currentTarget(event) {
//   const selectText = event.currentTarget.value;
//   textOutput.textContent = selectText;
// }

// select.addEventListener("change", currentTarget);

// const fieldInput = document.querySelector(".text-input");
// const textFieldValue = document.querySelector(".output");

// fieldInput.addEventListener("input", (even) => {
//   textFieldValue.textContent = even.currentTarget.value;
// });

// const fieldInputSecond = document.querySelector(".text-input-second");
// const textFieldValueSecond = document.querySelector(".output-second");

// fieldInputSecond.addEventListener("change", (evn) => {
//   textFieldValueSecond.textContent = evn.currentTarget.value;
// });

// const clearButton = document.querySelector(".clear-button");

// clearButton.addEventListener("click", (even) => {
//   textFieldValue.textContent = "";
//   fieldInput.value = "";
//   textFieldValueSecond.textContent = "";
//   fieldInputSecond.value = "";
// });

// const form = document.querySelector(".loginForm");

// form.addEventListener("submit", submitForm);

// function submitForm(event) {
//   event.preventDefault();
//   const elements = event.target.elements;
//   const infoForm = {
//     login: elements.username.value,
//     password: elements.password.value,
//     comments: elements.comments.value,
//   };
//   console.log(infoForm);
//   event.target.reset();
// }

// const car = {
//   name: "audi",
//   model: "RS7",
//   powerfull: "652hp",
// };

// const {
//   name,
//   model,
//   powerfull,
//   age = 18,
//   country: activeCountry = "Russia",
// } = car;

// console.log(
//   `Car: ${name}, Model: ${model}, HP: ${powerfull}, Age : ${age}, === ${activeCountry}`
// );

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
// ];

// for (const book of books) {
//   console.log(book.title);
//   console.log(book.rating);
//   console.log(book.author);
// }

// for (const { title, author, rating } of books) {
//   console.log(title);
//   console.log(author);
//   console.log(rating);
// }

// const books = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };

// function strOutput(object) {
//   const { title, author, rating } = object;
//   console.log(title, author, rating);
// }

// function strOutputSecond({ title, author, rating }) {
//   console.log(title, author, rating);
// }

// strOutput(books);
// strOutputSecond(books);

// function doStuffWithBook(arrayBook) {
//   console.log(arrayBook.title);
//   console.log(arrayBook.author);
// }

// const books = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };

// doStuffWithBook(books);
// doStuffWithBook({
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// });

// const books = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };

// function lalala(obj) {
//   const { title, author, rating } = obj;
//   console.log(title);
// }

// lalala(books);

// const user = {
//   name: "Arsen",
//   secondName: "Mirzoyan",
//   age: 48,
//   alboms: {
//     quantity: 7,
//     startAge: 2002,
//     endAge: 2024,
//   },
// };

// const {
//   name,
//   secondName,
//   age,
//   alboms: { quantity, startAge, endAge },
// } = user;

// console.log(quantity);
// console.log(endAge);

// const carNameArray = ["Audi", "BMW", "Porsche", "Jaguar"];

// const [firstCar, secondCar, ...othersCar] = carNameArray;
// console.log(othersCar);

// const Audi = {
//   model: "rs7",
//   age: 2014,
//   powerfull: 567,
//   country: "Deutsch",
//   isComfortableAuto: true,
// };

// const jsonAudi = JSON.stringify(Audi);
// console.log(jsonAudi);

// const chmo = ["huilo", "cmir", "suchka"];

// const brad = (arr) => {
//   console.log(arr[0]);
// };

// brad(chmo);

// localStorage.setItem("ui-theme", "light");
// console.log(localStorage);

// const Audi = {
//   model: "rs7",
//   age: 2014,
//   powerfull: 567,
//   country: "Deutsch",
//   isComfortableAuto: true,
// };

// localStorage.setItem("car", JSON.stringify(Audi));

// const carObj = JSON.parse(localStorage.getItem("car"));
// console.log(carObj);
