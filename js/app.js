/*
    app.js: main application script
    this is an Angular application
 */

"use strict";

//create new angular module
//returns new angular module object, and we call the module controller method
angular.module('MovieApp', [])
    .controller('MoviesController', function($scope) {
        $scope.movies = movies; //set the scope.movies to the movies object from js file movie we set
        $scope.searchString = '';
        $scope.sortCol = 'rank';
        $scope.sortReverse = false;

        $scope.sortBy = function(colName) {
            if ($scope.sortCol == colName) {
                $scope.sortReverse = !$scope.sortReverse
            }
            else {
                $scope.sortReverse = false;
            }
            $scope.sortCol = colName;

        }
    });

