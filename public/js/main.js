angular.module('fotomidia', ['diretivas', 'ngAnimate', 'ngRoute'])
.config(function($routeProvider, $locationProvider) {
	
	$locationProvider.html5Mode(true);
	
	$routeProvider.when('/fotos', {
		templateUrl: 'partials/principal.html',
		controller: 'FotosController'
	});

	$routeProvider.when('/fotos/novo', {
		templateUrl: 'partials/cadastroFoto.html',
	});

	$routeProvider.otherwise({redirectTo: 'fotos'});
});