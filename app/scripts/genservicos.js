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
			return $http.post('http://127.0.0.1:8000/genseq_api/usuarios/',{
				email: email,
				password: password,
				nome: nome
			});
		}
	}
	
	angular
		.module('sbAdminApp')
		.factory('Servico', Servico);

	Servico.$inject = ['$cookies', '$http'];

	function Servico($cookies,$http) {

		var Servico = {
			submit: submit,
			listar_servicos : listar_servicos,
			destroy: destroy
		};

		return Servico;

		function submit(descricao){
			return $http.post('http://127.0.0.1:8000/genseq_api/servicos/',{
				descricao: descricao
			});
		}
		
		function listar_servicos(){
			return $http.get('http://127.0.0.1:8000/genseq_api/servicos/');
		}
		
		function destroy(descricao) {
			return $http.delete('http://127.0.0.1:8000/genseq_api/servicos/' + descricao + '/');
    }
	}