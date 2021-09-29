// 함수 복습

function sum (x, y){
  return x + y
}

const hello =  function(x, y){
  return x + y
}

console.log(hello(6, 6));


const a = sum(1, 3)
const b = sum(4, 12)

console.log(a);
console.log(b);
console.log(a + b);

// return은 함수의 종료를 의미
function sum2(x, y) {
  if (x < 2) {
    return "no"
  }
  return x + y
}

console.log(sum2(1, 1));
console.log(sum2(2, 2));

// 인수에 arguments활용
// 배열 데이터로~
function sum3() {
  console.log(arguments);
  return arguments[0] + arguments[1] + arguments[2] -  arguments[3]}

console.log(sum3(7, 7, 7, 7));

// 함수를 호출하는 횟수를 줄이는 것이 좋다
// 반복적인 경우 할당해서 재활용이 용이 

