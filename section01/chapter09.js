//if 조건문
let num = 9;
if(num >= 10){
  // console.log("num은 10 이상입니다.")
}
else if(num >= 5){
  // console.log("num은 5 이상")
}
else{
  // console.log("조건이 거짓입니다.")
}

//switch
//다수의 조건을 처리할 때 if보다 직관적
let animal = "owl";

switch (animal){
  case "cat":{
    console.log("고양이")
    break;
  }
    case "dog":{
      console.log("강아지")
    }
      case "bear":{
        console.log("곰")
      }
        case "snake":{
          console.log("뱀")
        }
          case "tiger":{
            console.log("뱀")
          }
          default:{
            console.log("없는 동물 입니다.")
          }
}