let listaNomes = [];
let listaDiv = document.getElementById("listaAmigos");
let resultadoLista = document.getElementById("resultado");

function limparElemento(elemento) {
    elemento.innerHTML = "";
}

function adicionarAmigo(){
    let nome = document.querySelector('input').value;
    limparElemento(resultadoLista);
    if(nome == ""){
        alert("Por favor, insira um nome."); //Validar entrada: Se o campo de texto estiver vazio, o programa exibirá um alerta solicitando um nome válido.
    }else{
        listaNomes.push(nome);//adiciona amigo a um array
        exibirLista();  //Visualizar a lista: Os nomes inseridos aparecerão em uma lista abaixo do campo de entrada.
    }
    document.querySelector('input').value = "";
}

function sortearAmigo() {
    limparElemento(resultadoLista);
    if (listaNomes.length === 0) {
        alert("Adicione pelo menos um nome antes de sortear.");
        return;
    }
    let indiceSorteado = Math.floor(Math.random() * listaNomes.length); // Gera um índice 
    let nomeSorteado = listaNomes[indiceSorteado]; // Pega o nome correspondente

    let li = document.createElement("li");
    li.textContent = ("O seu amigo secreto é: " + nomeSorteado);
    resultadoLista.appendChild(li);
    
    // limpa a lista
    listaNomes = [];
    listaDiv.innerHTML = "";
}

function exibirLista() {
    limparElemento(listaDiv);

    listaNomes.forEach(nome => {
        let li = document.createElement("li"); 
        li.textContent = nome;
        listaDiv.appendChild(li);
    });
}
