// const grandparent = document.getElementById('grandparent');
// const parent =  document.getElementById('parent');
// const child = document.getElementById("child");
// grandparent.addEventListener('click',()=>{
//     console.log("GRANDPARENT DIV CLICKED");
// },true);

// parent.addEventListener("click",()=>{
//     console.log("PARENT DIV CLICKED");
// },true)

// child.addEventListener("click",()=>{
//     console.log("CHILD DIV IS CLICKED")
// },true);

//event bubbling

// const grandparent = document.getElementById('grandparent');
// const parent =  document.getElementById('parent');
// const child = document.getElementById("child");
// grandparent.addEventListener('click',()=>{
//     console.log("GRANDPARENT DIV CLICKED");
// },false);

// parent.addEventListener("click",()=>{
//     console.log("PARENT DIV CLICKED");
// },false)

// child.addEventListener("click",()=>{
//     console.log("CHILD DIV IS CLICKED")
// },false);

//mixing capturing and bubbling

// const grandparent = document.getElementById('grandparent');
// const parent =  document.getElementById('parent');
// const child = document.getElementById("child");
// grandparent.addEventListener('click',()=>{
//     console.log("GRANDPARENT DIV CLICKED");
// },true);

// parent.addEventListener("click",()=>{
//     console.log("PARENT DIV CLICKED");
// },false)

// child.addEventListener("click",()=>{
//     console.log("CHILD DIV IS CLICKED")
// },true);

// const grandparent = document.getElementById('grandparent');
// const parent =  document.getElementById('parent');
// const child = document.getElementById("child");
// grandparent.addEventListener('click',()=>{
//     console.log("GRANDPARENT DIV CLICKED");
// },false);

// parent.addEventListener("click",()=>{
//     console.log("PARENT DIV CLICKED");
// },true);

// child.addEventListener("click",()=>{
//     console.log("CHILD DIV IS CLICKED")
// },true);

const grandparent = document.getElementById('grandparent');
const parent = document.getElementById('parent');
const child = document.getElementById('child');

grandparent.addEventListener('click', function(st) {
    st.stopPropagation();
    console.log("GRANDPARENT");
}, false);

parent.addEventListener('click', function(st) {
    st.stopPropagation();
    console.log("PARENT");
}, false);

child.addEventListener('click', function(st) {
    st.stopPropagation();
    console.log("CHILD");
}, false);



