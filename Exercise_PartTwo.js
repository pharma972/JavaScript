///////////////ADDRESS OJBECT CREATION
const address={
street: 'a',
city: 'leiden',
zipcode: 2324
};

function showAddress(address){
for(let key in address)
console.log(key, address[key]);
};

//showAddress(address);

///////////////////////////////FACTORY and CONSTRUCTOR FUNCTIONS////////////////////////////////////////
//Factory Function:
function createAddress(street, city, zipcode){
return {
    street: street,
    city: city,
    zipcode: zipcode
}
};
let address1= createAddress('a', 'b', 23);
//console.log(address1);
//Constructor Function:
function NewAddress(street, city, zipcode){
this.street= street;
this.city= city;
this.zipcode=zipcode;
};

//let address2= new NewAddress('a', 'b', 23);
//console.log(address2);

//////////////////////OBJECT EQUALITY/////////////////////////////////////////////////
function NewAddress(street, city, zipcode){
    this.street= street;
    this.city= city;
    this.zipcode=zipcode;
    };
let address2= new NewAddress('a', 'b', 23);
let address3= new NewAddress('a', 'b', 23);
console.log(areEqual(address2,address3));
console.log(areSame(address2,address3));
function areEqual(address2, address3){
return address2.street===address3.street &&
address2.city===address3.city &&
address2.zipcode===address3.zipcode;
};

function areSame(address2, address3){
return address2===address3;
};

///////////////////BLOG POST OBJECT
let post= {
title: 'a',
body: 'b',
author: 'c',
views: 10,
comments: [
    { author:'a', body: 'b' },
    {author:'c', body: 'd'}
],
isLive: true
};
console.log(post);

///////////PRICE RANGE OBJECT///////////
let Range