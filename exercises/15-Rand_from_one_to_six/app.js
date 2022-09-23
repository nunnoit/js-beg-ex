function getRandomInt()
{
	let min = 1;
	let max = 6;
	var randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

	return randomNumber;
}
console.log(getRandomInt());