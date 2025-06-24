// const people = [
//   { firstName: "Alice", lastName: "Johnson", age: 28, salary: 55000, workingDays: 22 },
//   { firstName: "Bob", lastName: "Smith", age: 34, salary: 63000, workingDays: 20 },
//   { firstName: "Charlie", lastName: "Brown", age: 22, salary: 48000, workingDays: 21 },
//   { firstName: "Diana", lastName: "Miller", age: 30, salary: 59000, workingDays: 22 },
//   { firstName: "Ethan", lastName: "Clark", age: 27, salary: 52000, workingDays: 23 },
//   { firstName: "Fiona", lastName: "Davis", age: 25, salary: 50000, workingDays: 20 },
//   { firstName: "George", lastName: "Wilson", age: 31, salary: 61000, workingDays: 22 },
//   { firstName: "Hannah", lastName: "Moore", age: 24, salary: 49000, workingDays: 21 },
//   { firstName: "Ian", lastName: "Taylor", age: 29, salary: 57000, workingDays: 22 },
//   { firstName: "Jasmine", lastName: "Anderson", age: 33, salary: 62000, workingDays: 20 },
//   { firstName: "Kevin", lastName: "Thomas", age: 26, salary: 51000, workingDays: 21 },
//   { firstName: "Luna", lastName: "Jackson", age: 21, salary: 47000, workingDays: 23 },
//   { firstName: "Michael", lastName: "White", age: 35, salary: 65000, workingDays: 22 },
//   { firstName: "Nora", lastName: "Harris", age: 23, salary: 48000, workingDays: 20 },
//   { firstName: "Owen", lastName: "Martin", age: 32, salary: 60000, workingDays: 22 },
//   { firstName: "Paula", lastName: "Thompson", age: 29, salary: 56000, workingDays: 21 },
//   { firstName: "Quentin", lastName: "Garcia", age: 36, salary: 67000, workingDays: 20 },
//   { firstName: "Rachel", lastName: "Martinez", age: 28, salary: 55000, workingDays: 22 },
//   { firstName: "Samuel", lastName: "Robinson", age: 30, salary: 59000, workingDays: 21 },
//   { firstName: "Tina", lastName: "Lee", age: 27, salary: 52000, workingDays: 23 }
// ];

// //map

// const firstNames = people.map(person => person.firstName);
// console.log(firstNames);

// const firstNameAndSalary = people.map(person => ({
//   firstName: person.firstName,
//   salary: person.salary
// }));

// console.log(firstNameAndSalary);

// //filter

// //data of people over age 24 and more than 40k

// const adultswithmoney = people.filter(person => person.age > 24 && person.salary > 40000);

// console.log(adultswithmoney);


// const consistentEmployees = people.filter(p => p.workingDays > 15).map(p => p.firstName);
// console.log(consistentEmployees);


// //reduce

// const totalAge = people.reduce((acc, person) => acc + person.age, 0);
// const averageAge = totalAge / people.length;
// console.log(averageAge);

// const totalSalary = people.reduce((acc, person) => acc + person.salary, 0);
// console.log(totalSalary);



//Callback Ecomerce

// function addToCart(product, callback) {
//   console.log(product + " added to cart.");
//   callback(product);
// }
// function generateBill(product, callback) {
//   let price = 1500;
//   console.log("Bill generated for " + product + "ruppes" + price);
//   callback(product, price);
// }
// function placeOrder(product, price, callback) {
//   console.log("Order placed for " + product + " ruppes" + price);
//   callback(product);
// }
// function sendNotification(product, callback) {
//   console.log("Notification sent for " + product);
//   callback(product);
// }
// function confirmOrder(product, callback) {
//   console.log("Order confirmed for " + product);
//   callback(product);
// }
// function deliveryStatus(product) {
//   console.log("Waiting for delivery status...");
//   setTimeout(() => {
//     console.log(product + " is out for delivery. Will arrive soon!");
//   }, 3000);
// }
// addToCart("Buds", function (product) {
//   generateBill(product, function (product, price) {
//     placeOrder(product, price, function (product) {
//       sendNotification(product, function (product) {
//         confirmOrder(product, function (product) {
//             deliveryStatus(product);
//           });
//         });
//       });
//     });
//   });

//Promises

// function addToCart(product) {
//   return new Promise(function(resolve) {
//     console.log(product + " added to cart.");
//     resolve(product);
//   });
// }
// function generateBill(product) {
//   return new Promise(function(resolve) {
//     var price = 1500;
//     console.log("Bill generated for " + product + ": " + price);
//     resolve({ product: product, price: price });
//   });
// }
// function placeOrder(product, price) {
//   return new Promise(function(resolve) {
//     console.log("Order placed for " + product + " :" + price);
//     resolve(product);
//   });
// }
// function sendNotification(product) {
//   return new Promise(function (resolve) {
//     console.log("Notification sent for " + product);
//     resolve(product);
//   });
// }
// function confirmOrder(product) {
//   return new Promise(function(resolve) {
//     console.log("Order confirmed for " + product);
//     resolve(product);
//   });
// }
// function deliveryStatus(product) {
//   return new Promise(function(resolve) {
//     console.log("Waiting for delivery status.");
//     setTimeout(function() {
//       console.log(product + " is out for delivery. Will arrive soon!");
//       resolve();
//     }, 3000);
//   });
// }
// addToCart("earbuds")
//   .then(generateBill)
//   .then(placeOrder)
//   .then(sendNotification)
//   .then(confirmOrder)
//   .then(deliveryStatus)
//   .catch(function (error) {
//     console.log("Error: " + error);
//   });





