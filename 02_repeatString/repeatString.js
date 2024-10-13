const repeatString = function(repeatString, num) {
    let newRepeatString ="";
    if (num<0) return 'ERROR';
    for(let i=0; i<num; i++){
        newRepeatString += repeatString;

    }
    return newRepeatString;

};

// Do not edit below this line
module.exports = repeatString;
