// Object
// prototype(동적 메서드), prototype이 붙어있지 않은것
// static(정적 메서드)

// Object.assign()
// 출처 객체들의 모든 열거 가능한 자체 속성을 복사해
// 대상 객체에 붙여넣는다. 그 후 대상 객체를 반환

// const target = {a: 1, b: 2}
// const source = {b: 4, c: 5}

// const returnedTarget = Object.assign(target, source)

// console.log(target);

// console.log(returnedTarget);

// 실체 객체 데이터 자체에 사용 못한다,
// Object 전역객체에 직접 사용

// const userAge = {
  // key: value
//   name: 'Heresey',
//   age: 85
// }
// const userEmail = {
//   name: 'Heresey',
//   email: 'upparadoxx@gmail.com'
// }

// const target =  Object.assign({}, userAge, userEmail)
// console.log(target);
// console.log(userAge);
// console.log(target === userAge);
// console.log(userEmail);

// const a = {k: 123}
// const b = {k: 123}
// console.log(a ===  b);

// Object.keys
const user = {
  name: 'Heresey',
  age: 87,
  email: 'upparadoxx@gamil.com'
}

const keys = Object.keys(user)
console.log(keys);
// ['name', 'age', 'email']

console.log(user['email']);
console.log(user.email);
console.log(keys[2]);

// const values = keys.map(key => user[key])
const values = keys.map(key => {
  return user[key]
})

console.log(values);

// 구조분해 할당
const user2 = {
  name: 'Heresey',
  age: 87,
  email: 'upparadoxx@gmail.com'
}
const {name, age, email, address =  'korea'} = user2

console.log(`사용자 이름은 ${name}입니다.`);
console.log(`${name}의 나이는 ${age}입니다.`);
console.log(`${name}의 이메일 주소는${email}입니다.`);
console.log(address);

const fruits = ['Apple', 'Banana', 'Cherry', 'Orange']
const [, b] = fruits

// 배열은 순서대로
// Banana만 출력
console.log(b);

// 전개 연산자 (Spread)

console.log(fruits);
console.log(...fruits);

// 매개 변수 부분도 전개 연산자를 사용하여 나머지 부분을 다 받아줄수 있다
// rest parameter
function toObject(a, b, ...c) {
  return {
    a: a,
    b: b,
    c: c
  }
} 

// const toObject = (a, b, ...c) => ({a, b, c})

// 속성의 이름과 변수의 이름(데이터의 이름이 같을경우 하나만 남겨둘수 있다)

console.log(toObject(...fruits));

// 전개 연산자를 활용하지 않았을경우
console.log(toObject(fruits[0], fruits[1], fruits[2]));
