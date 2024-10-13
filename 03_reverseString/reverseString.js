const reverseString = function(toBeReversedStrings) {
let reversedString = "";
for(let i=toBeReversedStrings.length-1; i>=0; i--)
reversedString += toBeReversedStrings.charAt(i);
return reversedString;
};


// Do not edit below this line
module.exports = reverseString;
