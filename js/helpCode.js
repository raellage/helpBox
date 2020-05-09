//IGA helpBox
//israeljl@br.ibm.com

//addZero
function addZero(i) {
    if (i < 10) {i = "0" + i;}
    return i;
}

//cronometro1

var ssC1 = "0" + 0;
var mmC1 = "0" + 0;
var hhC1 = "0" + 0;

var ativoC1 = false;
	 
function cronometro(){
	if (ssC1 < 59){
	  if(ssC1 < 10){ssC1 = "0" + ssC1;}
	  ssC1++;
	  if(ssC1 < 10){ssC1 = "0" + ssC1;}
	}else 
	  if(ssC1 == 59 && mmC1 < 59){
		 ssC1 = "0" + 0;
	mmC1++;
	if(mmC1 < 10){mmC1 = "0" + mmC1;}
	  }
	if(mmC1 == 59 && ssC1 == 59 && hhC1 < 23){
	  ssC1 = "0" + 0;
	  mmC1 = "0" + 0;
	  hhC1++;
	  if(hhC1 < 10){hhC1 = "0" + hhC1;}
	}else 
	  if(mmC1 == 59 && ssC1 == 59 && hhC1 == 23){
		ssC1 = "0" + 0;
		mmC1 = "0" + 0;
		hhC1 = "0" + 0;
	  }
	  
	document.getElementById("cron").innerHTML = hhC1 + ":" + mmC1 + ":" + ssC1;
}

function iniciarCronometro(){
	if (!ativoC1) {
		iniciarIntervalo = setInterval(function(){ cronometro() }, 1000);
		ativoC1 = true;
	}
}

function pararCronometro(){
	clearInterval(iniciarIntervalo);
	ativoC1 = false;
}

function zerarCronometro(){
	pararCronometro();
	ssC1 = "0" + 0;
	mmC1 = "0" + 0;
	hhC1 = "0" + 0;
	document.getElementById("cron").innerHTML = hhC1 +":"+ mmC1 +":"+ ssC1;
}

//cronometro2 AUX 8

var ssC2 = "0" + 0;
var mmC2 = "0" + 0;
var hhC2 = "0" + 0;

var ativoC2 = false;
	 
function cronometroAUX8(){
	if (ssC2 < 59){
	  ssC2++;
	  if(ssC2 < 10){ssC2 = "0" + ssC2;}
	}else 
	  if(ssC2 == 59 && mmC2 < 59){
		 ssC2 = "0" + 0;
	mmC2++;
	if(mmC2 < 10){mmC2 = "0" + mmC2;}
	  }
	if(mmC2 == 59 && ssC2 == 59 && hhC2 < 23){
	  ssC2 = "0" + 0;
	  mmC2 = "0" + 0;
	  hhC2++;
	  if(hhC2 < 10){hhC2 = "0" + hhC2;}
	}else 
	  if(mmC2 == 59 && ssC2 == 59 && hhC2 == 23){
		ssC2 = "0" + 0;
		mmC2 = "0" + 0;
		hhC2 = "0" + 0;
	  }
	  
	document.getElementById("cronAUX8").innerHTML = hhC2 + ":" + mmC2 + ":" + ssC2;
}

function iniciarCronometroAUX8(){
	if (!ativoC2) {
		iniciarIntervaloAUX8 = setInterval(cronometroAUX8, 1000);
		ativoC2 = true;
	}
}

function pararCronometroAUX8(){
	clearInterval(iniciarIntervaloAUX8);
	ativoC2 = false;
}

function zerarCronometroAUX8(){
	pararCronometroAUX8();
	ssC2 = "0" + 0;
	mmC2 = "0" + 0;
	hhC2 = "0" + 0;
	document.getElementById("cronAUX8").innerHTML = hhC2 + ":" + mmC2 + ":" + ssC2;
}

//cronometro3 AUX 5

var ssC3 = "0" + 0;
var mmC3 = "0" + 0;
var hhC3 = "0" + 1;

var ativoC3 = false;

function cronometroAUX5(){
	if (ssC3 > 0){
	  ssC3--;
	  if(ssC3 < 10){ssC3 = "0" + ssC3;}
	}else 
	  if(ssC3 == 00 && mmC3 > 00 ){
		 ssC3 = 59;
	mmC3--;
	if(mmC3 < 10){mmC3 = "0" + mmC3}
	  }
	if(mmC3 == 00 && ssC3 == 00 && hhC3 > 0){
	  ssC3 = 59;
	  mmC3 = 59;
	  hhC3--;
	  if(hhC3 < 10){hhC3 = "0" + hhC3;}
	}else 
	  if(mmC3 == 00 && ssC3 == 00 && hhC3 == 00){
		clearInterval(iniciarIntervaloAUX5); alert("Tempo de AUX 5 Esgotado!");
	  }
	  
	document.getElementById("cronAUX5").innerHTML = hhC3 +":"+ mmC3 +":"+ ssC3;
}

function iniciarCronometroAUX5(){
	if (!ativoC3) {
		iniciarIntervaloAUX5 = setInterval(cronometroAUX5, 1000);
		ativoC3 = true;
	}
}

function pararCronometroAUX5(){
	clearInterval(iniciarIntervaloAUX5);
	ativoC3 = false;
}

function zerarCronometroAUX5(){
	pararCronometroAUX5();
	ssC3 = "0" + 0;
	mmC3 = "0" + 0;
	hhC3 = "0" + 1;
	document.getElementById("cronAUX5").innerHTML = hhC3 +":"+ mmC3 +":"+ ssC3;
}

//data atual da maquina por extenso
	
function dataExtenso() {
	dayName = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
	monName = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
	now = new Date();

	document.getElementById('data').innerHTML = (dayName[now.getDay()] + ", " + now.getDate () + " de " + monName[now.getMonth()] +  " de "  + now.getFullYear());
}

//horario atual da maquina

function horarioAtual() {
	var horarioInfo = new Date();
	var h = horarioInfo.getHours();
	var m = horarioInfo.getMinutes();
	var s = horarioInfo.getSeconds();
	m = addZero(m);
	s = addZero(s);
	document.getElementById('relogio').innerHTML = h + ":" + m + ":" + s;
	t = setTimeout('horarioAtual()',500);
}

function gerarSenha() {
	var letras = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","X","Y","Z"];
	var numeros = [0,1,2,3,4,5,6,7,8,9];
	
	var senha = "";
	for (senha.length = 0; senha.length < 8; senha.length++) {
		l = Math.floor(Math.random() * letras.length);
		n = Math.floor(Math.random() * numeros.length);
		if (senha.length < 3) {
			senha = senha + letras[l];
		}else
		if (senha.length < 5) {
			senha = senha + numeros[n];
		}else
		if (senha.length < 8) {
			senha = senha + letras[l];
		}
	}
	document.getElementById('senha').innerHTML = senha;
}

function copiar() {
	alert("Copia não realizada!");
}