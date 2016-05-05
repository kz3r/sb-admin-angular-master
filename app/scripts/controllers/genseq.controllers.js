//(function () {
	'use strict';

	angular.module('genseq.controllers')
		.controller('RegistroController', RegistroController);

	RegistroController.$inject = ['$location', '$scope', 'Autenticacao'];


	function RegistroController($location, $scope, Autenticacao){
		var vm = this;

		vm.registro = registro;

		function registro() {
			Autenticacao.registro(vm.email, vm.password, vm.nome);
		}
	}
//})();