
var pacientes = document.querySelectorAll(".paciente");
var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
	// var eventoAlvo = event.target;
	// var paiDoAlvo = eventoAlvo.parentNode;
	// paiDoAlvo.remove();
	
	event.target.parentNode.classList.add("fadeOut");
	setTimeout(function(){
		event.target.parentNode.remove(); //esta linha substitui as 3 anteriores. ParentNone busca quem é o pai do evento clicado.
	},500);
})


		// pacientes.forEach(function(paciente){
		// paciente.addEventListener("dblclick",function(){
		// this.remove(); // this tem a ver com quem chamou o evento. está atrelado ao PACIENTE, neste caso.
