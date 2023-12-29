const btn = document.querySelector(".btn-primary")

function mudarCorDoFundo() {
    // Obtém o botão pelo ID


    // Adiciona um ouvinte de evento para o clique no botão
    btn.addEventListener("click", function() {
        // Obtém o corpo (body) do documento
        const body = document.body;

        // Muda a cor de fundo (background-color) para uma cor específica
        body.style.backgroundColor = "blue"; // Altere para a cor desejada

        let h2 = document.createElement("h2");
        var texto = document.createTextNode("Este texto  é um conteudo do paragráfo");
        h2.appendChild(texto);
        body.append(h2);
        
    });
}

// Chama a função para configurar o evento de mudança de cor
mudarCorDoFundo();

