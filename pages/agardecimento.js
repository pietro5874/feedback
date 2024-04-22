function pagarnota() {
    let nota = localStorage.getItem("nota")
    
    let paragrafonota = document.querySelector(".paragrafo_nota")

    paragrafonota.innerHTML = `voçê selecionou ${nota} de 5`
}

pagarnota()