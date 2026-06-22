//function declaration//
function greet(name,greeting="hello"){
   console.log(greeting+" "+name);
}
greet("Ally");

//function-expression//
const greet=function (name,greeting="hello"){
    console.log(greeting+" "+name);
}
greet("John")

//Arrow-functions//
const greet=(name,greeting="hello") => console.log(greeting+" "+name);
greet("Jane");

//object method//
const greetings={
    name:"jane",
    greeting:"hello",
    greet:function(){
        console.log(this.greeting+" "+this.name);
    }
};
greetings.greet("Jane");

//calculator object//
const calculator={
    a:10,
    b:5,
    add:function(){
        console.log(this.a+this.b);
    },
    subtract:function(){
        console.log(this.a-this.b);
    },
    multiply:function(){
        console.log(this.a*this.b);
    },
    divide:function(){
        if (this.b==0){
            console.log("error-division by zero")
            return
        }
        console.log(this.a/this.b);
    }
};
calculator.add();
calculator.subtract();
calculator.multiply();
calculator.divide();

// Factory functions //

function createMultiplier(factor){
    return function createMultiplier2(factor1){
            console.log(factor1*factor)
        
    };
}
createMultiplier(3)(7);

//argument objects
function sum(){
    let total=0;
    for(let i=0;i<arguments.length;i++){
        total=total+arguments[i];
    }
    return total;
};
console.log(sum(1,2,3));

//rest parameters
let argumentLength=function(...args){
    console.log(args.length) ;
}
argumentLength(1,2,3);

//arrow-functions
const arrowExample = () =>{
    console.log(arguments);
}
arrowExample(1,2,3)
//arrow functions don't have their own bindings to arguments//
const arrowExample = (...genres) =>{
    console.log(genres);
}
arrowExample(1,2,3)