//묵시적 형 변환 (알아서 형 변환)

let num = 10;
let str = "20";

const result = num + str;
console.log(result); 

//2. 명시적 형 변환
let str1 = "10";
let strToNum1 = Number(str1);
console.log(10 + strToNum1);

let str2 = "10개";

let num1 = 20;
let numToStr1 = String(num1);
