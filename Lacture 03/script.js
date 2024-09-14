// Examples
for(var i=0;i<=10;i++){
    console.log(i);
  }
  
  for(var i=1; i<=100; i++){
    console.log(i);
  }
  
  for(let num = 1; num<=100; num++){
    if(num%2==0){
      console.log("num is even = ", num)
    }
  }
  
  for (let num = 1; num<=100; num++){
    if(num%2!==0){
      console.log("num is odd = ", num)
    }
  }
  
  // Question Number 2
  let student={
    name: 'Raghav Sethi',
    age: 20,
   gendar:'male',
    hobbies:'Heating the Gym, Voracious Reader, Coding',
  }
  for ( let i in student){
    console.log("Key= ", i, "Value= ", student[i]);
  }
  
  // String 
  let store = {
    Product : 'Pen',
    Price : 20,
    Quantity : 10
  }
  console.log("This is a", store.Product, "and it costs", store.Price,"rupees", "and there are", store.Quantity,"pic", "in stock");
  
  let output = `This is ${store.Product} and it costs ${store.Price} rupees and there are ${store.Quantity} pic in stock please buy and use this pen. The pen is made in India. SKILL INDIA Thank you! Please come again!`;
  console.log(output);
  
  // Example of String
  let str = "Raghav Sethi\nSethi Tech";
  console.log(str);
  console.log(str.length);
  
  let a1 = "Sethi Tech";
  console.log(a1);
  
  let newa1 = a1.toUpperCase();
  console.log(newa1);
  let newa2 = a1.toLowerCase();
  console.log(newa2);
  
  let a2 = "    Raghav    Sethi           OK!      ";
  console.log(a2);
  
  let newa3 = a2.trim();
  console.log(newa3);
  
  let str1 = "Sethi";
  let str2 = "Tech";
  
  let newstr = str1.concat(str2);
  console.log(newstr);
  
  let str3 = "Hello World" + 1331 + "OK!" + newstr;
  console.log(str3);
  
  let rep = "Pillo";
  let newrap = rep.replace("Pi", "Kha");
  console.log(newrap);
  console.log(rep);
  
  let name1 = "RaghavSethi";
  console.log(name1);
  
  let userName = name1.toLowerCase();
  console.log(userName);
  
  let userName2 = "@"+userName+name1.length;
  console.log(userName2);
  
  
  
  
  