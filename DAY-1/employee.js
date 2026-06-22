let employees=[
    {
    name:"jon",
    dept:"Engineering",
    salary:75000,
    yearsExp:2
    },
    {
    name:"jon",
    dept:"Business",
    salary:45000,
    yearsExp:3
    },
    {
    name:"jon",
    dept:"Engineering",
    salary:76000,
    yearsExp:4
    },
    {
    name:"jon",
    dept:"Engineering",
    salary:77000,
    yearsExp:5
    },
    {
    name:"jon",
    dept:"medicine",
    salary:15000,
    yearsExp:4
    },
    {
    name:"jon",
    dept:"Engineering",
    salary:30000,
    yearsExp:3
    },
    {
    name:"jon",
    dept:"business",
    salary:80000,
    yearsExp:5
    },
    {
    name:"jon",
    dept:"Engineering",
    salary:78000,
    yearsExp:6
    },
    {
    name:"jon",
    dept:"Engineering",
    salary:25000,
    yearsExp:1
    },
    {
    name:"jon",
    dept:"medicine",
    salary:45000,
    yearsExp:3
    },
    {
    name:"jon",
    dept:"business",
    salary:80000,
    yearsExp:5
    },
    {
    name:"jon",
    dept:"Engineering",
    salary:82000,
    yearsExp:7
    },
    {
    name:"jon",
    dept:"Engineering",
    salary:85000,
    yearsExp:5
    },
    {
    name:"jon",
    dept:"business",
    salary:89000,
    yearsExp:6
    },
    {
    name:"jon",
    dept:"medicine",
    salary:36000,
    yearsExp:3
    },
    {
    name:"jon",
    dept:"Engineering",
    salary:60000,
    yearsExp:4
    },
    {
    name:"jon",
    dept:"Engineering",
    salary:23000,
    yearsExp:1
    },
    {
    name:"jon",
    dept:"Engineering",
    salary:98000,
    yearsExp:8
    },
    {
    name:"jon",
    dept:"business",
    salary:29000,
    yearsExp:2
    },
    {
    name:"jon",
    dept:"Engineering",
    salary:46000,
    yearsExp:5
    }
]
const result=employees.filter((employee)=>{
    return(employee.dept=="Engineering" && employee.salary>70000)
}).map(emp=>({
    name:emp.name,
    salary:emp.salary
})).sort((a,b)=>b.salary-a.salary);
console.log(result);

//deconstruct a nested config object//
const person={
    id:12,
    firstName:"Jane",
    lastname:"Doe",
    department:{
        branch:"CSE",
        subject:"AI"
    }
};
const {id,firstname,lastname,department:{branch:dept_branch,subject:dept_subject}}=person;
console.log(dept_branch);
console.log(dept_subject);

//merge two object with spread//

const object1={firstname:"Jane",lastname:"Doe",age:30}
const object2={department:"CSE",id:10}
const result={...object1,...object2}
console.log(Object.entries(result))
console.log(Object.keys(result))
console.log(Object.values(result))

//clone a flat object 

function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') 
    return obj;
  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  const clonedObj = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      clonedObj[key] = deepClone(obj[key]);
    }
  }
  return clonedObj;
}
const original = { a: 1, b: { c: 2 } };
const cloned = deepClone(original);

cloned.b.c=10;
console.log(cloned); 
console.log(original)






