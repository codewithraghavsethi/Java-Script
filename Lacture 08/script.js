//------------Event Handler in JavaScript ------------
let bigBox = document.querySelector("#box1");

bigBox.onmouseover =()=>{
    console.log("btn1 was clicked");
    let a = 25;
    a++;
    console.log(a);
};

//--------------Event Object---------------------------
let myBtn3 = document.querySelector("#btn3");
console.log(myBtn3);

myBtn3.click = (evt) => {
    console.log(evt);
    console.log(evt.target);
    console.log(evt.type);
    console.log(evt.clientX);
    console.log(evt.clientY);
};

//---------------Event Listener-----------------------
let myBtn4 = document.querySelector("#btn4");

myBtn4.addEventListener("click", (evt) =>{
console.log("Button was clicked BTN-4");
console.log(evt);
console.log(evt.type);
console.log(evt.target);
console.log(evt.clientX);
console.log(evt.clientY);
});

//-------------------------------------------------------

let myBtn5 = document.querySelector("#btn5");

myBtn5.addEventListener("click", (evt) => {
    console.log("Button was Clicked - Handler-1");
});
myBtn5.addEventListener("click", (evt) => {
    console.log("Button was Clicked - Handler-2");
});
myBtn5.addEventListener("click", (evt) => {
    console.log("Button was Clicked - Handler-3");
});
myBtn5.addEventListener("click", (evt) => {
    console.log("Button was Clicked - Handler-4");
});

//--------------------------------------------------------
let myBtn6 = document.querySelector("#btn6");

const handler1 = ()=>{
    console.log("Button was Clicked - Btn-6 - Handler-1");
};

myBtn6.addEventListener("click", handler1);

myBtn6.addEventListener("click", (evt)=>{
    console.log("Button was Clicked - Btn-6 - Handler-2");
});

myBtn6.addEventListener("click", (evt)=>{
    console.log("Button was Clicked - Btn-6 - Handler-3");
});

myBtn6.addEventListener("click", (evt)=>{
    console.log("Button was Clicked - Btn-6 - Handler-4");
});


myBtn6.removeEventListener("click", handler1);
