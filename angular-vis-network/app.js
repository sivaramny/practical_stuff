'use strict';

var app = angular.module('app.visgraph', ['angular.visgraph']);


app.controller('AppCtrl', ['$scope', '$window', '$http', function($scope, $window, $http) {
        $scope.url = 'data.json';
        $scope.method ='GET';
        $http({method: $scope.method, url: $scope.url})
          .success(function(data) {
            $scope.graph = data;
            $scope.graph.options  = {"width":"100%", "height":"600px", groups: {
                 'switch': {
                   shape: 'triangle',
                   color: '#FF9900' 
                  },
                  desktop: {
                    shape: 'dot',
                    color: "#2B7CE9" // blue
                  },
                  mobile: {
                    shape: 'dot',
                    color: "#5A1E5C" // purple
                  },
                  server: {
                    shape: 'square',
                    color: "#C5000B" // red
                  },
                  internet: {
                    shape: 'square',
                    color: "#109618" // green
                  }
              }
            };
            angular.forEach($scope.graph.nodes,function(node){
              //-setting group key to all objects
              //-node.title = "switch";
              //-setting different group key to each object
              $scope.graph.nodes[0].group = "switch";
              $scope.graph.nodes[1].group = "desktop";
              $scope.graph.nodes[2].group = "internet";
              $scope.graph.nodes[3].group = "mobile";
              $scope.graph.nodes[4].group = "mobile";
              $scope.graph.nodes[5].group = "internet";
            });
            //-console.log($scope.graph);
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
            $scope.graph1.options  = {"width":"100%", "height":"600px"};
            angular.forEach($scope.graph1.edges,function(edge){
              edge.color = "green";
            });
            //-console.log($scope.graph1);
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
