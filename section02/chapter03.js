//배열 구조 분해 할당(배열을 한꺼번에 할당)
let arr = [1,2,3];



let [one,two,three,four = 4] = arr;

//객체의 구조 분해 할당
let person = {
  name: "조태진",
  age : 25,
  hobby: "테니스",
};

let {name,age,hobby} = person;
console.log(name,age,hobby);

//객체 구조 분해 할당을 이용해 함수의 매개변수를 받는 방법
const func = ({name,age,hobby}) =>{
  console.log(name,age,hobby);
}

func(person);