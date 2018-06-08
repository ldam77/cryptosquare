// business logic
var cryptoFunction = function(string){
  string = string.toLowerCase();
  string = string.replace(/[^a-z]+/g," ");

  return string;

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
