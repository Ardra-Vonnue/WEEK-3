//Default Binding
"use strict";
function binding1() {
  console.log(this);
}
binding1();

//implicit binding
const details = {
  name: "Hanna",
  greet: function () {
    console.log("Hi Myself " + this.name);
  },
};
details.greet();

//explicit binding (with call())
function greet() {
  console.log("Hello My name is" + this.name);
}
const person1 = { name: "Harry" };
const person2 = { name: "Emily" };
greet.call(person1);
greet.call(person2);

//new
function cartoon(name) {
  this.name = name;

  console.log("I am " + this.name);
}
let tom = new cartoon("Tom");
let jerry = new cartoon("Jerry");

"use strict";
class Person {
   constructor(name){
     this.name=name
   }
   greet(){
     console.log(this.name)
   }
 }
 const p=new Person("Anna");
 const fn=p.greet;
 fn();

//fix using bind
const fn=p.greet.bind(p);
fn();

//fix using arrow functions
class Person{
  constructor(name){
    this.name=name;
    this.great = () =>{
      console.log(this.name)
    }
  }
}
const p=new Person("Anna");
const fn = p.greet;
fn()
//class-field pending
class Person{
  name="Anna"
  greet = () =>{
    console.log(this.name)
  }
}
const p = new Person();
const fn=p.greet;
fn();

//bindAll()
function bindAll(obj){
for(const key in obj){
    if(typeof(obj[key]) === "function"){
        obj[key]=obj[key].bind(obj)
    }
}
}
const Person={
    name:"Anna",
    greet(){
        console.log("Hello"+this.name)
    },
    bye(){
        console.log("Bye"+this.name)
    }
}
bindAll(Person)
const greetFn=Person.greet;
const byeFn=Person.bye;
greetFn();
byeFn();

//arrow class fields
class Person{
    name ="Anna";
    greet = () =>{
        setTimeout(() => {
            console.log("Hello"+this.name)},1000);
        }
    }
const person=new Person();
person.greet()


