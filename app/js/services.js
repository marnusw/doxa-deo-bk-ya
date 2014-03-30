'use strict';

/* Services */

angular.module('bkYaFeesdiens.services', ['ngResource'])
 
.factory('Users', ['$resource',
  function($resource){
    return $resource('fixtures/users.json');
  }
])

.factory('TeamConfig', ['$http', function($http){
    return {
        configFor: function(type) {
            var data = {};
            $http.get('fixtures/'+type+'TeamConfig.json').then(function(response) {
                angular.copy(response.data, data);
                data.categories = [];
                for (var p in data.positions) {
                    if (data.categories.indexOf(data.positions[p].cat) === -1) {
                        data.categories.push(data.positions[p].cat);
                    }
                }
            });
            return data;
        }
    };
}]);
