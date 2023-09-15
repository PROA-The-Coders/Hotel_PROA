	// 1ª parte

	var lista_hospedes = ["Gabriel Augusto", "Roberto Gómez Bolaños", "María Antonieta de las Nieves", "Hector Bonilha", "Carlos Villagrán", "Ramón Valdés"];

	var nome_hotel

	var nome

	const senhaCorreta = "2678";

	function login() {

		var nome_hotel = prompt("insira o nome do hotel:");
		alert(`O nome do hotel é ${nome_hotel}`);

		var nome = prompt("insira seu nome:");

		var senha = prompt("Digite sua senha:");
		if (senha !== senhaCorreta) {
			alert("Senha incorreta. Tente novamente.");
			return; // Saia da função em caso de senha incorreta
		} else {
			inicio();
		}

	}

	//2ª parte

	function inicio() {

		alert(`Bem vindo ao Hotel ${nome_hotel}, ${nome}. É um imenso prazer ter você por aqui!`);


		while (true) {

			var menu = parseInt(
				prompt(
					"Escolha uma opção:\n" +
					"1. reservas e diárias\n" +
					"2. opção\n" +
					"3. opção\n" +
					"4. opção\n" +
					"5. opção\n" +
					"6. opção\n" +
					"7. opção\n" +
					"8. opção\n" +
					"9. opção\n" +
					"10. opção\n" +
					"11. opção\n" +
					"12. opção\n" +
					"13. opção\n" +
					"14. Sair"
				)
			);



			switch (menu) {
				case 1:
					reserva_diaria();
					break;
				case 2:
					var_2();
					break;
				case 3:
					var_3();
					break;
				case 4:
					var_4();
					break;
				case 5:
					var_5();
					break;
				case 6:
					var_6();
					break;
				case 7:
					var_7();
					break;
				case 8:
					var_8();
					break;
				case 9:
					var_9();
					break;
				case 10:
					var_10();
					break;
				case 11:
					var_11();
					break;
				case 12:
					var_12();
					break;
				case 13:
					var_13();
					break;
				case 14:
					sair();
					break;
				default:
					erro();
			}
		}
	}

	// 3ªparte
	function reserva_diaria() {
		
	}

	function erro() {
		alert("Por favor, informe um número entre 1 e 14.");
	}

	function sair() {
		alert(`Muito obrigado e até logo, ${nome}.`);
		window.close();
	}





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