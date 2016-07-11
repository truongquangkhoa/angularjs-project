'use strict';

var app = angular.module('app', ['ngRoute']);
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    .when('/about', {
      templateUrl: 'view/about.html',
      controller: 'AboutController'
    })
    .when('/home',{
      templateUrl: 'view/home.html',
      controller: 'HomeController'
    }) 
    .when('/contact',{
      templateUrl: 'view/contact.html',
      controller: 'ContactController'
    }) 
    .when('/service',{
      templateUrl: 'view/service.html',
      controller: 'ServiceController'
    })
    .otherwise({
      redirectTo: '/home',
    });
}]);