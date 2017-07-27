export default function ($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('inicio', {
      url: '/inicio',
      template: 'hola Inicio'
    })
    .state('catalogo', {
      url: '/catalogo',
      abstract: true,
      templateUrl: './routes/catalogo/catalogo.base.html',
      resolve: {
        lazyLoad: function ($ocLazyLoad) {
          return $ocLazyLoad.load('catalogo.js');
        }
      }
    })
    .state('catalogo.buscador', {
      url: '/buscador',
      template: '<catalogo></catalogo>'
    })
    .state('catalogo.nuevo', {
      url: '/nuevo',
      template: '<catalogo-nuevo></catalogo-nuevo>'
    })
    .state('hola', {
      url: '/hola',
      template: 'hasdfasdf'
    })
    .state('sobre', {
      url: '/sobre',
      template: 'sobre mí'
    })
}