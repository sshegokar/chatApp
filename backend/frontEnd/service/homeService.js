/******************************************************************************
 *  Execution        :   1. default node         cmd> node homeService.js 
 *  Purpose          : Initialize the data and give the path where to go
 *
 *  @file            : homeService.js
 *  @overview        : Chat Application
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 01/04/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
app.service('homeService', function ($http) {
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


    try {
        this.getAllMsg = function ($scope) {
            var array = [];
            
            $http({
                method: 'GET',
                url: 'http://localhost:4000/getAllMsg',
                
            }).then(
                function successCallback(response) {
                    console.log("sucess");
                    console.log(response.data.message);

                    for (let i = 0; i < (response.data.message.length); i++) {
                        msg = response.data.message[i];

                        if (((localStorage.getItem('senderId') == msg.senderId) && (localStorage.getItem('receiverId') == msg.recieverId)) || ((localStorage.getItem('receiverId') == a.recieverId && localStorage.getItem('receiverId') == msg.senderId))) {
                            
                            array.push(msg);
                        }

                    }
                    $scope.array = array;
                    console.log("Users msg successfull ", array);

                },
                function errorCallback(response) {
                    console.log("else part");
                    console.log("Unsuccessfull ", response);


                }
            );
        }
    } catch (e) {
        console.log(error);
    }


});
