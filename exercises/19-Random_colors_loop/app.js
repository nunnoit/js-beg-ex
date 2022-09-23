function getColor(colorNumber=0)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getAllStudentColors(){
	
	var exampleColor = getColor(1);
	let min = Math.ceil(1);
	let max = Math.floor(4);
	let rundom;
	let res;
	for (let i = 0; i < 10; i++) {
		rundom = Math.floor(Math.random() * (max - min) + min);
		// console.log(getColor(rundom));
		res = getColor(rundom);
		console.log(res);
	}
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();

