const palindromes = function (stringToBeChecked) {
stringToBeChecked = stringToBeChecked.replaceAll(" ","");
stringToBeChecked = stringToBeChecked.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
stringToBeChecked = stringToBeChecked.toLowerCase();
if(stringToBeChecked.length%2 == 0){
    let i = 0;
    let j = stringToBeChecked.length-1;
    do{
        if(stringToBeChecked[i] != stringToBeChecked[j])
            return false;
        i++;
        j--;
    } while(i!=(j-1));
    return true;
}
if(stringToBeChecked.length%2 != 0){
    let i = 0;
    let j = stringToBeChecked.length-1;
    do{
        if(stringToBeChecked[i] != stringToBeChecked[j])
            return false;
        i++;
        j--;
    } while(i!=j);
    return true;
}
};

console.log(palindromes("Malayalam"));

// Do not edit below this line
module.exports = palindromes;
