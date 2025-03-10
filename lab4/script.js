
document.addEventListener("DOMContentLoaded", () => {
    const temaSalvo = localStorage.getItem("tema");
    if (temaSalvo) {
        mudar_tema(temaSalvo);
    }
});

function mudar_tema(tema) {
    const root = document.documentElement;

    if (tema === "tema_azul") {
        root.style.setProperty("--cor-click", "#126ae2");
        root.style.setProperty("--cor-sombra", "#0a599b");
        root.style.setProperty("--cor-text", "black");
        root.style.setProperty("--cor-back1", "#edf2f4");
        root.style.setProperty("--cor-back2", "#6a937a");
    } 
    else if (tema === "tema_verde") {
        root.style.setProperty("--cor-click", "#0a9b50");
        root.style.setProperty("--cor-sombra", "#087d40");
        root.style.setProperty("--cor-text", "black");
        root.style.setProperty("--cor-back1", "#d8f3dc");
        root.style.setProperty("--cor-back2", "#40916c");
    } 
    else if (tema === "tema_escuro") {
        root.style.setProperty("--cor-click", "#ff6600");
        root.style.setProperty("--cor-sombra", "#cc5200");
        root.style.setProperty("--cor-text", "black");
        root.style.setProperty("--cor-back1", "#121212");
        root.style.setProperty("--cor-back2", "#333333");
    }

    // Salva o tema no localStorage para persistência
    localStorage.setItem("tema", tema);
}
