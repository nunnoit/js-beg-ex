var sumOfAllLuckyNumbers;

var person = {
    name: "John",            
    lastname: "Doe",
    age: 35,                     
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], 
    significant_other: person2 
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2] 
};

var person3 = {
    name: "Jimmy",
    lastname: "Dow",
    gender: "male",
    lucky_numbers: [1,2,3,4],
    significant_other:null
}
person.lucky_numbers[3]=33;
family.members.push(person3);

function addAllFamilyLuckyNumbers(anArray){
  let sumOfAllLuckyNumbers = 0;
  for (let i=0; i < anArray.length ; i++){
    for (let j = 0; j < anArray[i].lucky_numbers.length; j++) {
      sumOfAllLuckyNumbers = sumOfAllLuckyNumbers + anArray[i].lucky_numbers[j]
    }
  }

  
  return sumOfAllLuckyNumbers;
}


console.log(addAllFamilyLuckyNumbers(family.members));
