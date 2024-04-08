let date1 = new Date();
console.log(date1);

let date2 = new Date("1999,02,12");
console.log(date2);

//타임 스탬프
//특정 시간이 날짜로 부터 몇 ms가 지났는지를 의미하는 숫자값
let ts1 = date1.getTime();
console.log(ts1);

let date4 = new Date(ts1);
console.log(date1,date4);

//시간 요소들을 추출
let year = date1.getFullYear();
let month = date1.getMonth() + 1;
let date = date1.getDate();

let hour = date1.getHours();
let minute = date1.getMinutes();
let seconds = date1.getSeconds();

//시간 수정하기
date1.setFullYear(2023);
date1.setMonth(2);
date1.setDate(30);
date1.setHours(23);
date1.setMinutes(59);
date1.setSeconds(59);

//시간을 여러 포맷으로 출력
console.log(date1.toDateString());
console.log(date1.toLocaleDateString());