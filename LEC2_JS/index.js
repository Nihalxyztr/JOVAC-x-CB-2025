// function serveWater(callback){
//     console.log("Serve Water");
//     setTimeout(callback,1000);
// }

// function serveSoup(callback){
//     console.log("Serve soup");
//     setTimeout(callback,1000);
// }

// function serveStarters(callback){
//     console.log("Serve Starter");
//     setTimeout(callback,1000);
// }

// function serveDrinks(callback){
//     console.log("serve Drink");
//     setTimeout(callback,1000);
// }

// function serveDinner(callback){
//     console.log("Dinner");
//     setTimeout(callback,1000);
// }

// function payBill(){
//     console.log("PAY BILL");
// }

// console.log("new day");

// serveWater(()=>{
//     serveSoup(()=>{
//         serveStarters(()=>{
//             serveDrinks(()=>{
//                 serveDinner(()=>{
//                     payBill();
//                 })
//             })
//         })
//     })
// })

// console.log("day over");
// console.log("Program Start");

// setTimeout(()=>{
//     console.log("i am set timeout");
// },2000);

// fetch("https://dummyjson.com/products").then(function productDet(){
//     console.log("DATA : SOMETHING");
// });


// fetch("https://dummyjson.com/products").then(function productDet(){
//     console.log("DATA : SOMETHING");
// });


// fetch("https://dummyjson.com/products").then(function productDet(){
//     console.log("DATA : SOMETHING");
// });

// fetch("https://dummyjson.com/products").then(function productDet(){
//     console.log("DATA : SOMETHING");
// });

// fetch("https://dummyjson.com/products").then(function productDet(){
//     console.log("DATA : SOMETHING");
// });

// fetch("https://dummyjson.com/products").then(function productDet(){
//     console.log("DATA : SOMETHING");
// });

// fetch("https://dummyjson.com/products").then(function productDet(){
//     console.log("DATA : SOMETHING");
// });

// console.log("Program End");


// // Hof

// const arr1 = [2,5,3,6]

// const arr2 = [5,7,43,7]

// const double = function (x){
//     let output = [];
//     for (let i=0; i<x.length;i++){
//         output.push(x[i]*x[i]);
//     }
//     return output;
// }

// console.log(double(arr1));
// // console.log(double(arr2));


// const half = function (data){
//     let output =[]
//     for (let i = 0; i<data.length;i++){
//         output.push(data[i]/2);
//     }
//     return output;
// }

// console.log(half(arr1));
// console.log(half(arr2));

// const doubleData = function (data){
//     return data*data;
// }

// const calculate = function (data, logic){
//     let output = [];
//     for (let i =0;i<data.length;i++){
//         output.push(logic(data[i]));
//     }
//     return output;

// }

// const data1 = [8,4,2,6,1]

// console.log(calculate(data1,doubleData));


// MAP :

// const arr = [5,1,4,6];

//Double = [10,2,8,12]

//Triple = [15,3,12,18]


// function double(x){
//     return x*2
// }

// function triple(x){
//     return x*3
// }

// const output = arr.map(double);

// console.log(output);

// const output1 = arr.map(triple);

// console.log(output1);

// function double(x){
//     return x*2
// }


// Array.prototype.calculate = function (logic){
//     let output = []
//     for (let i =0; i<this.length;i++){
//         output.push(logic(this[i]));
//     }
//     return output;
// } 

// const arr1 = [1,2,3,4]
// const arr2 = [4,3,2,1]
// const output1 = arr1.calculate(double);
// console.log(output1);

// const output2 = arr2.calculate(double);
// console.log(output2);



// const arr =[2,3,4,5,6,7,8]

// function Odd(x){
//     return x%2
// }

// const ans = arr.filter(Odd);

// console.log(ans);