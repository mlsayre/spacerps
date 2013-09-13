var rocktallyfight=0;
var papertallyfight=0;
var scissorstallyfight=0;

function PlayRock() {
	rocktallyfight += 1 ;
	document.getElementById('RockTallyFight').innerHTML=rocktallyfight;
	
}

function PlayPaper() {
	papertallyfight += 1 ;
	document.getElementById('PaperTallyFight').innerHTML=papertallyfight;
	
}

function PlayScissors() {
	scissorstallyfight += 1 ;
	document.getElementById('ScissorsTallyFight').innerHTML=scissorstallyfight;
	
}