(function(){
'use strict';

	angular.module("app").service('WordService', function(){
	
	this.currentWord = "";

	this.createGame = function (n) {
		this.currentWord = "Four";	
	};

	this.evaluate = function(turn){
		turn.updateMatch(this.currentWord);
		return turn;
	};
});
})();


