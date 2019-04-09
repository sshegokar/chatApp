/******************************************************************************
 *  Execution        :   1. default node         cmd> node loginController.js 
 *  Purpose          : Initialize the data and give the path where to go
 *
 *  @file            : loginController.js
 *  @overview        : ChatApplication
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 01/04/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
app.controller('loginController', function ($scope, $location,loginService) {
    $scope.login = function () {
        var data = {

            'email': $scope.email,
            'password': $scope.password,
        }
        localStorage.getItem('email',data.email);
        localStorage.getItem('password',data.password);
       
        console.log(data);
        loginService.login(data,$location);
    }
    $scope.go = function (path) {
        $location.path("homePage");
  };
    
}
);

