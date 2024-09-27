// Mathode - 01
// Create a Variable
let mark_std1 = 99;
let mark_std2 = 95;
let mark_std3 = 93;
console.log(mark_std1);
console.log(mark_std2);
console.log(mark_std3);

// Mathod - 02
// Create a Object 
let marks = {
    std1 : 99,
    std2 : 95, 
    std3 : 93
}
console.log(marks);

// Mathod - 03
// Create a Array

let student_marks = [99, 95, 93];
console.log(student_marks);

// -----------for loop ----------------


let hero = ["Iron Man", "Thor", "Captan", "Hulk", "Spider Man"];

console.log(hero);
console.log(hero[0]);
console.log(hero[1]);
console.log(hero[2]);
console.log(hero[3]);
console.log(hero[4]);
console.log(hero[5]);
console.log(hero[6]);

for (let index = 0; index < hero.length; index++){
    console.log(hero[index]);
}

// ---------------for of loop-------
let cities = ['Delhi', 'Noida', 'Goa', 'Banglore', 'Pune', 'Mumbai', 'Moradabad'];

for ( let city of cities){
    console.log(city);
}

// ----------Question 1-------
let data = [85, 97, 44, 37, 76, 60];
sum = 0;

for ( let val of data){
    console.log(val);
    sum = sum + val;
}
console.log(sum);

let avg = sum/data.length;
console.log(avg);

// ---------Question 2-------
let item = [250, 645, 300, 900, 50];
console.log(item);
for (let k=0; k<item.length; k++){
    console.log(`Item before discount is ${k} =`, item[k]);
    let offer = item[k]/10;
    item[k] = item[k]-offer;
    console.log(`Value of the Item after 10% discount is`,item[k]);
}

//---------------push method ----------

let food = ['paneer', 'milk', 'dhai', 'dal', 'rajma'];
food.push("chole", "rice");
console.log(food);


//---------------pop method-----------

let fastFood = ["burger", "noodals", "coldrink", "pizza"];
console.log(fastFood);
fastFood.pop();
console.log(fastFood);

// -----------------pop delete item -----

let delFood = ["Tikki", "Samosa", "Chat","pani-puri","khasta"];
console.log(delFood);
let delItem = delFood.pop();
console.log(delItem);
console.log(delFood);

// ------------------toString Method-------
let mark = [95,94,90,89,88,85,82];
console.log(mark);
console.log(mark.toString());
console.log(mark);


// ------------Concat Method------------

let car = ["punch", "i20", "alto", "nexon"];
let bike = ["pulser", "bullet", "splendor", "rider"];
let abc = [10,20,30,40];
let newArr = car.concat(bike,abc);
console.log(newArr);

//--------------unshift Method-----------

let arr1 = ["raghav", "shalu"];
arr1.unshift("sethi","sahab");
console.log(arr1);

arr1.shift();
console.log(arr1);

//---------------slice method-----------

let arrSlc = ["p-1", "p-2", "p-3", "p-4", "p-5"];
console.log(arrSlc);
console.log(arrSlc.slice(1,3));
console.log(arrSlc);


// ---------------Splice method------------

let numberArr = [0,1,2,3,4,5,6,7,8,9];
console.log(numberArr.splice(2,0));
console.log(numberArr.splice(2,3));
console.log(numberArr.splice(2,3,102,103,104,105,106,107));
console.log(numberArr);

// ------------Add Element Method-----------
let rr =[1,2,3,4,5,6,7,8,9];
console.log(rr.splice(2,0,1331));
console.log(rr);

// ------------Singal Index Method----------
let singIndex = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(singIndex.splice(5));
console.log(singIndex);


















