// business logic

// This function will take a string, strip out all non alphabet character, turn to lower
// case, and return a string of 5 letter words that follow the cryptosquare rule
// @parameter = string
// @return = string
var cryptoFunction = function(string){
  string = string.toLowerCase();
  // strip all non alphabet characters from the string
  string = string.replace(/[^a-z]+/g,"");
  // find the column size by the smallest square that fit the length of the string
  var colSize = parseInt(Math.sqrt(string.length));
  var rowSize = colSize;
  var cryptoArray = [];
  var result = "";
  // for string size larger than the exact square, row is one more than column.
  if(rowSize*colSize !== string.length){
    rowSize += 1;
  };

  var word = "";
  // Pretend that the string is filled out in the square
  // travese down the column and pick out the letter in each row by using column size
  // concat each letter into a word and push it onto our array when word size is 5
  for(var c = 0; c < colSize; c+=1){
    for(var r = 0; r < rowSize; r+=1){
      if((r*colSize+c) < string.length){
        word = word.concat(string.charAt(r*colSize +c));
        if(word.length === 5){
          cryptoArray.push(word);
          word = "";
        }
      };
    };
  };
  // push any remainder of word onto our array
  if(word.length > 0){
    cryptoArray.push(word);
  };
  // join the words in our arrays into a string using space as separator
  for(var i = 0; i < cryptoArray.length; i+=1){
    result = result.concat(cryptoArray[i] + " ");
  };

  return result;

};










// user interface
$(document).ready(function(){
  $("#cryptosquare").submit(function(event){
      event.preventDefault();
      var userInput = $("input#message-input").val();
      var userResult = cryptoFunction(userInput);
      $("#message-output").text(userResult);



  });
});
