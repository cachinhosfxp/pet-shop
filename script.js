function adoteAgora() {

    // Mensagem personalizada
    alert("🐾 Que atitude linda! Você está mudando uma vida hoje!");

    // Rolagem suave até a galeria
    const galeria = document.querySelector(".galeria");
    if (galeria) {
        galeria.scrollIntoView({ behavior: "smooth" });
    }

    // Pequeno efeito visual no botão
    const botao = document.querySelector(".cta-button");
    if (botao) {
        botao.style.transform = "scale(0.95)";
        setTimeout(() => {
            botao.style.transform = "scale(1)";
        }, 150);
    }

    // Caso queira redirecionar futuramente:
    // window.location.href = "adocao.html";
}