'use strict';

var app = angular.module('app.visgraph', ['angular.visgraph']);


app.controller('AppCtrl', ['$scope', '$window', '$http', function($scope, $window, $http) {
        $scope.url = 'data.json';
        $scope.method ='GET' 
        $http({method: $scope.method, url: $scope.url})
          .success(function(data) {
            $scope.graph = data;
            console.log($scope.graph);
          })
          .error(function(err) {
            $scope.erromsg = err;
          });
}]);

app.controller('AppCtrl1', ['$scope', '$window', '$http', function($scope, $window, $http) {
        $scope.url = 'data1.json';
        $scope.method ='GET' 
        $http({method: $scope.method, url: $scope.url})
          .success(function(data) {
            $scope.graph1 = data;
            console.log($scope.graph1);
          })
          .error(function(err) {
            $scope.erromsg = err;
          });
}]);

/*

app.controller('AppCtrl', ['$scope', '$window', 'appService', function($scope, $window, appService) {


  var get = function() {
    appService.get().then(function(promise) {
	  if (angular.isDefined(promise.error) && promise.error === 0) {
	    $scope.graph = {error: promise.error, data: {nodes: promise.nodes, edges: promise.edges}, options: promise.options};	
	  }
	}, function(promise) {
	  console.error('appService.promise.error', promise);
	});	
  };

  
*/

  /*
  $scope.callbackFunction = function(params) {
  	$window.alert( angular.toJson(params) );
  };
  */

/*
  get();

}]);


app.factory('appService', ['$q', '$http', function($q, $http) {
  return {
    get: function(method, url) {	    
      var deferred = $q.defer();
      $http.get('data.json')
        .success(function(response) {
          console.log(response);
          deferred.resolve(response);
        })
        .error(function() {
          deferred.reject("Error! @app.appService");
      	});
      return deferred.promise;
    }        
  };
}]);

*/
