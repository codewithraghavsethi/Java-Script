// ------Function------
function myfnc() {
  console.log("Hi' I am SETHI TECH");
  console.log("Welcome to SETHI TECH");
}
myfnc();
//-----------Function With Massage Statement-----
function myFunction2(a, b) {
  console.log(a - b);
}
myFunction2(15, 2);

//-------Function with Return Statement---------
function myFunctionSum(x, y) {
  z = x + y;
  return z;
}
let ans = myFunctionSum(10, 13);
console.log(ans);

//-----------Arrow Fuction-----------------
let arrowSum = (a, b) => {
  console.log(a + b);
};
console.log(arrowSum(10, 30));

//-----------Creat a Vowels Filtter Function----------------------

function countVowels(str) {
  let count = 0;
  for (let char of str) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(count);
}

console.log(countVowels("RaghavSethi"));

//------------Loop Function------

function abc(){
  console.log("Hello World");
}

function xyz(abc){
  return abc;
}


//------------For Each Function----------

let arr = [1,2,3,4,5];
arr.forEach(function printVlaue(val){
  console.log(val);
});
//----------------------------------------
let arr2 = ["delhi", "punjab","uttara-khand", "uttar-pradesh","madhe-pradesh", "maharashtra"];
arr2.forEach(function stateName(name){
  console.log(name.toUpperCase());
});
//----------------------------------------
let arr3 = ["delhi", "punjab","up","bihar"];
arr3.forEach(function stateName(name, idx, arr){
  console.log(name.toUpperCase(), idx, arr);
});
//----------------Question------------------------------------
let num = [1,2,3,4,5,6,7,8,9];
num.forEach(function highValueOfNumber(number){
  console.log(number+"="+number*number);
});
//----------------Question------------------------------------
let no = [10,20,30,40,50];

no.forEach((number)=>{
  console.log(number*number);
})
//-----------------Question------------------------------------
let number = [5,15,25,35,45,55];

let cal = (num) =>{
  console.log(num*num);
}

number.forEach(cal);

//------------------Map Method------------------------------------


//----------------------First Method---------------
let mArr = [10, 11, 12, 13, 14, 15];

mArr.map((val)=>{
  console.log(val);
});


//------------------------Second Method--------------

let mapArr = [10,20,30,40,50];
let newMapArr = mapArr.map((val)=>{
  return val*5;
});
console.log(newMapArr);

// -------------Fillter Method--------------------------

let fillArr = [1,2,3,4 ,5,6,7,8,9];

let newFillArr = fillArr.filter((val)=>{
   return val % 2 === 0;
});

console.log(newFillArr);

//------Reduce Method------------------------------------ 

let redArr = [1,2,3,4];

let output = redArr.reduce((pre, cur)=>{
  return pre + cur ;
});
console.log(output);

//----Find the Largest Number With help of Reduce Method-----------

let larRedArr = [10,8,9,11,12,4,8,13,2,1,0];

let newLarRedArr = larRedArr.reduce((pre, cur)=>{
  return pre > cur ? pre : cur;
});

console.log(newLarRedArr);

//------Find the Smalest Number With the help of Reduce Method----------
let smlRedArr = [10,8,9,11,12,4,8,13,2,1,0];

let newSmlRedArr = larRedArr.reduce((pre, cur)=>{
  return pre < cur ? pre : cur;
});

console.log(newSmlRedArr);

//---------Question 1-----------------------

let markes = [88, 89, 92, 91, 97, 98, 96, 80, 90];

let toppers = markes.filter((val)=>{
  return val > 90;
});
console.log(toppers);

//---------Question 2----------------------

let n = prompt("Enter the Number");
let arrOfN = [];
for(i=1; i<=n; i++){
  arrOfN[i-1] = i;
};
console.log(arrOfN);

let sumOfArr = arrOfN.reduce((pre, cur)=>{
  return pre + cur;
});
console.log("Sum = ", sumOfArr);

let factorial = arrOfN.reduce((pre, cur)=>{
  return pre * cur;
});
console.log("Factorial =",factorial);





