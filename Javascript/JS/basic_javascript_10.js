function Call_Loop() {
	var Digit = "";
	var X = 1;
	while (X < 11) {
		Digit += "<br>" + X;
		X++;
	}
	document.getElementById("Loop").innerHTML = Digit;
}

function lengthFunction() {
	var str = "This is my challenge sentence!";
	var n = str.length;
	document.getElementById("length").innerHTML = n;
}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
	for (Y = 0; Y < Instruments.length; Y++) {
	Content += Instruments[Y] + "<br>";
	}
	document.getElementById("List_of_Instruments").innerHTML = Content;
}

function array_Function() {
	var fruits = ["Apple", "Banana", "Orange", "Watermelon", "Mango"]
	document.getElementById("Array").innerHTML = fruits;
}

function constant_Function() {
	const Musical_Instrument = {type: "guitar", brand: "Fender", color: "black"};
	Musical_Instrument.color = "blue";
	Musical_Instrument.price = "$900";
	document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var X = 99;
document.write(X);
{
	let X = 77;
	document.write("<br>" + X);
}
document.write("<br>" + X);

function square(x) {
	return x * x;
}
var sqr = square(3);

let car = {
	make: "Dodge ",
	model: "Viper ",
	year: "20201 ",
	color: "red ",
	description : function() {
		return "The car is a " + this.year + this.color + this.make + this.model;
	}
};
document.getElementById("Car_Object").innerHTML = car.description();

for (i = 0; i < 10; i++) {
	document.write(i);
	if (i == 5) {
		break;
	}
}

for (k = 0; k < 10; k++) {
	if (k === 4) { continue; }
	text += "The number is " + k + "<br>";
}