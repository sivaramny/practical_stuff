    angular.module('themeApp', [])  
        .controller('themeController', function ($scope) {  
 
            // set the default theme   
            $scope.css = 'Red';  
          
            // create the list of themes  
            $scope.bootstraps = [  
              { name: 'Red', url: 'Red' },  
              { name: 'Blue', url: 'Blue' },  
              { name: 'Green', url: 'Green' }  
            ];          
        });  