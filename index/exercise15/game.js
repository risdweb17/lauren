$(document).ready(function(){ 


// var pear="";
// var country="";

// var pear = ["Bartlett", "Bosc", "Comice", "halfsour"]
// var country = ["NWUSA", "WesternEurope" "EasternEurope"]

var choice1="";
var choice2="";
var score= 0;

$(".pear").click(function(){
	choice1= $(this).attr("id");
	console.log(choice1);
	});

// console.log(choice2);
// 	if(choice1===choice2){
// 		score
// 	}

	$('.pallette').click(function(){
		choice2 = $(this).attr('id');
		console.log(choice2);
		if(choice1===choice2){
	   		score++;
	   		if (score===3){
	   			endGame();
	   		} else {
	   			console.log(score);
	   			console.log("correct");
	   			$("#message").text("Correct!");
	   			// $("#score").text(score);
	   		}			   		
		}
	   	else {
	   			console.log("wrong");
	   			$("#message").text("Wrong!");
	   	}	
		
	});

	function endGame(){
		console.log("end game");
		// $("#score").text(score);
	   	$("#message").text("Yay! You've beat the game.");
	}
});


// for (var i = 0; i < pear.length; i++) {
//  console.log(pear[i]);
 
//  for (var j = 0; j < country.length; j++){
//          console.log(country[j]);

//    if (pear[i] === country[j]) {
//      console.log('Match: ' + pear[i]);
//    }

//    if (pear === country)
// 	console.log("YES!")
// else{
// 	consle.log("NOOOOOOOOOOOOOOOOOpe")
// 	}
//  }
// }
