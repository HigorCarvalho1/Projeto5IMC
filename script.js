//imports
import { Modal } from './modal.js'

//variaveis
const form = document.querySelector('form')

//Execução da função
window.addEventListener('keydown', handleKeydown)
Modal.inpAlt.addEventListener('blur', scrollPagina)
Modal.inpPeso.addEventListener('blur', scrollPagina)
//Funções
form.onsubmit = (event) =>{
    event.preventDefault()

    if(Number(Modal.inpPeso.value)  == "" ||  Number(Modal.inpAlt.value) == "") {
        Modal.linha.classList.add("open");
        Modal.inpPeso.value = ""
        Modal.inpAlt.value = ""
    }else {
        Modal.open()  
        let calculo = Number(Modal.inpPeso.value) / ((Number(Modal.inpAlt.value)**2)) 
        document.querySelector(".resultado h1").innerText = `Seu IMC é de ${calculo.toFixed(2)}`
    }
}
Modal.reset.onclick = () =>{
    Modal.close()
    scrollPagina()
}
Modal.inpAlt.onfocus = () =>{
    Modal.close1()
}
Modal.inpPeso.oninput = () =>{
    Modal.close1()
}
/*Modal.inpPeso.oninput = () =>{
    Modal.close1()
}*/
function handleKeydown(event) {
    if(event.key === "Escape"){
        Modal.close3()
    }
}

function scrollPagina(){
    window.scrollTo(-1, -1)
}


$(document).ready(function() {
    const mask = $('#inpAlt');
    
    mask.mask('9.99');
    
    mask.on('click', function() {
        if (mask[0].selectionStart === mask[0].selectionEnd) {
            mask[0].setSelectionRange(0, 0);}
        });
    });
    
    


    



