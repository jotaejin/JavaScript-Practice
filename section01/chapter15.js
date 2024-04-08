// 1. 객체 생성
let obj1 = new Object() // 객체 생성자
let obj2= {}; //객체 리터럴 (대부분 사용)

// 객체 프로퍼티
let person = {
  name : "조태진",
  age : 25,
  hobby: "야구 시청",
  job: "be Develop",
  extra: {}
};

let name = person.name;
let age = person["age"];
console.log(age);

let property = "hobby";
let hobby = person[property];
console.log(hobby);

//새로운 프로퍼티 추가
person.job = "fe developer";
person["favoriterFood"] = "떡볶이";

console.log(person);

//프로퍼티 수정
person.job = "educator";
person['fovoriteFood'] = "초콜릿";
console.log(person);

//프로퍼티 삭제
delete person.job;
console.log(person);

//프로퍼티 존재 유무 확인
let result1 = "name" in person;//오른쪽 객체 안에 있는지
console.log(result1);
let result2 = "cat" in person;
console.log(result2);