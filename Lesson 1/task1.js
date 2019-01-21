const hr = () => console.log('-----------------------')
const loop = (times = 0, callback = null) => {
  if (callback) {
    for (let i = 0; i < times; i++) {
      callback()
    }
  }
}

//Hello world x5
console.log('Case #1:')
loop(5, () => console.log('Hello world!'))
//do smth zero times
console.log('Case #2:')
loop(0, hr)
//do nothing 10 times
console.log('Case #3:')
loop(10)