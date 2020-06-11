//this is my first javascript code.
let person={
    name:'Priyanka',
    age:29
}
//person.name='Sari';
//console.log(person.name);

let selectedColors=['red', 'blue'];
//console.log(selectedColors.length);

//Performing a task
function greet(name, lastName)
{
    console.log('Hello ' + name + ' ' + lastName);
}

//Calculates a value
function square(number)
{
    return number * number;
}
//greet('John', 'Shara');

console.log(square(2));

//Challenge Array
const essentials= ['Toilet Paper', 'Bottled Water', 'Sanitizer'];

essentials[0]= 'Paper Towels';

essentials.pop();
essentials.push('Bleach');

console.log(essentials);

//Array
const personalInformation = {
firstName: 'Priyanka',
lastName: 'Sharma',
address: {
    city: 'Leiden',
    state: 'Netherlands'
},
hobbies: ['jogging', 'running'],
};
personalInformation.isGoldMember=true;

//console.log(personalInformation);


//ARithmetic
const price1=3;
const price2=4;
const price3=5;
const totalPrice= price1+ price2 + (price3*2);
const avePrice= totalPrice/4;
const discountPrice= avePrice-5;
console.log(totalPrice, avePrice, discountPrice);

//
const1= 