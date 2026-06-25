//scope of var, let, and const//
if(true){
         var x=10;
     }
 console.log(x)
 if(true){
     let y=10;
 }
 console.log(y)
 if(true){
     const z=20;
 }
 console.log(z)
//Re-declaring variables with var and const//
var x=10;
var x=20;
console.log(x)
const y=10;
const y=20;
console.log(y)
//updating variables with var and const//
var y=10;
y=20;
console.log(y);
const z=10;
z=20;
console.log(z);
//hoisting behaviour of var and let//
console.log(x);
var x=10;
console.log(x);
console.log(x);
let x=10;
console.log(x);
//var and let with for loop//
for(var i=0;i<3;i++){
    console.log(i)
}
console.log(i)
for(let i=0;i<3;i++){
    console.log(i)
}
console.log(i)
//temporal dead zone// 
console.log(a)//throws ReferenceError
let a=10 
console.log(a)//undefined
var a=10
//nested functions //
function One(){
    var x=10;
    function Two(){
        let y=20;
        function Three(){
            const z=30;
            console.log(z);
            console.log(y);
            console.log(x);
        }
        Three();
    }
    Two();
}
One();
//var-in-loop closure bug//
for(var i=0;i<4;i++){
    setTimeout(() => {console.log(i);},1000);
}
//fix with let//
for(let i=0;i<4;i++){
    setTimeout(() => {console.log(i);},1000);
}