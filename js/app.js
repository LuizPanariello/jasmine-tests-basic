var app = angular.module('app', []);

app.controller('mainController', function($scope){
	$scope.sayHi = "Hi!";
});

app.directive('iWannaSayHi',  function(){
	return {
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		template: 'I said hi already!'
	};
});

app.filter('reverse', function(){
	return function(string){
		return string.split("").reverse().join("");
	};
})