// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Try programiz.pro");
let a = [
    {
        "name": "Ashutosh",
        "age": 20
    },
    {
        "name": "Gaurav",
        "age": 21
    },
    {
        "name": "Rohit",
        "age": 22
    },
    {
        "name": "Ashu",
        "age": 28
    }
];


// 1
max = 0; 
const result = a.filter(checkAdult);

function checkAdult(person) {
    curr = person["age"]
    if (curr > max){
        max = curr;
    }
}

console.log(max)

// 2
let maxAge = 0;  
let index = 0;

for (let i = 0; i < a.length; i++) {
    let currentAge = a[i]["age"];  
    
    if (currentAge > maxAge) {
        maxAge = currentAge;  
        index = i;
    }
}



console.log("Maximum age of-> "+a[index]["name"]+"age is ->"+maxAge+" ");
