// Arithmetic Operators
// let a = 7;
// let b = 3;

// console.log("a + b");
// console.log("a + b = ");
// console.log(a + b);
// console.log(" a + b = ", a + b);


let a = 5;
// console.log("++a =", ++a);
// console.log(a);

// console.log("a++ =", a++);
// console.log(a);

// console.log("--a =", --a);
// console.log(a);

// console.log("a-- =", a--);
// console.log(a);

// let age = 10;

// if( age >= 18){
//     console.log("You can vote.");
// }
// if(age <= 10){
//     console.log("Are you kinding?");
// }
// else{
//     console.log("You cannot vote.");
// }

let score = prompt("Enter your Number(0-100)");
let grade;

if(score>=90 && score<=100){
    grade = "A";
}
else if(score>=80 && score<=89){
    grade = "B";
}
else if(score>=60 && score<=79){
    grade = "C";
}
else if(score>=50 && score<=59){
    grade = "D";
}
else if(score>=0 && score<=49){
    grade = "E";
}
console.log("Your Grade is", grade);