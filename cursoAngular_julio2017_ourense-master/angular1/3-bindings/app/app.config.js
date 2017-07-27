export default function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/inicio');

    $stateProvider
        .state('inicio', {
          url: '/inicio',
          template: '<inicio></inicio>'
        })
        .state('catalogo', {
          url: '/catalogo',
          abstract: true,
          templateUrl: './routes/catalogo/catalogo.base.html',
          resolve: {
            lazyLoad: function($ocLazyLoad) {
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
        .state('sobre', {
          url: '/sobre',
          template: '<sobre titulo="sobreCtrl.titulo"></sobre>'
        })        
}