// let div = document.querySelector("div");
// console.dir(div);
// let heading = document.querySelector("h1");

let heading = document.querySelector("h2");
console.dir(heading);
console.dir(heading.innerText);

heading.innerHTML = heading.innerHTML + ' Code With Raghav Sethi ';
heading.innerText = heading.innerText + ' Code With Raghav Sethi ';

let divs = document.querySelectorAll(".box");
console.log(divs); 
// divs[0].innerText = "new box 1";
// divs[1].innerText = "new box 2";
// divs[2].innerText = "new box 3";
 
let indx = 1;
for(div of divs){
    div.innerText = `New Box ${indx}`;
    indx++;
}
 