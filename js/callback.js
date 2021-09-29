// 콜백(Callback)
// 함수의 인수로 사용되는 함수
// *실행위치를 보장하는 용도로 많이 활용된다

// setTimeout(함수, 시간)

function timeout(cb) {
  setTimeout(() => {
    console.log('Heresey')
    cb()
  }, 3000)
}

timeout(() => {
    console.log('Done!')
})

