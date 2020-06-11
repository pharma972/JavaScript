for (let i=0; i<=5; i++){
console.log('This is a For Loop');
}

let i=0;
while(i<=5){
    console.log('This is a While Loop');
    i++;
}

let j=0;
do{
    console.log('This is a do-while loop');
    j++;
}while(j<=5);

const person={
    name:'Priyanka',
    age:29
};

for(let key in person){
    console.log("This is For-In Loop   " + key, person[key])
}

let colors= ['red', 'green', 'blue'];
for(let color of colors){
    console.log("This is for-of Loop  " + color)
}