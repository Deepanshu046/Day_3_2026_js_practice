//Destructuring in javascript
//array Destructuring
const languages=['javascript','python','c++']
const[first,second]=languages;

console.log(`first: ${first} , second: ${second}`);

//object
const student={
    name: 'Deepanshu',
    course: 'React',
    year: 2026
}

console.log(student);

//destructuring the object
const{name,course } = student;
console.log(`Name: ${name} , course: ${course}`);

const marks =[90,85,88];
const[ ,science]=marks;
console.log(science);

const score=[100]
const [maths , physics =0]=score ;
console.log(maths,physics)

const user={
    username: 'Deepanjali Singh'
}
const{username:uname}=user;
console.log(uname);

const addarrow=(a,b)=>{
    return a+b;
}
console.log(`addarrow() : `,addarrow(10,20));

const greet= (name) =>{
    return "Namaste "+ name;
}
console.log(greet("Diya"));

const greet2 =(name)=>{
    let greeting ='Welcome to playground.js ';
    return greeting+name;
}
console.log(greet2("Raj"));

const printStudent=({sname , sroll})=>{
    console.log(sname,sroll);
}
printStudent({sname:'Raj',sroll:101});