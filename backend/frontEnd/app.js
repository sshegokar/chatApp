// var app = angular.module("app", ["ngRoute"]);
var app = angular.module('app', ['ngRoute']);
app.config(function($routeProvider) {
  $routeProvider

  .when("/", {
    templateUrl : "/template/login.html",
    controller : "loginController"
  })
  .when("/register", {
    templateUrl : "/template/register.html",
    controller : "registerController"
  })

  .when("/resetPassword", {
    templateUrl : "template/resetPassword.html",
    controller : "resetController"
  })
  .when("/forgotPassword", {
    templateUrl : "template/forgotPassword.html",
    controller : "forgotController"
  });
});
