export default function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('inicio', {
          url: '/inicio',
          template: 'hola Inicio'
        })
        .state('hola', {
          url: '/hola',
          template: 'hasdfasdf'
        })
}