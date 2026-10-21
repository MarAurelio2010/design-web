/*Processamento/Armazenamento*/
let hoje = new Date();
/*Entradas*/
const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;
/*Saída*/
const saudacao = document.getElementById("saudacao");

/*Passo a Passo*/
cadastro.addEventListener("submit",function(e){
    e.preventDefault();
    saudacao.innerHTML = `Olá ${nome.value}! Hoje é ${hoje}`;
    cadastro.reset();
});