 var X = 10;
 function Add_numbers_1() {
	 document.write(20 + X + "<br>");
 }
 function Add_numbers_2() {
	 document.write(X + 100);
 }
 Add numbers_1();
 Add numbers_2();
 
 function Add_numbers_1() {
	 var X = 10;
	 document.write(20 + X + "<br>");
 }
 function Add_numbers_2() {
	 document.write(X + 100);
 }
 Add_numbers_1();
 Add_numbers_2();
 
 function Add_numbers_1() {
	 var X = 10;
	 console.log(15 + X);
 }
 function Add_numbers_2() {
	 console.log(X + 100);
 }
 Add_numbers_1();
 Add_numbers_2();
 
function get_Date() {
	if (new Date().getHours() < 18) {
		document.getElementById("Greetings").innerHTML = "How are you today?";
	}
}

if ( 7 > 5) {
	document.write("The left number is larger than the number on the right.")
}

function Age_Function() {
	Age = document.getElementById("Age").value;
	if (Afe >=18) {
		Vote = "You are old enough to vote!";
	}
	else {
		Vote = "You are not old enough to vote!";
	}
	document.getElementById("How_old_are_you?").innerHTML = Vote;
}
 