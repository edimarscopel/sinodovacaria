//Início script menu
// baseado em https://github.com/origamid/publico/tree/main/menu-mobile

const buttonMobi = document.getElementById('button_mobile');

const clickLinkMenu = document.getElementById('menu-ul');

function alternarMenu(event) {
  const nav = document.getElementById('menu_principal');
  nav.classList.toggle('ativado');

  const ativado = nav.classList.contains('ativado');

  event.currentTarget.setAttribute('aria-expanded', ativado);

  if (ativado) {
    event.currentTarget.setAttribute('aria-label', 'Fechar menu de navegação');
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir menu de navegação');
  }

}

buttonMobi.addEventListener('click', alternarMenu);
clickLinkMenu.addEventListener('click', alternarMenu);

//Fim script menu

//Início script AGENDA

var listaEventos = {

  "eventos": [
    {
      "titulo": "45ª Assembleia Diocesana de Pastoral",
      "data": "2021,11,6",
      "data_exibe": "5 e 6 de novembro de 2021",
      "hora": "",
      "local": "Centro de Formação - Vacaria",
      "descricao": "A Assembleia ocorre anualmente e tem por objetivo avaliar as atividades pastorais do ano corrente, bem como planejar o ano seguinte e refletir temas pertinentes para a ação eclesial.",
      "link": ""
    },
    {
      "titulo": "Abertura oficial do Sínodo",
      "data": "2022,03,26",
      "data_exibe": "26 de março de 2022",
      "hora": "hora",
      "local": "Vacaria",
      "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorem, explicabo neque nobis",
      "link": ""
    },
    {
      "titulo": "Abertura oficial do Sínodo",
      "data": "2022,03,27",
      "data_exibe": "27 de março de 2022",
      "hora": "hora",
      "local": "Sananduva",
      "descricao": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur dolorem, explicabo neque nobis",
      "link": ""
    },
    {
      "titulo": "",
      "data": "",
      "data_exibe": "",
      "hora": "",
      "local": "",
      "descricao": "",
      "link": ""
    },
  ]
};


var eventos = document.querySelector('div#lista_eventos');

var evento = listaEventos.eventos;

for (var i = 0; i < evento.length && i < 6; i++) {

  // verifica se é evento futuro
  var hoje = new Date();
  var dataEvento = new Date(evento[i].data)

  var faltaDias = dataEvento - hoje;
  var falta = faltaDias / (1000 * 60 * 60 * 24);

  var dataFormatada = dataEvento.toLocaleDateString('pt-BR', {timeZone: 'UTC'});

  if (falta > -1){
  
  // cria elementos

  var individual = document.createElement('div');
  var header = document.createElement('div');
  var evento_div = document.createElement('div');
  var titulo = document.createElement('h3');
  var info = document.createElement('div');
  var data = document.createElement('p');
  var hora = document.createElement('p');
  var local = document.createElement('p');
  var descricao = document.createElement('div');
  var texto_descricao = document.createElement('p');
  var link = document.createElement('a');
  var button = document.createElement('button');

  //define classes

  individual.setAttribute('class', 'evento_individual');
  header.setAttribute('class', 'header_evento');
  evento_div.setAttribute('class', 'evento');
  info.setAttribute('class', 'info_evento');
  descricao.setAttribute('class', 'descricao_evento');


  //define valores
  titulo.textContent = evento[i].titulo;
  data.textContent = evento[i].data_exibe;
  hora.textContent = evento[i].hora;
  local.textContent = evento[i].local;
  texto_descricao.textContent = evento[i].descricao;
  if (evento[i].link.length > 2) {
    link.setAttribute('href', evento[i].link);
    button.textContent = "Saiba mais";
  }

  //manipula a DOM

  header.appendChild(evento_div);
  header.appendChild(info);

  evento_div.appendChild(titulo);

  info.appendChild(data);
  info.appendChild(hora);
  info.appendChild(local);

  descricao.appendChild(texto_descricao);

  if (evento[i].link.length > 2) {
    descricao.appendChild(link);

    link.appendChild(button);
  }

  individual.appendChild(header);
  individual.appendChild(descricao);

  eventos.appendChild(individual);

}
}



