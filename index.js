//ФУНКЦИЯ ВОЗВРАЩАЕТ БОЛЬШЕЕ ЧИСЛО:
//Вариант 1:
// let num1 = Number(prompt('Введите первое число'));
// let num2 = Number(prompt('Введите второе число'));
// function maxNum (a, b) {
//   if (isNaN(a) || isNaN(b)) {
//     return null;
//   }  
//  return a > b ? a : b;  
// }
// maxNum(num1, num2);
//Вариант 2:
// function maxNum (a, b) {
//   z=Math.max(a, b);
//   return z;}
//   maxNum(3, 7); 
//   maxNum(5, 1);

// let age = Number(prompt('Твой возраст'))
//   function isAdult (a) {
//     if (isNaN(a)) {
//       return null;
//     }  
//  return a >= 18 ? true : false;
// }
// isAdult(age);

// function checkMultiplicity (num1, num2) {
//   if (isNaN(num1) || isNaN(num2)) {
//     return null;
//   }  
//   return num1 % num2 === 0 ? true : false;
//  }
//  checkMultiplicity(25, 5); 
// checkMultiplicity(15, 3); 
// checkMultiplicity(15, 5); 
// checkMultiplicity(15, 4); 


let a = Number(prompt('Длинна стороны А'));
let b = Number(prompt('Длинна стороны B'));
let c = Number(prompt('Длинна стороны C'));
function triangle (numa, numb, numc) {
  if (isNaN(numa) || isNaN(numb) || isNaN(numc)) {
    return null;
  }  
  return numa + numb > numc && numa + numc > numb && numb + numc > numa ? "Треугольник возможен" : "Треугольник не возможен";
 }

 triangle (a, b, c);
