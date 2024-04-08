//spread 연산자(...)

let arr1 = [1,2,3];
let arr2 = [4,...arr1,5,6];


let obj1 = {
  a: 1,
  b: 2,
};

let obj2 = {
  ...obj1,
  c: 3,
  d: 4,
};

function funcA(p1,p2,p3){
  console.log(p1,p2,p3);
}

funcA(...arr1);

//Rest 매개변수
//Rest -> 나머지, 나머지 매개변수

function funcB(one,...rest){
  console.log(one,rest);
}

funcB(...arr1)