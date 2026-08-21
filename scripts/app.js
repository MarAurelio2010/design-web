var nasc=2010;
let nome="Marco";
const viva = true;

function calcIdade(ano){
    let idade=ano-nasc;
    alert(`Dentro de função - Idade ${idade}`);
    return idade;
}

alert(`fora da função: Idade ${idade}`);
alert(`fora da função: Idade ${calcIdade}`);
