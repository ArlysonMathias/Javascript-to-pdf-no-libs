
//Aqui temos a função que irá gerar o nosso pdf
function gerarPdf () {

  //primeiro foi criado uma variável chamada 'dados' que pega os valores do input através do id
  const dados = document.getElementById('text').value;

  //aqui foi criada uma outra variável chama win que ficará responsável por abrir uma janela onde será possível salvar o pdf.
  //Usando o método window.open(), ele pede 3 parâmetros, a url da janela que onde você quer abrir que é opcional, target que é o nome do contexto da navegação e featueres que são as configurações como altura e largura da janela
  const win = window.open("", "", "heigth=700, width=700");

  //aqui foi usada o o document.write para escrever na janela que foi criada
  win.document.write("<html><head>");
  win.document.write("<title>Gerador de PDF</title>");
  win.document.write("</head>");
  win.document.write("</body>");
  win.document.write(dados);
  win.document.write("</body></html>");

  // essé método abaixo é utilizado para fechar janelas que estão abertas pelo método window.open
  window.close();

  // método do javascript para imprimir o conteúdo da janela atual
  win.print();
};
