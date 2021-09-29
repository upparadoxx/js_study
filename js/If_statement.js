import random from './getRandom'

// 조건문 (If statement) ,switch문

const a = random()

switch (a) {
  case 0:
    console.log('a is 0');
    break
  case 2:
    console.log('a is 2');
    break
  case 3:
    console.log('a is 3');
    break
  default:
    console.log('rest...');
}
// case 시작  break 마무리 else = default


// if (a === 0 ) {
//   console.log('a is 0');
// } else if(a === 2) {
//   console.log('a is 2');
// } else if(a ===3) {
//   console.log('a is 3');
// } else {
//   console.log('rest...');
// }