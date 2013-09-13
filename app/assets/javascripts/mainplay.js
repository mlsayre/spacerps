var rocktallyfight=0;
var papertallyfight=0;
var scissorstallyfight=0;
var enemymovenumberpick;
var enemymoveshow;
var playermove; //1=rock, 2=paper, 3=scissors
var playershieldpoints=50;
var playerhullpoints=100;

function BeginFight(){
	document.getElementById('playerhpshow').innerHTML=playerhullpoints;
	document.getElementById('playerspshow').innerHTML=playershieldpoints;
	document.getElementById('enemyhpshow').innerHTML=enhullpoints;
	document.getElementById('enemyspshow').innerHTML=enshieldpoints;
}

// player input
function PlayRock() {
	playermove=1;
	document.getElementById('PlayerMoveShow').innerHTML='You play ROCK MISSILE!';
	EnemyMove();
	rocktallyfight += 1 ;
	document.getElementById('RockTallyFight').innerHTML=rocktallyfight;
	
}

function PlayPaper() {
	playermove=2;
	document.getElementById('PlayerMoveShow').innerHTML='You play PLASMATIC PAPER!';
	EnemyMove();
	papertallyfight += 1 ;
	document.getElementById('PaperTallyFight').innerHTML=papertallyfight;
	
}

function PlayScissors() {
	playermove=3;
	document.getElementById('PlayerMoveShow').innerHTML='You play SCISSOR SLICER!';
	EnemyMove();
	scissorstallyfight += 1 ;
	document.getElementById('ScissorsTallyFight').innerHTML=scissorstallyfight;
	
}

// Enemy randomly chooses its move
function EnemyMove() {
	enemymovenumberpick = Math.floor((Math.random()*3)+1);
	if (enemymovenumberpick == 1){
		CompareAgainstRock();
		enemymoveshow = "Enemy plays ROCK MISSILE!";
	}
	if (enemymovenumberpick == 2){
		CompareAgainstPaper();
		enemymoveshow = "Enemy plays PLASMATIC PAPER!";
	}
	if (enemymovenumberpick == 3){
		CompareAgainstScissors();
		enemymoveshow = "Enemy plays SCISSOR SLICER!";
	}
	document.getElementById('EnemyMoveShow').innerHTML=enemymoveshow;
	
}

// Comparing player against enemy
function CompareAgainstRock() {
	// enemy plays rock
	if (enemymovenumberpick == 1){
		if (playermove == 1){
			document.getElementById('AttackResultShow').innerHTML='Weapons cancel eachother out! Small damage from kickback.';
			PlayerMinorDamage();
			EnemyMinorDamage();
		}
		if (playermove == 2){
			document.getElementById('AttackResultShow').innerHTML='Plasmatic Paper obliterates Rock Missile! Enemy takes full damage.';
			EnemyFullDamage();
		}
		if (playermove == 3){
			document.getElementById('AttackResultShow').innerHTML='Scissor Slicer misses Rock Missile! Player takes full damage.';
			PlayerFullDamage();
		}
		
	}
}

function CompareAgainstPaper() {
	// enemy plays paper
	if (enemymovenumberpick == 2){
		if (playermove == 1){
			document.getElementById('AttackResultShow').innerHTML='Rock Missile defused by Plasmatic Paper! Player takes full damage.';
			PlayerFullDamage();
		}
		if (playermove == 2){
			document.getElementById('AttackResultShow').innerHTML='Weapons cancel eachother out! Small damage from kickback.';
			PlayerMinorDamage();
			EnemyMinorDamage();
		}
		if (playermove == 3){
			document.getElementById('AttackResultShow').innerHTML='Scissor Slicer slices through Plasmatic Paper! Enemy takes full damage.';
			EnemyFullDamage();
		}
	}
}
	
function CompareAgainstScissors(){	
	// enemy plays scissors
	if (enemymovenumberpick == 3){
		if (playermove == 1){
			document.getElementById('AttackResultShow').innerHTML='Rock Missile eludes Scissor Slicer! Enemy takes full damage.';
			EnemyFullDamage();
		}
		if (playermove == 2){
			document.getElementById('AttackResultShow').innerHTML='Plasmatic Paper skewered by Scissor Slicer! Player takes full damage.';
			PlayerFullDamage();
		}
		if (playermove == 3){
			document.getElementById('AttackResultShow').innerHTML='Weapons cancel eachother out! Small damage from kickback.';
			PlayerMinorDamage();
			EnemyMinorDamage();
		}
	}
}

function PlayerFullDamage(){
	if (playershieldpoints >= 5){
				playershieldpoints -= 5;
				document.getElementById('playerspshow').innerHTML=playershieldpoints;
			}		
			else if (playershieldpoints <= 4 && playershieldpoints >= 1){
				var plshtohu = 5 - playershieldpoints;
				playershieldpoints -= playershieldpoints;
				document.getElementById('playerspshow').innerHTML=playershieldpoints;
				document.getElementById('playerhpshow').innerHTML=playerhullpoints -= plshtohu;
				playershieldpoints -= 5;
			}
			else if (playershieldpoints <= 0){
				playershieldpoints <= 5;
				document.getElementById('playerspshow').innerHTML='SHIELDS DOWN';
				playerhullpoints -= 5;
				document.getElementById('playerhpshow').innerHTML=playerhullpoints;
			}
	if (playerhullpoints <= 0){
		document.getElementById('playerhpshow').innerHTML='DESTROYED!';
		GameOver();
	}
}

function EnemyFullDamage(){
	if (enshieldpoints >= 5){
				enshieldpoints -= 5;
				document.getElementById('enemyspshow').innerHTML=enshieldpoints;
			}		
			else if (enshieldpoints <= 4 && enshieldpoints >= 1){
				var enshtohu = 5 - enshieldpoints;
				enshieldpoints -= enshieldpoints;
				document.getElementById('enemyspshow').innerHTML=enshieldpoints;
				document.getElementById('enemyhpshow').innerHTML=enhullpoints -= enshtohu;
				enshieldpoints -= 5;
			}
			else if (enshieldpoints <= 0){
				enshieldpoints <= 5;
				document.getElementById('enemyspshow').innerHTML='SHIELDS DOWN';
				enhullpoints -= 5;
				document.getElementById('enemyhpshow').innerHTML=enhullpoints;
			}
	if (enhullpoints <= 0){
		document.getElementById('enemyhpshow').innerHTML='DESTROYED!';
		BattleVictory();
	}
}

function PlayerMinorDamage(){
	if (playershieldpoints >= 1){
				playershieldpoints -= 1;
				document.getElementById('playerspshow').innerHTML=playershieldpoints;
			}		
			else if (playershieldpoints <= 0){
				playershieldpoints <= 1;
				document.getElementById('playerspshow').innerHTML='SHIELDS DOWN';
				playerhullpoints -= 1;
				document.getElementById('playerhpshow').innerHTML=playerhullpoints;
			}
	if (playerhullpoints <= 0){
		document.getElementById('playerhpshow').innerHTML='DESTROYED!';
		GameOver();
	}
}

function EnemyMinorDamage(){
	if (enshieldpoints >= 1){
				enshieldpoints -= 1;
				document.getElementById('enemyspshow').innerHTML=enshieldpoints;
			}		
			else if (enshieldpoints <= 0){
				enshieldpoints <= 1;
				document.getElementById('enemyspshow').innerHTML='SHIELDS DOWN';
				enhullpoints -= 1;
				document.getElementById('enemyhpshow').innerHTML=enhullpoints;
			}
	if (enhullpoints <= 0){
		document.getElementById('enemyhpshow').innerHTML='DESTROYED!';
		BattleVictory();
	}
}


// Won a battle
function BattleVictory(){
	// stuff here
}

// Game Over! Hull points down to 0
function GameOver(){
	// stuff here
}