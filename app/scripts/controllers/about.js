'use strict';

/**
 * @ngdoc function
 * @name ngTrainingApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ngTrainingApp
 */
angular.module('ngTrainingApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.repeatData = [1,1,2,3,4];
  });
