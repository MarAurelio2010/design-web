//Processamento-Memória
//Saida
const topo = document.getElementById("topo");
//Evento
window.addEventListener("scroll", function(e){
    if (window.scrollY>0){
        topo.classList.add("solido");
    }else{
        topo.classList.remove("solido");
    }
})