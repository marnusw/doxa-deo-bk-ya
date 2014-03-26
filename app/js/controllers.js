'use strict';

/* Controllers */

angular.module('bkYaFeesdiens.controllers', [])
  
.controller('FeesdiensTeamConfCtrl', ['$scope', 'TeamConfig', function($scope, TeamConfig) {
    $scope.team = TeamConfig.configFor('feesdiens');
}]);
