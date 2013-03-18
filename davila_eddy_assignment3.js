// Eddy O. Davila
// SDI 1303
// Project 3

//Ed Davila The RockStar

// my variables
//variables
var myName = "Ed Davila";
var myHome = "Cuenca";
var myNumber = 222;
var hasGuitar = true;
var setTime = 30;

console.log ("My name is " + myName);
console.log ("I play guitar twice a month in " + myHome + "; during summer and winter");
console.log ("I have " + myNumber + " guitars");
console.log ("Believe it or not, its " + hasGuitar + " that I have " + myNumber + " guitars.");

//Added procedure to project three.
//Procedure
var seasons = function(summer, winter){
var whichSeason = summer + winter;
console.log("I will perform " + whichSeason + " sets; " + setTime + " minutes each.");
};
seasons(1,1); 
