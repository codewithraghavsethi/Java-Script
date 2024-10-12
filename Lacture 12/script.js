//----Synchronous----
console.log("one"); //--first line of code
console.log("two"); //--second line of code
console.log("three"); //--three line of code

//----Asynchronous----

//----Set Timeout ----

function hello() {
  console.log("Hello! Raghav Sethi");
}
setTimeout(hello, 2000);

//----Set Timeout----

console.log("1");
console.log("2");
console.log("3");

function hi() {
  console.log("Hello! Sethi Sahab");
}
setTimeout(hi, 4000);

console.log("4");
console.log("5");
console.log("6");

//----Callback Function----

function sum(a, b) {
  console.log(a + b);
}

function calculator(a, b, sum) {
  sum(a, b);
}

calculator(1, 2, sum);

//----Nesting----
let age = 17;

if (age >= 18) {
  if (age >= 60) {
    console.log("Sinnor");
  } else {
    console.log("Middle");
  }
} else {
  console.log("child");
}

//----Nested Loop----

for (let i = 0; i < 5; i++) {
  let str = "";
  for (let k = 0; k < 5; k++) {
    str = str + k;
  }
  console.log(i, str);
}

//----Get Data----

function getdata(dataId) {
  console.log("Data = ", dataId);
}

getdata(1331);

//----Timeout Function----
function getData(dataId) {
  setTimeout(() => {
    console.log("Data After 2 Second = ", dataId);
  }, 4000);
}

getData(123456);

//----Find the data----
function get(data1, data2, data3) {
  setTimeout(() => {
    console.log("Data = ", data1);
    if (data2) {
      data2();
    }
    if (data3) {
      data3();
    }
  }, 2000);
}
//----This is good method to call the function with the callback nested----
get(10, () => {
  get(20, () => {
    get(30);
  });
});

//----This is not good methode----
// get(123, 10, 12);
// get(10, get(20 , get(30)));

//----call back hell----

function find(data, nextData) {
  setTimeout(() => {
    console.log("data = ", data);
    if (nextData) {
      nextData();
    }
  }, 2000);
}

find(1, () => {
  find(2, () => {
    find(3, () => {
      find(4, () => {
        find(5, () => {
          find(6, () => {
            find(7, () => {
              find(8, () => {
                find(9, () => {
                  find(10);
                });
              });
            });
          });
        });
      });
    });
  });
});

//----callback hell----
//----This Nested Formate----
//----Paramide Structure----

function findData(data, data2) {
  setTimeout(() => {
    console.log("Find Data =", data);
    if (data2) {
      data2();
    }
  }, 1000);
}

findData(100, () => {
  console.log("Find Data ...................200");
  findData(200, () => {
    console.log("Find Data ...................300");
    findData(300, () => {
      console.log("Find Data ...................400");
      findData(400, () => {
        console.log("Find Data ...................500");
        findData(500, () => {
          console.log("Find Data ...................600");
          findData(600, () => {
            console.log("Find Data ...................700");
            findData(700, () => {
              console.log("Find Data ...................800");
              findData(800, () => {
                console.log("Find Data ...................900");
                findData(900, () => {
                  console.log("Find Data ...................1000");
                  findData(1000);
                });
              });
            });
          });
        });
      });
    });
  });
});

//----Promises----

// let promise = new Promise ((resolve, reject) =>{
// console.log("I am a promise");

// });