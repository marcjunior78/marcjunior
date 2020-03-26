var titulo = document.querySelector(".titulo"); 	//QuerySelector busca comandos, funcoes, atributos no mundo HTML
titulo.textContent = "Marcjunior Consultoria";	

var pacientes = document.querySelectorAll(".paciente");

for(var posicao = 0;posicao < pacientes.length; posicao++){

	var paciente = pacientes[posicao];

	var tdPeso =  paciente.querySelector(".info-peso");
	var peso =  tdPeso.textContent;

	var tdAltura =  paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;

	var imc = calculaImc(peso,altura); 
	var tdImc = paciente.querySelector(".info-imc");
	
	var pesoValido = validaPeso(peso);
	var alturaValida = validaAltura(altura);

	if(!pesoValido){	
		paciente.classList.add("paciente-invalido"); 	//Adiciona/chama uma classe previamente definida no CSS, ao HTML.
		tdImc.textContent = "Peso inválido";
	} else if(!alturaValida){
		paciente.classList.add("paciente-invalido");
		tdImc.textContent = "Altura inválida";
	} else {
		tdImc.textContent = imc;
	}
}

function calculaImc(peso,altura){
	var imc = 0
	imc = peso / (altura * altura);
	return imc.toFixed(2);
}

function validaPeso(peso){
	if(peso < 1 || peso > 200){
		return false;
	} else {
		return true;
	}
}

function validaAltura(altura){
	if(altura <= 0 || altura >=3){
		return false;
	} else {
		return true;
	}		
}

