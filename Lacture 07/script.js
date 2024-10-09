//---------------Attributes----------------
let div = document.querySelector("div");
console.log(div);

//---------------Get Attribute-------------
let getAtt = div.getAttribute("id");
console.log(getAtt);

let spanQuery = document.querySelector("span");
console.log(spanQuery);

let spanId = spanQuery.getAttribute("id");
console.log(spanId);

let spanName = spanQuery.getAttribute("name");
console.log(spanName);

//------------------Set Attribute----------
let paraClass = document.querySelector('p');
console.log(paraClass);

let addNewClass = paraClass.setAttribute("class", "newpara");
console.log(addNewClass);

//------------------Style Attribute---------

let bigBox = document.querySelector("div");
bigBox.style.backgroundColor = "aqua";
bigBox.style.fontSize = "50px";
bigBox.innerText = "hello!";

//------------------Insert Element----------

let newHeading = document.createElement("h1");
newHeading.innerHTML = "<b> Hi I am Bold - <i> Sethi Tech </i> </b>";
document.querySelector("body").append(newHeading);

//------------------Question Practice Set---

let newBtn = document.createElement("button");
newBtn.innerHTML = "click me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";
let output = document.querySelector("body");
output.prepend(newBtn);

//-------------------Question Practice-------



