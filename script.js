// Pega o botão
var copy = document.getElementById("copy");

// Adiciona função ao clicar no botão
copy.addEventListener('click', function () {

  	// Pega o input
    var input = document.getElementById("text");

  	// Seleciona o conteúdo do input
    input.select();

  	// Copia o conteúdo selecionado
    var copy = document.execCommand('Copy');

  	// Verifica se copiou
    if (copy) {
        console.log("Copiado!");
    } else {
        console.log("Ocorreu um erro!");
    }

});