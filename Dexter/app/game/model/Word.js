var Word = function (letters) {
	this.letters = letters;

	this.compare = function(str2){
	  let em =0;
	  let nm = 0;
	  let bool = [];
	  
	  str1 = this.letters.join("").toUpperCase();
	  str2 = str2.toUpperCase();
	  
	  bool.length = 26;
	  for(let i=0; i< bool.length ; i++){
	    bool[i]={positions:[], count : 0};
	  }
	  
	  if(str1.length !== str2.length){
	    throw "Invalid matching word";
	  }

	  for(let index in str1){
	    bool[str1.charCodeAt(index) - 65].count++;
	    bool[str1.charCodeAt(index) - 65].positions.push(index);
	  }

	  for(let index in str2){
	    if(bool[str2.charCodeAt(index) - 65].count!= 0){
	      let indexAt = bool[str2.charCodeAt(index) - 65].positions.indexOf(index);
	      if(indexAt !== -1){
	        bool[str2.charCodeAt(index) - 65].positions.splice(indexAt,1);
	        em++;
	      }
	      else{
	        nm++;
	      }
	      bool[str2.charCodeAt(index) - 65].count--;
	    }
	   
	  }
	  
	  return {em : em, nm : nm};
	};
}