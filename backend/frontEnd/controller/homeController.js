/******************************************************************************
 *  Execution        :   1. default node         cmd> node forgotController.js 
 *  Purpose          : Initialize the data and give the path where to go
 *
 *  @file            : homeController.js
 *  @overview        : where is going the next define the path
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 01/04/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
app.controller('homeController', function ($scope, homeService, SocketService) {
  $scope.getAllUser = function ($scope) {

    homeService.getAllUser($scope);
  }
  $scope.getAllUser($scope);

  // $scope.senderId = localStorage.getItem('senderId');
  // $scope.receiverId = localStorage.getItem('receiverId');

  $scope.value = function (data) {
    try {
      console.log("clicked data:", data);

      $scope.allUser = '';
      localStorage.setItem('firstName', data.firstName);
      localStorage.setItem('senderId', data._id);
      console.log(data.firstName);
    }
    catch (e) {
      console.log(error);

    }
  }
  $scope.array = [];

  $scope.senderId = localStorage.getItem('_id')
  $scope.receiverId = localStorage.getItem('_id');
  $scope.send = function () { //send message function
    var data = {
      'senderId': localStorage.getItem('senderId'),
      'receiverId': localStorage.getItem('receiverId'),
      'message': $scope.message
    };
    SocketService.on('data', (data) => {
      $scope.array.push(data);
      console.log("data at client: ", data);
    })

    console.log("message: ", data);
    SocketService.emit('data', data);//emitting the message to the browser
  }
  $scope.clear = function (data) {
    localStorage.clear(data);
    $location.path('/login')
  }


  SocketService.on('data', (message) => {
    console.log("message ", message);

    if (localStorage.getItem('senderId') == message.senderId || (localStorage.getItem('receiverId') == message.receiverId) && localStorage.getItem('receiverId') == message.senderId) {
      if ($scope.array=== undefined) {
        $scope.array = message;
      } else {
        $scope.array.push(message);
        console.log("array: ", $scope.array);

      }
    }

  });
});







