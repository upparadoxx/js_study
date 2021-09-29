//  비교 연산자 (comparison operator)

const a = 1
const b = 1

console.log(a === b);

function isEqual(x, y){
  return x === y
}

console.log(isEqual(1, 1));
console.log(isEqual(2, '2'));

// 불일치 연산자
console.log(a !== b);
console.log(a >= b);


// 논리 연산자 (logical operator)

const c = 1 === 1
const d = 'AB' === 'AB'
const e  = false

console.log(c);
console.log(d);
console.log(e);

// && 그리고(and) 연산자 하나라도 모두가 같은 값이 여야한다
console.log('&&: ', c && d && e);
// || 또는 (or) 연산자 하나라도 true 면 true
console.log('||:', c || d || e);
// ! 부정 (not) 연산자 값의 반대 부정
console.log('!:', !e);


// 삼항 연산자 (ternary operator)

const f = 1 < 2

if (f) {
  console.log('참');
} else {
  console.log('거짓');
}

console.log(f ? '참' : '거짓');
// ? : 기호를 구분해서 3개의 항으로 로지컬
// true면 두번째 항 실행, false면 세번째 항 실행