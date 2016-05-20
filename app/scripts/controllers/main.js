'use strict';
/**
 * @ngdoc function
 * @name sbAdminApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the sbAdminApp
 
angular.module('sbAdminApp')
  .controller('MainCtrl', ['$scope', '$position', 'Autenticacao', function($scope,$position,Autenticacao) {

	function MainCtrls($scope, Autenticacao) {

	  	var vm.this;

		vm.logout = logout;

		function logout() {
			Autenticacao.logout();
		}
	

  }]);
*/

angular
		.module('sbAdminApp')
		.controller('MainCtrl', MainCtrl);

	MainCtrl.$inject = ['$scope', '$position', 'Autenticacao'];

	function MainCtrl($scope, $position, Autenticacao) {

		var vm = this;

		vm.logout = logout;

		function logout() {
			Autenticacao.logout();
		}
	}
