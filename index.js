// STRING methods

// length
let text = 'Salom Javascript ni biladiganlar'
// console.log(text.length) // satr uzunligini qaytaradi

// charAt() - satrdagi belgilangan indeks (pozitsiya)dagi belgini qaytaradi:
let text1 = "HELLO WORLD";
let char1 = text1.charAt(0); // H

// charCodeAt() - satrdagi belgilangan indeksdagi belgi kodini qaytaradi:

let text2 = "HELLO WORLD";
let char2 = text2.charCodeAt(0);

// at() - satrda belgilangan indeks (pozitsiya)dagi belgini qaytaradi.
// Bu manfiy indekslardan foydalanishga imkon beradi
const name = "W3Schools";
let letter = name.at(0); // S
console.log(name, letter)

// slice()satrning bir qismini chiqaradi va chiqarilgan qismini yangi qatorga qaytaradi.
// Usul ikkita parametrni oladi: boshlang'ich pozitsiyasi va oxirgi pozitsiyasi (oxiri kiritilmagan).

let text3 = "Apple, Banana, Kiwi";
let part1 = text3.slice(7, 13);

let part2 = text3.slice(7);
// console.log(part2)
// console.log(text3);

// Agar siz ikkinchi parametrni o'tkazib yuborsangiz, usul satrning qolgan qismini kesib tashlaydi:

let text4 = "Apple, Banana, Kiwi";
let part3 = text4.slice(7);
// Agar parametr manfiy bo'lsa, pozitsiya satr oxiridan boshlab hisoblanadi:

let text5 = "Apple, Banana, Kiwi";
let part4 = text5.slice(-12);
// Ushbu misol satrning bir qismini -12 pozitsiyasidan -6 pozitsiyasiga ajratadi:

let text6 = "Apple, Banana, Kiwi";
let part5 = text6.slice(-12, -6);

// substr()ga o'xshaydi slice().
// Farqi shundaki, ikkinchi parametr chiqarilgan qismning uzunligini belgilaydi.


let str1 = "Apple, Banana, Kiwi";
let part6 = str1.substr(7, 6);

// Agar birinchi parametr manfiy bo'lsa, pozitsiya satr oxiridan boshlab hisoblanadi.

let str2 = "Apple, Banana, Kiwi";
let part7 = str2.substr(-4);


// Satr quyidagi bilan katta harfga aylantiriladi toUpperCase()

// Satr quyidagi bilan kichik harfga aylantiriladi toLowerCase()

// concat() - ikki yoki undan ortiq qatorlarni birlashtiradi:

let text7 = "Hello";
let text8 = "World";
let text9 = text7.concat(" ", text8);

/*Eslatma
  Barcha string usullari yangi satrni qaytaradi. Ular asl satrni o'zgartirmaydilar.
  Rasmiy ravishda dedi:
  Satrlar o'zgarmasdir: satrlarni o'zgartirib bo'lmaydi, faqat almashtiriladi.
*/

// trim() - satrning ikkala tomonidagi bo'shliqni olib tashlaydi:

// padStart()Usul boshidan boshlab satrni to'ldiradi .

// U berilgan uzunlikka yetguncha ipni boshqa ip bilan (bir necha marta) yopadi.

// Misollar
// Uzunligi 4 ga yetguncha satrni "0" bilan to'ldiring:

let text10 = "5";
let padded1 = text10.padStart(4,"0");
// Ip uzunligi 4 ga yetguncha "x" belgisini qo'ying:

let text11 = "5";
let padded2 = text11.padStart(4,"x");

// Raqamni toʻldirish uchun avval raqamni satrga aylantiring.
let numb = 5;
let text12 = numb.toString();
let padded = text12.padStart(4,"0");

// split - qatorni massivga aylantirish

// indexOf() Usul satrda birinchi marta paydo bo'lgan indeksni (pozitsiyani) qaytaradi yoki satr topilmasa -1 ni qaytaradi:

// Misol
let text14 = "Please locate where 'locate' occurs!";
let index2 = text14.indexOf("locate");

//lastIndexOf()  Usul satrda belgilangan matnning oxirgi marta paydo bo'lish indeksini qaytaradi:

// Misol
let text13 = "Please locate where 'locate' occurs!";
let index = text13.lastIndexOf("locate"); // 21

// Har ikkisi ham indexOf(), lastIndexOf()agar matn topilmasa, -1 qaytariladi:

let text15 = "Please locate where 'locate' occurs!";
let index3 = text.lastIndexOf("John");

// Ikkala usul ham qidiruv uchun boshlang'ich pozitsiyasi sifatida ikkinchi parametrni qabul qiladi:

// Misol
let text16 = "Please locate where 'locate' occurs!";
let index4 = text16.indexOf("locate", 15);

// Usullar lastIndexOf()orqaga qarab (oxiridan boshigacha) qidiradi, ya'ni: agar ikkinchi parametr bo'lsa 15, qidiruv 15-pozitsiyadan boshlanadi va satr boshigacha qidiradi.

// Misol
let text17 = "Please locate where 'locate' occurs!";
text17.lastIndexOf("locate", 15);


// search() satrni (yoki oddiy ifodani) qidiradi va mos keladigan joyni qaytaradi:

// Misollar
let text18 = "Please locate where 'locate' occurs!";
text18.search("locate");
let text19 = "Please locate where 'locate' occurs!";
text19.search(/locate/);

/* 
  E'tibor berdingizmi?
  Ikkala usul indexOf()va search(), tengmi?
  Ular bir xil argumentlarni (parametrlarni) qabul qiladi va bir xil qiymatni qaytaradimi?
  Ikki usul teng emas . Bu farqlar:
  Usul search()ikkinchi boshlanish pozitsiyasi argumentini qabul qila olmaydi.
  Usul indexOf()kuchli qidiruv qiymatlarini (muntazam ifodalar) ololmaydi.
*/


/*includes()Agar satrda belgilangan qiymat mavjud bo'lsa, usul "true" ni qaytaradi .

Aks holda qaytib keladi false.

Misollar
Satrda "dunyo" mavjudligini tekshiring:

let text = "Hello world, welcome to the universe.";
text.includes("world");
Satrda "dunyo" mavjudligini tekshiring. 12-pozitsiyadan boshlang:

let text = "Hello world, welcome to the universe.";
text.includes("world", 12);
Eslatmalar
includes()katta-kichik harf sezgir.

includes()ES6 xususiyati hisoblanadi .

includes()Internet Explorer-da qo'llab-quvvatlanmaydi.

*/



// NUMBERS METHODS

/*
  toString()	Raqamni qator sifatida qaytaradi
  toExponential()	Eksponensial yozuvda yozilgan sonni qaytaradi
  toFixed()	O'nli kasrlar soni bilan yozilgan raqamni qaytaradi
  toPrecision()	Belgilangan uzunlik bilan yozilgan raqamni qaytaradi
  valueOf()	Raqamni raqam sifatida qaytaradi
*/

let x = 123;
x.toString();
(123).toString();
(100 + 23).toString();

/*
splice()massivga yangi elementlar qo'shish uchun ishlatilishi mumkin:

Misol
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
Birinchi parametr (2) yangi elementlar qo'shilishi (qo'shilishi) kerak bo'lgan joyni belgilaydi.

Ikkinchi parametr (0) qancha elementni olib tashlash kerakligini belgilaydi .

Qolgan parametrlar ("Limon", "Kivi") qo'shiladigan yangi elementlarni belgilaydi .

Usul splice()o'chirilgan elementlar bilan massivni qaytaradi:

Misol
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 2, "Lemon", "Kiwi");
Elementlarni olib tashlash uchun splice() dan foydalaning
Aqlli parametr sozlamalari yordamida siz splice()elementlarni massivda "teshiklar" qoldirmasdan olib tashlashingiz mumkin:

Misol
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(0, 1);
Birinchi parametr (0) yangi elementlar qo'shilishi (qo'shilishi) kerak bo'lgan joyni belgilaydi .

Ikkinchi parametr (1) qancha elementni olib tashlash kerakligini belgilaydi .

Qolgan parametrlar o'tkazib yuborilgan. Hech qanday yangi elementlar qo'shilmaydi.

JavaScript massivi toSpliced()
ES2023 Array toSpliced() usulini asl massivni oʻzgartirmasdan massivni birlashtirishning xavfsiz usuli sifatida qoʻshdi.

Yangi toSpliced() usuli va eski splice() usuli oʻrtasidagi farq shundaki, yangi usul asl massivni oʻzgarmagan holda yangi massiv yaratadi, eski usul esa asl massivni oʻzgartirdi.

Misol
const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);
*/


/*
find()sinov funktsiyasidan o'tgan birinchi massiv elementining qiymatini qaytaradi.

Ushbu misol 18 dan katta bo'lgan birinchi elementni topadi (qiymatini qaytaradi):

Misol
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

findIndex()test funktsiyasidan o'tgan birinchi massiv elementining indeksini qaytaradi.

Ushbu misol 18 dan katta bo'lgan birinchi elementning indeksini topadi:

Misol
const numbers = [4, 9, 16, 25, 29];
let first = numbers.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}

*/

/*
const numbers = [4, 9, 16, 25, 29];

const minimum = (array) => {
  return Math.min.apply(null, array);
}

console.log(minimum(numbers));

const maximum = (array) => {
  return Math.max.apply(null, array);
}

console.log(maximum(numbers));

const minValue = numbers.reduce((value, total) => {
  return total + value;
}) - maximum(numbers)

const maxValue = numbers.reduce((value, total) => {
  return total + value;
}) - minimum(numbers)

console.log(minValue, maxValue);
*/
/*

Massiv iteratorini yarating va keyin kalit/qiymat juftliklarini takrorlang:

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const f = fruits.entries();

for (let x of f) {
  document.getElementById("demo").innerHTML += x;
}
Usul entries()kalit/qiymat juftliklari bilan Array Iterator obyektini qaytaradi:

[0, "Banan"]
[1, "Apelsin"]
[2, "Olma"]
[3, "Mango"]

Usul entries()asl qatorni o'zgartirmaydi.

Brauzerni qo'llab-quvvatlash
entries()ES6 xususiyatidir ( JavaScript 2015).

ES6 2017 yil iyun oyidan boshlab barcha zamonaviy brauzerlarda to'liq qo'llab-quvvatlanadi:

*/

/*
JavaScript massivining tarqalishi (...)
... operatori takrorlanadigan (massiv kabi) ko'proq elementlarga kengaytiradi:

Misol
const q1 = ["Jan", "Feb", "Mar"];
const q2 = ["Apr", "May", "Jun"];
const q3 = ["Jul", "Aug", "Sep"];
const q4 = ["Oct", "Nov", "May"];

const year = [...q1, ...q2, ...q3, ...q4];*/


// SANALAR BILAN ISHLASH

/*new Date()

new Date(year,month)
new Date(year,month,day)
new Date(year,month,day,hours)
new Date(year,month,day,hours,minutes)
new Date(year,month,day,hours,minutes,seconds)
new Date(year,month,day,hours,minutes,seconds,ms)

new Date(milliseconds)

Eslatma
JavaScript 0 dan 11 gacha oylarni sanaydi :

Yanvar = 0 .

Dekabr = 11 .

Siz oyni o'tkazib yubora olmaysiz. Agar siz faqat bitta parametrni taqdim qilsangiz, u millisekundlar sifatida ko'rib chiqiladi.

JavaScript sanalarni millisekundlarda saqlaydi
JavaScript sanalarni 1970 yil 1 yanvardan boshlab millisekundlar soni sifatida saqlaydi.

Nol vaqti 1970 yil 01 yanvar 00:00:00 UTC .

Bir kun (24 soat) 86 400 000 millisekundga teng.

Endi vaqt: 1970 yil 01 yanvardan 1711613378541 millisekund o'tgan

Method	Description
getFullYear()	Get year as a four digit number (yyyy)
getMonth()	Get month as a number (0-11)
getDate()	Get day as a number (1-31)
getDay()	Get weekday as a number (0-6)
getHours()	Get hour (0-23)
getMinutes()	Get minute (0-59)
getSeconds()	Get second (0-59)
getMilliseconds()	Get millisecond (0-999)
getTime()	Get time (milliseconds since January 1, 1970)

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

getDay() usuli
Usul getDay()sananing ish kunini raqam sifatida qaytaradi (0-6).

Eslatma
JavaScript-da haftaning birinchi kuni (0-kun) yakshanba.

Dunyoning ayrim mamlakatlari haftaning birinchi kunini dushanba deb hisoblashadi.
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const d = new Date();
let day = days[d.getDay()];
*/

/*
RANDOM
To'g'ri tasodifiy funktsiya
Yuqoridagi misollardan ko'rinib turibdiki, barcha tasodifiy tamsayı maqsadlarida foydalanish uchun to'g'ri tasodifiy funktsiyani yaratish yaxshi fikr bo'lishi mumkin.

Ushbu JavaScript funksiyasi har doim min (qo'shilgan) va maksimal (chiqarilgan) o'rtasidagi tasodifiy sonni qaytaradi:

Misol
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
Ushbu JavaScript funksiyasi har doim min va maksimal o'rtasidagi tasodifiy sonni qaytaradi (ikkalasi ham kiritilgan):

Misol
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}*/


const myData = [5, 1, 7, 10, 12, 13, 14,]
/*
function getMin(arr) {
  return Math.min.apply(Math, arr);
}
function getMax(arr) {
  return Math.max.apply(Math, arr);
}

console.log(getMin(myData));
console.log(getMax(myData));
*/

// const sortedData = myData.sort((a, b)=> {return a - b})
// const sortedData2 = myData.sort((a, b)=> {return b - a})

// console.log(sortedData2)




// TSIKL

// for (variable in array) {
//   code
// }
// Misol
// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// for (let x in numbers) {
//   txt += numbers[x];
// }


// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value) {
//   txt += value;
// }

// let text = "";
// let i = 0;
// while (i < 10) {
//   text += "<br>The number is " + i;
//   i++;
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 3) { break; }
//   text += "The number is " + i + "<br>";
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 3) { continue; }
//   text += "The number is " + i + "<br>";
// }


// DATA TYPE

/*
JavaScript-da qiymatlarni o'z ichiga olishi mumkin bo'lgan 5 xil ma'lumotlar turi mavjud:

  string
  number
  boolean
  object
  function

6 turdagi ob'ektlar mavjud:

  Object
  Date
  Array
  String
  Number
  Boolean

qiymatlarni o'z ichiga olmaydi 2 ma'lumotlar turi:

  null
  undefined

// ma'lumot turini aniqlash
typeof "John"                 // Returns "string"
typeof 3.14                   // Returns "number"
typeof NaN                    // Returns "number"
typeof false                  // Returns "boolean"
typeof [1,2,3,4]              // Returns "object"
typeof {name:'John', age:34}  // Returns "object"
typeof new Date()             // Returns "object"
typeof function () {}         // Returns "function"
typeof myCar                  // Returns "undefined" *
typeof null                   // Returns "object"

*/















