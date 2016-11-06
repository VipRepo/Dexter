	(function(){
	'use strict';	
	

	angular.module("app").controller('GameController', ['$scope','WordService', function($scope, wordService){
	$scope.wordLength;
	$scope.letters = [];
	$scope.turns=[];
	$scope.isDone = false;

	$scope.createGame= function(n){
		if(n<=0){
			throw "Enter valid number";
		}
		console.log(n);
		wordService.createGame(n);
		$scope.letters.length = n;
		$scope.letters.fill("");
	};

	$scope.go = function(){
		let turn = new Turn(angular.copy($scope.letters));

		let updatedTurn = wordService.evaluate(turn);
			$scope.turns.push(updatedTurn);
		if(updatedTurn.isDone){
			$scope.isDone = true;
			$scope.message = "Congratulation!! You have guessed the word in "+$scope.turns.length+" turns";
		}

	
		$scope.letters.fill("");
	}

}]);

})();