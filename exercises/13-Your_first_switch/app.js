function getColor(selection)
{
	switch(selection){
	    default:
	    	return false; 
	    break;               
	}
}

var colorname = prompt('What color do you want?').trim();
var isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');

// ----------------------------------
	function getColor(selection)
	{
		switch(selection){
			case 'red' :
				// console.log('true');
				return true;
				 break;
			case 'blue' :
				// console.log('true');
				return true;
				break;
			case 'green' :
				// console.log('true');
				return true;
				 break;
			default:
			// return console.log('false');
			return false;
			break;               
		}
	}
	
	var colorname = prompt('What color do you want?').trim();
	console.log('colorname', colorname);
	let toLower = colorname.toLowerCase();
	console.log('toLower', toLower);
	var isAvailable = getColor(toLower);
	console.log('isAvailable', isAvailable);
	
	if(isAvailable)
		console.log('Good news! That color is available');
	else 
		console.log('We are sorry, that color is not available');