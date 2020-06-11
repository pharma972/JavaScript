let a= 'blue';
let b= 'black';
let c= a;
a=b;
b=c;

console.log(a);
console.log(b);

let hour=10;
if(hour>=6 && hour<12){
    console.log('Good Morning');
}
else if (hour=>12 && hour<=18){
     console.log('Good Afternoon');
}