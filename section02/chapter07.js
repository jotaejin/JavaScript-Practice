//6가지의 요소 조작 메서드

//push
let arr1 = [1,2,3];
const newLength = arr1.push(4,5,6,7);

//pop
//배열의 맨 뒤 요소 제거, 반환
let arr2 = [1,2,3];
const poped = arr2.pop();

//맨 앞 요소를 제거
let arr3 = [1,2,3];
const shiftedItem = arr3.shift();
console.log(shiftedItem, arr3);

//unshift(push,pop에 비해 느리게 동작)
//배열의 맨 앞 요소 추가
let arr4 = [1,2,3];
arr4.unshift(6);
console.log(arr4);

//slice
//배열의 특정 범위를 잘라내서 새로운 배열로 반환

let arr5 = [1,2,3,4,5];
let sliceed2 = arr5.slice(-3);
let sliced = arr5.slice(2,5);
console.log(sliced);
console.log(arr5);
console.log(sliceed2);

//concat
//두개의 서로 다른 배열을 이어 붙여서 새로운 배열 반환
let arr6 = [1,2];
let arr7 = [3,4];

let co = arr6.concat(arr7);
console.log(co);