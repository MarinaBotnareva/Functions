// let num1 = Number(prompt('Введите первое число'));
// let num2 = Number(prompt('Введите второе число'));
// function maxNum (a, b) {
//   if (isNaN(a) || isNaN(b)) {
//     console.log (null);
//   }  
//   console.log (a > b ? a : b);  
// }
// maxNum(num1, num2);

// let age = Number(prompt('Твой возраст'))
//   function isAdult (a) {
//     if (isNaN(a)) {
//       console.log (null);
//     }  
//  console.log (a >= 18 ? true : false);
// }
// isAdult(age);

// function checkMultiplicity (num1, num2) {
//   if (isNaN(num1) || isNaN(num2)) {
//     console.log (null);
//   }  
//   console.log (num1 % num2 === 0 ? true : false);
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
    console.log (null);
  }  
  console.log (numa + numb > numc && numa + numc > numb && numb + numc > numa ? "Треугольник возможен" : "Треугольник не возможен");
 }

 triangle (a, b, c);
