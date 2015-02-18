function changer (id, newValue) {
	var element = document.getElementById(id);
	element.innerHTML = newValue;
}

function reiniciar(tag){
	changer(tag, '');	
}

function pulsatecla(tag,valor,restag){		//similar teclas 0 y 1 calculadora
	
	var element = document.getElementById(tag);
	var numero = element.innerHTML
	if (valor == '='){
		sumador(tag,restag)
		reiniciar(tag)
	}else{
		if((valor=='+')&&(numero.split('+',2).length > 1)){	// comparar no haya varios +
			alert("Imposible introducir otro operador")
		}else{
			changer(tag, numero + valor)
		}
	}
	
}

function sumador (sumtag, restag) {
	var arraysumandos = document.getElementById(sumtag);
	var sumandos = arraysumandos.innerHTML.split ("+",2);
	var res = parseInt(sumandos[0],2) + parseInt(sumandos[1],2);	//,2 para pasar a binario
	res = res.toString(2)
	changer (restag, '=' + res);
}

