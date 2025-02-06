const etiquetasPrioridade = document.querySelectorAll('.etiqueta_prioridade');

etiquetasPrioridade.forEach(prioridade =>{
    if(prioridade.textContent === 'Baixa'){
        prioridade.classList.add('etiqueta_prioridade_baixa')
    }else if(prioridade.textContent === 'Média'){

    
    }else{

    }
})