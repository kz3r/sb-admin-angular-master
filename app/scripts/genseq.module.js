//(function() {
	'use strict';

	angular
		.module('genseq', [
			'genseq.servicos',
			'genseq.controllers'
		]);

	angular
		.module('genseq.controllers',[]);

	angular
		.module('genseq.servicos',['ngCookies']);

//})();