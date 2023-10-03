Questão 1
// Com base no código abaixo, refatore o trecho do IF, convertendo para IF ternário.
// Escreva o código como se os resultados fossem impressos no CONSOLE.
function podeVotar(idade, analfabeto) {
  //let idade = 18;
  //let analfabeto = true;
  let msg = "";
  // --------------------------------------------------------------
  // if (idade < 16) {
  //   msg = "Não pode votar";
  // }
  // else if (((idade >= 16 && idade < 18) || idade > 70) && !analfabeto) {
  //   msg = "Voto facultativo";
  // }
  // else {
  //   if (analfabeto) {
  //     msg = "Voto facultativo";
  //   }
  //   else {
  //     msg = "Voto obrigatório";
  //   }
  // }
  // --------------------------------------------------------------

  // Digite a resposta abaixo:

  msg = (idade < 16) ? "Não pode votar" : 
  (((idade >= 16 && idade < 18) || idade > 70) && !analfabeto) ? "Voto facultativo" : 
  (analfabeto) ? "Voto Facultativo" : "Voto obrigatorio";

  //
  console.clear();
  console.log(msg);
}


// --------------------------------------------------------------------------------------------------------------
// Questão 2
// Extraia os itens do array fornecido e mostre no console cada registro em uma linha.
function exibeRegistros() {
  let nomes = ['Jéssica ', 'Rebeca', 'Raphael', 'Paulo', 'Márcio'];

  // Digite a resposta abaixo:
  
  for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
  }
}



// --------------------------------------------------------------------------------------------------------------
// Questão 3
// Complete o código abaixo de forma que o método que já está recebendo a string de nomes converta a string para
// um array, onde cada nome deve ser um item do array e ao final exiba o novo array no console
function convertendoStringparaArray(strNomes) {
  let arrNomes = [];

  // Digite a resposta abaixo:
    arrNomes = strNomes.split(", ");


    console.clear();
    console.log(arrNomes);
}

convertendoStringparaArray('Marcos, Phelipe, Ulysses, Deivit, Edmo');


// --------------------------------------------------------------------------------------------------------------
// Questão 4
// Dado um array de objetos, filtre apenas os registros onde o ESTADO seja DF, armazenando estes em um novo array
// de objetos e mostrando esse novo array no CONSOLE.
function registroEstadual() {
  let pessoasDF;
  const pessoas = [
    { nome: "Joana", estado: "DF" },
    { nome: "Raquel", estado: "SP" },
    { nome: "Renato", estado: "DF" },
    { nome: "Iago", estado: "ES" },
    { nome: "Douglas", estado: "RJ" }
  ];


  // Digite a resposta abaixo:
  pessoasDF = pessoas.filter(pessoa => pessoa.estado == "DF");


  //
  console.clear();
  console.log(pessoasDF);
}


// --------------------------------------------------------------------------------------------------------------
// Questão 5
// Dado um array recebido, ordene seus valores de forma ascendente e converta os dados para string, separando
// os items por ';'
function ordenacaoEascencao() {
  let array = [6, 2, 3, 5, 4, 1];

  // Digite a reposta abaixo

  array.sort();
  
  let convertendoArrayparaString = array.join(';');


  //
  console.clear();
  console.log(convertendoArrayparaString);
}


// --------------------------------------------------------------------------------------------------------------
// Questão 6
// Percora os items do array1 e insira no array2 os valores maiores que 25
function valoresMaiores() {
  let array1 = [1, 30, 22, 25, 45, 18, 32, 64, -5, 10, 78];
  let array2 = []

  // Digite a reposta abaixo
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] > 25) {
      array2.push(array1[i]);
    }
  }

  //
  console.clear();
  console.log(array2);
}


// --------------------------------------------------------------------------------------------------------------
// Questão 7
// Com base no objeto fornecido, mostre o nome completo da pessoa (separado por um espaço em branco),
// usando interpolação/template string,
function marvelComics() {
  let arrPessoas = [
    { nome: "Tony", sobrenome: "Stark" },
    { nome: "Scott", sobrenome: "Summers" },
    { nome: "Elizabeth", sobrenome: "Braddock" },
    { nome: "Peter", sobrenome: "Parker" },
    { nome: "Sue", sobrenome: "Storm" },
    { nome: "Remy", sobrenome: "LeBeau" }
  ];

  // Digite a reposta abaixo

  for (let i = 0; i < arrPessoas.length; i++) {
    let nomeSobrenome = `${arrPessoas[i].nome} ${arrPessoas[i].sobrenome}`;


    console.log(nomeSobrenome);
  }
}

// --------------------------------------------------------------------------------------------------------------
// Questão 8
// Dado o array de IDs fornecido, crie via dinâmicamente a estrutura HTML comentada abaixo, exatamente na mesma
// ordem, salve a estrutura na variável "htmlTemplate" e mostre no console como string
function Pacientes() {
  let arrIds = [3, 2, 1];
  let htmlTemplate;

  /*
 <div id="divPacientes" class="d-flex">
     <div class="flex-fill" id="divPac1">
         <button class="btn" onclick="console.log('paciente1');">Paciente 1</button>
     </div>
     <div class="flex-fill" id="divPac2">
         <button class="btn" onclick="console.log('paciente2');" hidden="true">Paciente 2</button>
     </div>
     <div class="flex-fill" id="divPac3">
         <button class="btn" onclick="console.log('paciente3');">Paciente 2</button>
     </div>
 </div>
 */

  // Digite a reposta abaixo
  
  let buttons = arrIds.sort().map(id => {
    return  `\t<div class="flex-fill" id="divPac${id}">\n\t\t<button class="btn" onclick="console.log('paciente${id}');">Paciente ${id}</button>\n\t</div>`
  })
  
    htmlTemplate = `<div id="divPacientes" class="d-flex">\n${buttons.join('\n')}\n</div>`

    console.clear();
    console.log(htmlTemplate);
}


// --------------------------------------------------------------------------------------------------------------
// Questão 9
// Complete a função abaixo, fazendo com que a mensagem "Hello, World!" seja mostrada 1x imediatamente ao 
// carregar a função e em seguida, 1x a cada 2 segundos
function olaTempo() {
  let msg = "Hello, World!";

  // Digite a reposta abaixo  
  console.log(msg); 

  setInterval(function() {
    console.log(msg); // Mostra a mensagem a cada 2 segundos
  }, 2000); // 2000 milissegundos (2 segundos)
}



// --------------------------------------------------------------------------------------------------------------
// Questão 10
// Dado o código abaixo, realize as seguintes alterações usando jQuery.
// 1 - Remova todas as classes do elemento "idPaciente" e de seu elemento pai;
// 2 - Adicione as classes "txtAzul" no elemento "idPaciente" e "fundoAzul" em seu elemento pai;
// 3 - Adicione o atributo "oninput" com a ação "contarLetras()" ao elemento "idPaciente" e remova o atributo "hidden" de seu elemento pai.
// OBS: Procure usar jQuery encadeado, de forma que todas as alterações sejam feitas em apenas 1 linha de código;

// Código:
// <div class="fundoVermelho" hidden>
//    <input id="idPaciente" class="fundoVerde" />
// </div>

// Escreva o código abaixo desta linha

$("#idPaciente").removeClass().addClass("txtAzul").parent().removeClass().addClass("fundoAzul").removeAttr("hidden").find("#idPaciente").attr("oninput", "contarLetras()");
