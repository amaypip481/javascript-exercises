const getTheTitles = function(bookArray) {
  newArray =[];
    for(let i=0; i<bookArray.length; i++)
{
     newArray.push(bookArray[i].title);
}
return newArray;
};

console.log(getTheTitles([
    {
      title: 'Book',
      author: 'Name'
    },
    {
      title: 'Book2',
      author: 'Name2'
    }
  ]));

// Do not edit below this line
module.exports = getTheTitles;
