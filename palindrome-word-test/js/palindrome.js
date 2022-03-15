window.onload = function () {
	var text = document.getElementById('input_text');
	var xtext = "";
	document.getElementById('myButton').onclick = function() {
		for (var i = text.value.length-1; i >= 0; --i) {
			var x = xtext += String(text.value[i]);
		}
		if (text.value.toUpperCase() == x.toUpperCase()) {
			M.toast({html:text.value+" adalah PALINDROME",classes:'rounded'});
		}else{
			M.toast({html:text.value+" adalah Bukan PALINDROME",classes:'rounded center-align'});
		}
		return xtext = "";
	};
};