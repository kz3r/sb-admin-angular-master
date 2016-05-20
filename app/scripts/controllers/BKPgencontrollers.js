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