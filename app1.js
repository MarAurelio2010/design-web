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
    lista.push(t);
    tags.innerHTML = lista;
    formulario.reset();

});