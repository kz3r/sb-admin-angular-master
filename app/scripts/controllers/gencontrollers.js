'use strict';

	angular.module('sbAdminApp')
		.controller('RegistroController', RegistroController);

	RegistroController.$inject = ['$location', '$scope', 'Autenticacao'];


	function RegistroController($location, $scope, Autenticacao){
		var vm = this;

		vm.registro = registro;

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
				Snackbar.show({ actionText: 'Thanks!'});	
			}
			function servicosErrorFn(data, status, headers, config) {
				$rootScope.$broadcast('servico.created.error');
				vm.lista_servicos.shift();
			}
		}
		function destroy() {
		  Servico.destroy(vm.descricao).then(delservicosSuccessFn, delservicosErrorFn);

		  function delservicosSuccessFn(data, status, headers, config) {
			  
			activate();
		  }

		  function delservicosErrorFn(data, status, headers, config) {

		  }
		}
		function activate() {
			Servico.listar_servicos().then(servicosSuccessFn, servicosErrorFn);

			  function servicosSuccessFn(data, status, headers, config) {
				vm.lista_servicos = data.data;
			  }

			  function servicosErrorFn(data, status, headers, config) {
				$rootScope.$broadcast('servico.created.error');
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
			  }

			  function sistemasErrorFn(data, status, headers, config) {
				$rootScope.$broadcast('sistema.created.error');
			  }
		}
		function destroy() {
		  Sistema.destroy(vm.descricao).then(delsistemasSuccessFn, delservicosErrorFn);

		  function delsistemasSuccessFn(data, status, headers, config) {
			activate();
		  }

		  function delsistemasErrorFn(data, status, headers, config) {

		  }
		}
		function activate() {
			Sistema.listar_sistemas().then(sistemasSuccessFn, sistemasErrorFn);

			  function sistemasSuccessFn(data, status, headers, config) {
				vm.lista_sistemas = data.data;
			  }

			  function sistemasErrorFn(data, status, headers, config) {
				$rootScope.$broadcast('sistema.created.error');
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
			  }

			  function kitdeplecaoErrorFn(data, status, headers, config) {
				$rootScope.$broadcast('kitdeplecao.created.error');
			  }
		}
		function destroy() {
		  KitDeplecao.destroy(vm.descricao).then(delkitdeplecaoSuccessFn, delkitdeplecaoErrorFn);

		  function delkitdeplecaoSuccessFn(data, status, headers, config) {
			activate();
		  }

		  function delkitdeplecaoErrorFn(data, status, headers, config) {

		  }
		}
		function activate() {
			KitDeplecao.listar_kitdeplecao().then(kitdeplecaoSuccessFn, kitdeplecaoErrorFn);

			  function kitdeplecaoSuccessFn(data, status, headers, config) {
				vm.lista_kitdeplecao = data.data;
			  }

			  function kitdeplecaoErrorFn(data, status, headers, config) {
				$rootScope.$broadcast('kitdeplecao.created.error');
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
			  }

			  function projetoErrorFn(data, status, headers, config) {
				$rootScope.$broadcast('projeto.created.error');
			  }
		}
		function destroy() {
		  Projeto.destroy(vm.descricao).then(delprojetoSuccessFn, delprojetoErrorFn);

		  function delprojetoSuccessFn(data, status, headers, config) {
			activate();
		  }

		  function delprojetoErrorFn(data, status, headers, config) {

		  }
		}
		function activate() {
			Projeto.listar_projetos().then(projetoSuccessFn, projetoErrorFn);

			  function projetoSuccessFn(data, status, headers, config) {
				vm.lista_projetos = data.data;
			  }

			  function projetoErrorFn(data, status, headers, config) {
				$rootScope.$broadcast('projeto.created.error');
			  }
			 
		}
	}