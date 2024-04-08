// falsy한 값
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = "";
let  f7 = 0n;

// Truthy 한 값
// -> 7가지 Falsy 한 값들 제외한 모든 값
let t1 = "hello";
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

// 활용 사례

function printName(person){
  if(!person){
    console.log("값 x")
    return;
  }
  console.log(person.name);
}

let person = {name : "조태진"};0.0.toFixed.0.toFixed.apply+
+








+
+
printName(person);