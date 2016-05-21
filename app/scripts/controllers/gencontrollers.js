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
				SnackBar.show({ pos: 'bottom-center', text: 'Serviço adicionado com sucesso!', actionText: 'Dismiss', actionTextColor: '#00FF00'});	
			}
			function servicosErrorFn(data, status, headers, config) {
				SnackBar.show({ pos: 'bottom-center', text: 'Serviço não pode ser adicionado!', actionText: 'Dismiss', actionTextColor: '#FF0000'});	
			}
		}
		function destroy(id) {
			Servico.destroy(vm.lista_servicos[id].descricao).then(delservicosSuccessFn, delservicosErrorFn);

		  function delservicosSuccessFn(data, status, headers, config) {
			activate();
			SnackBar.show({ pos: 'bottom-center', text: 'Serviço excluido com sucesso!', actionText: 'Dismiss', actionTextColor: '#00FF00'});
		  }

		  function delservicosErrorFn(data, status, headers, config) {
			SnackBar.show({ pos: 'bottom-center', text: 'Serviço não pode ser excluido!', actionText: 'Dismiss', actionTextColor: '#FF0000'});
		  }
		}
		function activate() {
			Servico.listar_servicos().then(servicosSuccessFn, servicosErrorFn);

			  function servicosSuccessFn(data, status, headers, config) {
				vm.lista_servicos = data.data;
			  }

			  function servicosErrorFn(data, status, headers, config) {
				SnackBar.show({ pos: 'bottom-center', text: 'Erro ao carregar serviços!', actionText: 'Dismiss', actionTextColor: '#FF0000'});
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
				SnackBar.show({ pos: 'bottom-center', text: 'Sistema adicionado com sucesso!', actionText: 'Dismiss', actionTextColor: '#00FF00'});
			  }

			  function sistemasErrorFn(data, status, headers, config) {
				SnackBar.show({ pos: 'bottom-center', text: 'Sistema não pode ser adicionado!', actionText: 'Dismiss', actionTextColor: '#FF0000'});
			  }
		}
		function destroy(id) {
		  Sistema.destroy(vm.lista_sistemas[id].descricao).then(delsistemasSuccessFn, delsistemasErrorFn);

		  function delsistemasSuccessFn(data, status, headers, config) {
			activate();
			SnackBar.show({ pos: 'bottom-center', text: 'Sistema excluido com sucesso!', actionText: 'Dismiss', actionTextColor: '#00FF00'});
		  }

		  function delsistemasErrorFn(data, status, headers, config) {
			SnackBar.show({ pos: 'bottom-center', text: 'Sistema não pode ser excluido!', actionText: 'Dismiss', actionTextColor: '#FF0000'});
		  }
		}
		function activate() {
			Sistema.listar_sistemas().then(sistemasSuccessFn, sistemasErrorFn);

			  function sistemasSuccessFn(data, status, headers, config) {
				vm.lista_sistemas = data.data;
			  }

			  function sistemasErrorFn(data, status, headers, config) {
				SnackBar.show({ pos: 'bottom-center', text: 'Erro ao carregar sistemas!', actionText: 'Dismiss', actionTextColor: '#FF0000'});
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
				SnackBar.show({ pos: 'bottom-center', text: 'Kit de Depleção adicionado com sucesso!', actionText: 'Dismiss', actionTextColor: '#00FF00'});
			  }

			  function kitdeplecaoErrorFn(data, status, headers, config) {
				SnackBar.show({ pos: 'bottom-center', text: 'Kit de Depleção não pode ser adicionado!', actionText: 'Dismiss', actionTextColor: '#FF0000'});
			  }
		}
		function destroy(id) {
		  KitDeplecao.destroy(vm.lista_kitdeplecao[id].descricao).then(delkitdeplecaoSuccessFn, delkitdeplecaoErrorFn);

		  function delkitdeplecaoSuccessFn(data, status, headers, config) {
			activate();
			SnackBar.show({ pos: 'bottom-center', text: 'Kit de Depleção excluido com sucesso!', actionText: 'Dismiss', actionTextColor: '#00FF00'});
		  }

		  function delkitdeplecaoErrorFn(data, status, headers, config) {
			SnackBar.show({ pos: 'bottom-center', text: 'Kit de Depleção não pode ser excluido!', actionText: 'Dismiss', actionTextColor: '#FF0000'});
		  }
		}
		function activate() {
			KitDeplecao.listar_kitdeplecao().then(kitdeplecaoSuccessFn, kitdeplecaoErrorFn);

			  function kitdeplecaoSuccessFn(data, status, headers, config) {
				vm.lista_kitdeplecao = data.data;
			  }

			  function kitdeplecaoErrorFn(data, status, headers, config) {
				SnackBar.show({ pos: 'bottom-center', text: 'Erro ao carregar kits de depleção!', actionText: 'Dismiss', actionTextColor: '#FF0000'});
			  }
			 
		}
	}
	
	
	angular.module('sbAdminApp')
		.controller('ProjetoController', ProjetoController);

	ProjetoController.$inject = ['$rootScope', '$scope', 'Projeto'];

	function ProjetoController($rootScope, $scope, Projeto){
		var vm = this;

		vm.submit = submit;
		vm.destroy = destroy;
		vm.lista_projetos=[];
		activate();
		
		function submit() {

			Projeto.submit(vm.descricao).then(projetoSuccessFn, projetoErrorFn);
			
			function projetoSuccessFn(data, status, headers, config) {
				vm.lista_projetos.unshift({
				descricao: vm.descricao 
				});
				SnackBar.show({ pos: 'bottom-center', text: 'Projeto adicionado com sucesso!', actionText: 'Dismiss', actionTextColor: '#00FF00'});
			  }

			  function projetoErrorFn(data, status, headers, config) {
				SnackBar.show({ pos: 'bottom-center', text: 'Projeto não pode ser adicionado!', actionText: 'Dismiss', actionTextColor: '#FF0000'});
			  }
		}
		function destroy() {
		  Projeto.destroy(descricao).then(delprojetoSuccessFn, delprojetoErrorFn);

		  function delprojetoSuccessFn(data, status, headers, config) {
			activate();
			SnackBar.show({ pos: 'bottom-center', text: 'Projeto excluido com sucesso!', actionText: 'Dismiss', actionTextColor: '#00FF00'});
		  }

		  function delprojetoErrorFn(data, status, headers, config) {
			SnackBar.show({ pos: 'bottom-center', text: 'Projeto não pode ser excluido!', actionText: 'Dismiss', actionTextColor: '#FF0000'});
		  }
		}
		function activate() {
			Projeto.listar_projetos().then(projetoSuccessFn, projetoErrorFn);

			  function projetoSuccessFn(data, status, headers, config) {
				vm.lista_projetos = data.data;
			  }

			  function projetoErrorFn(data, status, headers, config) {
				SnackBar.show({ pos: 'bottom-center', text: 'Erro ao carregar projetos!', actionText: 'Dismiss', actionTextColor: '#FF0000'});
			  }
			 
		}
	}