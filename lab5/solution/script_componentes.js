class AulasComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.hoje = "ter";
    }
  
    connectedCallback() {
      this.loadData();
    }
  
    async loadData() {
      try {
        console.log("Carregando dados das aulas...");
        const response = await fetch('aulas.json');
        const aulas = await response.json();
        console.log("Verificando conteudo.")
        this.render(aulas);

      } catch (error) {
        console.error('Erro ao carregar os dados das aulas:', error);
      }
    }
  
    render(aulas) {
      const aulasDia = aulas.filter(a => a.data === this.hoje);
  
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'styles_componentes.css'; 
      this.shadowRoot.appendChild(link); 
  
      this.shadowRoot.innerHTML += `
        <div>
          ${aulasDia.map(a => {
            let provaDisplay = a.prova_alert ? '' : 'display: none;';
            let corNota = this.definirCorNota(a.nota);
            return `
             <div class="comp-aula">
                            <div class="lable-prova p_lable" style="${provaDisplay}">PROVA: <b>${a.prova}</b></div>
                            <div class="titulo_aula">${a.disciplina}</div>
                            <p class="p">Local e Horário: <b>${a.local} - ${a.horario}</b></p>
                            <div class="lables">
                                <div class="lable-frequencia p_lable">FALTAS: <b>${a.frequencia}</b></div>
                                <div class="lable-nota p_lable" style="background-color: ${corNota};">CR: <b>${a.nota}</b></div>
                            </div>
                        </div>
            `;
          }).join('')}
        </div>
      `;
    }

    definirCorNota(nota){
        if(nota < 6){
            return 'red';
        }
        if (nota >= 6 && nota < 8)
            return 'orange';
        
        return 'green';
    }
  }
  
  customElements.define('aulas-component', AulasComponent);  