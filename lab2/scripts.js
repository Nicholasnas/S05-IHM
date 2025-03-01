// objeto do usuário
const usuario = { nome: "Raphael", matricula: "123456", pendencia: false, acessibilidade: true };

// lista objetos de armários
const armarios = [
  { id: 1, formato: "padrao", status: true, acessivel: false, reserva:null, devolucao: null},
  { id: 2, formato: "padrao", status: true, acessivel: false, reserva:null,devolucao: null},
  { id: 3, formato: "padrao", status: true, acessivel: false, reserva:null, devolucao: null},
  { id: 4, formato: "padrao", status: false, acessivel: true, reserva:null, devolucao: null },
  { id: 5, formato: "padrao", status: false, acessivel: true, reserva:null, devolucao: null },
  { id: 6, formato: "duplo", status: true, acessivel: true, reserva:null, devolucao: null },
  { id: 7, formato: "duplo", status: false, acessivel: true, reserva:null, devolucao: null },
  { id: 8, formato: "duplo", status: false, acessivel: true, reserva:null, devolucao: null },  
];

// função para reserva do armário, incluindo as regras.
function reservarArmario() {
  
  // obter tipo de armário selecionado pelo usuário no html.
  let tipoSelecionado = document.getElementById("tipoArmario").value;
  
  // na lista, filtrar apenas os armários que estão disponíveis e que são acessiveis ao usuário.
  let armariosDisponiveis = armarios.filter(a => a.formato === tipoSelecionado && a.status === true && usuario.acessibilidade === a.acessivel);
  
  // caso não exista armário disponível, retorna para o usuário mensagem.
  if (armariosDisponiveis.length === 0) {
    document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! Nenhum armário disponível para o tipo selecionado.`;
    return;
  }

  // Caso exista armário(s) disponíveil, seguimos sorteando uma opção. 
  let armarioSorteado = armariosDisponiveis[Math.floor(Math.random() * armariosDisponiveis.length)];
    // Pegando a data e hora atual no momento da reserva
    const dataAgora = new Date();
    armarioSorteado.reserva = dataAgora.toLocaleString('pt-BR');

    // Calcular a entrega do armário - prazo de 24 horas
    const dataDevolucao = new Date();
    dataDevolucao.setHours(dataAgora.getHours() + 24);
    armarioSorteado.devolucao = dataDevolucao.toLocaleString('pt-BR');

  // Armario sorteado fica indisponível
  // Depois localizamos o armário emprestado na lista de armarios e mudamos o status do armário.
  let armarioEmprestado = armarios.find(armario => armario.id === armarioSorteado.id);
  armarioEmprestado.status = false;
  
  // Finalmente, mudamos a pendencia do usuário para verdadeira.
  usuario.pendencia = true;
  
  // Impmimimos uma mensagem de reserva para o usuário.
  document.getElementById("resultado").innerText = `Olá, ${usuario.nome}! O armário ${armarioSorteado.id} foi reservado com sucesso!\n
  Data de reserva: ${armarioSorteado.reserva}\n
  Data de devolução: ${armarioSorteado.devolucao}`;

  console.log(usuario);
  console.log(armarios);

}