// www/js/tech-learning-angular.js
// Test if localStorage is present and supported in the browser
if (typeof(localStorage) == 'undefined') {
  localStorage = new Object();
  localStorage.getItem = function(key) { }
  localStorage.setItem = function(key, value) { }
  localStorage.clear = function() { }
}
 
 
var localStorageTestApp = angular.module('localStorageTestApp', [])
  .controller('LogController', ['$scope', function($scope) {
    var logsJSON = localStorage.getItem("logsData");
    if(logsJSON == null){
	    $scope.logs = [
		       {name: 'Emergency ', value: 'enabled'},
		       {name: 'Alert', value: 'disabled'}, 
		       {name: 'Critical', value: 'enabled'},
		       {name: 'Error', value: 'disabled'},
	 	       {name: 'Notification', value: 'disabled'},
	 	       {name: 'Information', value: 'enabled'}, 
		       {name: 'Debugging', value: 'disabled'},
		       {name: 'Warning ', value: 'enabled'}
		 ];
 
    } 
    else{
	$scope.logs = JSON.parse(logsJSON);
    }
    $scope.save = function() {
      $scope.persist();
    };
 
    $scope.persist = function() {
      localStorage.setItem("logsData", JSON.stringify($scope.logs));
    };
  }]);
