class Human {
  constructor(name, age, dateOfBirth) {
    this.name = name
    this.age = age
    this.dateOfBirth = dateOfBirth
  }
  
  displayInfo() {
    let localeOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }
    return `Name: ${this.name}, age: ${this.age}, date of birth: ${this.dateOfBirth.toLocaleString('en-US', localeOptions)}`
  }
}

class Employee extends Human {
  constructor(name, age, dateOfBirth, salary = 0, department = 'No department') {
    super(name, age, dateOfBirth)
    this.salary = salary
    this.department = department
  }
  
  displayInfo() {
    return `${super.displayInfo()}, salary: $${this.salary}, department: ${this.department}`
  }
}

class Developer extends Employee {
  constructor(name, age, dateOfBirth, salary = 0, department = 'No department', manager = undefined) {
    super(name, age, dateOfBirth, salary, department)
    this.manager = manager
  }
  
  changeManager(newManager) {
    this.manager = newManager
  }
  
  showManager() {
    if (this.manager) {
      console.log(`${this.manager.name}, ${this.manager.department}`)
    } else {
      console.log('No manager')
    }
  }
}

class Manager extends Employee {
  constructor(name, age, dateOfBirth, salary = 0, department = 'No department', developers = []) {
    super(name, age, dateOfBirth, salary, department)
    this.developers = developers
  }
  
  addDeveloper(newDeveloper) {
    this.developers.push(newDeveloper)
  }
  
  removeDeveloper(developer) {
    let removeIndex = -1
    for (let i = 0; i < this.developers.length; i++) {
      let currentDeveloper = this.developers[i]
      if (currentDeveloper.name == developer.name &&
          currentDeveloper.age == developer.age &&
          currentDeveloper.dateOfBirth == developer.dateOfBirth &&
          currentDeveloper.salary == developer.salary &&
          currentDeveloper.department == developer.department
      ) {
        removeIndex = i
        break
      }
    }
    if (removeIndex >= 0) {
      this.developers.splice(removeIndex, 1)
    } else {
      console.log('No such developer found')
    }
  }
  
  showDevelopers() {
    for (let developer of this.developers) {
      console.log(`${developer.name}, ${developer.department}`)
    }
  }
}

const hr = () => console.log('-------------------------------------------')

const vasya = new Manager('Vasiliy', 29, new Date(1990, 0, 1), 1000, 'Research Lab')
const petya = new Developer('Peter', 27, new Date(1991, 2, 18), 800, 'Research Lab')
const vanya = new Developer('Ivan', 25, new Date(1993, 4, 29), 800, 'Support team')

console.log(vasya.displayInfo())
console.log(petya.displayInfo())
console.log(vanya.displayInfo())
hr()
hr()

vasya.addDeveloper(petya)
vasya.addDeveloper(vanya)
petya.changeManager(vasya)
vanya.changeManager(vasya)
vasya.showDevelopers()
hr()
petya.showManager()
hr()
vanya.showManager()
hr()
hr()

vasya.removeDeveloper(vanya)
vanya.changeManager(undefined)
vasya.showDevelopers()
hr()
vanya.showManager()