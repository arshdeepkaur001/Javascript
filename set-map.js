// use of map, set and spread(...) operator

var JsonAry=[
    {name:"Arsh",branch:"CSE",per:"90"},
    {name:"Aman",branch:"CSE",per:"91"},
    {name:"Suman",branch:"ECE",per:"80"},
    {name:"Simran",branch:"IT",per:"88"},
    {name:"Harsh",branch:"Mechanical",per:"80"},
    {name:"Puneet",branch:"Civil",per:"98"},
    {name:"Harman",branch:"IT",per:"95"},
]

// map will get you all the branches in JsonAry

const branches= JsonAry.map((obj)=>obj.branch)

console.log(branches)

//OUTPUT-

// [ 'CSE', 'CSE', 'ECE', 'IT', 'Mechanical', 'Civil', 'IT' ]

// but I want that if any branch is repeating it should be shown only once so, I will use set for this

const uniquebranches= new Set(JsonAry.map((obj)=>obj.branch))

console.log(uniquebranches)

//OUTPUT-

// Set(5) { 'CSE', 'ECE', 'IT', 'Mechanical', 'Civil' }

// but this is not the desired output as it does not returns the branches in form of array so, here I will use spread operator

const uniquebranchesAry= [...uniquebranches]

console.log(uniquebranchesAry)

//OUTPUT

// [ 'CSE', 'ECE', 'IT', 'Mechanical', 'Civil' ] 

//the desired output is obtained