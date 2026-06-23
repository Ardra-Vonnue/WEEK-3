//Bubbling & Capturing
const first = document.getElementById("div1");
const second = document.getElementById("div2");
const third = document.getElementById("div3");
        
first.addEventListener("click", (e) => {
console.log("first capturing");
}, { capture: true });
second.addEventListener("click", (e) => {
  
console.log("second capturing");
}, { capture: true });
third.addEventListener("click", (e) => {
console.log("third capturing");
}, { capture: true });

first.addEventListener("click", (e) => {
console.log("first bubbling");
}, { capture: false });
second.addEventListener("click", (e) => {
console.log("second bubbling");
}, { capture: false });
third.addEventListener("click", (e) => {
console.log("third bubbling");
}, { capture: false });


//stopPropagation
const first = document.getElementById("div1");
const second = document.getElementById("div2");
const third = document.getElementById("div3");
        
first.addEventListener("click", (e) => {
console.log("first capturing");
}, { capture: true });
second.addEventListener("click", (e) => {
  
console.log("second capturing");
}, { capture: true });
third.addEventListener("click", (e) => {
      e.stopPropagation()
console.log("third capturing");
}, { capture: true });

first.addEventListener("click", (e) => {
console.log("first bubbling");
}, { capture: false });
second.addEventListener("click", (e) => {
console.log("second bubbling");
}, { capture: false });
third.addEventListener("click", (e) => {
console.log("third bubbling");
}, { capture: false });

//stopImmediatePropagation

const first = document.getElementById("div1");
const second = document.getElementById("div2");
const third = document.getElementById("div3");
        
first.addEventListener("click", (e) => {
console.log("first");
 e.stopImmediatePropagation()
});
first.addEventListener("click", (e) => {
  
console.log("second stopped");
});
second.addEventListener("click", () => {
console.log("ignored");
});

 //preventDefault()
const submitButton=document.querySelector('.button')
submitButton.addEventListener('click',buttonClick);
function buttonClick(event){
    console.log("action won't work")
    event.preventDefault();
}

const anchor=document.querySelector('a')
anchor.addEventListener('click',anchorClick);
function anchorClick(event){
    console.log("action won't work")
    event.preventDefault();
}


        
        
