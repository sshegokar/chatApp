
(
    function () {
        'use strict';
        angular
            .module('app', ['ngRoute', 'ngCookies'])
            .config(config)
            .run(run);
        config.$inject = ['$routeProvider', '$locationProvider'];
        function config($routeProvider, $locationProvider) {
            $routeProvider
                .when('/', {
                    controller: 'controller/loginController',
                    templateUrl: 'template/login.html',
                    controllerAs: 'vm'
                })
                .when('/home', {
                    controller: 'controller/homeController',
                    templateUrl: 'template/home.html',
                    controllerAs: 'vm',
                })
                .when('/register', {
                    controller: 'controller/registerController',
                    templateUrl: 'template/register.html',
                    controllerAs: 'vm'
                })
                .when('/', {
                    controller: 'controller/resetController',
                    templateUrl: 'template/resetlogin.html',
                    controllerAs: 'vm'
                })
                .when('/', {
                    controller: 'controller/forgetController',
                    templateUrl: 'template/forget.html',
                    controllerAs: 'vm'
                })
                .otherwise({ redirectTo: '/login' });
        }
        run.$inject = ['$rootScope'];
        function run() {
            console.clear();
        }
    })();