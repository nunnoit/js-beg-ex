function getRandomInt()
{
	let min = 1;
	let max = 10;
	let result = Math.floor(Math.random() * (max - min + 1)) + min;
	return result
}


console.log(getRandomInt());