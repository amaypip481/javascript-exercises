const removeFromArray = function(arrayReceieved, ...toBeRemovedElements) {
 
    for(let i=0; i<toBeRemovedElements.length; i++)
    {
        while(arrayReceieved.includes(toBeRemovedElements[i]))
        {
        arrayReceieved.splice(arrayReceieved.indexOf(toBeRemovedElements[i]),1);
        }
    }
    return arrayReceieved;
};

console.log(removeFromArray([1, 2, 3], 8));
// Do not edit below this line
module.exports = removeFromArray;
