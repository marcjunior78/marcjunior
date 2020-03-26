
var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input",function(){
	var pacientes = document.querySelectorAll(".paciente");

	if(this.value.length > 0){
		for (var i = 0; i < pacientes.length; i++) {
		 	var paciente = pacientes[i];
			var tdNome = paciente.querySelector(".info-nome");
			var nome = tdNome.textContent;
			var expressao = new RegExp(this.value,"i"); // cria uma expressao regular, o i é para case insensitive.
			//var expressao = nome.substr(0,this.value.length); // busca uma substring. Estudar mais.
			//console.log(expressao);

			if(!expressao.test(nome)){
				paciente.classList.add("invisivel");
			} else {
				paciente.classList.remove("invisivel");
			}	
		}
	} else{
		for (var i = 0; i < pacientes.length; i++) {
		 	var paciente = pacientes[i];
		 	paciente.classList.remove("invisivel");
		}
	}
})
