'use strict';
/*
const Age = function (num1, num2) {
  this.num1 = num1;
  this.num2 = num2;
  //   console.log('!!');
};

const TimAge = new Age(5, 6);
const SamAge = new Age(5, 6);

console.log(TimAge, SamAge);
console.log(TimAge instanceof Age);
console.log(SamAge instanceof Age);

// Prototype
// Prototype inheritance
Age.prototype.calcAge = function () {
  console.log(this.num1 + this.num2);
};

TimAge.calcAge();

// Prototype chain
console.log(TimAge.__proto__.__proto__.__proto__);

// TimAge.__proto__ === Age.prototype
// Age.prototype.__proto__ = null
// So
// TimAge.__proto__.__proto__.__proto__ === null


console.log(TimAge.__proto__ === Age.prototype);
console.log(Age.prototype.isPrototypeOf(TimAge));
// console.log(Age.prototype.constructor());

const h1 = document.querySelector('h1');
console.dir(h1.childNodes);
*/

// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀

const Car = function (speed) {
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(this.speed );
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(this.speed);
};

const BMW = new Car(120)
const Mercedes = new Car(95)

BMW.accelerate()
BMW.brake()
BMW.brake()
BMW.brake()
*/
/*
class PersonCl {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  calcAge(){
    console.log(`${this.name} is ${this.age} years old`);
  }
}

const sam = new PersonCl('sam', 45);
sam.calcAge()

const PersonProto = {
  calcAge(){
    console.log(2037 - this.year)
  },
  init(name,year){
    this.name = name;
    this.year = year;
  }
}

const sam = Object.create(PersonProto)
sam.init("sam" , 2000)
sam.calcAge()
console.log(sam)
console.log(sam.__proto__)
console.log(sam.__proto__ === PersonProto)
*/

// Coding Challenge #2

/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀

class Car {
  constructor(speed) {
    this.speed = speed;
  }
  accelerate() {
    this.speed += 5;
    console.log(this.speed);
  }
  break() {
    this.speed -= 5;
    console.log(this.speed);
  }
  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

const ford = new Car(120);
ford.accelerate();
ford.accelerate();
ford.break()
ford.speedUS = 80
console.log(ford)

const Person = function (name, age) {
  this.name = name;
  this.age = age;
};

Person.prototype.calAge = function () {
  console.log(`${this.name} is ${this.age} years old`);
};

const Student = function (name, age, stdMarks) {
  Person.call(this, name, age);
  this.stdMarks = stdMarks;
};

Student.prototype = Object.create(Person.prototype);

Student.prototype.calcMark = function () {
  console.log(`${this.name} got ${this.stdMarks} in exam`);
};

Student.prototype.constructor = Student;

const mike = new Student('mike', 21, 88);
console.log(mike);
mike.calcMark();
mike.calAge();
console.dir(Student.prototype.constructor)
*/
// Coding Challenge #3

/* 
1. Use a constructor function to implement an Electric Car (called EV) as a CHILD "class" of Car. Besides a make and current speed, the EV also has the current battery charge in % ('charge' property);
2. Implement a 'chargeBattery' method which takes an argument 'chargeTo' and sets the battery charge to 'chargeTo';
3. Implement an 'accelerate' method that will increase the car's speed by 20, and decrease the charge by 1%. Then log a message like this: 'Tesla going at 140 km/h, with a charge of 22%';
4. Create an electric car object and experiment with calling 'accelerate', 'brake' and 'chargeBattery' (charge to 90%). Notice what happens when you 'accelerate'! HINT: Review the definition of polymorphism 😉

DATA CAR 1: 'Tesla' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀

const CAR = function (speed) {
  this.speed = speed;
};

const EV = function (name, speed, charge) {
  CAR.call(this, speed);
  this.name = name;
  this.charge = charge;
};

EV.prototype = Object.create(CAR.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

CAR.prototype.break = function () {
  this.speed -= 5;
};

CAR.prototype.accelerate = function () {
  this.charge -= 1;
  this.speed += 5;
  console.log(
    `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`
  );
};

const Tesla = new EV('Tesla', 120, 80);
console.log(Tesla);
Tesla.chargeBattery(99);
Tesla.accelerate();
Tesla.break()
Tesla.accelerate();

class CAR {
  constructor(speed) {
    this.speed = speed;
  }

  accelerate() {
    this.speed += 5;
    console.log(
      `Tesla going at ${this.speed} km/h, with a charge of ${this.charge}%`
    );
  }

  break() {
    this.speed -= 5;
  }
}

class EV extends CAR {
  constructor(name, speed, charge) {
    super(speed)
    this.name = name;
    this.charge = charge;
  }

  chargeTo() {
    this.charge = chargeTo;
  }
}

const tesla = new EV('tesla', 120, 78);
console.log(tesla)

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
  }

  // 3) Public methods

  // Public interface
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    // if (this.#approveLoan(val)) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

console.log(acc1);
acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
Account.helper();
*/


// Coding Challenge #4

/* 
1. Re-create challenge #3, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

GOOD LUCK 😀
*/

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(speed) {
    this.speed = speed * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going at ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}

const rivian = new EVCl('Rivian', 120, 23);
console.log(rivian);
// console.log(rivian.#charge);
rivian
  .accelerate()
  .accelerate()
  .accelerate()
  .brake()
  .chargeBattery(50)
  .accelerate();

console.log(rivian.speedUS);
