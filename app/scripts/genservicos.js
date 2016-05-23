'use strict';

	angular
		.module('sbAdminApp')
		.factory('Autenticacao', Autenticacao);

	Autenticacao.$inject = ['$cookies', '$http'];
	
	var GENSEQ_API_Server = 'http://127.0.0.1:8000/genseq_api/';


	function Autenticacao($cookies,$http) {
		
		var Autenticacao = {
			registro: registro,
			login: login,
			logout: logout,
			setAuthenticatedUser: setAuthenticatedUser,
			getAuthenticatedUser: getAuthenticatedUser,
			isAuthenticated: isAuthenticated,
			unauthenticate: unauthenticate
		};

		return Autenticacao;

		function registro(email, password, nome){
			return $http.post('http://127.0.0.1:8000/genseq_api/usuarios/',{
				email: email,
				password: password,
				nome: nome
			}).then(registroSuccess, registroError);

			//Se o usuário foi registrado com sucesso, faz login
			//VERIFICAR UTILIZAÇÃO DESSA FUNÇÃO NO NOSSO CONTEXTO
			function registroSuccess(data, status, headers, config) {
				Autenticacao.login(email, password);
			}

			function registroError(data, status, headers, config) {
				console.error('Erro no registro! *sad face* ')
			}
		}

		function login(email, password) {
			return $http.post('http://127.0.0.1:8000/genseq_api/login/',{
				email: email,
				password: password
			}).then(loginSuccess, loginError);

			function loginSuccess(data, status, headers, config) {
				Autenticacao.setAuthenticatedUser(data.data);
				window.location = '/#/dashboard/novo_usuario'; //CHECK EFFECT
			}

			function loginError(data, status, headers, config) {
				console.error('Login Error! *sad face* ');
			}
		}

		function logout() {
			return $http.post( GENSEQ_API_Server + 'logout/').then(
				logoutSuccess, logoutError);

			function logoutSuccess(data, status, headers, config) {
				Autenticacao.unauthenticate();

				window.location = '/#/dashboard';
			}	

			function logoutError(data, status, headers, config) {
				cosole.error('Erro ao tentar logout! *sad face* ')
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
	
	angular
		.module('sbAdminApp')
		.factory('Sistema', Sistema);

	Sistema.$inject = ['$cookies', '$http'];

	function Sistema($cookies,$http) {

		var Sistema = {
			submit: submit,
			listar_sistemas : listar_sistemas,
			destroy: destroy
		};

		return Sistema;

		function submit(descricao){
			return $http.post('http://127.0.0.1:8000/genseq_api/sistemas/',{
				descricao: descricao
			});
		}
		
		function listar_sistemas(){
			return $http.get('http://127.0.0.1:8000/genseq_api/sistemas/');
		}
		
		function destroy(descricao) {
			return $http.delete('http://127.0.0.1:8000/genseq_api/sistemas/' + descricao + '/');
		}
	}
	
	angular
		.module('sbAdminApp')
		.factory('KitDeplecao', KitDeplecao);

	KitDeplecao.$inject = ['$cookies', '$http'];

	function KitDeplecao($cookies,$http) {

		var KitDeplecao = {
			submit: submit,
			listar_kitdeplecao : listar_kitdeplecao,
			destroy: destroy
		};

		return KitDeplecao;

		function submit(descricao){
			return $http.post('http://127.0.0.1:8000/genseq_api/kit_deplecao/',{
				descricao: descricao
			});
		}
		
		function listar_kitdeplecao(){
			return $http.get('http://127.0.0.1:8000/genseq_api/kit_deplecao/');
		}
		
		function destroy(descricao) {
			return $http.delete('http://127.0.0.1:8000/genseq_api/kit_deplecao/' + descricao + '/');
		}
	}
	
	angular
		.module('sbAdminApp')
		.factory('Instituicao', Instituicao);

	Instituicao.$inject = ['$cookies', '$http'];

	function Instituicao($cookies,$http) {

		var Instituicao = {
			submit: submit,
			listar_instituicoes: listar_instituicoes,
			destroy: destroy
		};

		return Instituicao;

		function submit(nome){
			return $http.post('http://127.0.0.1:8000/genseq_api/instituicao/',{
				nome: nome
			});
		}
		
		function listar_instituicoes(){
			return $http.get('http://127.0.0.1:8000/genseq_api/instituicao/');
		}
		
		function destroy(nome) {
			return $http.delete('http://127.0.0.1:8000/genseq_api/instituicao/' + nome + '/');
		}
	}
	
	angular
		.module('sbAdminApp')
		.factory('Projeto', Projeto);

	Projeto.$inject = ['$cookies', '$http'];

	function Projeto($cookies,$http) {

		var Projeto = {
			submit: submit,
			listar_projetos: listar_projetos,
			destroy: destroy
		};

		return Projeto;

		function submit(nome, descricao, instituicao){
			return $http.post('http://127.0.0.1:8000/genseq_api/projeto/',{
				nome: nome,
				descricao: descricao,
				instituicao: instituicao
			});
		}
		
		function listar_projetos(){
			return $http.get('http://127.0.0.1:8000/genseq_api/projeto/');
		}
		
		function destroy(nome) {
			return $http.delete('http://127.0.0.1:8000/genseq_api/projeto/' + nome + '/');
		}
	}
