const botoes = document.querySelectorAll(".botao");
const comidas = document.querySelectorAll(".comida");
 
botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarComida();

		botao.classList.add("selecionada");
		comidas[indice].classList.add("selecionada");
	});
});

function desselecionarComida() {
	const comidaSelecionada = document.querySelector(".comida.selecionada");
	comidaSelecionada.classList.remove("selecionada");
}

function desselecionarBotao() {
	const botaoSelecionada = document.querySelector(".botao.selecionada");
	botaoSelecionada.classList.remove("selecionada");
}
