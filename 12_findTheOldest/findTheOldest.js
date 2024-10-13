const findTheOldest = function(arrayObject) {
let maxAge =0;
return arrayObject.reduce(findOldest,0);
function findOldest(maxName, oldestObject){
    if(typeof(oldestObject.yearOfDeath) == "undefined") 
        oldestObject.yearOfDeath = new Date().getFullYear();
    if((oldestObject.yearOfDeath - oldestObject.yearOfBirth)> maxAge) 
        {
           maxAge = (oldestObject.yearOfDeath - oldestObject.yearOfBirth);
            maxName = oldestObject;
            return maxName;
        }
    else return maxName;
}
};
console.log(findTheOldest([
    {
      name: "Carly",
      yearOfBirth: 2018,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]));

// Do not edit below this line
module.exports = findTheOldest;
