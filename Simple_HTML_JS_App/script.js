//request for user's name
	let uIn = prompt('Please enter your name:', "Generic user");	//when page loads
			
	//dynamically display user input
	document.getElementById("name").innerHTML = 'User: ' + uIn;

//get values and set to variables
function deets(){
	var day = document.getElementById("d").value;
	var month = document.getElementById("m").value;
	var year = document.getElementById("y").value;
	var city = document.getElementById("c").value;
	var state = document.getElementById("s").value;
	var zip = document.getElementById("z").value;
	var hobby = document.getElementById("h").value;
	
		//popup window with details
		return alert('User: ' + uIn + 
		'\nDate of Birth: ' + day + '/' + month + '/' + year + 
		'\nCity: ' + city +
		'\nState: ' + state +
		'\nZip: ' + zip +
		'\nHobby: ' + hobby);
};

//validate the zip code
function zipValidation(){
	var z = document.getElementById("z").value;
	if (z.length <5){
		return alert("Zip format is not valid. Please ensure the zip code is entered properly.");
	}
	/*else if(){
		
	}*/
	else if(z.length ==5){
		return deets();
	}
};