/*!
 * Roland Raught
 7/14/15
 SDI Section 01
 Calculator Assignment
 *
 */

//Creating a Calculator to determine toll cost
var name = prompt("Let\'s figure out how much it will cost in tolls for a trip to the beach. \nPlease type in your name:");
console.log(name);

//Alert prompt to say hello
alert("Hello "+name+".");

//To calc the cost we need to ask how many tolls they will encounter on their trip.
var tollStops =prompt("How many tolls will you encounter on this trip?");

//console.log answer
console.log(tollStops);

//calculate the cost of tolls

//Asking user for current toll rates
var weekdayPrice = 2.75;

//calculate the current toll rates
var price =weekdayPrice * tollStops;

//alert with weekday toll rates
alert(name+", It will cost you $"+price+" in tolls for this trip at the weekday rate of $"+weekdayPrice+" per toll.");
console.log(name+", Total cost is $"+price+" at the weekday toll rate $"+weekdayPrice+" per toll.");

//alert with adjust rate for weekends
var newRate =prompt("The tolls increase during weekend travel, enter the weekend travel price here:");
console.log(newRate);


//cast var as a number when using the +
var weekendPrice =tollStops * Number(newRate);
console.log(weekendPrice);
