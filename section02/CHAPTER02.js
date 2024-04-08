function retrunFalse(){
  console.log("false 함수")
  return undefined;
}


function returnTrue(){
  console.log("true 함수");
  return 10;
}




//단락 평가 사례(앞에있는 변수가 참이면 뒷 변수 확인안하고 boolean값 반환)
function printName(person){
  const name = person && person.name;
  console.log(name || "person의 값 x");
}

printName();
printName({name:"조태진"});