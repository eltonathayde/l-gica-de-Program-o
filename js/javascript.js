//Definir variável caixa
let caixa = document.getElementById('caixa');
//Fim

//adicionar eventos com mouse na na variável caixa
caixa.addEventListener('click', clicar);
caixa.addEventListener('mouseenter', entrar);
caixa.addEventListener('mouseout',sair);

// Criar função da variávle clicar (Ativa quando o mouse clicar dentro da div)
function clicar(){
    caixa.innerHTML = 'você clicou';
    caixa.style.background='red';
    caixa.style.color = 'white';
    
}

//Criar função da variável entrar (Ativa quando o mouse passar dentro da div)
function entrar(){
    caixa.innerHTML='Entrou';
    caixa.style.background= 'yellow';
    caixa.style.color = 'black';
    
}
// Criar função da variável sair (Ativa quando tirar o mouse de dentro da div)
function sair(){
    caixa.innerHTML='Passe o mouse';
    caixa.style.background='green';
    caixa.style.color= 'white'
}

//Pegar a data atual do computador
let agora = new Date();
//Pegar o dia da semana em valores numéricos
let diaSemana = agora.getDay();
// Pegar o ID da div 
let data= document.getElementById('data');

// switch(diaSemana){
//     case 0:
//         data.innerHTML = 'Domingo';
//         data.style.background='black'
//     break;

//     case 1:
//         data.innerHTML = 'Segunda-feira';
//         data.style.background='blue'
//     break;

//     case 2:
//         data.innerHTML ='Terca-feira';
//         data.style.background='orange'

//     break;
    
//     case 3:
//         data.innerHTML='Quarta-feira';
//         data.style.background='pink'

//     break;
     
//     case 4 :
//         data.innerHTML= 'Quinta-feira';
//         data.style.background='red'

//     break;
    
//     case 5:
//         data.innerHTML='Sexta-feira';
//         data.style.background='gray'

//     break;
    
//     case 6:
//         data.innerHTML='Sábado';
//         data.style.background=''

//     break;    

//     default:
//        console.log('Dia inválido');
//        data.style.background='purple'
//     break
// }

if(diaSemana == 0){
     data.innerHTML=('Domingo');  
     data.style.background=('black');
}else if (diaSemana==1){
     data.innerHTML = ('Segunda-feira');
     data.style.background = ('blue');
}else if (diaSemana ==2){
      data.innerHTML = ('Terca-feira');
      data.style.background = ('red');
}else if (diaSemana ==3){
    data.innerHTML = ('Quarta-feira');
    data.style.background = ('gray');
}else if (diaSemana ==4){
    data.innerHTML = ('Quinta-feira');
    data.style.background = ('purple');
}else if (diaSemana ==5){
    data.style.background = ('pink');
    data.innerHTML = ('Sexta-feira');
}else if (diaSemana==6){
    data.innerHTML = ('Sébado');
    data.style.background = ('orange');
} else{
    data.innerHTML = ('Data inválida');
    data.style.background = ('white');
    data.style.color = ('black');
}

let contador = 0;
let contar=document.getElementById('contar');


while(contador< 300){
    contador++;
    contar.innerHTML=('300')

}

