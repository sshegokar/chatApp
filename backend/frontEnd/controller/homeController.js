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
  $scope.value=function(data){
    $scope.allUser='';
    localStorage.setItem('firstName',data.firstName);
    localStorage.setItem('_id',data._id);
  }
$scope.array = [];
  $scope.senderFirstName = localStorage.getItem('firstName');
  $scope.senderId = localStorage.getItem('_id')
  $scope.receiverFirstName = localStorage.getItem('firstName');
  $scope.receiverId = localStorage.getItem('_id');

  SocketService.on('data', (data) => {
    // if (localStorage.getItem('_id') == data.senderId || (localStorage.getItem('_id') == data.receiverId && localStorage.getItem('_id') == data.senderId)) {
      if ($scope.array == undefined) {
        /*
        assign data to variable
        */
        $scope.array = data;

      } else {
       // if new  data is there then push in array
        $scope.array.push(data);
        console.log("data at client: ", data);
      }
    //}
  })
  SocketService.emit('data',{"senderId":"5ca485c0f7fd6d1ca6ec1a28","receiverId":"5c9ca31462589c50b4b07d9b",
  "message":"hello"
})

 });