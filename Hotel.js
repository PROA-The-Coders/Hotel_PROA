

var lista_hospedes = [
  "Gabriel Augusto",
  "Roberto Gómez Bolaños",
  "María Antonieta de las Nieves",
  "Hector Bonilha",
  "Carlos Villagrán",
  "Ramón Valdés",
];
 
login()

function login() {
  var nome_hotel = prompt("Insira o nome do hotel:");
  alert(`O nome do hotel é ${nome_hotel}`);

  var nome = prompt("Insira seu nome:");

  var senha = prompt("Digite sua senha:");
  senha = parseInt(senha); // Converte a senha para um número inteiro

  if (senha !== 2678) {
    alert("Senha incorreta. Tente novamente.");
    return;
  } else {
    inicio();
  }
}

function inicio() {
  alert(`Bem-vindo ao ${nome_hotel}, ${nome}! É um imenso prazer ter você por aqui.`);

  while (true) {
    var menu = parseInt(
      prompt(
        "Escolha uma opção:\n" +
        "01 - Reserva Diária\n" +
        "02 - Reserva\n" +
        "03 - Cadastrar Hóspedes\n" +
        "04 - Reservar Evento\n" +
        "05 - Opção\n" +
        "06 - Auditório para Quartos\n" +
        "07 - Opção\n" +
        "08 - Álcool ou Gasolina\n" +
        "09 - Concerto de Ar Condicionado\n" +
        "10 - Sair\n"
      )
    );

    switch (menu) {
      case 1:
        reserva_diaria();
        break;
      case 2:


function inicio() {
  alert(`Bem vindo ao Hotel ${nome_hotel}, ${nome}. É um imenso prazer ter você por aqui!`);

  while (true) {
    var menu = parseInt(
      prompt(
        "Escolha uma opção:\n" +
          "01- Reserva Diaria\n" +
          "02- Reserva\n" +
          "03- Cadastrar Hospedes\n" +
          "04. Reservar Evento\n" +
          "05. opção\n" +
          "06. Auditório Para Quartos\n" +
          "07. opção\n" +
          "08. alcool Ou Gasolina()n" +
          "09. Concerto De Ar Condicionado\n" +
          "10. Sair\n"
      )
    );

    switch (menu) {
      case 1:
        reserva_diaria();
        break;
      case 2:
        reserva();
        break;
      case 3:
        cadastrarHospede();
        break;
      case 4:
        festa_trabalho();
        break;
      case 5:
        buffet();
        break;
      case 6:
        auditório_quartos();
        break;
      case 7:
        evento();
        break;
      case 8:
        alcoolOuGasolina();
        break;
      case 9:
        criarEmpresa();
        break;
      case 10:
        sair();
        break;
      default:
        alert("Opção inválida. Tente novamente.");
    }
  }
}

/* 
function reserva_diaria() {
  function erro() {
    alert("Por favor, informe um número entre 1 e 14.");
  }

  function sair() {
    alert(`Muito obrigado e até logo, ${nome}.`);
    window.close();
  }

  function reserva() {
    var valor_da_diaria = parseFloat(
      prompt("Qual o valor padrão da diaria ? ")
    );
    var dias_de_hospedagem = parseFloat(
      prompt("Quantas diarias serão necessarias ? ")
    );
    var calculo = dias_de_hospedagem * valor_da_diaria;
    if (
      (valor_da_diaria <= 0 && dias_de_hospedagem <= 0) ||
      dias_de_hospedagem > 30
    ) {
      alert("valor ivalido, tente novamente");
      reserva();
    } else if (calculo) {
      alert(` o valor de ${dias_de_hospedagem} diarias é de R$${calculo} `);
      reserva_2();
    } else {
      reserva_2();
    }
  }
  function reserva_2() {
    var nome_hospede = prompt("Qual o nome do hospede ?");

    var resposta = prompt(" Você deseja reservar S/N ?");
    if (resposta === "s") {
      alert(`Obrigado(A) pela preferencia ${nome_hospede}`);
      inicio();
    } else {
      alert(`${nome_hospede}, reserva não efetuada   `);
      inicio();
    }
  }
}



reserva();
function reserva() {
  var nome_de_usuario = prompt("Qual o nome do usuario?");
  valorDiaria = parseInt(prompt("Qual o valor da diária?"));

  while (isNaN(valorDiaria) || valorDiaria <= 0) {
    alert("Por favor, insira um valor válido");
    valorDiaria = parseInt(prompt("Qual o valor da diária?"));
  }

  var quantia_diaria = parseInt(prompt("Quantas diárias serão necessárias?"));

  while (isNaN(quantia_diaria) || quantia_diaria <= 0 || quantia_diaria > 30) {
    alert("Por favor, insira um valor válido");
    quantia_diaria = parseInt(prompt("Quantas diárias serão necessárias?"));
  }

  var totalDiario = valorDiaria * quantia_diaria;
  alert(
    "O valor de " + quantia_diaria + " dias de hospedagem é de R$" + totalDiario
  );

  var nome_do_hospede = prompt("Qual o nome do hóspede?");

  var confirmacao_reserva = prompt(
    nome_de_usuario +
      ", você confirma a hospedagem para " +
      nome_do_hospede +
      " por " +
      quantia_diaria +
      " dias? S/N"
  );

  while (
    confirmacao_reserva.toUpperCase() !== "S" &&
    confirmacao_reserva.toUpperCase() !== "N"
  ) {
    alert("Por favor, insira S para confirmar ou N para cancelar.");
    confirmacao_reserva = prompt(
      nome_de_usuario +
        ", você confirma a hospedagem para " +
        nome_do_hospede +
        " por " +
        quantia_diaria +
        " dias? S/N"
    );
  }

  if (confirmacao_reserva.toUpperCase() === "S") {
    alert(
      nome_de_usuario +
        ", reserva efetuada para " +
        nome_do_hospede +
        ". O valor total é de R$" +
        totalDiario
    );
    reserva();
  } else {
    alert(nome_de_usuario + ", reserva não efetuada");
  }
}

//3) Com S ou com Z

var max_cadastros = 15;
var hospedes = [];

function cadastrarHospede() {
  if (hospedes.length >= max_cadastros) {
    alert("Máximo de cadastros atingido");
    return;
  }

  var nome = prompt("Qual o nome do Hóspede?");
  hospedes.push(nome);
  alert(`Hóspede ${nome} foi cadastrado com sucesso!`);
}

function pesquisarHospede() {
  const nome = prompt("Qual o nome do Hóspede?");
  if (hospedes.includes(nome)) {
    alert(`Hóspede ${nome} foi encontrado!`);
  } else {
    alert(`Hóspede ${nome} não foi encontrado!`);
  }
}

function listarHospedes() {
  hospedes.forEach((nome, index) => {
    alert(`Hóspede ${index + 1}: ${nome}`);
  });
}

while (true) {
  const opcao = prompt(
    "Selecione uma opção: 1. Cadastrar - 2. Pesquisar - 3. Listar - 4. Sair"
  );

  switch (opcao) {
    case "1":
      cadastrarHospede();
      break;
    case "2":
      pesquisarHospede();
      break;
    case "3":
      listarHospedes();
      break;
    case "4":
      alert("Saindo do programa.");
      process.exit(0); 
    default:
      alert("Opção inválida. Tente novamente.");
  }
}



function festa_trabalho() {
  var numGarcons = parseFloat(prompt("Quantos garçons serão necessários?"));
  var horasEv = parseFloat(prompt("Qual a duração do evento em horas?"));

  var resultFinal = numGarcons * 10.5 * horasEv;

  alert("Custo total: R$" + resultFinal.toFixed(2));

  var confirmReserv = prompt("Gostaria de efetuar a reserva? S/N");

  if (confirmReserv.toUpperCase() === "S") {
    var yourName = prompt("Digite seu nome:");
    alert(
      `Sua reserva foi efetuada com sucesso, ${yourName}. Valor final: R$${resultFinal.toFixed(
        2
      )}`
    );
  } else {
    alert("Reserva não efetuada.");
  }
}

function buffet() {
  var quantidade_de_convidados = parseInt(
    prompt("Qual o número de convidados para o evento?")
  );

  if (quantidade_de_convidados > 350) {
    alert("Quantidade de convidados superior à capacidade máxima.");
  } else {
    var litrosCafe = quantidade_de_convidados * 0.2;
    var litrosAgua = quantidade_de_convidados * 0.5;
    var salgadosPorPessoa = 7;
    var totalSalgados = quantidade_de_convidados * salgadosPorPessoa;

    const cafe = 0.8;
    const agua = 0.4;
    const precoSalgados = 34;

    var custoTotalComida =
      litrosCafe * cafe +
      litrosAgua * agua +
      (totalSalgados / 100) * precoSalgados;

    alert(
      "O evento precisará de:\n" +
        litrosCafe.toFixed(2) +
        " litros de café,\n" +
        litrosAgua.toFixed(2) +
        " litros de água,\n" +
        totalSalgados +
        " salgados. \n O custo total do evento será de R$ " +
        custoTotalComida.toFixed(2)
    );

    var resposta = prompt("Gostaria de efetuar a reserva? S/N").toUpperCase();

    if (resposta === "S") {
      var nome = prompt("Qual é o seu nome?");
      alert(nome + ", reserva efetuada com sucesso.");
    }
  }
}



function auditório_quartos() {
  var convidados = parseInt(
    prompt("Qual o número de convidados para o seu evento?")
  );

  if (convidados < 0 || convidados > 350) {
    alert("Número de convidados inválido");
  } else {
    var capacidadeLaranja = 150 + 70;
    var cadeirasAdicionaisLaranja = Math.max(0, convidados - capacidadeLaranja);

    if (convidados <= 150) {
      alert("Use o auditório Laranja");
    } else if (convidados <= 350) {
      alert("Use o auditório Colorado");
    } else {
      alert("Quantidade de convidados superior à capacidade máxima");
    }

    if (cadeirasAdicionaisLaranja > 0) {
      var respostaReserva = prompt(
        "Gostaria de efetuar a reserva? (S/N)"
      ).toUpperCase();
      if (respostaReserva === "S") {
        var nome = prompt("Por favor, insira seu nome:");
        alert(
          nome +
            ", reserva efetuada com sucesso. Serão necessárias " +
            cadeirasAdicionaisLaranja +
            " cadeiras adicionais no auditório Laranja."
        );
      } else {
        alert("Reserva não efetuada.");
      }
    }
  }
}

function evento() {
  var diasSemana = {
    segunda: { inicio: 7, fim: 23 },
    terca: { inicio: 7, fim: 23 },
    quarta: { inicio: 7, fim: 23 },
    quinta: { inicio: 7, fim: 23 },
    sexta: { inicio: 7, fim: 23 },
    sabado: { inicio: 7, fim: 15 },
    domingo: { inicio: 7, fim: 15 },
  };

  var dia = prompt("Qual o dia do seu evento?");
  var hora = parseInt(prompt("Qual a hora do seu evento?"));

  if (
    diasSemana[dia] &&
    hora >= diasSemana[dia].inicio &&
    hora <= diasSemana[dia].fim
  ) {
    var nomeEmpresa = prompt("Qual o nome da sua empresa?");
    alert(`Restaurante reservado para ${nomeEmpresa}. ${dia} às ${hora}hs.`);
  } else {
    alert("Restaurante indisponível");
    evento();
  }
}

function alcoolOuGasolina() {
  precoalcoolwayneoil = parseFloat(
    prompt("Qual o valor do álcool no posto Wayne Oil?")
  );
  precogasolinawayneoil = parseFloat(
    prompt("Qual o valor da gasolina no posto Wayne Oil?")
  );
  precoalcoolstarkpetrol = parseFloat(
    prompt("Qual o valor do álcool no posto Stark Petrol?")
  );
  precogasolinastarkpetrol = parseFloat(
    prompt("Qual o valor da gasolina no posto Stark Petrol?")
  );

  precoalcoolcomdesconto = precogasolinawayneoil * 0.7;

  valorabastecimentoalcoolwayneoil = precoalcoolwayneoil * 42;
  valorabastecimentogasolinawayneoil = precogasolinawayneoil * 42;
  valorabastecimentoalcoolstarkpetrol = precoalcoolstarkpetrol * 42;
  valorabastecimentogasolinastarkpetrol = precogasolinastarkpetrol * 42;

  if (
    precoalcoolcomdesconto < precoalcoolstarkpetrol &&
    precoalcoolcomdesconto < precogasolinawayneoil
  ) {
    combustivelmaisvantajoso = "álcool";
    postomaisbarato = "Wayne Oil";
  } else if (precoalcoolstarkpetrol < precogasolinawayneoil) {
    combustivelmaisvantajoso = "álcool";
    postomaisbarato = "Stark Petrol";
  } else {
    combustivelmaisvantajoso = "gasolina";
    postomaisbarato = "Wayne Oil";
  }

  alert(
    "É mais barato abastecer com " +
      combustivelmaisvantajoso +
      " no posto " +
      postomaisbarato +
      "."
  );
}

function criarEmpresa(
  nome,
  valorServico,
  quantidadeAparelhos,
  porcentagemDesconto
) {
  return {
    nome: nome,
    valorServico: parseFloat(valorServico),
    quantidadeAparelhos: parseInt(quantidadeAparelhos),
    porcentagemDesconto: parseFloat(porcentagemDesconto),
  };
}

function calcularValorComDesconto(empresa) {
  var valorTotal = empresa.valorServico * empresa.quantidadeAparelhos;
  var desconto = (empresa.porcentagemDesconto / 100) * valorTotal;
  var valorComDesconto = valorTotal - desconto;
  return valorComDesconto;
}

function calcularValorSemDesconto(empresa) {
  return empresa.valorServico * empresa.quantidadeAparelhos;
}

var empresas = [];
var menorValor = Infinity;
var empresaMenorValor = null;

while (true) {
  var nome = prompt("Qual é o nome da empresa?");
  var valor_servico = parseFloat(
    prompt("Qual é o valor de serviço por aparelho?")
  );
  var quantidade_aparelhos = parseInt(
    prompt("Quantos aparelhos serão necessários para reparo?")
  );
  var porcentagem_desconto = parseFloat(
    prompt("Qual é a porcentagem de desconto?")
  );
  var quantidade_minima = parseInt(
    prompt("Qual é a quantidade mínima de aparelhos para fornecer desconto?")
  );

  var empresa = criarEmpresa(
    nome,
    valor_servico,
    quantidade_aparelhos,
    porcentagem_desconto
  );
  empresas.push(empresa);

  var valorTotal;
  if (empresa.quantidadeAparelhos >= quantidade_minima) {
    valorTotal = calcularValorComDesconto(empresa);
  } else {
    valorTotal = calcularValorSemDesconto(empresa);
  }

  if (valorTotal < menorValor) {
    menorValor = valorTotal;
    empresaMenorValor = empresa.nome;
  }

  var continuar = prompt("Deseja informar novos dados? (S/N)").toUpperCase();
  if (continuar !== "S") {
    break;
  }
}

if (empresaMenorValor !== null) {
  alert(
    "O orçamento de menor valor é o da empresa " +
      empresaMenorValor +
      " por R$ " +
      menorValor.toFixed(2)
  );
} else {
  alert("Nenhuma empresa encontrada.");
}
 */












































/* function sistema_cadastrar_hospedes() {

			var escolha_hospedes = parseInt(prompt(
				'Cadastro de Hóspedes\n\n Selecione uma opção: \n1. Cadastrar \n2. Pesquisar \n3. Listar \n4. Sair'));

			if (escolha_hospedes === 1) {
				cadastrar_hospedes();
			} else if (escolha_hospedes === 2) {
				pesquisar_hospedes();
			} else if (escolha_hospedes === 3) {
				listar_todos_hospedes();
			} else if (escolha_hospedes === 4) {

			} else {
				erro_pesquisar_hospedes();
			}

		}




		function cadastrar_hospedes() {
			// lenght é uma propriedade que retorna a quantidade de itens dentro do array. 
			// length = comprimento - extensão - quantidade
			if (lista_hospedes.length >= 15) {
				alert("Número máximo de hóspedes cadastrados.");
			} else {
				let nome_hospede = prompt('Por favor, informe o nome da(o) hóspede:');

				// O método push() permite adicionar um item ao Array/Vetor. Importante dizer que ele adiciona o elemento ao final do Array/Vetor.
				lista_hospedes.push(nome_hospede);
				console.log(lista_hospedes); // O console é usado apenas para exibir ao desenvolvedor todo mundo que já está cadastrado.
				alert("Sucesso! Hóspede " + nome_hospede + " foi cadastrada(o) com sucesso!\n");
			}

			sistema_cadastrar_hospedes();
		}

		function pesquisar_hospedes() {
			let nome_hospede = prompt('Por favor, informe o nome da(o) hóspede para pesquisa:');
			// O método includes() procura por um elemento dentro do Array e retorna verdadeiro ou falso. Caso queira comparar números, o mais indicado é o método find();
			if (lista_hospedes.includes(nome_hospede)) {
				alert(nome_hospede + ' encontrada(o).');
			} else {
				alert(nome_hospede + ' não foi encontrada(o).');
			}

			sistema_cadastrar_hospedes();
		}

		function listar_todos_hospedes() {
			//ForEach é um método especial que aplica uma função específica para todos os elementos dentro de um array.
			lista_hospedes.forEach(para_cada_item); //Para cada

			//Utilizando um laço for
			/* for (let i = 0; i < lista_hospedes.length; i++) {
				alert("O Hóspede " + lista_hospedes[i] + " ocupa a posição " + i);
			} 

			Utilizando um laço while
			var i = 0; 
			while(i < lista_hospedes.length) {
				alert("O Hóspede " + lista_hospedes[i] + " ocupa a posição " + i);
				i++;
			}

			sistema_cadastrar_hospedes();
		}

		Função feita para trabalhar com os arrays. Já vem com os parâmetros pré-definidos. 
		function para_cada_item(value, index) {
			var posicao = index + 1;
			alert("O Hóspede " + value + " ocupa a posição " + posicao);
		}


		function erro_pesquisar_hospedes() {
			alert('Por favor, informe um número entre 1 e 4');
			sistema_cadastrar_hospedes();
		}

		 sistema_cadastrar_hospedes();  */
