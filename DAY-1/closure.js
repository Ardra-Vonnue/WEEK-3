//closure//
const createCounter=(function() {
    let count=0;
    function change(value){
        count=count+value;
    }
    return{
        increment(){
            change(1);
        },
        decrement(){
            change(-1);
        },
        getCount(){
            return count;
        },
        reset(){
            count=0;
        }
    };
})();
console.log(createCounter.getCount());
createCounter.increment();
createCounter.increment();
createCounter.increment();
createCounter.decrement();
console.log(createCounter.getCount());
createCounter.reset();
console.log(createCounter.getCount());

//memoize(fn) using map as cache//
const memoize= function(fn){
    const cache=new Map();
    return function(...args){
        let key=args.join(",")
        if(cache.get(key)){
            return cache.get(key)
        }
        const res=fn.apply(this,args);
        cache.set(key,res)
        return cache.get(key);
    }
}

const fibonacci=function(x){
    if(x<2){
        return x;

    }
    else{
        return fibonacci(x-1)+fibonacci(x-2);
    }
};
const newFibonacci=memoize(fibonacci)
console.log(newFibonacci(45))
console.log(newFibonacci(40))

//once(fn)//
function once(fn){
    let call=false;
    let res;
    return function(...args){
        if(!call){
            call=true;
            result=fn.apply(this,args)
        }
    return result;
    }
}
const fibonacci=function(x){
    if(x<2){
        return x;

    }
    else{
        return fibonacci(x-1)+fibonacci(x-2);
    }
};
const newFibonacci=once(fibonacci)
console.log(newFibonacci(12));
console.log(newFibonacci(10));

//Rate-Limiter

const fibonacci=function(x){
    if(x<2){
        return x;

    }
    else{
        return fibonacci(x-1)+fibonacci(x-2);
    }
};
function createRateLimiter(fn, maxCalls, windowMs){
       let call1=[];
    return function(...args){
        let now=Date.now();
     
         call1=call1.filter(time=>now - time <windowMs);
        if(call1.length>=maxCalls){
            throw new Error("Maximum no.of calls reached")
        }
        call1.push(now);

        return fn(...args)
    }
}
const limiter=createRateLimiter(fibonacci,3,1000);
console.log(limiter(3));
console.log(limiter(4));
console.log(limiter(5));
console.log(limiter(10));