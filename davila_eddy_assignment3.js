// Eddy O. Davila
// SDI 1303
// Project 3

//Ed Davila The RockStar

// my variables
//variables
var myName = "Ed Davila";
var myHome = "Cuenca";
var myNumber = 2;
var hasGuitar = true;
var setTime = 30;
var guitarGoal = 2

console.log ("My name is " + myName);
console.log ("I play guitar twice a month in " + myHome + ".");
console.log ("I have " + myNumber + " guitars");
console.log ("If I get more than  " + myNumber + " guitars I could play more shows and get signed.");

//Added procedure to project three.
//Simple Math

var seasons = function(summer, winter){
var whichSeason = summer + winter;
console.log("I will perform " + whichSeason + " sets; " + setTime + " minutes each.");
};
seasons(1,1); 


// Conditional

if (hasGuitar === true) {
   if (myNumber <= 222) { 
      myNumber = myNumber + 1;
      console.log( "If I had " + myNumber + ", I'll get signed");
    } else { 
      console.log("I won't get signed if I have any less than" + myNumber);
    }
} else {
      if (myName === "Ed Davila") { 
         console.log("My name is " + myName + ", and I have guitars")
      } else { 
        console.log("My name is " + myName + ", and I do not have guitars");
		}
};

// Array Function
var getSigned = function (r) {
	var signature = r + guitarGoal;
	return signature;
};
var gotSigned = function (name, signature, message){
	console.log(name + " has been signed by " + message + ". A local agent has been assigned to his band with " + signature + " major benefit choices");
}
var signature = getSigned(2);
gotSigned(myName , signature, "Blade Records" );


//JSON
var bladeRecords = {
	"benefits":[
		{"endorsement": "TAMA"},
		{"recording"  : "Phony Studios"},
		{"touring"    : "Europe"},
		{"equipment"  : "Anywhere in the world"
		}
	]
};

var objNew = bladeRecords;
for (var key in objNew.benefits) {
	if (objNew.benefits[key].endorsement === "TAMA") {
		console.log("You will get : " + objNew.benefits[key].endorsement + " benefits");
	} else {
		console.log("I do not want any other benefits."); 
	}
	
};
console.log(bladeRecords);


// Method Accessor
var agentJason = { 
	"gigs"     : "major venues, ",
	"promotion": "promote the band on TV & Radio, ",
	"budget"   : "and keep track of my expenses. ",
	"contract" : function(){ //method accessor
					var agentJob = agentJason.gigs + agentJason.promotion + agentJason.budget;
					return agentJob;
	
	}// end method
};
	
console.log("Our new agent has to get me and the band into " +  agentJason.contract());


// Method Mutator
var rules = {
	"rule1": "Get to work on time, ",
	"rule2": "don't come in drunk, ",
	"rule3": "treat how you want to be treated. ",
	"followRules": function (){
			var mustFollow = rules.rule1 + rules.rule2 + rules.rule3;
			return mustFollow;
	},// End of followRules method.
	"changeRules": function(newRule){ // Method Mutator 
			rules.rule3 = newRule;
	}

}; // end of rules object

console.log("The new agent has 3 rules to follow: " + rules.followRules());



//Copy of "var rules"

var newRules = rules;
rules.changeRules("Leave your ego outside");
console.log("The new rule is " + rules.followRules()); 


//Number Function



// The agent's demand is that I make an album in 10 days.
var agentDemands = { "demand1": "Dont drink before the show ",
					 "demand2": "Practice at least twice a week ", 
					 "demand3": "make one album in 10 days",
					 "days"   : 10
					 };
console.log("The agent's expectations of the band are: " + agentDemands);
var days = 10;
while (days > 0) {
console.log(days + " days till recording ends");
console.log(days + " days to record new songs");
console.log("Finish song and record the next");


days = days - 1;

if (days > 0) {
console.log(days + " songs completed");

}else {
	console.log( "Recording ends with a full album");

	}
}
console.log("The band has completed the album. Let's get back to our agent, he has set up the euroTour in Germany, France and Spain.");



//String Method
var europeShows = {
	
	"Germany": "Berlin, ",
	"France" : "Nimes, ",
	"Spain"  : "and Barcelona ",
	"euroTour": function(){
				var totalCountries = europeShows.Germany + europeShows.France + europeShows.Spain;
				return totalCountries;
	}


};

console.log("The euroTour is " + europeShows.euroTour());
























































