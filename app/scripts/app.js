'use strict';
/**
 * @ngdoc overview
 * @name sbAdminApp
 * @description
 * # sbAdminApp
 *
 * Main module of the application.
 */
angular
  .module('sbAdminApp', [
    'oc.lazyLoad',
    'ui.router',
    'ui.bootstrap',
    'angular-loading-bar',
  ])
  .config(['$stateProvider','$urlRouterProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$ocLazyLoadProvider) {
    
    $ocLazyLoadProvider.config({
      debug:false,
      events:true,
    });

    $urlRouterProvider.otherwise('/dashboard/home');

    $stateProvider
      .state('dashboard', {
        url:'/dashboard',
        templateUrl: 'views/dashboard/main.html',
        resolve: {
            loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name:'sbAdminApp',
                    files:[
                    'scripts/directives/header/header.js',
                    'scripts/directives/header/header-notification/header-notification.js',
                    'scripts/directives/sidebar/sidebar.js',
                    'scripts/directives/sidebar/sidebar-search/sidebar-search.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                   name:'toggle-switch',
                   files:["bower_components/angular-toggle-switch/angular-toggle-switch.min.js",
                          "bower_components/angular-toggle-switch/angular-toggle-switch.css"
                      ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngAnimate',
                  files:['bower_components/angular-animate/angular-animate.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngResource',
                  files:['bower_components/angular-resource/angular-resource.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngSanitize',
                  files:['bower_components/angular-sanitize/angular-sanitize.js']
                })
                $ocLazyLoad.load(
                {
                  name:'ngTouch',
                  files:['bower_components/angular-touch/angular-touch.js']
                })
            }
        }
    })
      .state('dashboard.home',{
        url:'/home',
        controller: 'MainCtrl',
        templateUrl:'views/dashboard/home.html',
        resolve: {
          loadMyFiles:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'sbAdminApp',
              files:[
              'scripts/genservicos.js',
              'scripts/controllers/gencontrollers.js',
              'scripts/controllers/main.js',
              'scripts/directives/timeline/timeline.js',
              'scripts/directives/notifications/notifications.js',
              'scripts/directives/chat/chat.js',
              'scripts/directives/dashboard/stats/stats.js',
              ]
            }),
            $ocLazyLoad.load(
            {
              name:'ngCookies',
              files:['bower_components/angular-cookies/angular-cookies.js']
            })
          }
        }
      })
      .state('dashboard.form',{
        templateUrl:'views/form.html',
        url:'/form'
    })
      .state('dashboard.blank',{
        templateUrl:'views/pages/blank.html',
        url:'/blank'
    })
      .state('login',{
        templateUrl:'views/pages/login.html',
        url:'/login',
        controller:'LoginController',
        controllerAs:'vm',
        resolve:{
          loadMyDirectives:function($ocLazyLoad){
            return $ocLazyLoad.load(
            {
                name: 'sbAdminApp',
                files: [
                  'scripts/genservicos.js',
                  'scripts/controllers/genseqLogin.js'
                ]
            }),
            $ocLazyLoad.load(
            {
              name:'ngCookies',
              files:['bower_components/angular-cookies/angular-cookies.js']
            })
          }
        }
    })
      .state('dashboard.chart',{
        templateUrl:'views/chart.html',
        url:'/chart',
        controller:'ChartCtrl',
        resolve: {
          loadMyFile:function($ocLazyLoad) {
            return $ocLazyLoad.load({
              name:'chart.js',
              files:[
                'bower_components/angular-chart.js/dist/angular-chart.min.js',
                'bower_components/angular-chart.js/dist/angular-chart.css'
              ]
            }),
            $ocLazyLoad.load({
                name:'sbAdminApp',
                files:['scripts/controllers/chartContoller.js']
            })
          }
        }
    })
      .state('dashboard.novo_usuario',{
        templateUrl:'views/usuarios/novo_usuario.html',
        url:'/novo_usuario',
        controller:'RegistroController',
        controllerAs:'vm',
        resolve: {
          loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name: 'sbAdminApp',
                    files: [
                      'scripts/genservicos.js',
                      'scripts/controllers/gencontrollers.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                })
              }
          /*
          loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                }),
          }, //Nao pode terminar aqui. Faz outro [resolve]? 
          loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
              return $ocLazyLoad.load({
              name: 'sbAdminApp',
              files: [
                'scripts/genservicos.js',
                'scripts/controllers/gencontrollers.js'
              ]
            });
          }]
        */
        }
      })
	.state('dashboard.servicos',{
        templateUrl:'views/servico/servicos.html',
        url:'/servicos',
        controller:'ServicoController',
        controllerAs:'vm',
        resolve: {
          loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name: 'sbAdminApp',
                    files: [
                      'scripts/genservicos.js',
                      'scripts/controllers/gencontrollers.js',
                    ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                })
              }
        }
      })
	.state('dashboard.sistemas',{
        templateUrl:'views/sistema/sistemas.html',
        url:'/sistemas',
        controller:'SistemaController',
        controllerAs:'vm',
        resolve: {
          loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name: 'sbAdminApp',
                    files: [
                      'scripts/genservicos.js',
                      'scripts/controllers/gencontrollers.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                })
              }
        }
      })
	.state('dashboard.kit_deplecao',{
        templateUrl:'views/kit_deplecao/kit_deplecao.html',
        url:'/kit_deplecao',
        controller:'KitDeplecaoController',
        controllerAs:'vm',
        resolve: {
          loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name: 'sbAdminApp',
                    files: [
                      'scripts/genservicos.js',
                      'scripts/controllers/gencontrollers.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                })
              }
        }
      })
	  .state('dashboard.projetos',{
        templateUrl:'views/projeto/projetos.html',
        url:'/projetos',
        controller:'ProjetoController',
        controllerAs:'vm',
        resolve: {
          loadMyDirectives:function($ocLazyLoad){
                return $ocLazyLoad.load(
                {
                    name: 'sbAdminApp',
                    files: [
                      'scripts/genservicos.js',
                      'scripts/controllers/gencontrollers.js'
                    ]
                }),
                $ocLazyLoad.load(
                {
                  name:'ngCookies',
                  files:['bower_components/angular-cookies/angular-cookies.js']
                })
              }
        }
      })
      .state('dashboard.table',{
        templateUrl:'views/table.html',
        url:'/table'
    })
      .state('dashboard.panels-wells',{
          templateUrl:'views/ui-elements/panels-wells.html',
          url:'/panels-wells'
      })
      .state('dashboard.buttons',{
        templateUrl:'views/ui-elements/buttons.html',
        url:'/buttons'
    })
      .state('dashboard.notifications',{
        templateUrl:'views/ui-elements/notifications.html',
        url:'/notifications'
    })
      .state('dashboard.typography',{
       templateUrl:'views/ui-elements/typography.html',
       url:'/typography'
   })
      .state('dashboard.icons',{
       templateUrl:'views/ui-elements/icons.html',
       url:'/icons'
   })
      .state('dashboard.grid',{
       templateUrl:'views/ui-elements/grid.html',
       url:'/grid'
   })
  }]);

    
