'use strict';

	angular.module('sbAdminApp')
		.controller('LoginController', LoginController);

	LoginController.$inject = ['$location', '$scope', 'Autenticacao'];


	function LoginController($location, $scope, Autenticacao){
		var vm = this;

		vm.login = login;

		//activate();

		function activate() {
			if (Autenticacao.isAuthenticated()){
				$location.url('/');
			}
		}

		function login() {
			Autenticacao.login(vm.email, vm.password);
		}
	}