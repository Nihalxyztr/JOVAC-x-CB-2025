// var s1 = "Nihal";
// console.log(s1);
// var s1 ="TRIPATHI";
// console.log(s1);

// let s2 = "Nihal";
// console.log(s2);
// let s2 = "Tripathi";
// console.log(s2);
//Notice this will give error

// s2 ="Tripathi";
// console.log(s2);
//but this won't give error

// const s3 ="Nihal";

// console.log(s3);

// const s3 = "Tripathi"

// console.log(s3);
//this will give eroor

// s3 = "Sonu";

// console.log(s3)
//this will also give error

// var s1 ="Nihal";

// let s1 = "Tripathi";

// console.log(s1);
// This will give error because we can't name two datatype to a single variable


// var a1 = 100;

// console.log(a1);

// function Sum1(num1,num2){
//     let ans = num1+num2;
//     return ans;
// }

// let s2 = Sum1(2,3);
// console.log(s2);

// console.log(a1);

// var a2 = 20;
// console.log(a2);

// console.log(a1);

// var a1 = 20;

// console.log(a1);

// console.log(a2);




// console.log(x);

// getName();

// let a2 = 30;

// console.log(a2);

// var x =10;

// function getName(){
//     console.log("HEllo"");
// };

// var glaStudent = () =>{
//     console.log("I am gla Student")
// }

// console.log(glaStudent);

// console.log(glaStudent());

// glaStudent();


// var xyz =20;

// xyz();



// function a(){
//     var x =10;
//     console.log(x);
//     console.log(y);
//     var y =3000;
//     b();
//     function b(){
//         var y =20;
//         console.log(y);
//         c();
//         function c(){
//             var z =30;
//             console.log(z);
//             console.log(y);
//             console.log(x);
//         }
//     }
// }

// a();

// let a2 = 30;

// console.log(a2);

// var a =10;

// function aGetName(){
//     console.log("HELO");
// };

// var aGlaStudent = () =>{
//     console.log("I AM GLA STUDENT")
// }

// aGetName();

// aGlaStudent();


// var a = 20;

// console.log(a);

// function aCall(){
//     var aa =10;
//     var bb = 20;
//     console.log("Answer: ",aa+bb);
// }

// aCall();

// var a = 4000;

// {
//     var a =100;
//     var b =200;
//     var c =300;
// }

// console.log(a);
// console.log(b);
// console.log(c);


// Closure

//c1

// function a(){
//     var x =8;
//     var y =6;
//     function b(){
//         var y =77;
//         console.log(y);
//     }
//     y =10;
//     b();

// }
// a();


// function x(){
//     var a =7;
//     function y(){
//         console.log(a);
//     }
//     a =100;
//     return y;
// }

// var z =x();
// console.log(z);

// z();


//c3

// function z(){
//     var b =900;

//     function x(){
//         var a = 7;

//         function y(){
//             console.log(a,b);
//         }
//         y();
//     }
//     x();
// }
// z();


//delay

// setTimeout(()=>{
//     console.log("6 sec delay");
// },6000);




// setInterval(()=>{
//     console.log("ATfter 2 sec");
// },2000)





// for (var i = 0; i <= 4; i++) {
//     function closuress(i) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000)
//     }
//     closuress(i);
// }



// console.log("HI");

// setTimeout(()=>{
//     console.log("I am Stout");
// },2000);

// function x(y){
//     console.log("I am X");
//     y()
// }

// x(function (){
//     console.log("I AM Y: ANONYMOUS")
// });

// console.log("BYE");


//EVENT LISTENERS

// document.getElementById("functionCall").addEventListener("click",function abc(){
//     console.log("Event hogyaaa!!")
// })