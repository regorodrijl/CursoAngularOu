var catalogoComponent = require('./catalogo.component');
var catalogoNuevoComponent = require('./nuevo/nuevo.component');
var catalogoListaComponent = require('./lista/lista.component');

var catalogo = angular.module('ejemplo.catalogo',[]);

catalogo.component('catalogo',catalogoComponent.default);
catalogo.component('catalogoNuevo',catalogoNuevoComponent.default);
catalogo.component('catalogoLista',catalogoListaComponent.default);
catalogo.directive('validador',function() {
  return {
    require: 'ngModel',
    link: function(scope, element, attr, mCtrl) {
      function validacion(valor) {
        if (valor > 0) {
          mCtrl.$setValidity('charE', true);
        } else {
          mCtrl.$setValidity('charE', false);
        }
        return valor;
      }
      mCtrl.$parsers.push(validacion);
    }
  };
});

catalogo.controller('catalogoCtrl', function ($scope) {
    this.busqueda = { value: "" };

    this.callback = function() {
        console.log(this.busqueda.value);
    }
});

export default catalogo.name;