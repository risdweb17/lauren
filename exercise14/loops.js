
var loop="";

for(var i = 0; i < 7; i++){
	loop=loop+"#";
	console.log(loop);
}

$(document).ready(function(){ 

var milk = ['regular', 'skim', 'two', 'strawberry,' 'chocolate' 'banana']

console.log(' ');

console.log('Types of Milk');

$(document).ready(function(){

	for (var i = 0; i < milk.length; i++) {
	  console.log(milk[i]);
	  $('.printMilk').append(milk[i] + "<br>");
	}

});

