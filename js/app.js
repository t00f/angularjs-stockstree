'use strict';

var stockApp = angular.module('stockApp', []);


// Configuration of $routeProvider
stockApp.config(['$routeProvider', function ($routeProvider) {
    // Keep an instance for lazzy loading (see controller.js)
    stockApp.routeProvider = $routeProvider;

    $routeProvider.when('/stocks', {templateUrl: 'views/stocks-tree.html', controller: 'StocksCtrl'});
    $routeProvider.otherwise({redirectTo: '/'});
}]);
