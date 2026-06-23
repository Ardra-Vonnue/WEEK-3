// //if-else

function gradeToLetter1(score){
    if(score>90){
        result="A+"
    }else if(score>80){
        result="A"
    }
    else if(score>70){
        result="B+"
    }
    else if(score>60){
        result="B"
    }
    else if(score>50){
        result="C"
    }
    else if(score>40){
        result="D"
    }else{
        result="fail"
    }
    return result;
}
console.log("grade : "+gradeToLetter1(15))
console.log("grade : "+gradeToLetter1(45))
console.log("grade : "+gradeToLetter1(55))
console.log("grade : "+gradeToLetter1(65))
console.log("grade : "+gradeToLetter1(75))
console.log("grade : "+gradeToLetter1(85))
console.log("grade : "+gradeToLetter1(95))

//switch

function gradeToLetter2(score){
    var result;
    switch(true){
        case (score>90):
            result="A+";
            break;
        case (score>80):
            result="A";
            break;
        case (score>70):
            result="B";
            break;
        case (score>60):
            result="B+";
            break; 
        case (score>50):
            result="C";
            break;    
        case (score>40):
            result="D";
            break;     
        case(score<40):
            result="fail"
            break;
        default:
            return 'invalid score'     
    }
    return result
}
console.log("grade : "+gradeToLetter2(15))
console.log("grade : "+gradeToLetter2(45))
console.log("grade : "+gradeToLetter2(55))
console.log("grade : "+gradeToLetter2(65))
console.log("grade : "+gradeToLetter2(75))
console.log("grade : "+gradeToLetter2(85))
console.log("grade : "+gradeToLetter2(95))

//ternary chain

function gradeToLetter3(score){
    var score;
    score >= 90 ? result="A" 
    :score>80 ? result="A+" 
    :score>70 ? result="B"
    :score>60 ? result="B+"
    :score>50 ? result="C"
     :score>40 ? result="D"
    :result="fail";
    return result;
}
console.log("grade : "+gradeToLetter3(95))
console.log("grade : "+gradeToLetter3(15))
console.log("grade : "+gradeToLetter3(45))
console.log("grade : "+gradeToLetter3(55))
console.log("grade : "+gradeToLetter3(65))
console.log("grade : "+gradeToLetter3(75))
console.log("grade : "+gradeToLetter3(85))

//lookup object
console.time()
const grade={}
for(let i=0;i<40;i++){
    grade[i]="Fail"
}
for(let i=40;i<50;i++){
    grade[i]="D"
}
for(let i=50;i<60;i++){
    grade[i]="C"
}
for(let i=60;i<70;i++){
    grade[i]="B"
}
for(let i=70;i<80;i++){
    grade[i]="B+"
}
for(let i=80;i<90;i++){
    grade[i]="A"
}
for(let i=90;i<100;i++){
    grade[i]="A+"
}
function gradeToLetter4(score)
{
return grade[score]
}
console.log("grade : "+gradeToLetter4(95))
console.log("grade : "+gradeToLetter4(15))
console.log("grade : "+gradeToLetter4(45))
console.log("grade : "+gradeToLetter4(55))
console.log("grade : "+gradeToLetter4(65))
console.log("grade : "+gradeToLetter4(75))
console.log("grade : "+gradeToLetter4(85))
console.timeEnd()

console.time("if-else")
for(let i=0;i<1000000;i++){
   gradeToLetter1();
  
}
console.timeEnd("if-else")
console.time("switch")
for(let i=0;i<1000000;i++){
  
   gradeToLetter2();
  
}
console.timeEnd("switch")
console.time("ternary")
for(let i=0;i<1000000;i++){
   
   gradeToLetter3();
   
}
console.timeEnd("ternary")
console.time("lookup")
for(let i=0;i<1000000;i++){
   
   gradeToLetter4();
}
console.timeEnd("lookup")

//loops
function processQueue(items){
    console.log("while loop")
    while(items.length>0){
        console.log(items.shift());
    }
     console.log("do-while loop")
    let count=0;
    do{
        console.log("executed once");
        count=count+1;
    }while(count<1);
}
 console.log("for...of loop")
const details=new Map()
details.set("John",30)
details.set("Emily",20)
details.set("Snow",40)
details.set("Ally",27)
for(const[name,age] of details){
    console.log(name+":"+age)
}
let items=[1,2,3]
processQueue(items)

//short-circuit 
function validateUsers(user){
return user && user.name && user.email.includes("@") &&user.role==="admin";
}
let user={
    name:"Hanna",
    age:21,
    email:"hanna@yahoo.com",
    role:"admin"
};
if(validateUsers(user)){
    console.log("Validated")
}
else{
    console.log("Invalid credentials")
}
//Refactoring

let user={
    name:"Hanna",
    age:21,
    email:"hanna@yahoo.com",
    role:"admin"
};
function validate(user){
    if(!user){
        return "user invalid"
    }
    if(!user.email){
        return "empty email field"
    }
    if(!user.email.includes('@')){
        return "invalid email"
    }
    return "User identity validated"
}
console.log(validate(user))