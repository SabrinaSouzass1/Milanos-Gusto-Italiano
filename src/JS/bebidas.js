/* Comidas */

const botoes = document.querySelectorAll(".botao");
const bebidas = document.querySelectorAll(".bebida");
 
botoes.forEach((botao, indice) => {
	botao.addEventListener("click", () => {
		desselecionarBotao();
		desselecionarBebida();

		botao.classList.add("selecionada");
		bebidas[indice].classList.add("selecionada");
	});
});

function desselecionarBebida() {
	const bebidaSelecionada = document.querySelector(".bebida.selecionada");
	bebidaSelecionada.classList.remove("selecionada");
}

function desselecionarBotao() {
	const botaoSelecionada = document.querySelector(".botao.selecionada");
	botaoSelecionada.classList.remove("selecionada");
}

