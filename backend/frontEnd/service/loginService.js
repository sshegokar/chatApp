/******************************************************************************
 *  Execution        :   1. default node         cmd> node loginService.js 
 *  Purpose          : Initialize the data and give the path where to go
 *
 *  @file            : loginService.js
 *  @overview        : Chat Application
 *  @author          : Shubhangi shegokar
 *  @version         : 1.0
 *  @since           : 01/04/2019
 *
 ******************************************************************************/
/**
 * require the required file
 */
app.service('loginService', function ($http) {
    this.login = function (data,$location) {
        $http({
            method: 'POST',
            url: 'http://localhost:3000/login',
            data: data,
        }).then(
            function successCallback(response) {
               // console.log("Login successfull at loginService in client side",response);
                //var userid = response.data.data.result._id;
            // var email = response.data.data.result.email;
              
              //   localStrorage.setItem("userid", userid);
            //      localStrorage.setItem("fName", fName);
            //     localStrorage.setItem("email", email);
                $location.path("/homePage")
            },
            function errorCallaback(error) {
                console.log("register Unsuccessful please check your details");
                console.log(error);
                loginMessage = 'EmaiId or Password Incorrect';
            }
        );
    }
});
