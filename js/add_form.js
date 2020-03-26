var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click",function(event){// escuta eventos do browser, neste caso o click no botao. Poderiamos usar botaoAdicionar.onclick =
	event.preventDefault(); 								    // previne a execucao padrao do form. 
	var form = document.querySelector("#add-Form");
	var paciente = obtemPacienteDoForm(form);

	var erros = validaPaciente(paciente);
	pesoValido = validaPeso(paciente.peso);
	alturaValida = validaAltura(paciente.altura);

	if(erros.length > 0 ) {
		exibeMsgErro(erros);
	} else { 
		adicionaPacientesNaTabela(paciente);	
		limpaMsgErros();
		form.reset();
	}
})


function obtemPacienteDoForm(form){
	var paciente = {				// Criando um objeto, passando as propriedades entre chaves
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value,form.altura.value)
		
	}	
	return paciente;
}

function montaTr(paciente){
	var pacienteTr = document.createElement("tr");          // createElement cria um elemento novo no HTML.
	pacienteTr.classList.add("paciente");

	var nomeTd = montaTd(paciente.nome, "info-nome");
	var pesoTd = montaTd(paciente.peso,"info-peso");
	var alturaTd = montaTd(paciente.altura,"info-altura");
	var gorduraTd = montaTd(paciente.gordura,"info-gordura");
	var imcTd = montaTd(paciente.imc,"info-imc");

	pacienteTr.appendChild(nomeTd);                       // appendChild adiciona uma TD dentro de uma TR.
	pacienteTr.appendChild(pesoTd);
	pacienteTr.appendChild(alturaTd);
	pacienteTr.appendChild(gorduraTd);
	pacienteTr.appendChild(imcTd);

	return pacienteTr;
}	

function montaTd(dado,classe){
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);
	return td;
}

function validaPaciente(paciente){
	var erros = [];

	if(paciente.nome == "") erros.push("O campo NOME tem que ser preenchido"); 
	if(!validaPeso(paciente.peso)) erros.push("Peso inválido!");
	if(!validaAltura(paciente.altura)) erros.push("Altura inválida"); 
	if(paciente.gordura == "") erros.push("O campo GORDURA tem que ser preenchido");
	return erros;	
}

function exibeMsgErro(erros){
	var ul = limpaMsgErros();
	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);
	})
}

function limpaMsgErros(){
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = "";
	return ul;
}

function adicionaPacientesNaTabela(paciente){
	var pacienteTr = montaTr(paciente);
	var tabela = document.querySelector("#tabela-pacientes");
	tabela.appendChild(pacienteTr);

}