function* generateCv() {
  let name = prompt('Your name: ', '')
  yield name
  let age = prompt('Your age: ', '')
  yield age
  let residence = prompt('City of your residence: ', '')
  return {name: name, age: age, residence: residence}
}

const generator = generateCv()
do {
  var cvEntry = generator.next()
} while (cvEntry.done === false)
  
console.log(cvEntry.value)