clear = document.getElementById('C');
pemangkatan = document.getElementById('^');
del = document.getElementById("DEL");
bagi = document.getElementById('/');
tujuh = document.getElementById('7');
delapan = document.getElementById('8');
sembilan = document.getElementById('9');
empat = document.getElementById('4');
lima = document.getElementById('5');
enam = document.getElementById('6');
satu = document.getElementById('1');
dua = document.getElementById('2');
tiga = document.getElementById('3');
double_nol = document.getElementById('00');
nol = document.getElementById('0');
koma = document.getElementById('.');
kali = document.getElementById('x');
kurang = document.getElementById('-');
tambah = document.getElementById('+');
equals = document.getElementById('=');
input = document.getElementById('inputNumber');
satu.onclick = function(){
	addValue('1');
}
dua.onclick = function(){
	addValue('2');
}
tiga.onclick = function(){
	addValue('3');
}
empat.onclick = function(){
	addValue('4');
}
lima.onclick = function(){
	addValue('5');
}
enam.onclick = function(){
	addValue('6');
}
tujuh.onclick = function(){
	addValue('7');
}
delapan.onclick = function(){
	addValue('8');
}
sembilan.onclick = function(){
	addValue('9');
}
nol.onclick = function(){
	addValue('0');
}
double_nol.onclick = function(){
	addValue('00');
}

kali.onclick = function(){
	addValue('^');
}

bagi.onclick = function(){
	addValue('/');
}
tambah.onclick = function(){
	addValue('+');
}
kurang.onclick = function(){
	addValue('-');
}

koma.onclick = function(){
	addValue('.');
}
pemangkatan.onclick = function(){
	addValue("**");
}
equals.onclick = function(){
	return input.value =+ eval(input.value)
}
clear.onclick = function () {
	return input.value = "";
}
del.onclick = function () {
	x = input.value;
	y = x.length;
	result = x.substr(0,y-1);

	return input.value = result
}


function addValue(val) {
	input.value += val
	return val
}