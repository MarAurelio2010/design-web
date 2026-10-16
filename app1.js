// Processamento de armazenamento
const lista = []

// Entrada
const formulario = document.getElementById("formulario");
const texto = formulario.texto;

// Saída
const tags = document.getElementById("tags");

// Gatilho/Evento
formulario.addEventListener("submit", function(e){
    e.preventDefault();
    let t = texto.value;
    t = t.split(" ");
    for(let i = 0; i<t.length; i++){
        let palavra = t[i];
        if (palavra.includes("#")){
            lista.push(palavra);
        }
    }
    tags.innerHTML = lista;
    formulario.reset();

});