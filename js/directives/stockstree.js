'use strict';

/* Directives */

angular.module('stockApp').directive("stockstree", function($compile) {
    return {
        restrict: "E",
        scope: {stocks: '=',
                level: '=',
                classname: '=',
                show: '='},

        templateUrl : 'views/stockstree.html',

        controller : ['$scope', function($scope) {
            $scope.choose = function (classname) {
                // Reset
                $('.selected').removeClass('selected');
                $('.child_selected').removeClass('child_selected');

                // Selection
                $("#"+classname).addClass('selected');

                // Parent selection
                var index;
                while ((index = classname.lastIndexOf("_")) != -1 )
                {
                    classname = classname.substring(0, index);
                    $("#"+classname).addClass('child_selected');
                }
            };
        }],

        compile: function(tElement, tAttr) {
            var contents = tElement.contents().remove();
            var compiledContents;
            return function(scope, iElement, iAttr) {
                if(!compiledContents) {
                    compiledContents = $compile(contents);
                }
                compiledContents(scope, function(clone, scope) {
                     iElement.append(clone);
                });
            };
        }
    };
});