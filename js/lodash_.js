import _ from 'lodash'

const userA = [
  {
    userId: '1',
    name: 'Heresey'
  },
  {
    userId: '2',
    name: 'Neo'
  }
]
const userB = [
  {
    userId: '1',
    name: 'Heresey'
  },
  {
    userId: '3',
    name: 'Amy'
  }
]

const userC  = userA.concat(userB)
console.log('concat', userC);
console.log('uniqBy', _.uniqBy(userC, 'userId'));

const userD = _.unionBy(userA, userB, 'userId')
console.log('uniqBy', userD);
// 합친후는 uniqBy, 합친후는 unionBy
// 중복경우 고유하게 하나로 합쳐줌

const users = [
  { userId : '1', name: 'Heresey'},
  { userId : '2', name: 'Neo'},
  { userId : '3', name: 'Amy'},
  { userId : '4', name: 'Evan'},
  { userId : '5', name: 'Lewis'}
]

const foundUser = _.find(users, { name: 'Amy'})
const foundUserIndex = _.findIndex(users, { name: 'Amy'})
console.log(foundUser);
console.log(foundUserIndex);

_.remove(users, { name: 'Heresey'})
console.log(users);