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