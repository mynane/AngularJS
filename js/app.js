var app = angular.module('app', []).config(function($routeProvider){
	$routeProvider.when('/login',{
		templateUrl:'register.html',
		controller: 'LoginController'
	})
	$routeProvider.when('/home',{
		templateUrl : 'home.html',
		controller : 'homeController'
	})
	$routeProvider.otherwise({ redirectTo : '/login' })
});
app.controller('LoginController',function(){

})
app.controller('homeController', function(){
	
})