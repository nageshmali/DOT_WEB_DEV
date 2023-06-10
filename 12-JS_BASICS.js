// console.log("Hello World");
// console.log("Namaste Dunia");

// let a = 5;
// console.log(a);
// let b = 20.5;
// console.log(b);

// if(true){
//     var f = 54;
//     let v = "nag";
//     console.log(v);
// }
// // console.log(v);
// console.log(f);

// const num = 34;
// console.log(num);


// // let name;
// // console.log(name);


// // Objects - multiple variable linked with each other
// let Person = {
//     fName : "Nagesh",
//     age : 20,
// }

// console.log(Person.fName)
// console.log(Person["age"])


// //Array - contains list of items - dynamically typed
// let ans = [1,"Harish",54.76];
// console.log(ans[2]);
// ans[3] = 34.56;
// console.log(ans[3]);
// console.log(ans);

// // === data and value should be same
// console.log(5 == "5");
// console.log(5 === "5");


//Object - a Standalone entity with properties and behavior

// const rect = {
//     length:1,
//     breadth:2,

//     draw(){
//         console.log("drawing");
//     }
// }
// console.log(rect)
// console.log(rect.length)
// console.log(rect.draw())


// function which creates object
// 1. Factory Function - camelCase
// function createRectangle(l,b){
//     return rect = {
//         length:l,
//         breadth:b,
//         draw(){
//             console.log("drawing");
//         },
//     };
// }

// let rectObj1 = createRectangle(12,34);
// console.log(rectObj1)


// Constructor Function - Pascal
// function CreateRectangle(l,b){
//     this.length = l,
//     this.breadth = b,
//     this.draw=function(){
//         console.log("Draw");
//     }
// }


// let RectOb1 = new CreateRectangle(100,200);
// console.log(RectOb1);
// RectOb1.color = "Red";
// console.log(RectOb1);
// delete RectOb1.color;
// console.log(RectOb1);



// Functions are Objects as they contain properties and behaviour


// let a = 10;
// let b = a;
// a++;
// console.log(a);
// console.log(b);


// In case of Objects address is also passed
//In Primitives copy is made but in Non Primitives address is passed
//Primitives are copied by their values and Refereneces are copied by their addresses
// let a = {
//     value:10,
// }

// let b = a;

// console.log(a.value);
// console.log(b);

// a.value++;

// console.log(a.value);
// console.log(b);


//FOR - IN LOOP
// const rect = {
//     length:20,
//     breadth:30,
// };

// for(let key in rect){
//     console.log(key,rect[key]);
// }


//FOR - OF LOOP - only on iterables(Array,Maps)
// for(let key of Object.keys(rect)){
//     console.log(key);
// }
// for(let key of Object.entries(rect)){
//     console.log(key);
// }



//Check if the property is present in object or not
// if('length' in rect){
//     console.log("Present");
// }
// else{
//     console.log("Absent");
// }



//OBJECT CLONING
// 1. Iteration

// const ob1 = {
//     l:1,
//     b:2,
// }
// const ob2 = {};

// for(let key in ob1){
//     ob2[key] = ob1[key];
// }
// console.log(ob2)



// 2. Assigning
// const ob1 = {
//     l:1,
//     b:2,
// }

// const ob2 = Object.assign({},ob1);
// console.log(ob1);
// ob1.l++;
// console.log(ob2);


// 3. Spread Operator
// const ob1 = {
//     l:1,
//     b:2,
// }

// const ob2 = {...ob1};
// console.log(ob2);


// console.log("Hello")



// INBUILT OBJECTS
// 1.Math
// 2.String
// let lastName = "Mali";
// let firstName1 = new String('Nagesh');

// console.log(typeof(firstName1))

// when we use . operator to a normal string JS manages it to the Object


// let message  = "My name is Nagesh";
// let words = message.split(" ");
// console.log(words)


// Template Literal
// console.log(`Nagesh Mali

// ejf
// rfg 
// ter       rgre
//       Mali`);

// console.log(`'Nagesh'`);

// let num = 35;
// console.log(`My roll number is ${num}`);



// let date = new Date();
// console.log(date)


// Arrays - Objects which stores multiples types of data
// let numbers = [1,2,3,4];
// console.log(numbers);
// console.log(numbers[3]);

// numbers.push(9);
// console.log(numbers);
// numbers.unshift(8);
// console.log(numbers);

// // splice(index,delete count,number)
// numbers.splice(1,0,10);
// console.log(numbers);

// numbers.includes(4);


// let courses = [
//     {num:1,name:"Nagesh"},
//     {num:2,name:"Harish"},
// ]
// console.log(courses)


// // To find object in array
// let ans = courses.find(course => course.name=="Nagesh");

// console.log(ans)


// let nums = [1,2,3,4];
// nums.pop(); //end
// nums.shift(); //start
// nums.splice(1,1); //middle
// console.log(nums)



// let nums = [1,2,3,4,5];
// let nums1 = nums;
// nums.pop();

// console.log(nums);
// console.log(nums1);


// //empty an array
// let nums = [1,2,3,4,5];

// First Method
// nums.length = 0;
// console.log(nums);

// //Second Method
// nums.splice(0,nums.length);
// console.log(nums);


//Combining
// let arr1 = [1,2,3];
// let arr2 = [4,5,6];
// let arr3 = arr1.concat(arr2);
// console.log(arr3);
// console.log(arr3.slice(2,4)); // start index,end index(exclude)


// let arr1 = [
//     {
//         num:1,
//         naam:"Nagesh"
//     },
//     {
//         num:2,
//         naam:"Harish"
//     }
// ]

// let arr2 = [
//     {
//         num:3,
//         naam:"Nagubhai"
//     },
//     {
//         num:4,
//         naam:"Haribhai"
//     }
// ]


// console.log(arr1);
// console.log(arr2);


//concat array of objects

// 1.
// arr1 = arr1.concat(arr2);
// console.log(arr1)

// 2.
// Array.prototype.push.apply(arr1,arr2);

//slice array of objects
// let ans = Array.prototype.slice.call(arr1,2,4);
// console.log(arr1);
// console.log(ans);



//Spread Operator - expands the values

// let nums = [1,2,3,4];
// console.log(...nums)

// let num1 = [1,2,3,4];
// let num2 = [5,6,7,8];
// let ans2 = [...num1,...num2];
// let ans1 = [...num1,'a',...num2];
// console.log(ans1);
// console.log(ans2);


//Iterating - for of
// let arr = [10,20,30,40];
// 1
// for(let values of arr){
//     console.log(values);
// }

// 2
// arr.forEach(function(value){
//     console.log(value);
// })

// 3
// arr.forEach(number => console.log(number));


// JOIN
// let arr = [10,20,30,40];
// console.log(arr.join('.'));
// console.log(arr.join('/'));

// SPLIT
// let naam = "Nagesh is my name";
// console.log(naam.split(' '));


//SORT
// let nums = [100,54,87,12,43,55,47,56];
// // let ans = nums.sort(function(x,y){
// //     return x-y;
// // })

// // console.log(ans);

// let ans = nums.sort((x,y) => x-y);
// console.log(ans)


//FILTER
// let nums = [1,4,2,-6,-80];
// let ans = nums.filter(function(value){
//     return value > 0;
// });
// console.log(ans);


// let ans2 = nums.filter(value => value < 0);
// console.log(ans2);



//MAP - maps each element of array to something else
// let ids = [54,765,32,98,432];

// let info = ids.map(function(value){
//     return "ID no. :- " + value;
// })

// console.log(info);

// let info2 = ids.map(value => "id :- " + value);
// console.log(info2);




// // FILTER AND MAP
// let nums = [4,5,-6,10];

// let positives = nums.filter(value => value > 0);

// // console.log(positives);

// let ans = positives.map(function(value){
//     return {key:value};
// });

// console.log(ans);



//FUNCTIONS - block of code that fulfulls a specific task
// Reusability, Efficiency, Readability

// 1.
// function printTable(num){
//     for(let i=1;i<=10;i++){
//         console.log(i)
//     }
// }
// printTable(5);

// Hoisting - it is a process of moving function decleration to the top of file & done automaticaaly by JS engine.

// 2.
// Named Function Assignment

// ans(); // cannot call before decleration in case of assignment function

// let ans = function walk(){
//     console.log("walking");
// }

// ans(); //YESS
// walk(); //NO


// 3. Anonymous Function Assignment - no function name declered


// let ans = function(){
//     console.log("walking");
// }
// ans();


// Special Object Argument which stores all the arguments 
// function sum(){
//     console.log(arguments);
// }

// sum(1,2,3,4,5);



//REST PARAMETER - Stores in a array

// function sum(a,b,...values){
//     console.log(values);
// }

// sum(1,2,3,4,5,6);


//Default parameter - start kiya default dena toh end tak dena....beech mai nhi de sakte



//GETTER - access properties
//SETTER - change or mutate the properties


// let person = {
//     fName : "Nagesh",
//     lName : "Mali",

//     get fullName(){
//         return `${person.fName}           ${person.lName}`;
//     },

//     set fullName(value){
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// }

// console.log(person.fullName)

// person.fullName = "Harish Mali";
// console.log(person.fullName);



//ERROR HANDLING
//TRY & CATCH


// let person = {
//     fName : "Nagesh",
//     lName : "Mali",

//     get fullName(){
//         return `${person.fName} ${person.lName}`;
//     },

//     set fullName(value){
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }

// }


// console.log(person.fullName);


// try{
// person.fullName = "Nagesh MALIIII";

// }
// catch(e){
//     alert("ERROR HAS OCCURED");
// }
// console.log(person.fullName);



//REDUCE - (callback,initial value);
// initial value - if not given take s first value
// let arr = [10,20,30,40,50];

// let ans = arr.reduce((initial,current) => initial + current,0);

// console.log(ans);
















