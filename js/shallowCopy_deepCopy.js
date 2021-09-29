import _ from 'lodash'

// 얇은 복사(Shallow copy), 깊은 복사(Deep copy)
// 참조형 데이터가 내부에 또다른 참조형 데이터 배열이나 객체 데이터가
// 포함되어 있다면 깊은 복사 lodash를 이용 ._cloneDeep()
const user = {
  name: 'Heresey',
  age: 85,
  emails: ['upparadoxx@gmail.com']
}

// 복사 방식 Object.assign , 전개연산자
// const copyUser = user
// const copyUser = Object.assign({}, user)
// const copyUser = {...user}
const copyUser = _.cloneDeep(user)
console.log(copyUser === user);

user.age = 22
console.log('user', user);
console.log('copyUser', copyUser);

console.log('---------------');
console.log('---------------');

user.emails.push('superEgo@gmail.com')
console.log(user.emails === copyUser.emails);

console.log('user', user);
console.log('copyUser', copyUser);

