# Copy
 
```HTML
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Copiando conteúdo do input</title>
</head>

<body>

    <label>Texto</label>
    <input id="text" type="text" value="Hello World">
    <button id="copy" type="button">Copiar</button>

    <script src="script.js"></script>

</body>

</html>
```

```JS
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
```
