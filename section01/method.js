//함수 선언


let result = getArea(10, 20);
console.log(result);

//호이스팅(무조건 함수가 위에있지않아도 된다.)
function getArea(width,height){
  let area = width * height;

  function another(){//중첩 함수
    console.log("another");
  }

  another();
  return area;
}