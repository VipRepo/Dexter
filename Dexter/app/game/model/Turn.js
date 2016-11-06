function Turn(letters){
	
	this.normalMatch =-1;
	this.exactMatch = -1;
	this.isDone = false;
	this.currentWord = new Word(letters);

	this.updateMatch = function(finalWord){
		let matchObj = this.currentWord.compare(finalWord);
		this.normalMatch = matchObj.nm;
		this.exactMatch = matchObj.em;

		if(this.exactMatch == this.currentWord.letters.length){
			this.isDone = true;
		}
	}

}