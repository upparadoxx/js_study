const heresey = {
  firstName: 'Heresey',
  lastName: 'Park',
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`
  }
}
console.log(heresey);
console.log(heresey.getFullName());
// 변수가 변경될수도 있으니 heresey.firstName 대신 
// this.firstName으로
// heresey 대이터 안의 getFullName 메소드를 콘솔출력


function User(first, last) {
  this.firstName = first
  this.lastName = last
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`
}

const geta = new User('Geta', 'Park')
const upparadoxx = new User('Upparadoxx', 'Clark')
const superEgo = new User('superEgo', 'Smith')

console.log(geta.getFullName())
console.log(upparadoxx);
console.log(superEgo);

// geta, upparadoxx, superEgo => 인스턴스
// 생성자 함수 -> 객체 데이터 생성 {} <-- 리터럴 데이터
// this.firstName, lastName은 데이터가 달라짐
// 그러나 getFullName 로직이 완전히 같기때문에 prototype으로
// getFullName(method)를 활용하여 사용 가능 
// (인스턴스를 prototype로 지속적으로 참조가능 (데이터 생성x)
