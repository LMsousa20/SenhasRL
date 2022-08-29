let dia = new Date();
let StringDia = dia.getDate();
let StringMes = dia.getMonth() + 1;
let ano = dia.getYear();
let hour = dia.getHours();
let vl1 = (StringDia * 100) + StringMes;

if(Number(localStorage.getItem("cdg1")) == 0){
    let codigo = Number(prompt('Qual seu Codigo?')); 
    localStorage.setItem("cdg1", codigo); 
}

let codigoUser = localStorage.getItem("cdg1");
let preValor = (vl1 / codigoUser) *10000;


if (StringMes <= 9){
    document.getElementById('data').innerHTML = `${StringDia}/0${StringMes}`;
}else{
    document.getElementById('data').innerHTML = `${StringDia}/${StringMes}`;
}
document.getElementById('result').innerHTML = parseInt(preValor);


function CalcCompanytec(){
let companytec = ano - StringMes - StringDia - hour + 1900;
document.getElementById('cmptc').innerHTML = companytec;
}


function cosseno(){
    let cdgEztech = document.getElementById('inEztech').value;
    if(cdgEztech == 0){
        return;
    }
    let senhaEztech = parseInt(Math.cos(cdgEztech)*1000);
    if(senhaEztech <0){
        senhaEztech = senhaEztech * -1;
    }
  
    document.getElementById('resulteztc').innerHTML = `<p>Senha do Eztech</p><div class="subdiv move">${senhaEztech}</div>`;
    
};

function modDark(){
    document.getElementById('conteiner1').style.background = 'black';
    document.getElementById('conteiner1').style.color = 'white';

}

function modClean(){
    document.getElementById('conteiner1').style.background = 'white';
    document.getElementById('conteiner1').style.color = 'black';

}