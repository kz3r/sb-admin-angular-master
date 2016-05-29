'use strict';

	angular.module('sbAdminApp')
		.controller('RegistroController', RegistroController);

	RegistroController.$inject = ['$location', '$scope', 'Autenticacao'];


	function RegistroController($location, $scope, Autenticacao){
		var vm = this;

		vm.registro = registro;

		/*Se o usuário está autenticado, não deveria acessar essa página
		  Não cabe no nosso contexto, mas a funcionalidade está definida abaixo
		//activate();

		function activate() {
			if (Autenticacao.isAuthenticated()){
				$location.url('/');
			}
		}
		*/

		function registro() {
			Autenticacao.registro(vm.email, vm.password, vm.nome);
		}
	}
	
	angular.module('sbAdminApp')
		.controller('ServicoController', ServicoController);

	ServicoController.$inject = [ '$rootScope', '$scope', 'Servico'];


	function ServicoController( $rootScope, $scope, Servico){
		var vm = this;
		vm.submit = submit;
		vm.destroy = destroy;
		vm.lista_servicos=[];
		activate();
		
		
		
		function submit() {

			Servico.submit(vm.descricao).then(servicosSuccessFn, servicosErrorFn);
			
			function servicosSuccessFn(data, status, headers, config) {
				vm.lista_servicos.unshift({
				descricao: vm.descricao 
				});
				vm.descricao = [];
				SnackBar.show({ pos: 'bottom-center', text: 'Serviço adicionado com sucesso!', actionText: 'Ocultar', actionTextColor: '#00FF00'});	
			}
			function servicosErrorFn(data, status, headers, config) {
				SnackBar.show({ pos: 'bottom-center', text: 'Serviço não pode ser adicionado!', actionText: 'Ocultar', actionTextColor: '#FF0000'});	
			}
		}
		function destroy(id) {
			Servico.destroy(vm.lista_servicos[id].descricao).then(delservicosSuccessFn, delservicosErrorFn);

		  function delservicosSuccessFn(data, status, headers, config) {
			activate();
			SnackBar.show({ pos: 'bottom-center', text: 'Serviço excluido com sucesso!', actionText: 'Ocultar', actionTextColor: '#00FF00'});
		  }

		  function delservicosErrorFn(data, status, headers, config) {
			SnackBar.show({ pos: 'bottom-center', text: 'Serviço não pode ser excluido!', actionText: 'Ocultar', actionTextColor: '#FF0000'});
		  }
		}
		function activate() {
			Servico.listar_servicos().then(servicosSuccessFn, servicosErrorFn);

			  function servicosSuccessFn(data, status, headers, config) {
				vm.lista_servicos = data.data;
			  }

			  function servicosErrorFn(data, status, headers, config) {
				SnackBar.show({ pos: 'bottom-center', text: 'Erro ao carregar serviços!', actionText: 'Ocultar', actionTextColor: '#FF0000'});
			  }
			 
		}
	}
	
	
	angular.module('sbAdminApp')
		.controller('SistemaController', SistemaController);

	SistemaController.$inject = ['$rootScope', '$scope', 'Sistema'];

	function SistemaController($rootScope, $scope, Sistema){
		var vm = this;

		vm.submit = submit;
		vm.destroy = destroy;
		vm.lista_sistemas=[];
		activate();
		
		function submit() {

			Sistema.submit(vm.descricao).then(sistemasSuccessFn, sistemasErrorFn);
			
			function sistemasSuccessFn(data, status, headers, config) {
				vm.lista_sistemas.unshift({
				descricao: vm.descricao 
				});
				vm.descricao = [];
				SnackBar.show({ pos: 'bottom-center', text: 'Sistema adicionado com sucesso!', actionText: 'Ocultar', actionTextColor: '#00FF00'});
			  }

			  function sistemasErrorFn(data, status, headers, config) {
				SnackBar.show({ pos: 'bottom-center', text: 'Sistema não pode ser adicionado!', actionText: 'Ocultar', actionTextColor: '#FF0000'});
			  }
		}
		function destroy(id) {
		  Sistema.destroy(vm.lista_sistemas[id].descricao).then(delsistemasSuccessFn, delsistemasErrorFn);

		  function delsistemasSuccessFn(data, status, headers, config) {
			activate();
			SnackBar.show({ pos: 'bottom-center', text: 'Sistema excluido com sucesso!', actionText: 'Ocultar', actionTextColor: '#00FF00'});
		  }

		  function delsistemasErrorFn(data, status, headers, config) {
			SnackBar.show({ pos: 'bottom-center', text: 'Sistema não pode ser excluido!', actionText: 'Ocultar', actionTextColor: '#FF0000'});
		  }
		}
		function activate() {
			Sistema.listar_sistemas().then(sistemasSuccessFn, sistemasErrorFn);

			  function sistemasSuccessFn(data, status, headers, config) {
				vm.lista_sistemas = data.data;
			  }

			  function sistemasErrorFn(data, status, headers, config) {
				SnackBar.show({ pos: 'bottom-center', text: 'Erro ao carregar sistemas!', actionText: 'Ocultar', actionTextColor: '#FF0000'});
			  }
			 
		}
	}
	
	angular.module('sbAdminApp')
		.controller('KitDeplecaoController', KitDeplecaoController);

	KitDeplecaoController.$inject = ['$rootScope', '$scope', 'KitDeplecao'];

	function KitDeplecaoController($rootScope, $scope, KitDeplecao){
		var vm = this;

		vm.submit = submit;
		vm.destroy = destroy;
		vm.lista_kitdeplecao=[];
		activate();
		
		function submit() {

			KitDeplecao.submit(vm.descricao).then(kitdeplecaoSuccessFn, kitdeplecaoErrorFn);
			
			function kitdeplecaoSuccessFn(data, status, headers, config) {
				vm.lista_kitdeplecao.unshift({
				descricao: vm.descricao 
				});
				vm.descricao = [];
				SnackBar.show({ pos: 'bottom-center', text: 'Kit de Depleção adicionado com sucesso!', actionText: 'Ocultar', actionTextColor: '#00FF00'});
			  }

			  function kitdeplecaoErrorFn(data, status, headers, config) {
				SnackBar.show({ pos: 'bottom-center', text: 'Kit de Depleção não pode ser adicionado!', actionText: 'Ocultar', actionTextColor: '#FF0000'});
			  }
		}
		function destroy(id) {
		  KitDeplecao.destroy(vm.lista_kitdeplecao[id].descricao).then(delkitdeplecaoSuccessFn, delkitdeplecaoErrorFn);

		  function delkitdeplecaoSuccessFn(data, status, headers, config) {
			activate();
			SnackBar.show({ pos: 'bottom-center', text: 'Kit de Depleção excluido com sucesso!', actionText: 'Ocultar', actionTextColor: '#00FF00'});
		  }

		  function delkitdeplecaoErrorFn(data, status, headers, config) {
			SnackBar.show({ pos: 'bottom-center', text: 'Kit de Depleção não pode ser excluido!', actionText: 'Ocultar', actionTextColor: '#FF0000'});
		  }
		}
		function activate() {
			KitDeplecao.listar_kitdeplecao().then(kitdeplecaoSuccessFn, kitdeplecaoErrorFn);

			  function kitdeplecaoSuccessFn(data, status, headers, config) {
				vm.lista_kitdeplecao = data.data;
			  }

			  function kitdeplecaoErrorFn(data, status, headers, config) {
				SnackBar.show({ pos: 'bottom-center', text: 'Erro ao carregar kits de depleção!', actionText: 'Ocultar', actionTextColor: '#FF0000'});
			  }
			 
		}
	}

		
	
	angular.module('sbAdminApp')
		.controller('ProjetoController', ProjetoController);

	ProjetoController.$inject = ['$rootScope', '$scope', 'Instituicao', 'Projeto','Usuario'];

	function ProjetoController($rootScope, $scope, Instituicao, Projeto, Usuario){
		var vm = this;
		
		vm.add_instituicao = add_instituicao;
		vm.limpar_membros = limpar_membros;
		vm.remove = remove;
		vm.add_membro = add_membro;
		vm.pick_instituicao = pick_instituicao;
		vm.submit = submit;
		vm.lista_projetos=[];
		vm.lista_instituicoes=[];
		vm.lista_usuarios=[{nome:'Teste'},{nome:'Teste2'}];
		vm.membros_projeto=[];
		listar_instituicoes();
		listar_projetos();
		listar_usuarios();
		
		function add_instituicao(){
			
			Instituicao.submit(vm.filtro_instituicao).then(instituicaoSuccessFn, instituicaoprojetoErrorFn);
			
			function instituicaoSuccessFn(data, status, headers, config) {
				listar_instituicoes();
				SnackBar.show({ pos: 'bottom-center', text: 'Instituição adicionada com sucesso!', actionText: 'Ocultar', actionTextColor: '#00FF00'});
				
			  }

			  function instituicaoprojetoErrorFn(data, status, headers, config) {
				SnackBar.show({ pos: 'bottom-center', text: 'Instituição não pode ser adicionada!', actionText: 'Ocultar', actionTextColor: '#FF0000'});
			  }
		}
		function limpar_membros(){
			vm.membros_projeto = [];
		}
		function remove(registro){
			var index = vm.membros_projeto.indexOf(registro);
			vm.membros_projeto.splice(index, 1);     
		}
		function add_membro(membro){
			
			vm.membros_projeto.unshift({
				id: membro.id,
				nome: membro.nome,
				email: membro.email
				
			});
		}
		
		function pick_instituicao(registro){
			vm.instituicao = registro;
		}
		
		function listar_instituicoes() {
			Instituicao.listar_instituicoes().then(instituicaoSuccessFn, instituicaoErrorFn);

			  function instituicaoSuccessFn(data, status, headers, config) {
				vm.lista_instituicoes = data.data;
			  }

			  function instituicaoErrorFn(data, status, headers, config) {
				SnackBar.show({ pos: 'bottom-center', text: 'Erro ao carregar Instituições!', actionText: 'Ocultar', actionTextColor: '#FF0000'});
			  }
			 
		}
		
		function listar_projetos() {
			Projeto.listar_projetos().then(projetoSuccessFn, projetoErrorFn);

			  function projetoSuccessFn(data, status, headers, config) {
				vm.lista_projetos = data.data;
			  }

			  function projetoErrorFn(data, status, headers, config) {
				SnackBar.show({ pos: 'bottom-center', text: 'Erro ao carregar Projetos!', actionText: 'Ocultar', actionTextColor: '#FF0000'});
			  }
			 
		}
		
		function listar_usuarios() {
			Usuario.listar_usuarios().then(projetoSuccessFn, projetoErrorFn);

			  function projetoSuccessFn(data, status, headers, config) {
				vm.lista_usuarios = data.data;
			  }

			  function projetoErrorFn(data, status, headers, config) {
				SnackBar.show({ pos: 'bottom-center', text: 'Erro ao carregar Usuarios!', actionText: 'Ocultar', actionTextColor: '#FF0000'});
			  }
			 
		}
		
		function submit() {

			Projeto.submit(vm.nome, vm.descricao, vm.instituicao.id,vm.membros_projeto).then(projetoSuccessFn, projetoErrorFn);
			
			function projetoSuccessFn(data, status, headers, config) {
				vm.descricao = [];
				vm.nome = [];
				vm.instituicao = [];
				vm.membros_projeto = [];
				
				SnackBar.show({ pos: 'bottom-center', text: 'Projeto adicionado com sucesso!', actionText: 'Ocultar', actionTextColor: '#00FF00'});
				listar_projetos();
			  }

			  function projetoErrorFn(data, status, headers, config) {
				SnackBar.show({ pos: 'bottom-center', text: 'Projeto não pode ser adicionado!', actionText: 'Ocultar', actionTextColor: '#FF0000'});
			  }
		}
	}