
var app = angular.module('chatroom');

app.controller('mainCtrl', function($scope, parseService){
  //In your controller you'll have a getParseData function and a postData function, but should be placed on $scope.

  //The getParseData function will call the getData method on the parseService object. You'll then save the result of that request to 
  //your controllers $scope as messages ($scope.messages)
$scope.getData = function() {
  parseService.getData().then(function(res) {
    $scope.messages = res.data.results;       //this just makes it so the messages are available in view (on scope)
  //   console.log($scope.messages);
  });
};

$scope.getData();
// console.log($scope.messages);

// $scope.addData = function(chatMessage) {
//   parseService.adData().then(function)
// }


  //The postData function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box),
  //pass that text to the postData method on the parseService object which will then post it to the parse backend.

$scope.postData = function() {
  var dataObj = {                   //needs to be formatted as an object to send to parse
    text: $scope.message
    };
  parseService.postData(dataObj);   //now we can pass the object to postData function
  $scope.message = "";              // sets the message back to nothing once submitted 
};


  //uncomment this code when your getParseData function is finished
  // This goes and gets new data every second, which mimicks a chat room experience.
  setInterval(function(){
    $scope.getData();
  }, 1500);
});

var mer = "something";










