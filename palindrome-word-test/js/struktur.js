document.addEventListener('DOMContentLoaded',function () {
	var div = document.createElement('div');
	div.id = 'myDIV';
	div.className = 'container';
	document.body.appendChild(div);
},false);

document.addEventListener('DOMContentLoaded',function () {
	var myDIV = document.getElementById('myDIV');
	var row1 = document.createElement('div');
	var row2 = document.createElement('div');
	var row3 = document.createElement('div');
	row1.className = 'row';
	row1.id = 'roww';
	row2.className = 'row';
	row2.id = 'roww2';
	myDIV.appendChild(row1);
	myDIV.appendChild(row2);
	row3.className = 'row';
	row3.id = 'roww3';
	myDIV.appendChild(row3);
},false);

document.addEventListener('DOMContentLoaded',function(){
	var row = document.getElementById('roww');
	var row2 = document.getElementById('roww2');
	var row3 = document.getElementById('roww3');
	var col12 = document.createElement('div');
	var col122 = document.createElement('div');
	var ket = document.createElement('div');
	var ket2 = document.createElement('div');
	col12.className = 'col s12 center-align';
	col12.id = 'coll';
	col122.className = 'col s12 center-align input-field';
	col122.id = 'form-input';
	ket.className = 'col s6 left-align';
	ket.innerHTML = 'Palindrom adalah sebuah kata, frasa, angka maupun susunan lainnya yang dapat dibaca dengan sama baik dari depan maupun belakang (spasi antara huruf-huruf biasanya diperbolehkan)';
	ket2.className = 'col s6 left-align';
	ket2.innerHTML = 'Contohnya adalah pada kata TENET jadi jika dibalik maka tetap TENET';
	row.appendChild(col12);
	row2.appendChild(col122);
	row3.appendChild(ket);
	row3.appendChild(ket2);
},false);

document.addEventListener('DOMContentLoaded',function () {
	var col = document.getElementById('coll');
	var span = document.createElement('span');
	span.className= 'flow-text';
	span.innerHTML = 'PALINDROME TEST';
	span.style.fontFamily = "Impact";
	span.style.fontSize = "2cm";
	col.appendChild(span);
},false);

document.addEventListener('DOMContentLoaded',function () {
	var col = document.getElementById('form-input');
	var input = document.createElement('input');
	var button = document.createElement('button');
	button.className = 'btn-floating btn-large cyan waves-effect waves-teal';
	button.id = 'myButton';
	input.className = 'validate';
	input.placeholder = 'MASUKAN KALIMAT';
	input.id = 'input_text';
	col.appendChild(input);
	col.appendChild(button);
},false);

document.addEventListener('DOMContentLoaded',function(){
		var btn = document.getElementById('myButton');
		var icon = document.createElement('i');
		icon.className = 'material-icons';
		icon.innerHTML = 'GO';
		btn.appendChild(icon);
	},false);

