function openMenu() {
    document.getElementById("menu_aba").style.display = "block"; 
  }
  
  function closeMenu() {
    document.getElementById("menu_aba").style.display = "none";    
  }
  
  function temaLim() {
      document.documentElement.style.setProperty('--cor-click', '#38184C');
      document.documentElement.style.setProperty('--cor-sombra', '#9b0a59');
      document.documentElement.style.setProperty('--cor-text', 'black');
      document.documentElement.style.setProperty('--cor-back1', '#CEF09D');
      document.documentElement.style.setProperty('--cor-back2', '#4f6a93');
      document.documentElement.style.setProperty('--md-sys-color-primary', '#38184C');
  }
  
  function temaInatel() {
      document.documentElement.style.setProperty('--cor-click', '#126ae2');
      document.documentElement.style.setProperty('--cor-sombra', '#0a599b');
      document.documentElement.style.setProperty('--cor-text', 'black');
      document.documentElement.style.setProperty('--cor-back1', '#edf2f4');
      document.documentElement.style.setProperty('--cor-back2', '#6a937a');
      document.documentElement.style.setProperty('--md-sys-color-primary', '#126ae2');
    
  }
  
  function temaDark() {
    const cores = {
        '--cor-click': '#a8c5f2',  
        '--cor-sombra': '#3b2a45', 
        '--cor-text': '#e1e1e1',  
        '--cor-back1': '#1e1e2f', 
        '--cor-back2': '#27274d',
        '--md-sys-color-primary': '#8a7ff3' 
    };

    for (const [variavel, valor] of Object.entries(cores)) {
        document.documentElement.style.setProperty(variavel, valor);
    }
}
