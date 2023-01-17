function tocaSom( seletorAudio ){
    const elemento = document.querySelector(seletorAudio);

    if ( elemento != null && elemento.localName === 'audio' ){
        elemento.play();
    }else{
        console.log("Elemento não encontrado ou selector inválido");
    }  
}

const listaDeTeclas = document.querySelectorAll('.tecla');

tecla = (element) =>{
    let instrumento = element.textContent
    let  idAudio= `#som_tecla_${instrumento}`;
    
    element.onclick = function(){
    tocaSom(idAudio)

        }
    element.onkeydown = function ( event ){
        if (event.code === 'Enter' || event.code === 'Space'){
        element.classList.add('ativa');
            }
        }
    element.onkeyup = function ( event ){
        if (event.code === 'Enter' || event.code === 'Space'){
            element.classList.remove('ativa');
            }
        }
    }

listaDeTeclas.forEach(tecla);




//Se usa-semos o for seria do jeito abaixo

/* for ( let contador = 0; contador < listaDeTeclas.length;contador++ ) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function () {

    tocaSom(idAudio)
    }

    tecla.onkeydown = function ( event ){
        if (event.code === 'Enter' || event.code === 'Space'){
        tecla.classList.add('ativa');
        }
    }
    tecla.onkeyup = function ( event ){
        if (event.code === 'Enter' || event.code === 'Space'){
            tecla.classList.remove('ativa');
        }
    }

} */
