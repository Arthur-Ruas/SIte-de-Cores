window.addEventListener("load", addCor);

function addCor(){
    const red = document.getElementById("red"),
            redText = document.getElementById("redText"),
        green = document.getElementById("green"),
            greenText = document.getElementById("greenText"),
        blue = document.getElementById("blue"),
            blueText = document.getElementById("blueText");

    
    redText.value   = red.value;
    greenText.value = green.value;
    blueText.value  = blue.value;

    resultado.style.backgroundColor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    atualizar();
}

function atualizar(){
    red.addEventListener       ("input", addCor);
    green.addEventListener     ("input", addCor);
    blue.addEventListener      ("input", addCor);
}

const btn = document.getElementById("add"),
    resultado = document.getElementById("resultado");
btn.addEventListener("click", () =>{
    const pag = document.querySelector(".novaCor");

    let valor = document.createElement("p");
    valor.appendChild(document.createTextNode(`rgb (${red.value}, ${green.value}, ${blue.value})`));
    valor.classList.add("nome");

    let div = document.createElement("div");
    pag.appendChild(div);
    div.classList.add("cor");
    div.appendChild(valor);

    let cor = `rgb(${red.value}, ${green.value}, ${blue.value})`;
    div.style.backgroundColor = cor;
});
