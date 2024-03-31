// 1-masala
// let n = Number(prompt('Ixtiyoriy natural son kirit:'));
// let text = prompt("Ko'pi bilan 10 ta belgidan iborat ixtiyoriy satr kiriting:");

// if(text.length > n ){
//   let result = text.slice(text.length - n);
//   console.log(result);
// }else if(text.length < n){
//   const result = text.padStart(n, "*");
//   console.log(result);
// }

// 2-masala

// let n1 = Number(prompt('10 dan katta bo\'lmagan Lyuboy natural 1-son kirit: '));
// let n2 = Number(prompt('10 dan katta bo\'lmagan Lyuboy natural 2-son kirit: '));
// let s1 = prompt("Ko'pi bilan 10 ta belgidan iborat ixtiyoriy 1-satr kiriting:");
// let s2 = prompt("Ko'pi bilan 10 ta belgidan iborat ixtiyoriy 2-satr kiriting:");

// if(n1 > s1.length && n2 > s2.length && n1 === s1.length && n2 === s2.length){
//   console.log('Kiritilgan qiymatlar berilgan shartlarga mos kelmadi')
// }else {
//   let txt1 = s1.slice(0, n1); // salom 3
//   let txt2 = s2.slice(s2.length - n2); // Javascript 3
//   console.log(txt1.concat(txt2)); // salipt
// }


// 3-masala

// let txt3 = 'Javascript'

// const txt4 = txt3.split('');
// console.log(txt4)
// let result = ''
// for(let i = 0; i < txt4.length; i++){
//   if(txt4[i] !== 'a'){
//     result += txt4[i]
//   }else {
//     result += txt4[i] + txt4[i]
//   }
// }

// console.log(result);


//4-masala
// let txt3 = 'Javascript'
// let c = 'a'
// let sign = '+'
// const txt4 = txt3.split('');
// let result = ''
// for(let i = 0; i < txt4.length; i++){
//   if(txt4[i] !== c){
//     result += txt4[i]
//   }else {
//     result += sign + txt4[i]
//   }
// }

// console.log(result);

// 5-masala

// let txt3 = 'Javascript'
// let c = 'a'
// let sign = '+'
// const txt4 = txt3.split('');
// let result = ''
// for(let i = 0; i < txt4.length; i++){
//   if(txt4[i] !== c){
//     result += txt4[i]
//   }else {
//     result += txt4[i] + sign
//   }
// }

// console.log(result);

// 6-masala

// let txt5 = 'Javascript reactjs nodejs'
// let sign2 = 'js'
// let result = txt5.includes(sign2)
// console.log(result)

// 7.32 masala
// let txt6 = 'Javascript reactjs nodejs JS js';
// let sign3 = 'js';
// let count = 0;
// const txt7 = txt6.split(' ');
// console.log(txt7)
// for(let i = 0; i < txt7.length; i++){
//   if(txt7[i].includes(sign3) === true) {
//     txt6.substr(txt7[i].indexOf(sign3), sign3.length);
//     count += 1;
//   }
// }
// console.log(count);

// 8.33 masala

// let txt6 = 'Javascript reactjs nodejs JS js';
// let sign3 = 'js';
// let res = txt6.substr(txt6.indexOf(sign3), sign3.length);
// console.log(res);

// 9.34 masala

// let txt6 = 'Javascript reactjs nodejs';
// let sign3 = 'js';
// let res = txt6.substr(txt6.lastIndexOf(sign3), sign3.length);
// console.log(txt6, res);

// 10.35 masala

// let txt6 = 'Javascript reactjs nodejs JS';
// let sign3 = 'js';
// const str = txt6.split(' ');
// const res = [];
// for (let i = 0; i < str.length; i++) {
//   if(str[i].includes(sign3)){
//     let test = str[i].substr(str[i].indexOf(sign3), sign3.length);
//     res.push(test);
//   }
// }
// console.log(str, res);

// 11.36 masala

// let a = 'Happy New Year Year Year'
// let b = 'Year'
// let c = 'Month'

// let d = a.replace(b, c)
// console.log(d);

// 12.37  masala
// let a = 'Happy New Year Year Year'
// let b = 'Year'
// let c = 'Month'

// let lastIndex = a.lastIndexOf(b);

// let res = a.substring(0, lastIndex) + c
// console.log(res)

// 13.38 masala
// let a = 'Happy New Year Year Year'
// let b = 'Year'
// let c = 'Month'
// let res = a.replaceAll(b, c);
// console.log(res)

// 14.39 masala

// let h = "I'm Web Developer and Mentor";
// function findBetweenSpaces(str) {
//   let firstSpaceIndex = str.indexOf(' ');
//   let secondSpaceIndex = str.indexOf(' ', firstSpaceIndex + 1);

//   // Faqat bitta probeldan iborat bo'lsa bo'sh satr qaytar
//   if (firstSpaceIndex === -1 || secondSpaceIndex === -1) {
//       return '';
//   }

//   // Birinchi va ikkinchi probel orasidagi belgilarni chiqarish
//   return str.substring(firstSpaceIndex + 1, secondSpaceIndex);
// }

// 15.40 masala
// function viewSigns(str) {
//   let firstSpaceIndex = str.indexOf(' ');
//   let lastSpaceIndex = str.lastIndexOf(' ');

//   // Faqat bitta probeldan iborat bo'lsa bo'sh satr qaytar
//   if (firstSpaceIndex === -1 || lastSpaceIndex === -1) {
//       return '';
//   }

//   // Birinchi va ikkinchi probel orasidagi belgilarni chiqarish
//   return str.substring(firstSpaceIndex + 1, lastSpaceIndex);
// }
// // Misol uchun:
// console.log(viewSigns(h));


// 16.41 masala

// let k = 'Salom web dasturchilar'
// let l = k.split(' ').length;
// console.log(l);

// 17.42 masala

// let q = 'HELLO nON NAN SAN NUN MAN'
// const w = q.split(' ');
// let count = 0;

// for(let i = 0; i < w.length; i++){
//   if(w[i].at(0).toUpperCase() === w[i].at(-1).toUpperCase()){
//     count += 1;
//   }
// }
// console.log(count);


// 18.43 masala

// let s = "Salom hammaga nima gaplar jigar";
// const s2 = s.toUpperCase().split(" ");
// let count = 0;
// for(let si of s2){
//   if(si.includes('A')){
//     count += 1;
//   }
// }

// console.log(count)


// 19.44 masala

// let s = "Salom hammaga nimaaa gaplar jigarlara";
// let s = "hammaga salam langara aaa baraka alamat sala";

// const s2 = s.toUpperCase().split(" ");
// let count = 0;

// for(let si of s2){
//   const arr = si.split('');
//   let f = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] === 'A') f++;
//   }
//   if(f === 3) count++;
// }
// console.log(count);


// 20.45 masala
// let str = "Hayrli kech kuningiz qanday o'tdi!";
// function wordLength(str) {
//   const arr = str.split(' ');
//   arr.sort(function(a, b){return a.length - b.length})
//     return `Eng kichik so'z: "${words[0]}" ${words[0].length} ta belgidan iborat`
// }
// console.log(wordLength(str))

// 21.46 masala

// let str = "Men Js dasturlash tilini o'rganyapman";

// function maxLengthWord(str) {
//   const words = str.split(" ");
//   words.sort((a, b) => { return b.length - a.length})
//   return `Eng katta so'z: "${words[0]}" ${words[0].length} ta belgidan iborat`
// }

// console.log(maxLengthWord(str));


// 22.47 masala

// let str = "Js reactjs nodejs nextjs"
// function joinDot(str) {
//   const arr = str.split(" ");
//   return arr.join(".");
// }
// console.log(joinDot(str));


// 23.48 masala

// let str = "minimum maximum alfa babble NaN"
// function replaceWords(str) {
//   const words = str.split(" ");
//   const alfa = [];
//   for(let word of words) {
//     let result = word.replaceAll(word.at(0), ".");
//     alfa.push(result.replace('.', word.at(0)));
//   }

//   return alfa.join(" ; ");
// }

// console.log(replaceWords(str));


// 24.49 masala
// let str = "minimum maximum alfa babble NaN"
// function replaceWords(str) {
//   const words = str.split(" ");
//   const alfa = [];
//   for(let word of words) {
//     let result = word.replaceAll(word.at(-1), ".");
//     let idx = result.lastIndexOf('.');
//     alfa.push(result.slice(0, idx) + word.at(-1));
//   }

//   return alfa.join(" ; ");
// }

// console.log(replaceWords(str));

// 25.50 masalan

// function removeSpaces(str) {
//   // \s - probel regExp da belgisi; + yonma-yon kelganligini anglatadi
//   let result = str.replace(/\s+/g, ' ');
//   return result.split(" ").reverse().join(" ");
// }
// let sampleStr = "Bu   birinchi      misol matn    ";
// console.log(removeSpaces(sampleStr));



// 26.51 
// function removeSpaces(str) {
//   // \s - probel regExp da belgisi; + yonma-yon kelganligini anglatadi
//   let result = str.replace(/\s+/g, ' ');
//   return result.split(' ').sort().join(' ');
// }
// let sampleStr = "b   a   f   d  c    e";
// console.log(removeSpaces(sampleStr));


// 27.52
// let str = "salom hello world"
// function capitalize(str) {
//   const arr = str.split(" ");
//   const words = [];
//   for(let word of arr) {
//     words.push(word.at(0).toUpperCase() + word.slice(1));
//   }
//   return words.join(" ");
// }

// console.log(capitalize(str))
