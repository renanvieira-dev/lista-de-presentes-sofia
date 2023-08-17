document.getElementById("copy-btn").addEventListener("click", function(e) {
    e.preventDefault();
    const conteudoTag = document.getElementById("copy-content").innerText;

    navigator.clipboard.writeText(conteudoTag)
        .then(() => {
            console.log("Conteúdo copiado com sucesso:", conteudoTag);
            alert("Conteúdo copiado com sucesso!");
        })
        .catch(err => {
            console.error("Erro ao copiar conteúdo:", err);
            alert("Erro ao copiar conteúdo.");
        });
});


function openModal(){
    const openModalSection = document.getElementById('modal').style.display = 'flex';
}

function closeModal(){
    const closeModalSection = document.getElementById('modal').style.display = 'none';
}