'use strict';


// Declare app level module which depends on controllers, and services
angular.module('bkYaFeesdiens', [
  'ngRoute',
  'ngResource',
  'ui.bootstrap.buttons',
  'bkYaFeesdiens.services',
  'bkYaFeesdiens.controllers'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/feesdiens/team-config', {templateUrl: 'partials/feesdiens-team-config.html', controller: 'FeesdiensTeamConfCtrl'});
  $routeProvider.otherwise({redirectTo: '/feesdiens/team-config'});
}]);
