// this
// 일반(Normal) 함수는 호출 위치에서 따라 this 정의
// 화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의

const heresey = {
  name: 'Heresey',
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
}

heresey.normal()
heresey.arrow()

const amy = {
  name: 'Amy',
  normal: heresey.normal,
  arrow: heresey.arrow
}

amy.normal()
amy.arrow()

function User(name) {
  this.name = name
}
User.prototype.normal = function () {
  console.log(this.name);
}
User.prototype.arrow = () => {
  console.log(this.name);
}

const heropy = new User('Heropy')

heropy.normal()
heropy.arrow()


const timer = {
  name: 'Heropy!!',
  timeout: function () {
    setTimeout(() => {
      console.log(this.name);
    }, 2000)
  }
}
timer.timeout()