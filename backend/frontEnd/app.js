
var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider

  .when("/login", {
    templateUrl : "/template/login.html",
    controller : "loginController"
  })
  .when("/register", {
    templateUrl : "/template/register.html",
    controller : "registerController"
  })

  .when("/resetPassword/:token", {
    templateUrl : "/template/resetPassword.html",
    controller : "resetController"
  })
  .when("/forgotPassword", {
    templateUrl : "/template/forgotPassword.html",
    controller : "forgotController"
  })
  .when("/homePage", {
    templateUrl : "/template/homePage.html",
    controller : "homeController"
  });
});
app.service('SocketService', ['socketFactory', function SocketService(socketFactory) {
  return socketFactory({
  ioSocket: io.connect('http://localhost:3000')
  });
  }]);
