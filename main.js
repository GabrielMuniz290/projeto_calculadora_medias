const form = document.getElementById('form-atividade');
let linhas =' ';
const imgaprovado = '<img src="./images/aprovado.png" alt="emoji celebrando"/>';
const imgareprovado = '<img src="./images/reprovado.png" alt="emoji triste"/>';
const atividades =[];
const notas =[];
const spanaprovado ='<span class="resultado aprovado">Aprovado</span>';
const spanreprovado ='<span class="resultado reprovado">Reprovado</span>';
form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionalinha();
    atualizatabela();
    atualizamediafinal();

});

function adicionalinha(){
    const inputnomeatividade = document.getElementById('nome-atividade');
    const inputnotaatividade = document.getElementById('nota-atividade');

    if (atividades.includes(inputnomeatividade.value)){
        alert(`A atividade ${inputnomeatividade.value} já foi inserida`);
    }
    else{
        atividades.push(inputnomeatividade.value);
        notas.push(parseFloat(inputnotaatividade.value));
    
    
        let linha = '<tr>';
        linha += `<td>${inputnomeatividade.value}</td>`;
        linha += `<td>${inputnotaatividade.value}</td>`;
        linha += `<td>${inputnotaatividade.value >=7 ? imgaprovado: imgareprovado}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }
    
    inputnomeatividade.value=' ';
    inputnotaatividade.value=' ';
}

function atualizatabela(){
    const  corpotabela = document.querySelector('tbody');
    corpotabela.innerHTML= linhas;

}

function atualizamediafinal(){
    const mediafinal = calculamediafinal();
    document.getElementById('media-final-valor').innerHTML = mediafinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediafinal >= 7 ? spanaprovado : spanreprovado;
}

function calculamediafinal(){
    let somadasnotas =0;

    for (let i = 0; i< notas.length; i++){
        somadasnotas += notas[i];
    }

    return  somadasnotas/notas.length;
    
}