/******************************************************************************
 *  Execution        :   1. default node         cmd> node forgotService.js 
 *  Purpose          : Initialize the data and give the path where to go
 *
 *  @file            : forgotService.js
 *  @overview        : Chat Application
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 01/04/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
app.service('homeService', function ($http, ) {
    this.getAllUser = function ($scope) {
        $http({
            method: 'GET',
            url: 'http://localhost:3000/getAllUser',
        }).then(
            function successCallback(response) {
                $scope.list = response.data.data;
                console.log("response", response.data.data[0]);
                console.log(response);
                console.log(response.data.data[0].firstName);
            },
            function errorCallaback(error) {
                console.log("Invalid username");
                console.log(error);
            }
        );
    }
});
