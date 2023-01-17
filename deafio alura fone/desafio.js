const listaDeTeclas = document.querySelectorAll('input[type=button]');
const telefone = document.querySelector('input[type=tel]');


for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];

    tecla.onclick = function (){
        
            telefone.value = telefone.value + tecla.value;

    }

    tecla.onkeydown = function ( event ){
        if ( event.code === 'Enter' || event.code === 'Space'){
            tecla.classList.add('ativa');
        }

    }
    tecla.onkeyup = function ( event ){
        if ( event.code === 'Enter' || event.code === 'Space'){
            tecla.classList.remove('ativa');
        }
    }
}
