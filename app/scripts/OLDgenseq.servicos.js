//(function () {
	'use strict';

	angular
		.module('genseq.servicos')
		.factory('Autenticacao', Autenticacao);

	//Autenticacao.$inject = ['$cookies', '$http'];
	//CORRIGIR COOKIES DEPOIS
	Autenticacao.$inject = ['$http'];

	//function Autenticacao($cookies,$http) {
	//CORRIGIR COOKIES DEPOIS
	function Autenticacao($http) {	
		var Autenticacao = {
			registro: registro,
			login: login,
			setAuthenticatedUser: setAuthenticatedUser,
			getAuthenticatedUser: getAuthenticatedUser,
			isAuthenticated: isAuthenticated,
			unauthenticate: unauthenticate
		};

		return Autenticacao;

		function registro(email, password, nome){
			return $http.post('127.0.0.1:8000/genseq_api/usuarios',{
				email: email,
				password: password,
				nome: nome
			});
		} // LOGIN DEPOIS DE REGISTRAR? HMMM

		function login(email, password) {
			return $http.post('127.0.0.1:8000/genseq_api/login',{
				email: email,
				password: password
			}).then(loginSuccess, loginError);

			function loginSuccess(data, status, headers, config) {
				Autenticacao.setAuthenticatedUser(data.data);
				window.location = '/novo_usuario'; //CHECK EFFECT
			}

			function loginError(data, status, headers, config) {
				console.error('Login Error! *sad face* ');
			}
		}

		function setAuthenticatedUser(usuario) {
			$cookies.authenticatedUser = JSON.stringify(usuario);
		}

		function getAuthenticatedUser(){
			if (!$cookies.authenticatedUser){
				return;
			}

			return JSON.parse($cookies.authenticatedUser);
		}

		function isAuthenticated() {
			return !!$cookies.authenticatedUser;
		}

		function unauthenticate() {
			delete $cookies.authenticatedUser;
		}
	}

//})();