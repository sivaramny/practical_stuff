app.config(function($routeProvider){
	$routeProvider.
            /* Monitor menu routes starts here */
            when('/introduction', {
                templateUrl: 'views/introduction.html'
            }).
            when('/terminology', {
                templateUrl: 'views/terminology.html'
            }).
            when('/expressions', {
                templateUrl: 'views/expressions.html'
            }).
            when('/filters', {
                templateUrl: 'views/filters.html'
            }).
            when('/setup', {
                templateUrl: 'views/env-setup.html'
            }).
            when('/di', {
                templateUrl: 'views/di.html'
            })
});