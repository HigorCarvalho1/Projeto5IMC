export const Modal = {
    //Variaveis Modal
    reset: document.querySelector("#reset"),
    conteudo2: document.querySelector(".conteudo2"),
    resultado:document.querySelector(".resultado"),
    linha2: document.querySelector(".linha2"),
    linha: document.querySelector(".linha"),
    inpPeso: document.querySelector("#inpPeso"),
    inpAlt: document.querySelector("#inpAlt"),

    // Funções de ações
    open(){
        Modal.resultado.classList.toggle("hide1");
        Modal.conteudo2.classList.toggle("hide");
    },
    close(){
        Modal.resultado.classList.toggle("hide1");
        Modal.conteudo2.classList.toggle("hide");
        Modal.linha.classList.remove("open");
        Modal.linha2.classList.remove("open");
        Modal.inpPeso.value = ""
        Modal.inpAlt.value = ""
    },
    close1(){
        Modal.linha.classList.remove("open");
        Modal.linha2.classList.remove("open");
        
    },
    close3(){
        Modal.resultado.classList.add("hide1");
        Modal.conteudo2.classList.remove("hide");
        Modal.linha.classList.remove("open");
        Modal.linha2.classList.remove("open");
        Modal.inpPeso.value = ""
        Modal.inpAlt.value = ""

    }
}




