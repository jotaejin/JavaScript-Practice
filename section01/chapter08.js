//1.null 병합
// null, undefined가 아닌 값을 찾아내는 연산자
let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var2 ?? var3;
console.log(var6);

let username = "이정환";
let userNickName = "winter"

let displayName = username ?? userNickName;

console.log(displayName);

//type of 
//값의 타입을 문자열로 반환
let var7 = 1;
var7 = true;

let t1 = typeof var7;
console.log(t1);

//삼항 연산자
//조건식을 이용해 참, 거짓일 떄의 값을 다르게 반환
let var8 = 10;

let var9 = var8%2 === 0 ? true : false;
console.log(var9);