function menu() {
  function inserirNoFim(lista, nome) {
  var novo = criaNo(nome);
  var posicaoR;

  if (lista.inicio === null) {
    lista.inicio = novo;
  } else {
    var atual = lista.inicio;

    while (atual.proximo !== null) {
      atual = atual.proximo;
    }

    atual.proximo = novo;
  }

  return true;
}

function inserirNaPosicao(lista, nome, posicao) {
  if (!Number.isInteger(posicao) || posicao < 0) {
    return false;
  }

  var novo = criaNo(nome);

  if (posicao === 0) {
    novo.proximo = lista.inicio;
    lista.inicio = novo;
    return true;
  }

  var atual = lista.inicio;
  var contador = 0;

  while (atual !== null && contador < posicao - 1) {
    atual = atual.proximo;
    contador++;
  }

  if (atual === null) {
    return false;
  }

  novo.proximo = atual.proximo;
  atual.proximo = novo;

  return true;
}
  var lista={inicio:null};
  
  function criaNo(nome){
    return {dado:nome,
            proximo:null
           }
  }
  
  lista.inicio = criaNo("Lucas");
  lista.inicio.proximo = criaNo("Julia");
  
  function excluirPosicao(lista, posicao){
    if(lista.inicio === null) return;
    if ( posicaoR === lista ) { 
    removerDaLista(lista);
    return;
   }
    let anterior = lista.inicio;
    for (let i = 0; i < pos - 1 && anterior !== null; i++) {
    anterior = anterior.proximo;
}
    if (anterior === null || anterior.proximo === null) return;
    anterior.proximo = anterior.proximo.proximo;
  }
  }
  
 while (true) {
  let escolha = prompt(
    "Escolha uma opção:\n" +
    "1 - Listar Todos\n" +
    "2 - Inserir no fim\n" +
    "3 - Inserir na posição\n" +
    "4 - Excluir posição\n" +
    "5 - Atualizar posição\n" +
    "6 - Buscar valor\n" +
    "7 - Sair"
  );

  if (escolha === null) {
    alert("Saindo do programa...");
    break;
  }

  let menuzin = Number(escolha);
  
  switch (menuzin) {
    case 1: 
      if (lista.inicio === null) {
        alert("A lista está vazia!");
      } else {
        let atual = lista.inicio;
        let resultado = "Elementos da lista:\n";
        
        while (atual !== null) {
          resultado += "- " + atual.dado + "\n";
          atual = atual.proximo;
        }
        
        alert(resultado);
      }
      break;

      
    case 2: {
  var nome = prompt("Digite o nome que deseja inserir:");

  if (nome !== null && nome.trim() !== "") {
    inserirNoFim(lista, nome);
    alert("Elemento inserido no fim!");
  }

  break;
}

case 3: {
  var nome = prompt("Digite o nome que deseja inserir:");

  if (nome === null || nome.trim() === "") {
    alert("Nome inválido!");
    break;
  }

  var posicao = Number(prompt("Digite a posição desejada:"));

  if (!Number.isInteger(posicao) || posicao < 0) {
    alert("Posição inválida!");
  } else if (inserirNaPosicao(lista, nome, posicao)) {
    alert("Elemento inserido na posição " + posicao + "!");
  } else {
    alert("Essa posição não existe na lista!");
  }

  break;
}
    case 4: {
      var posicaoR = prompt("Digite a posição que deseja excluir:")
      
       if (nome === null || nome.trim() === "") {
    alert("Nome inválido!");
    break;
  }

  if (!Number.isInteger(posicao) || posicao < 0) {
    alert("Posição inválida!");
  } else if (excluirPosicao(lista, nome, posicao)) {
    alert("Elemento removido na posição " + posicao + "!");
  } else {
    alert("Essa posição foi removida da lista!");
  }

  break;
  }
   
 case 7: 
      alert("Saindo do programa...");
      return;
      
    default:
      alert("Opção Inválida!");
      break;
    }
  }


menu();
 