// const data=[1,2,3,4];
// const square=function(data){
//     return data*data;
// }
// const half=function(data){
//     return data/2;
// }
// const add2= function(data){
//     return data+2;
// }
// const double=function(data){
//     return data*2;
// }
// const sub1=function(data){
//     return data-1;
// }


// const hof=function(data,logic1){
//     let output=[]
//     for(let i=0;i<data.length;i++){
//         output.push(logic1(data[i]));
//     }
//     return output;
// }
// console.log(hof(data,add2));
// console.log(hof(data,double));
// console.log(hof(data,half));
// console.log(hof(data,sub1));
// console.log(hof(data,square));

//5 fxn hof

// const data=[1,2,3,4];
// const square=function(data){
//     return data*data;
// }
// const half=function(data){
//     return data/2;
// }
// const add2= function(data){
//     return data+2;
// }
// const double=function(data){
//     return data*2;
// }
// const sub1=function(data){
//     return data-1;
// }


// const hof=function(data,logic1,logic2,logic3,logic4,logic5){
//     let output=[]
//     for(let i=0;i<data.length;i++){
//         output.push(logic5(logic4(logic3(logic2(logic1(data[i]))))));
//     }
//     return output;
// }
// console.log(hof(data,square,half,double,add2,sub1));

//3 fxn hof

// const data=[1,2,3,4];
// const square=function(data){
//     return data*data;
// }
// const half=function(data){
//     return data/2;
// }

// const add2= function(data){
//     return data+2;
// }

// const hof=function(data,logic1,logic2,logic3){
//     let output=[]
//     for(let i=0;i<data.length;i++){
//         output.push(logic3(logic2(logic1(data[i]))));
//     }
//     return output;
// }
// console.log(hof(data,square,half,add2));
// new hof 