'use strict';

	angular
		.module('sbAdminApp')
		.factory('Autenticacao', Autenticacao);

	Autenticacao.$inject = ['$cookies', '$http'];
	//CORRIGIR COOKIES DEPOIS
	//Autenticacao.$inject = ['$http'];

	function Autenticacao($cookies,$http) {
	//CORRIGIR COOKIES DEPOIS
	//function Autenticacao($http) {	
		var Autenticacao = {
			registro: registro
		};

		return Autenticacao;

		function registro(email, password, nome){
			return $http.post('127.0.0.1:8000/genseq_api/usuarios',{
				email: email,
				password: password,
				nome: nome
			});
		}
	}