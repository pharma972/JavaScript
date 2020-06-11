function maxOfTwoNumbers(number1, number2) {
    return (number1 > number2) ? number1 : number2
}
let number = maxOfTwoNumbers(1, 2);
//console.log(number);
///////////////////////////////////////////////////////////////////////////
function isLandscape(width, height) {
    return (width > height);
}
let land = isLandscape(2, 1);
//console.log(land);
///////////////////////////////////////////////////////////////////////////////
function fizzBuzz(input) {
    if (typeof (input) !== 'number')
        return "This is not a number";

    //If the number is divisible by 3

    if ((input % 5 === 0) && (input % 3 === 0)) {
        return 'FizzBuzz';
    }
    if (input % 3 == 0) {
        return 'Fizz';
    }
    if (input % 5 == 0) {
        return 'Buzz';
    }
    return input;
}
let output = fizzBuzz(7);
//console.log(output);

///////////////////////////////////////////////////////////////
function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerHour = 5;
    if (speed <= speedLimit) {
        console.log('OK');
    }
    else {
        const points = Math.floor((speed - speedLimit) / kmPerHour);
        if (points >= 12) {
            console.log('License Suspended');
        }
        else
            console.log('Points: ' + points);
    }
}

//checkSpeed(80);


////////////////////////////////////////////////////////////////////////////////
function showNumbers(limit) {
    for (let i = 0; i <= limit; i++) {
        if (i % 2 != 0) {
            console.log(i, "ODD");
        }
        else console.log(i, "EVEN");

    }
}

//showNumbers(10);


/////
function showProperties(obj) {
    for (let keys in obj)
        if (typeof obj[keys] === 'string')
            console.log(keys, obj[keys]);
}

const movie = {
    name: "hu",
    age: 23,
    release: 'kshf'
};

//showProperties(movie);


////////////////////////////////////////////////
function sum(limit) {
    let sume = 0;
    for (let i = 0; i <= limit; i++)
        if (i % 3 === 0 || i % 5 === 0)
            sume += i;

    return sume;
}

//console.log(sum(10));


///////////////////////////////////
function calculateGrade(marks) {
    let sumt = 0;
    for (let mark of marks)

        sumt += mark;
    let average = sumt / marks.length;

    if (average < 60)
        return 'F';
    if (average < 70)
        return 'D';
    else
        return 'A';

}
const marks = [50, 50, 50];
//console.log(calculateGrade(marks));

///////////////////////////////////////////
function showstars(rows) {
    for (let i = 0; i <= rows; i++) {
        let pattern = '';
        for (let j = 0; j < i; j++) {
            pattern += '*';

        }
        console.log(pattern);
    }
}

showstars(2);