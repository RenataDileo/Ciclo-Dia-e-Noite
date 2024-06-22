const tglDark = document.querySelector("#toggle--dark");
const body = document.body
const imagem = document.querySelector("img");

let temaPreferido = localStorage.getItem("tema");


tglDark.addEventListener("change", alterarTema)

function carregarTema(){
    if(temaPreferido === "dark"){
        body.classList.add("dark");
        imagem.setAttribute("src", "praianoite.jpg")
        localStorage.setItem("tema", "dark")
    }
    else {
        body.classList.remove("dark");
        imagem.setAttribute("src", "praiadia.jpg") 
    }
}

function alterarTema(){

    if (body.classList.contains("dark")){
        body.classList.remove("dark");
        imagem.setAttribute("src", "praiadia.jpg")
        localStorage.setItem("tema", "")
    }
    else{
        body.classList.add("dark");
        imagem.setAttribute("src", "praianoite.jpg")
        localStorage.setItem("tema", "dark")
    }
}
carregarTema()

