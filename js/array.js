// Array

const numbers = [1, 2, 3, 4]
const fruits = ['Apple', 'Banana', 'Cherry']

// .length
console.log(numbers.length);
console.log(fruits.length);
console.log([1, 2].length);
console.log([].length);

// .concat()
console.log(numbers.concat(fruits));
// 원본의 배열 데이터 수정x

// .forEach()

// fruits.forEach(function (element, index) {
//   console.log(element, index);
// })

// .map()
// forEach 따로 반환 x , map반환한 데이터o

const a = fruits.forEach((fruit, index) => {
  console.log(`${fruit}-${index}`)
}) 
console.log(a);

const b = fruits.map((fruit, index) => ({
  id: index,
  name: fruit
}))
  
console.log(b);

//.filter() 원본 영향 x, 새로운 배열 반환
const c = numbers.map(number =>
  number < 3
)
console.log(c);

const d = numbers.filter(number => 
  number < 3
)
console.log(d);

// .find() .findIndex()

const e = fruits.find(fruit => 
  /^B/.test(fruit)
)
console.log(e);

const f = fruits.findIndex(fruit => 
  /^C/.test(fruit)
)
console.log(f);

// .includes()

const g = numbers.includes(3)
console.log(g);
const h = numbers.includes('heresey')
console.log(h);

// .push() 맨 뒤쪽 .unshift() 맨 앞쪽
numbers.push(5)
console.log(numbers);

numbers.unshift(0)
console.log(numbers);

// .reverse()
numbers.reverse()
fruits.reverse()

console.log(numbers);
console.log(fruits);

// .splice()
// 제거 용도 추가 용도 두가지 가능
numbers.splice(2, 0, 999)
console.log(numbers);
fruits.splice(2,0,'Orange')
console.log(fruits);

