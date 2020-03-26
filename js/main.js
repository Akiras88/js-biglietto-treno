/**
 * program to calculate the cost of the ticket 
 * and calculate the relative discount
 */

// variables
var km; 
var age;
var fixedCost = 0.21;
var cost;


//  1- user input km and age
var km = prompt('Inserisci quanti km vuoi percorrere');
console.log(km)
var age = prompt('Quanti anni hai?');
console.log(age)

// 2- calculate cost for km
var cost = km * fixedCost;
console.log(cost);