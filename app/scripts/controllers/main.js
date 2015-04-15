'use strict';

/**
 * @ngdoc function
 * @name ngTrainingApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngTrainingApp
 */
angular.module('ngTrainingApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
