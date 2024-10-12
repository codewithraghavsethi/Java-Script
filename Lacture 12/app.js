//----Promises----

let promise = new Promise((resolve, reject) => {
  console.log("I am a Promises");
  resolve(1331);
  // reject("Some Error");
});

//----Example----

function get(data1, data2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data Lao = ", data1);
      resolve("success");
      if (data2) {
        data2();
      }
    }, 5000);
  });
}

//----then & catch----

const getProm = () => {
  return new Promise((resolve, reject) => {
    console.log("I am Promise");
    resolve("Success");
    reject("Error");
  });
};

let promises = getProm();

promises.then((res) => {
  console.log("Promise Fullfield", res);
});

promises.catch((err) => {
  console.log("Rejected", err);
});

//----Promise Chain----

function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data1");
      resolve("success");
    }, 2000);
  });
}

function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data2");
      resolve("success");
    }, 2000);
  });
}

function asyncFunc3() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data3");
      resolve("success");
    }, 2000);
  });
}

console.log("facting data1......");
let p1 = asyncFunc1();
p1.then((res) => {
  console.log("facting data2......");
  let p2 = asyncFunc2();
  p2.then((res) => {
    let p3 = asyncFunc3();
    console.log("facting data3......");
    p3.then((res) => {

    });
  });
});

//----Example----

function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data", dataId);
      resolve("success");
    }, 2000);
  });
}

getData(1).then((res) => {
  return getData(2).then((res) => {
    return getData(3).then((res) => {
      return getData(4).then((res) => {
        console.log(res);
      });
    });
  });
});

//----Async Await----

async function hello(){
    console.log("Hello!");
};

//----Async Await----

function weatherApi(){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log("Weather Data Good Sunny Sunny");
            resolve(200);
        }, 2000);
    });
};

async function getWeatherApi(){
    await weatherApi();
    await weatherApi();
    await weatherApi();
    await weatherApi();
    await weatherApi();
};

//----Async Await-----

function get(data) {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      console.log("Data = ", data);
      resolve();
    }, 2000);
  });
};

async function getdata(){
  console.log("wait facting data 1...........")
  await get(1);
  console.log("wait facting data 2...........")
  await get(2);
  console.log("wait facting data 3...........")
  await get(3);
  console.log("wait facting data 4...........")
  await get(4);
  console.log("wait facting data 5...........")
  await get(5);
};

