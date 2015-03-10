// www/js/tech-learning-angular.js
// Test if localStorage is present and supported in the browser
if (typeof(localStorage) == 'undefined') {
  localStorage = new Object();
  localStorage.getItem = function(key) { }
  localStorage.setItem = function(key, value) { }
  localStorage.clear = function() { }
}
 
 
var todoApp = angular.module('tech-learning', [])
  .controller('TodoController', ['$scope', function($scope) {
    $scope.load = function() {
      var todosJSON = localStorage.getItem("todos-angular");
      if (todosJSON) {
        return JSON.parse(todosJSON);
      } else {
        return [];
      }
    }
 
    $scope.todos = $scope.load();
 
    $scope.add = function() {
      $scope.todos.push({text: $scope.todoText, done: false});
      $scope.todoText = '';
      $scope.persist();
    };
 
    $scope.deleteTodo = function(todo) {
      var index = $.inArray(todo, $scope.todos);
      if (index > -1) {
        $scope.todos.splice(index, 1);
      }
      $scope.persist();
    };
 
    $scope.persist = function() {
      localStorage.setItem("todos-angular", JSON.stringify($scope.todos));
    };
  }]);
