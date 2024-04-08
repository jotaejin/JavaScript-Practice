// 5가지 배열 변형 메서드
// filter
//기존 배열에서 조건 만족하는 요소만 필터링하여 새로운 배열로 반환
let arr1 = [
  {name: "조태진", hobby:"야구"},
  {name: "조태진1", hobby:"야구1"},
  {name: "조태진2", hobby:"야구2"},
];

const baseballPeople = arr1.filter((item) => item.hobby ==="야구") ;

console.log(baseballPeople);

//map
//배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행 후 그 결과들을 모아서 새로운 배열로 반환
let arr2 = [1,2,3];
const mapResult = arr2.map((item,idx,arr) => {
  return item * 2;
});

let names = arr1.map((item) => item.name);

//3. sort
let arr3 = [10,3,5];
arr3.sort((a,b) => {
  if(a > b){
    //오름차순 b가 a 앞에 
    return 1;
  }else if(a < b){
    //a가 b 앞에
    return -1;
  } else{
    //바꾸지 x
    return 0;
  }
});

console.log(arr3);

//toSorted
//정렬된 새로운 배열을 반환
let arr5 = ["c","a","b"];
const sorted = arr5.toSorted();

console.log(arr5);
console.log(sorted);

//join
//배열을 합쳐서 반환하는 메서드
let arr6 = ["hi","im","winter"];
const joined = arr6.join();
console.log(joined);