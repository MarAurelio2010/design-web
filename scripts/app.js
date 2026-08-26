var nasc=2010;
let nome="Marco";
const viva = true;

function calcIdade(ano=2026){
    let idade=ano-nasc;
    let menor;
    if (idade<18){
        menor=true;
        var podebeber=false;
    }else{
        menor=false
        var podebeber=true;
    }
    alert(`${nome} é menor de idade?${menor}\nIdade:${idade}\nPode beber:${podebeber}`)
    return idade;
}

calcIdade();
alert(`Pode beber:${podebeber}`)
alert(`Idade:${idade}`)
/* alert(`Fora da função: Idade ${idade}`);
Erro pois a variavel let não existe fora do escopo dela*/
alert(`Fora da função: chamando calIdade ${calcIdade(2027)}`);
