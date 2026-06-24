//validation-error
class createValidationError extends Error{
    constructor(message,statusCode,fieldName){
        super(message);
        this.statusCode=statusCode;
        this.fieldName=fieldName;
        
    }
}
try{
    throw new createValidationError(
        "Email required",
         400 ,
        "email"
    )
}
catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.fieldName);
    console.log(error.statusCode);
}

//throw different errors

class ValidationError extends Error{
    constructor(message,statusCode,fieldName){
        super(message);
        this.statusCode=statusCode;
        this.fieldName=fieldName;
        
    }
}
function parseUserInput(input){
    if(typeof input!=='object'){
        throw new TypeError("Input is not an object")
    }
    if(!input.email){
        throw new ValidationError(
            "Email required",
            "email",
            400
        )
    }
    if(input.age<=18){
        throw new RangeError("age is less than 18")
    }
}
try{
    parseUserInput({
        age:15,
        email:"hanna@yahoo.com"
    })
}
catch(error){
   if(error instanceof TypeError){
    console.log("Type error:"+error.message)
   }
   else if(error instanceof ValidationError){
    console.log("Validation error:"+error.message)
   }
   else if(error instanceof RangeError){
    console.log("Range error:"+error.message)
   }
   else{
    console.log("invalid")
   }
}

//window.onerror

window.onerror=function(message,source,lineno,colno,error){
   console.log("message:"+message)
    console.log("source:"+source)
     console.log("lineno:"+lineno)
      console.log("colno:"+colno)
       console.log("error:"+error)
       showError(message);
}
const buttonError=document.querySelector('#errorButton')
buttonError.addEventListener("click", () => {
  throw new Error("This is an error");
});
function showError(message){
    const errorBox=document.querySelector('#overlay')
    errorBox.innerText=message;
}
function promiseError(){
    Promise.reject("this is an error")
   
}

window.addEventListener("unhandledrejection", (event) => {
  console.log("unhandled rejection at :"+event.reason);
   const errorBox=document.querySelector('#overlay')
    errorBox.innerText=event.reason;
});
