let dia = prompt("Escolha um dia da semana\nSendo 1:Domingo - 7:Sábado");
dia = Number(dia);
switch(dia){
    case 1 : alert("Você escolheu domingo")
    case 2 : alert("Você escolheu segunda")
    case 3 : alert("Você escolheu terça")
    case 4 : alert("Você escolheu quarta")
    case 5 : alert("Você escolheu quinta")
    case 6 : alert("Você escolheu sexta")
    case 7 : alert("Você escolheu sábado")
}

if (dia  <=0 || dia >=8){
    alert("Dia Inválido")
}else if(dia == 1){
    alert("Você escolheu domingo")
}else if(dia == 2){
    alert("Você escolheu segunda")
}else if(dia == 3){
    alert("Você escolheu terça")
}else if(dia == 4){
    alert("Você escolheu quarta")
}else if(dia == 5){
    alert("Você escolheu quinta")
}else if(dia == 6){
    alert("Você escolheu sexta")
}else if(dia == 7){
    alert("Você escolheu sábado")
}