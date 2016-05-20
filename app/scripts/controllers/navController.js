'use strict';

	angular
		.module('sbAdminApp')
		.controller('NavController', NavController);

	NavController.$inject = ['$scope', 'Autenticacao'];

	function NavController($scope, Autenticacao) {

		var vm.this;

		vm.logout = logout;

		function logout() {
			Autenticacao.logout();
		}
	}