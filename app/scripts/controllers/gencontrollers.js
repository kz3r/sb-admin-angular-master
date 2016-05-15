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

	ServicoController.$inject = ['$rootScope', '$scope', 'Servico'];


	function ServicoController($rootScope, $scope, Servico){
		var vm = this;

		vm.submit = submit;
		vm.destroy = destroy;
		vm.lista_servicos=[];
		activate();
		
		function submit() {

			Servico.submit(vm.descricao).then(servicosSuccessFn, servicosErrorFn);
			
			function servicosSuccessFn(data, status, headers, config) {
				vm.lista_servicos.unshift({
				id: 0,
				descricao: vm.descricao 
			});
			  }

			  function servicosErrorFn(data, status, headers, config) {
				$rootScope.$broadcast('servico.created.error');
				vm.lista_servicos.shift();
			  }
		}
		function destroy() {
		  Servico.destroy(vm.descricao).then(delservicosSuccessFn, delservicosErrorFn);

		  function delservicosSuccessFn(data, status, headers, config) {

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