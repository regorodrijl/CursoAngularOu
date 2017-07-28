var catalogoComponent = require('./catalogo.component');
var catalogoNuevoComponent = require('./nuevo/nuevo.component');
var catalogo = angular.module('ejemplo.catalogo', []);

var catalogoListaComponent = require('./lista/lista.component');

catalogo.component('catalogo', catalogoComponent.default);
catalogo.component('catalogoNuevo', catalogoNuevoComponent.default);
catalogo.component('catalogoLista',catalogoListaComponent.default);

catalogo.controller('catalogoCtrl', function ($scope) {
    this.busqueda = { value: "" };

    this.callback = function() {
  
        console.log("El hijo ha escrito: ",this.busqueda.value, " Y desde el padre!");
    }
})

export default catalogo.name;