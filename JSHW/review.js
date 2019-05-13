//Try looping

var bucks = '2019 NBA Champions';
var year = 2019;
var bucks_dynasty = true ;


console.log(bucks);
console.log(year);
console.log(bucks_dynasty);

var saber = 'sword';
var numero = 16;
console.log(saber);
console.log(numero);

var DC_Characters = [
    'Batman', 'Superman', 'Blue Beetle', 'Flash',
    'Wonder Woman', 'Cyborg', 'Starfire', '*Red Hood*',
    'Swamp Thing', 'Harley Quinn', 'Green Arrow', 'Catwoman',
    'Black Adam', 'Shazam', 'Mr. Freeze', 'Killer Frost',
];

var red_hood_is_the_best = true;
var jason_todd_is_the_best = true;
var what_about_tim_drake = false;
var dc_better_than_marvel = true;

for (let x = 0; x < DC_Characters.length; x++) {
    console.log(x);
    console.log(DC_Characters);
}


var myEquation = 24 + 17;
var myEquation2 = 11 - 3;
var myEquation3 = myEquation2 * 7;

console.log(myEquation);
console.log(myEquation2);
console.log(myEquation3);


var equationlist = [
    myEquation, myEquation2, myEquation3
];


console.log(equationlist);


var numbers = [
    3,43,35
];


numbers.push (12);
numbers.push (47);

console.log(numbers);


console.log(numbers.splice(2));

var shorts = ['yes', 'no', 'maybe','so'];
console.log(shorts.splice(2))


DC_Characters.reverse();
console.log(DC_Characters);


var Age = 21;
var ageSentence = `Your age is ${Age}`;
console.log(ageSentence);

console.log(red_hood_is_the_best);