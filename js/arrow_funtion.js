//화살표 함수
//  () => {}  vs  function () {}

const double = function(x) {
  return x * 2
}
console.log('double:', double(7));

const doubleArrow = (x) => {
  return x * 2
}
console.log('doubleArrow:', doubleArrow(7));

const doubleArrow2 = (x) => x * 2
console.log('doubleArrow2:', doubleArrow2(7))

const doubleArrow3 = x => x * 2 
console.log('doubleArrow3:', doubleArrow3(7));

// 객체 데이터는?!
// -> () 소괄호로 한번 감싸면 출력가능

const doubleArrow4 = x => ({
  name: "Heresey",
  age: 87,
  email: 'upparadoxx@gmail.com'
})
console.log('double4:', doubleArrow4());

// 즉시실행함수
// IIFE, Immediately-Invoked Function Expression
// 세미콜론 주의!
// 방법 : 1. 익명함수를 ()소괄호로 감싼후 그 뒤에 다시 소괄호 열고 닫기
//        2. 익명함수를 ()소괄호를 감싼후 그 안에서 열고 닫기
// ex ) : 1.(x)()  2.(x()) *두번째 방법을 권장

const a = 7
function doubleIIFE() {
  console.log(a * 2);
}
doubleIIFE();

(function () {
  console.log(a * 2);
})();

(function () {
  console.log(a * 2);
}())

// 호이스팅(Hoisting)
// 함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
// 함수 표현 아님!! ex) const hello = function(){}

const h = 7

hoisting ()

function hoisting() {
  console.log(h * 4);
}
// 위 함수 선언부가 로직이 위로 끌어 올려졌다
// 그래서 선언부보다 위에 있는 함수호출이 실행됨


// 타이머 함수
// setTimeout(함수, 시간): 일정 시간 후 함수 실행
// setInterval(함수, 시간): 시간 간격마다 함수 실행
// clearTimeout(): 설정된 Timeout 함수를 종료
// clearInterval(): 설정된 Interval 함수를 종료

setTimeout(function(){
  console.log('Heresey');
}, 3000)

const timer = setTimeout(() => {
  console.log('Heresey')
}, 3000)

const h1El = document.querySelector('h1')
h1El.addEventListener('click', () => {
  clearTimeout(timer)
})

const timer2 = setInterval(() => {
  console.log('Heresey')
}, 3000)

h1El.addEventListener('click', () => {
  clearInterval(timer2)
})

// 콜백(Callback)
// 함수의 인수로 사용되는 함수

// setTimeout(함수, 시간)
  
function timeout() {
  setTimeout(() => {
    console.log('Heresey')
  }, 3000)
}

timeout()