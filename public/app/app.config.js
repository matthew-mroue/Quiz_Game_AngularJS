"use strict";
// config file always takes $routeProvider as a dependency, and as a parameter of its function
angular.module("App").config(["$routeProvider", function($routeProvider) {
    $routeProvider
    .when("/questions", 
    {
        template:"<questions></questions>"
    })
    .when("/scores", 
    {
        template:"<scores></scores>"
    })
    .otherwise("/questions", 
    {
        template:"<questions></questions>"
    });
}]);