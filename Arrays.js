const numbers= [3,4];
//Adding elements to the end of the Array
numbers.push(5,6);
//Adding elements to the front of the Array
numbers.unshift(1,2);
//Adding numbers to the middle of the Array
numbers.splice(2,0,'a','b');
console.log(numbers);
console.log(numbers.indexOf(3));
console.log(numbers.includes('n'));

const courses=[
    {id:1, name:'a'},
    {id:2, name:'b'}
];


abcs
//Find returns the first element that matches the criteria
const course= courses.find(function(course){
return course.name==='xyz';
});
//console.log(course);

//Arrow Functions:
const course1= courses.find(course1=>course1.name==='a');
console.log(course1);

//Emptying an Array:
let arrayNew= [1,2,3,4];
//arrayNew=[];

arrayNew.length=0;

console.log(arrayNew);