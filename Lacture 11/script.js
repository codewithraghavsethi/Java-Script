//----Object in JS----
const student = {
  fullName: "Raghav Sethi",
  marks: 98,
  printMarks: function () {
    console.log("marks = ", this.marks);
  },
};

const employee = {
  calTax1() {
    console.log("Tax Rate is 10%");
  },
  calTax2: function () {
    console.log("tax rate is 12%");
  },
};

//----Prototype in JS----

const tax = {
  taxRate() {
    console.log("Tax Rate is 18% GST");
  },
};

const sethi = {
  salary: 100000,
};

sethi.__proto__ = tax;

const raghav = {
  salary: 50000,
  taxRate() {
    console.log("Tax Rate is 24% GST");
  },
};

raghav.__proto__ = tax;

//----Classes in JS----

class tata {
  start() {
    console.log("Car Start");
  }
  stop() {
    console.log("Car Stop");
  }
  setBrand(brand) {
    this.brand = brand;
  }
}

let punch = new tata();
punch.setBrand("punch");

let nexon = new tata();
let tiago = new tata();

//----Inheritance in JS----

class person {
  constructor() {
    this.spicious = "Homo-Spicious";
  }
  eat() {
    console.log("Eating");
  }
  sleep() {
    console.log("Sleeping");
  }
  work() {
    console.log("Do Nothing");
  }
}

class engineer extends person {
  work() {
    console.log("Software Engineer");
  }
}

let RaghavObj = new engineer();

//----Super Keyword in JS----
class bike{
  constructor(){
    // console.log("second");
    this.wheel = "twoWheel";
    // this.same = okCheack;
  }
  start(){
    console.log("Engine Start");
  }
  off(){
    console.log("Power Off");
  }
}

class scooter extends bike{
  constructor(okCheack){
    // console.log("first");
    super();
    this.okCheack = okCheack;
    // console.log("third");
  }
    riding(){
      console.log("Test Drive");
    }
}

let bikeObj = new bike("rider");
let scooterObj = new scooter("cheaker");

//----Question No 1 + Question No 2 ----very important question 
let DATA = "Scerate Information";

class user{
  constructor(name, email){
    this.name = name;
    this.eamil = email;
  }
  veiwData(){
    console.log("Data = ", DATA);
  }
}

class admin extends user{
  constructor(name, eamil){
    super(name, eamil)
  }
  editData(){
    DATA = "new value of Data";
  }
}

let student1 = new user("raghav", "raghav@email.com");
let student2 = new user("sethi", "sethi@email.com");
let teacher1 = new user("pooja", "pooja@email.com"); 
let admin1 = new admin("admin", "admin123@email.com");

//----Error Handling------

let a = 2;
let b = 3;

console.log("a = ", a);
console.log("b = ", b);
console.log ("a+b = ", a+b);
console.log ("a+b = ", a+b);
try{
  console.log ("a+b = ", a+c);
}catch(err){
  console.log(err);
}
console.log ("a+b = ", a+b);
console.log ("a+b = ", a+b);
console.log ("a+b = ", a+b);



