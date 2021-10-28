var word;
var chances = 11;
var n;
var totalLetterIsInWord = 0;
var letterIsNot = " The following letters do not exist in the word : ";

function add() {
	word = document.getElementById('text').value;
	word = word.toUpperCase();
	document.getElementById("vvv").disabled = true;
	n = word.length;
	for (let i = 0; i < n; ++i) {
          document.getElementById("buttons").innerHTML +=`<input type="password" id="` + i + `" size = 1 value = ` + word[i] + ` readonly>`;
    }
    document.getElementById('begin').innerHTML = ` 
    		<label class="form-label"> <h3>Try your luck and enter a letter</h3></label>    			
        <input type="text" class="form-control" id="letter">              
        <button class="btn btn-primary" onclick="return search()">Search</button>
        <div class="card">
          <div class="card-body">
	          <div class="card">
	            <div class="card-body">
	    					<img src="hang0.png" id="hang" class="card-img-center">
	    				</div>
    				</div>
            <div style="font-size:200%;" id="message"></div>                
          </div>
        </div>`
    document.getElementById('text').value = "";    
	return false;
}

function search() {		
	let letterIsInWord = document.getElementById('letter').value;
	var image = document.getElementById('hang');
	letterIsInWord = letterIsInWord.toUpperCase();
	if (letterIsInWord != "") {
		let idx = word.indexOf(letterIsInWord); 
		if (idx === -1) {
			--chances;		
			letterIsNot += " " + letterIsInWord;
			document.getElementById('message').innerHTML = " You still have " + chances + " chances." + letterIsNot;
			 image.src = "hang" + (11 - chances) + ".png";
		} else {
			while (idx != -1) {
			  	let seeLetter = document.getElementById(idx);
				if(seeLetter.type === "password"){
					seeLetter.type = 'text';
					++totalLetterIsInWord;
				}
				idx = word.indexOf(letterIsInWord, idx + 1);
			}
		}
		if (chances === 0) {
			document.getElementById('message').innerHTML = "Game Over";
			document.getElementById("letter").disabled = true;
		}
		if (totalLetterIsInWord === n) {
			document.getElementById('message').innerHTML = "YOU WIN!!!";
			document.getElementById("letter").disabled = true;
		}
	}
	document.getElementById('letter').value = "";
	return false;
}	
