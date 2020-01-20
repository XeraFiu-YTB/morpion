///////////////////////////////////////////
///// variables globales éventuelles/////
////////////////////////////////////////
	//const fs = require('fs')
	//const bdd = JSON.parse(fs.readFileSync("ligue.json", "utf8"))
var joueur = ['1','2'];
var tour = joueur[Math.floor(Math.random()*joueur.length)];
var caseCliquable = ['c0','c1','c2','c3','c4','c5','c6','c7','c8'];
var a = true;
var caseX = [];
var caseO = [];
var lvl1Clique = 0;
var limiteBloquage = 0;//utiliser pour éviter 2 bloquages
var limiteGagner = 0
var lBaccept = 0;
var nombreTour = 0; //Pour lvl impossible
var tourIA = 0
var bloquage = false
var gagner = false
var endGame = false
var premierCas = false
var deuxiemeCas = false
var troisiemeCas = false
var c0 = false, c1 = false, c2 = false, c3 = false,	c4 = false,	c5 = false,	c6 = false,	c7 = false,	c8 = false;
var couleurJ1 = '#39CC39'
var couleurJ2 = '#C41818'
var couleurBase = '#FFFFFF'
var temps = 0,
	heuresJeux = 0,
	minutesJeux = 0

/////////////////////////////////////////
///// abonnements///////////////////////
////////////////////////////////////////


function demarrer () {
		document.getElementById('colorChoice').value = `${couleurJ1}`
		document.getElementById('colorChoice2').value = `${couleurJ2}`
		document.getElementById('lvlChoice').addEventListener("change", level);
		document.getElementById('colorChoice').addEventListener("change", couleurJoueur1);
		document.getElementById('colorChoice2').addEventListener("change", couleurJoueur2);
		level();
		setInterval(time, 1000)
		time();
}
function reset() {
	for (var i = 0; i < 9; i ++){ // i++ = (i+1)
		let allCase = document.getElementById('c' + i)
		allCase.innerHTML = ' '
		allCase.style.backgroundColor = ''
		allCase.classList.remove("tdPersonne")
		allCase.classList.remove("tdWinner")
		allCase.removeEventListener("click", lvl0);
		allCase.removeEventListener("click", lvl1);
		allCase.removeEventListener("click", lvl2);
		allCase.removeEventListener("click", lvl3);
		allCase.removeEventListener("click", lvl4);
		//allCase.classList.remove("tdO")
		//allCase.classList.remove("tdX")	
	}
	document.getElementById('winner').innerHTML = ' '
	document.getElementById('table').classList.remove("rotationAll")
	joueur = ['1','2'];
	tour = joueur[Math.floor(Math.random()*joueur.length)];
	caseCliquable = ['c0','c1','c2','c3','c4','c5','c6','c7','c8'];
	a = true;
	caseX = [];
	caseO = [];
	lvl1Clique = 0;
	limiteBloquage = 0;//utiliser pour éviter 2 bloquages
	limiteGagner = 0
	lBaccept = 0;
	nombreTour = 0; //Pour lvl impossible
	tourIA = 0
	bloquage = false
	gagner = false
	endGame = false
	premierCas = false
	deuxiemeCas = false
	troisiemeCas = false
	c0 = false, c1 = false, c2 = false, c3 = false,	c4 = false,	c5 = false,	c6 = false,	c7 = false,	c8 = false;
	demarrer()
	}


////////////////////////////////////////
//////////////fonctions/////////////////
////////////////////////////////////////
function time() {
	temps++
	var jeuxVerif = false
	var jours = new Array("dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche")
	var mois = new Array("janvier", "fevrier", "mars", "avril", "mai", "juin", "juillet", "aout", "septembre", "octobre", "novembre", "decembre")
	var date = new Date()
	var heures = date.getHours()
	var minutes = date.getMinutes()
	var jours = jours[date.getDay()] + " ";
	var	joursNumber = date.getDate() + " ";
	var mois = mois[date.getMonth()] + " ";
	var	années = date.getFullYear();
	if(minutes < 10) {minutes = "0" + minutes}
	document.getElementById('heure').innerHTML = `${heures}h${minutes} le ${jours} ${joursNumber} ${mois} ${années}`
	if(temps == 60)	{temps = 0, minutesJeux++}
	if(minutesJeux == 60) {minutesJeux = 0, heuresJeux++}
	if(temps < 10) {temps = `0${temps}`}
	document.getElementById('tempsDeJeux').innerHTML = `Vous jouez depuis ${heuresJeux}:${minutesJeux}:${temps}`
}

function couleurJoueur1() {
	couleurJ1 = document.getElementById('colorChoice').value
	console.log('couleurJ1:' + couleurJ1)
}
function couleurJoueur2() {
	couleurJ2 = document.getElementById('colorChoice2').value
	console.log('couleurJ2:' + couleurJ2)
}

function level() {
	var level = document.getElementById('lvlChoice');
	choice = level.selectedIndex
	console.log(level.options[choice].text)
	if(a == false) {reset(),console.log('--- Changement de Niveau ---')}
	if(choice == 1 && a == true) {
		a = false
		for (var i = 0; i < 9; i ++){ // i++ = (i+1)
		document.getElementById('c' + i).addEventListener("click", lvl0)	
	}}
	if(choice == 2 && a == true) {
		a = false
		for (var i = 0; i < 9; i ++){ // i++ = (i+1)
		document.getElementById('c' + i).addEventListener("click", lvl1)	
	}}
	if(choice == 3 && a == true) {
		a = false
		for (var i = 0; i < 9; i ++){ // i++ = (i+1)
		document.getElementById('c' + i).addEventListener("click", lvl2)	
	}}
	if(choice == 4 && a == true) {
		a = false
		for (var i = 0; i < 9; i ++){ // i++ = (i+1)
		document.getElementById('c' + i).addEventListener("click", lvl3)	
	}}
	if(choice == 5 && a == true) {
		a = false
		for (var i = 0; i < 9; i ++){ // i++ = (i+1)
		document.getElementById('c' + i).addEventListener("click", lvl4)	
	}}
}

function lvl0() {
	if(endGame == false) {
	if(tour == 1) {
		this.innerHTML = "X"
		this.style.backgroundColor = `${couleurJ1}`
		caseX.push(`${this.id}`)
		console.log(caseX)
	} else {
		this.innerHTML = "O"
		this.style.backgroundColor = `${couleurJ2}`
		caseO.push(`${this.id}`)
		console.log(caseO)
	}
	this.removeEventListener("click", lvl0);
	checkResult();
	}
}

function lvl1() {
	if(endGame == false) {
		lvl1Clique++
		this.innerHTML = "X"
		this.style.backgroundColor = `${couleurJ1}`
		caseX.push(`${this.id}`)
		caseCliquable.splice(caseCliquable.indexOf(this.id), 1)
		this.removeEventListener("click", lvl1)
		console.log('caseX : ' + caseX)
		checkResult()
		if(lvl1Clique < 5) {caseRandom()}
		
	checkResult();
	}
}

function lvl2() {
	if(endGame == false) {
		this.innerHTML = "X"
		this.style.backgroundColor = `${couleurJ1}`
		caseX.push(`${this.id}`)
		caseCliquable.splice(caseCliquable.indexOf(this.id), 1)
		this.removeEventListener("click", lvl2)
		checkResult()
		verifBloquage()
		checkResult()
		if(bloquage == false) {caseRandom()}
		lBaccept = lBaccept + 1
		checkResult();
	}
}
function lvl3() {
	if(endGame == false) {
		this.innerHTML = "X"
		this.style.backgroundColor = `${couleurJ1}`
		caseX.push(`${this.id}`)
		caseCliquable.splice(caseCliquable.indexOf(this.id), 1)
		this.removeEventListener("click", lvl3)
		checkResult()
		verifGagner()
		checkResult()
		if(gagner == false) {verifBloquage()}
		checkResult()
		if(bloquage == false) {caseRandom()}
		lBaccept = lBaccept + 1
		checkResult()
	}
}
function lvl4() {
	if(endGame == false) {
/*1er tour : c0,c2,c6,c8 --> mettre en c4 				OK
2ème tour: mettre en c1,c3,c5,c7 NON FONCTIONNEL suffit juste de bloquer directement
puis bloquer	OK

1er tour : c4 --> mettre en c0,c2,c6,c8 OK
puis bloquer

1er tour : c1,c3,c5,c7 --> mettre c4
2ème tour: si x3,o4,x5 (aligné) --> mettre en c0,c2,c6,c8
puis bloquer*/
		this.innerHTML = "X"
		this.style.backgroundColor = `${couleurJ1}`
		caseX.push(`${this.id}`)
		caseCliquable.splice(caseCliquable.indexOf(this.id), 1)
		this.removeEventListener("click", lvl4)
		console.log("nombreTour:" + nombreTour)
		checkResult()
		//Tour 0
		if(nombreTour == 0) {limiteBloquage++, limiteGagner++}//car ne demande pas verifGagner() et verifBloquage()
		//1er Cas
		if((caseX.indexOf("c0") != -1 || caseX.indexOf("c2") != -1 || caseX.indexOf("c6") != -1 || caseX.indexOf("c8") != -1) && nombreTour == 0 && endGame == false) {
			document.getElementById('c4').innerHTML = 'O'
			document.getElementById('c4').style.backgroundColor = `${couleurJ2}`
			caseO.push('c4')
			caseCliquable.splice(caseCliquable.indexOf('c4'), 1)
			document.getElementById('c4').removeEventListener("click", lvl4)
			premierCas = true
			tourIA = 1
			console.log('--_-- 1er CAS --_--')
		}
		//2ème Cas
		if(caseX.indexOf("c4") != -1 && nombreTour == 0 && endGame == false) {
			let possible = ['c0','c2','c6','c8']
			let caseRandom = possible[Math.floor(Math.random()*possible.length)]
			document.getElementById(caseRandom).innerHTML = 'O'
			document.getElementById(caseRandom).style.backgroundColor = `${couleurJ2}`
			document.getElementById(caseRandom).removeEventListener("click", lvl4)
			caseO.push(caseRandom)
			caseCliquable.splice(caseCliquable.indexOf(caseRandom), 1)
			deuxiemeCas = true
			tourIA = 1
			console.log('--_-- 2ème CAS --_--')
		}
		//3ème Cas
		if((caseX.indexOf("c1") != -1 || caseX.indexOf("c3") != -1 || caseX.indexOf("c5") != -1 || caseX.indexOf("c7") != -1) && nombreTour == 0 && endGame == false) {
			document.getElementById('c4').innerHTML = 'O'
			document.getElementById('c4').style.backgroundColor = `${couleurJ2}`
			caseO.push('c4')
			caseCliquable.splice(caseCliquable.indexOf('c4'), 1)
			document.getElementById('c4').removeEventListener("click", lvl4)
			troisiemeCas = true
			console.log('--_-- 3ème CAS --_--')
		}

		//Tour 1
		if(((caseX.indexOf("c1") != -1 && caseX.indexOf("c7") != -1) || (caseX.indexOf("c3") != -1 && caseX.indexOf("c5"))) && nombreTour == 1 && troisiemeCas == true &&  endGame == false) {
			let possible = ['c0','c2','c6','c8']
			let caseRandom = possible[Math.floor(Math.random()*possible.length)]
			document.getElementById(caseRandom).innerHTML = 'O'
			document.getElementById(caseRandom).style.backgroundColor = `${couleurJ2}`
			document.getElementById(caseRandom).removeEventListener("click", lvl4)
			caseO.push(caseRandom)
			caseCliquable.splice(caseCliquable.indexOf(caseRandom), 1)
			limiteBloquage = 2
			tourIA = 2
			limiteGagner++
			limiteBloquage++
		}		
		
		//Tour > 1
		//1er cas
		if(premierCas == true && nombreTour >= 1)  {
			verifGagner()
			checkResult()
			if(gagner == false) {verifBloquage()}
			checkResult()
			console.log('verifBloquage PremierCas OK bloquage:' + bloquage)
			if(bloquage == false){caseRandom()}
		}
		//2ème cas
		if(deuxiemeCas == true && nombreTour >= 1) {
			verifGagner()
			checkResult()
			if(gagner == false) {verifBloquage()}
			checkResult()
			console.log('verifBloquage deuxiemeCas OK bloquage:' + bloquage)
			if(bloquage == false){caseRandom()}
		}
		//3ème cas
		if(troisiemeCas == true && nombreTour > 1) {
			verifGagner()
			checkResult()
			if(gagner == false) {verifBloquage()}
			checkResult()
			console.log('verifBloquage troisiemeCas OK bloquage:' + bloquage)
			if(bloquage == false){caseRandom()}
		}
		nombreTour = nombreTour + 1
		lBaccept = lBaccept + 1
		checkResult();
	}
}
function verifGagner() {
	if(endGame == false) {
		gagner = false
	console.log('limiteGagner : ' + limiteGagner)
		console.log('lBaccept : ' + lBaccept)
		//détecte gagner possible
			//1er ligne

		if(caseO.indexOf("c0") != -1 && caseO.indexOf("c1") != -1 && caseO.indexOf("c2") == -1  && caseX.indexOf("c2") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c2 1erligne')
			c2 = true
			gagner = true
		}
		if(caseO.indexOf("c1") != -1 && caseO.indexOf("c2") != -1 && caseO.indexOf("c0") == -1 && caseX.indexOf("c0") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c0 1erligne')
			c0 = true
			gagner = true
		}
		if(caseO.indexOf("c0") != -1 && caseO.indexOf("c2") != -1 && caseO.indexOf("c1") == -1 && caseX.indexOf("c1") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c1 1erligne')
			c1 = true
			gagner = true
		}
			//2ème ligne
		if(caseO.indexOf("c3") != -1 && caseO.indexOf("c4") != -1 && caseO.indexOf("c5") == -1 && caseX.indexOf("c5") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c5 2emeligne')
			c5 = true
			gagner = true
		}
		if(caseO.indexOf("c4") != -1 && caseO.indexOf("c5") != -1 && caseO.indexOf("c3") == -1 && caseX.indexOf("c3") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c3 2emeligne')
			c3 = true
			gagner = true
		}
		if(caseO.indexOf("c3") != -1 && caseO.indexOf("c5") != -1 && caseO.indexOf("c4") == -1 && caseX.indexOf("c4") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c4 2emeligne')
			c4 = true
			gagner = true
		}
			//3ème ligne
		if(caseO.indexOf("c6") != -1 && caseO.indexOf("c7") != -1 && caseO.indexOf("c8") == -1 && caseX.indexOf("c8") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c8 3emeligne')
			c8 = true
			gagner = true
		}
		if(caseO.indexOf("c7") != -1 && caseO.indexOf("c8") != -1 && caseO.indexOf("c6") == -1 && caseX.indexOf("c6") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c6 3emeligne')
			c6 = true
			gagner = true
		}
		if(caseO.indexOf("c6") != -1 && caseO.indexOf("c8") != -1 && caseO.indexOf("c7") == -1 && caseX.indexOf("c7") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c7 3emeligne')
			c7 = true
			gagner = true
		}
			//1er colonne
		if(caseO.indexOf("c0") != -1 && caseO.indexOf("c3") != -1 && caseO.indexOf("c6") == -1 && caseX.indexOf("c6") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c6 1ercolonne')
			c6 = true
			gagner = true
		}
		if(caseO.indexOf("c3") != -1 && caseO.indexOf("c6") != -1 && caseO.indexOf("c0") == -1 && caseX.indexOf("c0") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c0 1ercolonne')
			c0 = true
			gagner = true
		}
		if(caseO.indexOf("c0") != -1 && caseO.indexOf("c6") != -1 && caseO.indexOf("c3") == -1 && caseX.indexOf("c3") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c3 1ercolonne')
			c3 = true
			gagner = true
		}
			//2ème colonne
		if(caseO.indexOf("c1") != -1 && caseO.indexOf("c4") != -1 && caseO.indexOf("c7") == -1 && caseX.indexOf("c7") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c7 2emecolonne')
			c7 = true
			gagner = true
		}
		if(caseO.indexOf("c4") != -1 && caseO.indexOf("c7") != -1 && caseO.indexOf("c1") == -1 && caseX.indexOf("c1") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c1 2emecolonne')
			c1 = true
			gagner = true
		}
		if(caseO.indexOf("c1") != -1 && caseO.indexOf("c7") != -1 && caseO.indexOf("c4") == -1 && caseX.indexOf("c4") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c4 2emecolonne')
			c4 = true
			gagner = true
		}
			//3ème colonne
		if(caseO.indexOf("c2") != -1 && caseO.indexOf("c5") != -1 && caseO.indexOf("c8") == -1 && caseX.indexOf("c8") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c8 3emecolonne')
			c8 = true
			gagner = true
		}
		if(caseO.indexOf("c5") != -1 && caseO.indexOf("c8") != -1 && caseO.indexOf("c2") == -1 && caseX.indexOf("c2") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c2 3emecolonne')
			c2 = true
			gagner = true
		}
		if(caseO.indexOf("c2") != -1 && caseO.indexOf("c8") != -1 && caseO.indexOf("c5") == -1 && caseX.indexOf("c5") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c5 3emecolonne')
			c5 = true
			gagner = true
		}
			//diagonale "\"
		if(caseO.indexOf("c0") != -1 && caseO.indexOf("c4") != -1 && caseO.indexOf("c8") == -1 && caseX.indexOf("c8") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c8 1Diagonale')
			c8 = true
			gagner = true
		}
		if(caseO.indexOf("c4") != -1 && caseO.indexOf("c8") != -1 && caseO.indexOf("c0") == -1 && caseX.indexOf("c0") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c0 1Diagonale')
			c0 = true
			gagner = true
		}
		if(caseO.indexOf("c0") != -1 && caseO.indexOf("c8") != -1 && caseO.indexOf("c4") == -1 && caseX.indexOf("c4") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c4 1Diagonale')
			c4 = true
			gagner = true
		}
			//diagonale "/"
		if(caseO.indexOf("c6") != -1 && caseO.indexOf("c4") != -1 && caseO.indexOf("c2") == -1 && caseX.indexOf("c2") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c2 2Diagonale')
			c2 = true
			gagner = true
		}
		if(caseO.indexOf("c4") != -1 && caseO.indexOf("c2") != -1 && caseO.indexOf("c6") == -1 && caseX.indexOf("c6") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c6 2Diagonale')
			c6 = true
			gagner = true
		}
		if(caseO.indexOf("c6") != -1 && caseO.indexOf("c2") != -1 && caseO.indexOf("c4") == -1 && caseX.indexOf("c4") == -1 && limiteGagner == lBaccept) {
			console.log('gagner c4 2Diagonale')
			c4 = true
			gagner = true
		}
		if(gagner == true) {
			let already = false
			if(c0 == true && already == false){document.getElementById('c0').innerHTML = "O",document.getElementById("c0").style.backgroundColor = `${couleurJ2}`,caseO.push('c0'),caseCliquable.splice(caseCliquable.indexOf('c0'), 1),c0 = false, already = true}
			if(c1 == true && already == false){document.getElementById('c1').innerHTML = "O",document.getElementById("c1").style.backgroundColor = `${couleurJ2}`,caseO.push('c1'),caseCliquable.splice(caseCliquable.indexOf('c1'), 1),c1 = false, already = true}
			if(c2 == true && already == false){document.getElementById('c2').innerHTML = "O",document.getElementById("c2").style.backgroundColor = `${couleurJ2}`,caseO.push('c2'),caseCliquable.splice(caseCliquable.indexOf('c2'), 1),c2 = false, already = true}
			if(c3 == true && already == false){document.getElementById('c3').innerHTML = "O",document.getElementById("c3").style.backgroundColor = `${couleurJ2}`,caseO.push('c3'),caseCliquable.splice(caseCliquable.indexOf('c3'), 1),c3 = false, already = true}
			if(c4 == true && already == false){document.getElementById('c4').innerHTML = "O",document.getElementById("c4").style.backgroundColor = `${couleurJ2}`,caseO.push('c4'),caseCliquable.splice(caseCliquable.indexOf('c4'), 1),c4 = false, already = true}
			if(c5 == true && already == false){document.getElementById('c5').innerHTML = "O",document.getElementById("c5").style.backgroundColor = `${couleurJ2}`,caseO.push('c5'),caseCliquable.splice(caseCliquable.indexOf('c5'), 1),c5 = false, already = true}
			if(c6 == true && already == false){document.getElementById('c6').innerHTML = "O",document.getElementById("c6").style.backgroundColor = `${couleurJ2}`,caseO.push('c6'),caseCliquable.splice(caseCliquable.indexOf('c6'), 1),c6 = false, already = true}
			if(c7 == true && already == false){document.getElementById('c7').innerHTML = "O",document.getElementById("c7").style.backgroundColor = `${couleurJ2}`,caseO.push('c7'),caseCliquable.splice(caseCliquable.indexOf('c7'), 1),c7 = false, already = true}
			if(c8 == true && already == false){document.getElementById('c8').innerHTML = "O",document.getElementById("c8").style.backgroundColor = `${couleurJ2}`,caseO.push('c8'),caseCliquable.splice(caseCliquable.indexOf('c8'), 1),c8 = false, already = true}
			tourIA = tourIA + 1
			limiteBloquage++	//car empeche le bloquage pendant 1 tour
		} 
	limiteGagner++
	}
}
function verifBloquage() {
	if(endGame == false) {
		bloquage = false
	console.log('limiteBloquage : ' + limiteBloquage)
		console.log('lBaccept : ' + lBaccept)
		//détecte bloquage possible
			//1er ligne

		if(caseX.indexOf("c0") != -1 && caseX.indexOf("c1") != -1 && caseX.indexOf("c2") == -1  && caseO.indexOf("c2") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c2 1erligne')
			c2 = true
			bloquage = true
		}
		if(caseX.indexOf("c1") != -1 && caseX.indexOf("c2") != -1 && caseX.indexOf("c0") == -1 && caseO.indexOf("c0") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c0 1erligne')
			c0 = true
			bloquage = true
		}
		if(caseX.indexOf("c0") != -1 && caseX.indexOf("c2") != -1 && caseX.indexOf("c1") == -1 && caseO.indexOf("c1") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c1 1erligne')
			c1 = true
			bloquage = true
		}
			//2ème ligne
		if(caseX.indexOf("c3") != -1 && caseX.indexOf("c4") != -1 && caseX.indexOf("c5") == -1 && caseO.indexOf("c5") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c5 2emeligne')
			c5 = true
			bloquage = true
		}
		if(caseX.indexOf("c4") != -1 && caseX.indexOf("c5") != -1 && caseX.indexOf("c3") == -1 && caseO.indexOf("c3") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c3 2emeligne')
			c3 = true
			bloquage = true
		}
		if(caseX.indexOf("c3") != -1 && caseX.indexOf("c5") != -1 && caseX.indexOf("c4") == -1 && caseO.indexOf("c4") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c4 2emeligne')
			c4 = true
			bloquage = true
		}
			//3ème ligne
		if(caseX.indexOf("c6") != -1 && caseX.indexOf("c7") != -1 && caseX.indexOf("c8") == -1 && caseO.indexOf("c8") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c8 3emeligne')
			c8 = true
			bloquage = true
		}
		if(caseX.indexOf("c7") != -1 && caseX.indexOf("c8") != -1 && caseX.indexOf("c6") == -1 && caseO.indexOf("c6") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c6 3emeligne')
			c6 = true
			bloquage = true
		}
		if(caseX.indexOf("c6") != -1 && caseX.indexOf("c8") != -1 && caseX.indexOf("c7") == -1 && caseO.indexOf("c7") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c7 3emeligne')
			c7 = true
			bloquage = true
		}
			//1er colonne
		if(caseX.indexOf("c0") != -1 && caseX.indexOf("c3") != -1 && caseX.indexOf("c6") == -1 && caseO.indexOf("c6") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c6 1ercolonne')
			c6 = true
			bloquage = true
		}
		if(caseX.indexOf("c3") != -1 && caseX.indexOf("c6") != -1 && caseX.indexOf("c0") == -1 && caseO.indexOf("c0") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c0 1ercolonne')
			c0 = true
			bloquage = true
		}
		if(caseX.indexOf("c0") != -1 && caseX.indexOf("c6") != -1 && caseX.indexOf("c3") == -1 && caseO.indexOf("c3") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c3 1ercolonne')
			c3 = true
			bloquage = true
		}
			//2ème colonne
		if(caseX.indexOf("c1") != -1 && caseX.indexOf("c4") != -1 && caseX.indexOf("c7") == -1 && caseO.indexOf("c7") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c7 2emecolonne')
			c7 = true
			bloquage = true
		}
		if(caseX.indexOf("c4") != -1 && caseX.indexOf("c7") != -1 && caseX.indexOf("c1") == -1 && caseO.indexOf("c1") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c1 2emecolonne')
			c1 = true
			bloquage = true
		}
		if(caseX.indexOf("c1") != -1 && caseX.indexOf("c7") != -1 && caseX.indexOf("c4") == -1 && caseO.indexOf("c4") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c4 2emecolonne')
			c4 = true
			bloquage = true
		}
			//3ème colonne
		if(caseX.indexOf("c2") != -1 && caseX.indexOf("c5") != -1 && caseX.indexOf("c8") == -1 && caseO.indexOf("c8") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c8 3emecolonne')
			c8 = true
			bloquage = true
		}
		if(caseX.indexOf("c5") != -1 && caseX.indexOf("c8") != -1 && caseX.indexOf("c2") == -1 && caseO.indexOf("c2") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c2 3emecolonne')
			c2 = true
			bloquage = true
		}
		if(caseX.indexOf("c2") != -1 && caseX.indexOf("c8") != -1 && caseX.indexOf("c5") == -1 && caseO.indexOf("c5") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c5 3emecolonne')
			c5 = true
			bloquage = true
		}
			//diagonale "\"
		if(caseX.indexOf("c0") != -1 && caseX.indexOf("c4") != -1 && caseX.indexOf("c8") == -1 && caseO.indexOf("c8") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c8 1Diagonale')
			c8 = true
			bloquage = true
		}
		if(caseX.indexOf("c4") != -1 && caseX.indexOf("c8") != -1 && caseX.indexOf("c0") == -1 && caseO.indexOf("c0") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c0 1Diagonale')
			c0 = true
			bloquage = true
		}
		if(caseX.indexOf("c0") != -1 && caseX.indexOf("c8") != -1 && caseX.indexOf("c4") == -1 && caseO.indexOf("c4") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c4 1Diagonale')
			c4 = true
			bloquage = true
		}
			//diagonale "/"
		if(caseX.indexOf("c6") != -1 && caseX.indexOf("c4") != -1 && caseX.indexOf("c2") == -1 && caseO.indexOf("c2") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c2 2Diagonale')
			c2 = true
			bloquage = true
		}
		if(caseX.indexOf("c4") != -1 && caseX.indexOf("c2") != -1 && caseX.indexOf("c6") == -1 && caseO.indexOf("c6") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c6 2Diagonale')
			c6 = true
			bloquage = true
		}
		if(caseX.indexOf("c6") != -1 && caseX.indexOf("c2") != -1 && caseX.indexOf("c4") == -1 && caseO.indexOf("c4") == -1 && limiteBloquage == lBaccept) {
			console.log('bloquage c4 2Diagonale')
			c4 = true
			bloquage = true
		}
		if(bloquage == true) {
			var already = false
			if(c0 == true && already == false){document.getElementById('c0').innerHTML = "O",document.getElementById("c0").style.backgroundColor = `${couleurJ2}`,caseO.push('c0'),caseCliquable.splice(caseCliquable.indexOf('c0'), 1),c0 = false, already = true,console.log('/////////////////0')}
			if(c1 == true && already == false){document.getElementById('c1').innerHTML = "O",document.getElementById("c1").style.backgroundColor = `${couleurJ2}`,caseO.push('c1'),caseCliquable.splice(caseCliquable.indexOf('c1'), 1),c1 = false, already = true}
			if(c2 == true && already == false){document.getElementById('c2').innerHTML = "O",document.getElementById("c2").style.backgroundColor = `${couleurJ2}`,caseO.push('c2'),caseCliquable.splice(caseCliquable.indexOf('c2'), 1),c2 = false, already = true,console.log('/////////////////')}
			if(c3 == true && already == false){document.getElementById('c3').innerHTML = "O",document.getElementById("c3").style.backgroundColor = `${couleurJ2}`,caseO.push('c3'),caseCliquable.splice(caseCliquable.indexOf('c3'), 1),c3 = false, already = true}
			if(c4 == true && already == false){document.getElementById('c4').innerHTML = "O",document.getElementById("c4").style.backgroundColor = `${couleurJ2}`,caseO.push('c4'),caseCliquable.splice(caseCliquable.indexOf('c4'), 1),c4 = false, already = true}
			if(c5 == true && already == false){document.getElementById('c5').innerHTML = "O",document.getElementById("c5").style.backgroundColor = `${couleurJ2}`,caseO.push('c5'),caseCliquable.splice(caseCliquable.indexOf('c5'), 1),c5 = false, already = true}
			if(c6 == true && already == false){document.getElementById('c6').innerHTML = "O",document.getElementById("c6").style.backgroundColor = `${couleurJ2}`,caseO.push('c6'),caseCliquable.splice(caseCliquable.indexOf('c6'), 1),c6 = false, already = true}
			if(c7 == true && already == false){document.getElementById('c7').innerHTML = "O",document.getElementById("c7").style.backgroundColor = `${couleurJ2}`,caseO.push('c7'),caseCliquable.splice(caseCliquable.indexOf('c7'), 1),c7 = false, already = true}
			if(c8 == true && already == false){document.getElementById('c8').innerHTML = "O",document.getElementById("c8").style.backgroundColor = `${couleurJ2}`,caseO.push('c8'),caseCliquable.splice(caseCliquable.indexOf('c8'), 1),c8 = false, already = true}
			tourIA = tourIA + 1
		}
		limiteBloquage++
		}
}

function caseRandom() {
	if(endGame == false) {
			if(tourIA != 4) {
			console.log('pas de bloquage -> Hasard tourIA:' + tourIA)
			let caseRandom = caseCliquable[Math.floor(Math.random()*caseCliquable.length)]
			document.getElementById(caseRandom).innerHTML = "O"
			document.getElementById(caseRandom).style.backgroundColor = `${couleurJ2}`
			caseO.push(`${caseRandom}`)
			caseCliquable.splice(caseCliquable.indexOf(caseRandom), 1)
			tourIA = tourIA + 1
			document.getElementById(caseRandom).removeEventListener("click", lvl1)
			document.getElementById(caseRandom).removeEventListener("click", lvl2)
			document.getElementById(caseRandom).removeEventListener("click", lvl3)
			document.getElementById(caseRandom).removeEventListener("click", lvl4)
		}
	}
}

function checkResult() {
	var stats = document.getElementById('winner');
	var gagnant = false
	//changement de tour
	if(tour == 1) {
		tour = 2
	}	else {
		tour = 1
	}
	//vérification des résultats pour X 
//horizontal
	if(caseX.indexOf("c0") != -1 && caseX.indexOf("c1") != -1 && caseX.indexOf("c2") != -1) {
		stats.innerHTML = 'Le joueur X gagne !'
		document.getElementById('c0').classList.add("tdWinner")
		document.getElementById('c1').classList.add("tdWinner")
		document.getElementById('c2').classList.add("tdWinner")
		gagnant = true
		endGame = true
	}
	if(caseX.indexOf("c3") != -1 && caseX.indexOf("c4") != -1 && caseX.indexOf("c5") != -1) {
		stats.innerHTML = 'Le joueur X gagne !'
		document.getElementById('c3').classList.add("tdWinner")
		document.getElementById('c5').classList.add("tdWinner")
		document.getElementById('c4').classList.add("tdWinner")
		gagnant = true
		endGame = true
	}
	if(caseX.indexOf("c6") != -1 && caseX.indexOf("c7") != -1 && caseX.indexOf("c8") != -1) {
		stats.innerHTML = 'Le joueur X gagne !'
		document.getElementById('c6').classList.add("tdWinner")
		document.getElementById('c7').classList.add("tdWinner")
		document.getElementById('c8').classList.add("tdWinner")
		gagnant = true
		endGame = true
	}
//vertical
	if(caseX.indexOf("c0") != -1 && caseX.indexOf("c3") != -1 && caseX.indexOf("c6") != -1) {
		stats.innerHTML = 'Le joueur X gagne !'
		document.getElementById('c0').classList.add("tdWinner")
		document.getElementById('c3').classList.add("tdWinner")
		document.getElementById('c6').classList.add("tdWinner")
		gagnant = true
		endGame = true
	}
	if(caseX.indexOf("c1") != -1 && caseX.indexOf("c4") != -1 && caseX.indexOf("c7") != -1) {
		stats.innerHTML = 'Le joueur X gagne !'
		document.getElementById('c1').classList.add("tdWinner")
		document.getElementById('c7').classList.add("tdWinner")
		document.getElementById('c4').classList.add("tdWinner")
		
		gagnant = true
		endGame = true
	}
	if(caseX.indexOf("c2") != -1 && caseX.indexOf("c5") != -1 && caseX.indexOf("c8") != -1) {
		stats.innerHTML = 'Le joueur X gagne !'
		document.getElementById('c2').classList.add("tdWinner")
		document.getElementById('c5').classList.add("tdWinner")
		document.getElementById('c8').classList.add("tdWinner")
		gagnant = true
		endGame = true
	}
//Diagonale
	if(caseX.indexOf("c0") != -1 && caseX.indexOf("c4") != -1 && caseX.indexOf("c8") != -1) {
		stats.innerHTML = 'Le joueur X gagne !'
		document.getElementById('c0').classList.add("tdWinner")
		document.getElementById('c8').classList.add("tdWinner")
		document.getElementById('c4').classList.add("tdWinner")
		gagnant = true
		endGame = true
	}
	if(caseX.indexOf("c6") != -1 && caseX.indexOf("c4") != -1 && caseX.indexOf("c2") != -1) {
		stats.innerHTML = 'Le joueur X gagne !'
		document.getElementById('c6').classList.add("tdWinner")
		document.getElementById('c2').classList.add("tdWinner")
		document.getElementById('c4').classList.add("tdWinner")
		gagnant = true
		endGame = true
	}

	//vérification des résultats pour O
//horizontal
	if(caseO.indexOf("c0") != -1 && caseO.indexOf("c1") != -1 && caseO.indexOf("c2") != -1) {
		stats.innerHTML = 'Le joueur O gagne !'
		document.getElementById('c0').classList.add("tdWinner")
		document.getElementById('c1').classList.add("tdWinner")
		document.getElementById('c2').classList.add("tdWinner")
		gagnant = true
		endGame = true
	}
	if(caseO.indexOf("c3") != -1 && caseO.indexOf("c4") != -1 && caseO.indexOf("c5") != -1) {
		stats.innerHTML = 'Le joueur O gagne !'
		document.getElementById('c3').classList.add("tdWinner")
		document.getElementById('c5').classList.add("tdWinner")
		document.getElementById('c4').classList.add("tdWinner")
		gagnant = true
		endGame = true
	}
	if(caseO.indexOf("c6") != -1 && caseO.indexOf("c7") != -1 && caseO.indexOf("c8") != -1) {
		stats.innerHTML = 'Le joueur O gagne !'
		document.getElementById('c6').classList.add("tdWinner")
		document.getElementById('c7').classList.add("tdWinner")
		document.getElementById('c8').classList.add("tdWinner")
		gagnant = true
		endGame = true
	}
//vertical
	if(caseO.indexOf("c0") != -1 && caseO.indexOf("c3") != -1 && caseO.indexOf("c6") != -1) {
		stats.innerHTML = 'Le joueur O gagne !'
		document.getElementById('c0').classList.add("tdWinner")
		document.getElementById('c3').classList.add("tdWinner")
		document.getElementById('c6').classList.add("tdWinner")
		gagnant = true
		endGame = true
	}
	if(caseO.indexOf("c1") != -1 && caseO.indexOf("c4") != -1 && caseO.indexOf("c7") != -1) {
		stats.innerHTML = 'Le joueur O gagne !'
		document.getElementById('c1').classList.add("tdWinner")
		document.getElementById('c7').classList.add("tdWinner")
		document.getElementById('c4').classList.add("tdWinner")
		gagnant = true
		endGame = true
	}
	if(caseO.indexOf("c2") != -1 && caseO.indexOf("c5") != -1 && caseO.indexOf("c8") != -1) {
		stats.innerHTML = 'Le joueur O gagne !'
		document.getElementById('c2').classList.add("tdWinner")
		document.getElementById('c5').classList.add("tdWinner")
		document.getElementById('c8').classList.add("tdWinner")
		gagnant = true
		endGame = true
	}
//Diagonale
	if(caseO.indexOf("c0") != -1 && caseO.indexOf("c4") != -1 && caseO.indexOf("c8") != -1) {
		stats.innerHTML = 'Le joueur O gagne !'
		document.getElementById('c0').classList.add("tdWinner")
		document.getElementById('c8').classList.add("tdWinner")
		document.getElementById('c4').classList.add("tdWinner")
		gagnant = true
		endGame = true
	}
	if(caseO.indexOf("c6") != -1 && caseO.indexOf("c4") != -1 && caseO.indexOf("c2") != -1) {
		stats.innerHTML = 'Le joueur O gagne !'
		document.getElementById('c6').classList.add("tdWinner")
		document.getElementById('c2').classList.add("tdWinner") 
		document.getElementById('c4').classList.add("tdWinner")
		gagnant = true
		endGame = true
	}
//Si personne ne gagne
	if(((caseO.length == 5 && caseX.length == 4) || (caseO.length == 4 && caseX.length == 5)) && gagnant == false) {
		stats.innerHTML = "Personne n'a gagné !"
		for (var i = 0; i < 9; i ++){ // i++ = (i+1)
		document.getElementById('c' + i).style.backgroundColor = ''
		document.getElementById('c' + i).classList.add("tdPersonne")	
	}
		document.getElementById('table').classList.add("rotationAll")
}
	if(gagnant == true) {
		for (var i = 0; i < 9; i ++){ // i++ = (i+1)
							//document.getElementById('c' + i).classList.remove("tdX") ANCIEN SYSTEM
							//document.getElementById('c' + i).classList.remove("tdO")
	//Enlève la couleur
	//document.getElementById('c' + i).style.backgroundColor = ''	
	}
	}
}

////////////////////////////////////////
//////////////CORPS/////////////////////
////////////////////////////////////////
window.addEventListener("load", demarrer); // attends le chargement complet pour démarrer
