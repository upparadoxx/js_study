// ES6 Classes

// const heresey = {
//   name: 'Heresey',
//   normal() {
//     console.log(this.name);
//   },
//   arrow: () => {
//     console.log(this.name);
//   }
// }

// heresey.normal()
// heresey.arrow()

// function User(first, last) {
//   this.firstName = first
//   this.lastName = last
// }

// User.prototype.getFullName = function () {
//   return `${this.firstName} ${this.lastName}`
// }
// constructor(first, last) = constructor: function (first, last)
// 위 코드내용은 동일하다
class User {
  constructor(first, last) {
    this.firstName = first
    this.lastName = last
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`
  }
}

const heresey = new User('Heresey', 'Park')
const superEgo = new User('superEgo', 'Park')
const upparadoxx = new User('Upparadoxx', 'Park')

console.log(heresey);
console.log(superEgo.getFullName());
console.log(upparadoxx.getFullName());


