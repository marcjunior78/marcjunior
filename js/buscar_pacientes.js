
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click",function(){
	var xhr = new XMLHttpRequest();  // faz uma requisicao html, ou seja, busca 	um conteudo em outro site.
			
								// O XMLHtttpRequest é objeto responsável por fazer requisições HTTP com o Javascript.

	xhr.open("GET","http://api-pacientes.herokuapp.com/pacientes"); // o GET busca os dados do site indicado;
	xhr.addEventListener("load",function(){
		if(xhr.status == 200){ 
			var resposta = xhr.responseText;
			var pacientes = JSON.parse(resposta);  //transforma a string do outro site em um formato JS (no caso, um array)
			pacientes.forEach(function(paciente){
				adicionaPacientesNaTabela(paciente);
			})
		} else{
			var erroAjax = document.querySelector("#erro-busca");
			erroAjax.classList.remove("invisivel");
		}
	})
	xhr.send(); // envia a requisicao feita anteriormente. Sem isto, nao executa a requisicao.
})



