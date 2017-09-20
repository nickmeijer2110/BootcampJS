var String1 = "Nike";
var String2 = "Adidas";
var String3 = "School";
var String4 = "Regen";
var String5 = "Kut weer";
var String6 = "Winter";
var String7 = "Regen";
var String8 = "Zara";
var String9 = "Mediacollege";
var String10 = "Koud";

var Number1 = 1;
var Number2 = 2;
var Number3 = 3;
var Number4 = 4;
var Number5 = 5;

var Boolean1 = true;
var Boolean2 = false;
var Boolean3 = false;
var Boolean4 = true;
var Boolean5 = true;

console.log(" :: Data types :: ");
console.log("String1: "+typeof(String1));
console.log("Number1: "+typeof(Number1));
console.log(Number3 + Number5);
console.log(Number4 + Boolean1);

function multiply() {
  console.log(Boolean3 + Number1);
}

multiply();

var voornaam = "Nick";
var achternaam = "Meijer";
var leeftijd = "16";

function heleNaam() {
  console.log("Mijn naam is " + voornaam + " " + achternaam + " en ik ben " + leeftijd + " jaar oud.");
}

heleNaam();

var expression1 = function() {
  console.log("Hallo - Expression 1 ");
 }

 var expression2 = function() {
   console.log("Doei - Expression 2");
  }

expression1();
expression2();

// Anonymous functies

var anonymous1 = function() {
  console.log("Anonymous 1");
}

var anonymous2 = function() {
  console.log("Anonymous 2");
}

var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();
