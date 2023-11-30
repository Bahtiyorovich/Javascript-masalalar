// 1-masala

// let son = Number(prompt('Hurmatli foydalanuvchi, 1 dan 7 gacha bo\'lgan raqamlardan birini kiriting va men sizga shu raqamga mos hafta kunini aniqlab beraman'));

// tanlash operatori
// switch(son){
//   case 1: 
//     console.log('Yakshanba')
//     break;
//   case 2: 
//     console.log('Dushanba')
//     break;
//   case 3: 
//     console.log('Seshanba')
//     break;
//   case 4:
//     console.log('Chorshanba')
//     break;
//   case 5: 
//     console.log('Payshanba')
//     break;
//   case 6:
//     console.log('Juma')
//     break;
//   case 7:
//     console.log('Shanba')
//     break;
//   default: 
//     console.log('Siz kerakli raqamni kiriting')
// }

// 2-masala

// let a = 10
// let b = 15
// let amal = Number(prompt('1dan 5 gacha bo\'lgan raqamlardan birini kiriting:'))
// switch(amal){
//   case 1:
//     console.log(a + b)
//     break;
//   case 2:
//     console.log(a - b)
//     break;
//   case 3: 
//     console.log(a * b)
//     break;
//   case 4:
//     console.log(a / b)
//     break;
//   case 5: 
//     console.log((a + b)*(a-b))
//     break;
//   default:
//     console.log('Siz kerakli raqamni kiritmadingiz !');
// }

// 3-masalal
// const data = [-5, 7, -11, 13, -18, 20, -6, 10, 0];

// 1-usul
// const resultMusbat = data.filter(item => {
//   return item > 0
// })
// const resultManfiy = data.filter(item => {
//   return item < 0
// })

// console.log(`${resultManfiy.length} ta manfiy son mavjud`)
// console.log(`${resultMusbat.length} ta musbat son mavjud`)


// 2-usul
// const musbat = []
// const manfiy = []

// for(let i = 0; i < data.length; i++){
//   if(data[i] > 0){
//     musbat.push(data[i])
//   }else if(data[i] < 0){
//     manfiy.push(data[i])
//   }
// }

// console.log(`${manfiy.length} ta manfiy son mavjud`)
// console.log(`${musbat.length} ta musbat son mavjud`)

// 7-masala
// let x = 10;
// let y = 15;

// if(x > y) {
//   console.log(`${x} katta ${y} dan`)
// }else if(y > x) {
//   console.log(`${y} katta ${x} dan`)
// }else {
//   console.log(`Bu sonlar o'zaro teng`)
// }

// 8-masala

// let son = Number(prompt('Ixtiyoriy butun son kiriting: '))

// if(son > 0 && son % 2 === 0){
//   console.log(`${son} soni musbat juft son`)
// }else if(son > 0 && son % 2 !== 0){
//   console.log(`${son} soni musbat toq son`)
// }else if(son < 0 &&  son % 2 === 0){
//   console.log(`${son} soni manfiy juft son`)
// }else if(son < 0 && son % 2 !== 0){
//   console.log(`${son} soni manfiy toq son`)
// }else {
//   console.log(`Bu son ${son}`)
// }

// 9-masala

// let user_number = prompt('1 dan 999 gacha bo\'lgan sonlardan birini kiriting:' )

// let lengthNumber = user_number.length;

// user_number % 2 === 0 
//   ? console.log(`${lengthNumber} xonali juft son ${user_number}`)
//   : console.log(`${lengthNumber} xonali toq son ${user_number}`) 


// Butun sonlarga oid masalalar
// 1-masala
// let L = Number(prompt("Uzunlik o'lchovini kiriting. Unutmang siz kiritgan qiymatni {m} da qabul qilamiz va {santimetr} da natijani ko'rsatamiz: "))

// function metr(mm) {
//   let result = mm * 1000 + ' millimetr'
//   return result
// }
// console.log(metr(L))


// 2-masala
// let M = Number(prompt("Og'irlik o'lchovini kiriting. Unutmang siz kiritgan qiymatni {tonnada} qabul qilamiz va {kilogramda} natijani qaytaramiz"))

// function tonna(t){
//   let result = t * 1000 + ' kg'
//   return result
// }

// console.log(tonna(M))


// 3-masala
// let kb = Number(prompt('Fayl hajmini kiriting va sizga {kbayt} larda natijani qaytaramiz'))

// function kbayt(b){
//   let result = 'Fayl hajmi ' + (b / 1024).toFixed(3) + ' kbayt'
//   return result
// }

// console.log(kbayt(kb))


// 4-masala

// let x = 17

// function hisobla(a) {
//   let result = a % 10
//   let result_2 ='Berilgan sonning o\'nlar xonasida ' +
//    (a - result) / 10 + ' turibdi' + ' birlar xonasida ' +
//     result + ' turibdi'
//   return result_2
// }

// console.log(hisobla(x))

// function hisoblash(a) {
//   let result = a % 10
//   let res = result + (a - result) / 10
//   let result_2 ='Berilgan sonning raqamlar yig\'indisi ' + res
//   return result_2
// }

// console.log(hisoblash(x))

let y = 87
function hisoblash(a) {
  let birlar = a % 10
  let onlar = (a - birlar) / 10
  let result = birlar + '' + onlar
  return result
}

console.log(hisoblash(y))































