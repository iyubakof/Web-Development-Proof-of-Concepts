window.addEventListener('load', init, false);

//Drag and drop functions
function allowDrop(event){
	event.preventDefault();
}

function drag(event) {
	event.dataTransfer.setData("text", event.target.id);
}

function drop(event){
	event.preventDefault();
	var data = event.dataTransfer.getData("text");
	event.target.appendChild(document.getElementById(data));
}

//initialize
function init(){
//timer function
	//setters
	dt = new Date();
	dt.setHours(0);
	dt.setMinutes(0);
	dt.setSeconds(0,0);
	
	var timer = setInterval(Increment, 1000);
	
	function Increment(){
		document.getElementById('hh').innerHTML = wrap(dt.getHours());
		document.getElementById('mm').innerHTML = wrap(dt.getMinutes());
		document.getElementById('ss').innerHTML = wrap(dt.getSeconds());
		dt.setTime(dt.getTime() + 1000);
	}
	
	function wrap(val){
		var wrapperStr = val+"";
		if(wrapperStr.length<2){
			return "0" + wrapperStr;
		}
		else {
			return wrapperStr;
		}
	}

//AJAX
	var ax = new XMLHttpRequest;
	
	//if status = 200
	ax.successCall = function(){
		var data = JSON.parse(ax.responseText);
		var i;
		
		//sort through terms and definitions
		var tArr = [];
		for(i = 0; i < data.answers.length; i++) {
			tArr.push(data.answers[i]);
		};
		
		console.log(tArr);
		
		//ID arrays
		var ptArr=["t1", "t2", "t3", "t4", "t5"];
		var dpArr=["def1", "def2", "def3", "def4", "def5"];
		//5 random terms and definitions IDs
		var random;
		var tRand;
		var dRand;
		var tr;
		var dr;
		var iTerm;
		var iDef;
		var iRand;
		var tAnswers = [];
		var dAnswers = [];
		for(var x=0; x<5; x++){
			tRand = getRandom(ptArr);		//random term position
			dRand = getRandom(dpArr);		//random def position
			tr = "'"+ tRand + "'";
			dr = "'"+ dRand + "'";
			random = getRandom(tArr);		//random object on list
			document.getElementById(tRand).innerHTML = Object.keys(random);
			document.getElementById(dRand).innerHTML = Object.values(random);
			
			//remove elements
			iTerm = ptArr.indexOf(tRand);
			iDef = dpArr.indexOf(dRand);
			iRand = tArr.indexOf(random);
			
			if(iTerm > -1){
				ptArr.splice(iTerm, 1);
			}
			if(iDef > -1){
				dpArr.splice(iDef, 1);
			}
			if(iRand > -1){
				tArr.splice(iRand, 1);
			};
				
			
			//test to see if appearing
			//console.log(tRand);
			//console.log(dRand);
		}
			//console.log(tAnswers);
			//console.log(dAnswers);
		
		//find random value within an array
		function getRandom(arr){
			return arr[Math.floor(Math.random()*arr.length)];
		}
	};
	
	//if failed status
	ax.failCall = function(){
		
		alert('Request has failed: ' + ax.status + " " +ax.responseText);
		
	};

	//open file
	ax.open('GET', 'data/answers.json');

	//load file
	ax.onload= function(){
		if(ax.status === 200){
			ax.successCall();
		}
		else{
			ax.failCall();
		};
	};

	ax.send();

//End Game
function endGame(){
	//end timer
	clearInterval(timer);
	
	//change button
	document.getElementById('end').value = "Show Score";
}

//Show Score---> work in progress
function showScore(){
	//change button
	document.getElementById('end').value = "Play Again";
}

//Play again
function resetGame(){
	location.reload(false);
}

//cycle through button
function cycleBtn(){
	//for(var x=1; x<=3;x++){
		var endBtn;
		endBtn = document.getElementById('end').value;
		if (endBtn == "END"){
			document.getElementById('end').addEventListener('click', endGame, false);
		}
		else if(endBtn == "Show Score"){
			document.getElementById('end').addEventListener('click', showScore, false);
		}
		else if(endBtn == "Play Again"){ 		//work in progress
			document.getElementById('end').addEventListener('click', resetGame, false);
		};
	//}
};

	//verify answers
	function checkAnswers(){
		var finalScore;
		for (var z=0;z<5;z++){
			document.getElementById().value
		}
	}

};