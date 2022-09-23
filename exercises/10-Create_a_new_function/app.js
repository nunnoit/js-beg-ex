/* This exercise is almost identical to 15-Random numbers - consider merging them here and using another concept for 15? */

// Declare your function here
function generateRandom(){
    let getRandom = Math.floor(Math.random() * 10);
    return getRandom;
};
console.log(generateRandom());