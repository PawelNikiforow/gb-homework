const getData = index => new Promise ((resolve, reject) => {
  const url = `https://jsonplaceholder.typicode.com/users/${index}`
  const request = new XMLHttpRequest()
  request.open('GET', url)
  request.onload = () => {
    if (request.status == 200) {
      resolve(JSON.parse(request.response))
    } else {
      reject(request.statusText)
    }
  }
  request.onerror = err => reject(err)
  request.send()
})

const promiseArray = []
for (let i = 0; i < 10; i++) {
  promiseArray[i] = getData(i + 1)
}
Promise.all(promiseArray).then(result => console.log(result))