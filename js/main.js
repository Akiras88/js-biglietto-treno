/**
 * program to calculate the cost of the ticket 
 * and calculate the relative discount
 */

// variables
var km; 
var age;
var fixedCost = 0.21;
var cost;
var discountSmall = 20;
var discountBig = 40;
var costSmall;
var costBig;

//  1- user input km and age
var km = parseInt(prompt('Inserisci quanti km vuoi percorrere'));
console.log('KM:' + km);
var age = parseInt(prompt('Quanti anni hai?'));
console.log('AGE:' + age);

// 2- calculate cost for km
var cost = km * fixedCost;
console.log(cost);

// 3 - calculate discount: 20% for under 18 years, 40% for over 60 years
var costSmall = ((discountSmall * cost) / 100);
console.log('DISCOUNT:'+ costSmall);
var costBig = ((discountBig * cost) / 100);
console.log('DISCOUNT:' + costBig);

// 4 - print cost ticket with discount
if (age < 18) {
    console.log(cost - costSmall);
    document.getElementById('ticket').innerHTML = cost - costSmall + '€' + '<br>' + 'Complimenti hai ottenuto uno sconto del 20%';
} else if (age >= 65) {
    console.log(cost - costBig);
    document.getElementById('ticket').innerHTML = cost - costBig + '€' + '<br>' + 'Complimenti hai ottenuto uno sconto del 40%';
}
else {
    console.log(cost);
    document.getElementById('ticket').innerHTML = cost + '€';
}