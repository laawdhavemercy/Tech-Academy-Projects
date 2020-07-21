function Ride_Function() {
	var Height, Can_ride;
	Height = document.getElementById("Height").value;
	Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
	document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Phone(Make, Model, Year, Color) {
	this.Phone_Make = Make;
	this.Phone_Model = Model;
	this.Phone_Year = Year;
	this.Phone_Color = Color;
}
var Josh = new Phone("OnePlus", "6T", 2018, "Red");
var Jam = new Phone("iPhone", "X", 2017, "Black");
var Dianne = new Phone("Samsung", "S10", 2019, "Rose Gold");
function myFunction() {
	document.getElementById("New_And_This").innerHTML = "Dianne has a " + Dianne.Phone_Color + "-colored " + Dianne.Phone_Model + " manufactored in " + Dianne.Phone_Year;
}

function nest_Function() {
	document.getElementById("Nested_Function").innerHTML = Count ();
	function Count() {
		var Starting_point = 6;
		function Plus_one() {Starting_point +=1;}
		Plus_one();
		return Starting_point;
	}
}
