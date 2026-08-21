var nasc=2010;
let nome="Marco";
const viva = true;

function calcIdade(ano=2026){
    let idade=ano-nasc;
    alert(`Dentro de função - Idade ${idade}`);
    return idade;
}

calcIdade();
/* alert(`Fora da função: Idade ${idade}`);
Erro pois a variavel let não existe fora do escopo dela*/
alert(`Fora da função: chamando calIdade ${calcIdade(2027)}`);
