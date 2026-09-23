const amigos = []
const cadastro = document.getElementById("cadastro");
const nome = cadastro.nome;
const nasc = cadastro.nasc;
const whatsapp = cadastro.whatsapp;

cadastro.addEventListener("submit",function(e){
    e.preventDefault();
    let item = [nome.value, nasc.value, whatsapp.value]
    amigos.unshift(item);
    //Limpa o formulário
    cadastro.reset();
    //Atualiza lista
    exibirLista();
});

function exibirLista(){
    let itens = "";
    for(let i = 0; i<amigos.length; i++){
        let item = amigos[i]; //item = [Nome,Nasc,Whatsapp]
        let li = `<li>${item[0]} | ${item[1]} | ${item[2]}`
        itens = itens + li
    }
    exibirLista.innerHTML = itens;
}