document.write(typeof 7);

function my_function() {
document.getElementById("Test").innerHTML = 0/0;
}

document.getElementById("Test").innerHTML = isNaN('This is a string');

document.getElementById("Test").innerHTML = isNaN('007');

document.write(1.7976931348623157E+10308);
document.write(-1.7976931348623157E+10308);

document.write(7 < 5);
document.write(7 > 5);

console.log(8 + 8);

document.write("3" + 6);

console.log(4 < 1);

document.write(20==20);
document.write(30==10);

Q = 3;
W = 3;
document.write(Q === W);

E = 77;
R = 78;
document.write(E === R);

T = 99;
Y = "99";
document.write(T === Y);

Phone1 = Samsung;
Phone2 = iPhone;
document.write(Phone1 === Phone2);

document.write(3 > 1 && 4 > 3);
document.write(5 > 3 && 5 > 9);

document.write(6 > 4 || 11 > 7);
document.write(7 > 11 || 4 > 8);

function not_Function() {
	document.getElementById("Not").innerHTML = !(10 > 5);
}

function not_Function() {
	document.getElementById("Not").innerHTML = !(5 > 10);
}