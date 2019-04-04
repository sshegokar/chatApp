// import { url } from "inspector";

/******************************************************************************
 *  Execution        :   1. default node         cmd> node resetController.js 
 *  Purpose          : Initialize the data and give the path where to go
 *
 *  @file            : resetController.js
 *  @overview        : where is going the next define the path
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 01/04/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
app.controller('resetController', function ($scope, $location, resetService, $routeParams) {
    $scope.resetPassword = function () {
        $scope.token = $routeParams.token;

        console.log('token', $routeParams.token)
        var data = {

            'Password': $scope.Password

        }
        $scope.go2 = function (path) {
            $location.path("/#/login");
        };
        console.log(data);
        resetService.resetPassword($scope, data);
    }
});
