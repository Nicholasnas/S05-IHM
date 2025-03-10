:root {
    --cor-click: #126ae2;
    --cor-sombra: #0a599b;
    --cor-text: black;
    --cor-back1: #edf2f4;
    --cor-back2: #6a937a;
}

body {
    margin: 0;
    background-color: var(--cor-back1);
    color: var(--cor-text);
    font-family: "Arimo", sans-serif;
    display: flex;
    justify-content: center;
}

.container {
    width: 90%;
    max-width: 800px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--cor-back2);
    padding: 10px;
    border-radius: 8px;
}

#menu {
    display: flex;
    align-items: center;
}

.svg_logo {
    width: 50px;
}

.menu button {
    background-color: var(--cor-click);
    color: white;
    border: none;
    padding: 8px 12px;
    margin: 0 5px;
    border-radius: 5px;
    cursor: pointer;
}

.menu button:hover {
    background-color: var(--cor-sombra);
}

main {
    margin-top: 20px;
}

.mensagens, .aulas, .noticias {
    background-color: white;
    padding: 15px;
    margin-bottom: 15px;
    border-radius: 10px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
}

h3 {
    margin-bottom: 10px;
}

.disciplina {
    background-color: var(--cor-click);
    color: white;
    padding: 8px;
    border-radius: 5px;
    margin-top: 5px;
}

footer {
    text-align: center;
    padding: 10px;
    background-color: var(--cor-back2);
    color: white;
    border-radius: 8px;
}
