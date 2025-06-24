
// const cart =["buds", "phone, "pants", "juice", "shirt", "inner"]

// //CALLBACK
// createOrder(cart, function(orderId){
//     proceedToPayment(orderId, function (paymentInfo){
//         showOrderSummary(paymentInfo, function (){
//             updateWallet();
//         });
//     });
// });
// createOrder(cart)
//     .then(function (orderId){
//         return proceedToPayment(orderId);
//     })
//     .then(function (paymentInfo){
//         return showOrderSummary(paymentInfo);
//     })
//     .then(function(paymentInfo){
//         return updateWalletBalance(paymentInfo);
//     })


// function createOrder(cart){
//     let orderId = "1"
//     console.log(orderId);
//     console.log(cart);
// }

// const promise = createOrder(cart);


// console.log(promise);

// promise.then(function (orderId){
//     console.log(orderId);
// }).catch(function (err){
//     console.log(err.message);
// })

// const myPromise = new Promise((resolve, reject) => {
//     resolve("Promise Resolved")
// //   setTimeout(() => {
// //     resolve("Promise Resolved");
// //   }, 3000);
// });

// console.log(myPromise);

// const myPromise2 = new Promise((resolve, reject) => {
//     // resolve("Promise Resolved")
//   setTimeout(() => {
//     resolve("Promise Rejected");
//   }, 3000);
// });

// // console.log(myPromise2);
// myPromise2.then(function (){
//     console.log("THEN ACTIVATED")
// }).then(function (){
//     console.log("ONE MORE THEN 1")
// }).then(function (){
//     console.log("ONE MORE THEN 2")
// }).then(function (){
//     console.log("ONE MORE THEN 3")
// }).then(function (){
//     console.log("ONE MORE THEN 4")
// })
// .catch(function (err){
//     console.log(err);
// });

//Promise Apis:

// Promise.all() 


// const p1 = new Promise(function (resolve,reject){
//     setTimeout(()=>{
//         reject("P1 reject");
//     },1000)
// });

// const p2 = new Promise(function (resolve,reject){
//     setTimeout(()=>{
//         reject("P2 reject");
//     },1000)
// });
// const p3 = new Promise(function (resolve,reject){
//     setTimeout(()=>{
//         resolve("P3 Resolve");
//     },3000)
// });

//all

// Promise.all([p1,p2,p3])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


//all setlle


// Promise.allSettled([p1,p2,p3])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


//race 

// Promise.race([p1,p2,p3])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })


//  any

// Promise.any([p1,p2,p3])
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })