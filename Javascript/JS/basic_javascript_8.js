function full_Sentence() {
var part_1 = "I have ";
var part_2 = "made this ";
var part_3 = "into a complete ";
var part_4 = "sentence.";
var whole_sentence = part_1.concat(part_2, part_3, part_4);
document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
	var Sentence = "All work and no play makes Johnny a dull boy.";
	var Section = Sentence.slice(27,33);
	document.getElementById("Slice").innerHTML = Section;
}

function challegeFunction() {
	var str = "this should be upper case!";
	var res = str.toUpperCase();
	document.getElementById("upper").innerHTML = res;
}

function searchFunction() {
	var str = "Visit my website!";
	var n = str.search("website");
	document.getElementById("search").innerHTML = n;
}

function string_Method() {
	var X = 182;
	document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
	var X = 12938.3012987376112;
	document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function valueFunction() {
	var str = "Hello There!";
	var res = str.valueOf();
	document.getElementById("value").innerHTML = res;
}

function fixFunction() {
	var num = 5.56789;
	var n = num.toFixed(2);
	document.getElementById("fix").innerHTML = n;
}