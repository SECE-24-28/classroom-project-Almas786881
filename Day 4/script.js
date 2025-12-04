//console.log("Hello, World!");
//console.log(2+3);
//var a = 10;
//var b = 20;
//var c= "HI";
//console.log(a + b); //30
//console.log(a - b);
//console.log(c); //HI
//console.log(c + a); //HI10
//let b="BYE";
//const c= 30.5;

//ARRAYS is a datatype that stores multiple values of same dataype
/*const a=[12,13,15];
console.log(a);
console.log(a[0]);
//a=[12,"HI",15.5,true];
//console.log(a);
const c=[12,"HI",15.5,true];// can change or add  or remove elemnts from the array even it is constant as we are not declaring
c.push(15);
console.log(c);
//c=[1,2,3]; not allowed
c[2]=40;
console.log(c);
console.log(c.length);
console.log("before pop");
c.pop();
console.log("after pop");
console.log(c);
c.unshift(11,12,13);// add elemnt in the first
console.log(c);
c.shift();// remove first elemnt
console.log(c);
c.splice(1,3);
console.log(c);  // splice(starting index, number of elements to be removed, elements to be added) it helps us to add or remove and alter elments in our array
c.splice(2,0,"world");// adding element at index 2
console.log(c);
c.splice(2,1,50);
console.log(c); // replacing element at index 2 with 50
c.splice(2);
console.log(c); // removes all elements from index 2 to end
c.splice(-1,1);
console.log(c); // removes last element 
 
const arr=[1,2,3,4,5] ;
console.log("before map function",arr);
const newArr=arr.map(num => num * 5);
console.log("after map function", newArr); // creates a new array by applying the function to each element of the original array 

// ARRAY FILTER
const newArr = Array.filter(num=> num % 2 === 0);
console.log("after filter function", newArr); // creates a new array with elements that satisfy the condition in the function
const courses =["Mongodb","Express","React","Node"];
console.log("courses:", courses);
const  newCourses = courses.filter(c=>c!=="progress");
console.log("updated courses", newCourses);
const arr=[1,2,3,4,5] ;
const newArr = arr.filter(num=>num%2==0);
console.log("After Filter: ",newArr);
const courses = ["MongoDB","Ecpress.js","postgress","React.js","Node.js"];
console.log("Courses:",courses);

const newCourse = courses.filter(c=>c!=="postgress");
console.log("Updated course:",newCourse);*/

 /*const arr=[1,2,3,4,5];
 const sum=arr.reduce((store,num)=>store+num);
 console.log(`Addition of ${arr} is: ${sum}`);
 //objects in javascript

const user = {
    firstname : "John",
    lastname : "Doe", 
}
const user2 = {} //empty object
console.log(user.firstname);
console.log(user[`lastname`]);*/

//FUNCTIONS
// function is a block of reusable code that we use so that we can folow rule called Do Not Repeat Yourself(DRY) principle
/*function add(a,b){
    return a+b;
}
console.log(add(2,3));
const add=function(a,b){ //non hoisted
    const c=a+b;
    return c;
}*/
/*const arr=[12,13,14,15];
function addArr(arr){
    const sum=arr.reudce((acc,Number)=>acc+Number,0);
    return sum;
}
console.log(addArr(arr));

/*const user={
    add:function(a,b){
        return a+b;
    }
}*/
/*const user={
    add: function(a,b){
        return a+b;
}
}

const sum=(a,b)=> {return a+b;} //arrow function
const sub=(a,b)=>{return a-b;}//if there is only one expression we can skip the return and curly braces
console.log(sum(21,89));
console.log(sub(50,20));

function greet(name){ //default parameter
    console.log(Hello ${name}, welcome to the javascript world!);
}
greet("Ram");*/

/*function greet(name="Guest"){ //default parameter
    console.log(Hello ${name}, welcome to the javascript world!);
}
greet();


//loops
for(let i=0;i<5;i++){
    console.log(5 x ${i} = ${5*i});
}

let i=1;
while(i<=5){
    console.log(While loop: 5 x ${i} = ${5*i});
    i++;
}

let i=1;
do{
    console.log(5 x ${i} = ${5*i++});
}while(i<=5);*/

/*const arr=[13,12,83,64,95];
for(const num of arr){
    console.log(num);
}
const arr=[12,54,67,44,88,24];
/*for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
}*/
/*for(const num of arr){
    console.log(num);
}
const user={
    fname:"John",
    lname:"Doe",
    age:25,
    occupation:"Developer",
}
for(const key in user){
    console.log(`${key}: ${user[key]}`);
}*/
// for each
const arr=[12,54,67,44,88,24];
arr.forEach(num=>console.log(num));