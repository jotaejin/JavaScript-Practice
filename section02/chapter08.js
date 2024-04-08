//forEach
// 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1,2,3];

arr1.forEach(function (idx,item){
  console.log(idx * 2, item * 2);
});

let doubledArr = [];

arr1.forEach((item) =>{
  doubledArr.push(item * 2);
})

console.log(doubledArr);

//2. includes
//배열에 특정 요소가 있는지 확인
let arr2 = [1,2,3,];
let isInclude = arr2.includes(3);

console.log(isInclude);

//3. indexOf(참조값으로 비교) 얕은 비교
//특정 요소의 위치를 찾아서 반환
let arr3 = [1,2,3];
let index = arr3.indexOf(2);
console.log(index);

//findIndex
//특정 요소의 위치를 반환 메서드(데이터로 비교 가능)
let arr4 = [1,2,3];
const find = arr4.findIndex((item) => item % 2 != 0);

let obj = [
  {name : "조태진"},
  {name : "조태진1"}
]

console.log(
  obj.findIndex((item) => item.name === "조태진")
);

//find

let arr5 = [
  {name : "조태진"},
  {name : "조태진1"}
]
const finded = arr5.find((item)=>item.name === "조태진");

console.log(finded);

