var catalogoComponent = require('./catalogo.component');
var catalogoNuevoComponent = require('./nuevo/nuevo.component');

var catalogo = angular.module('ejemplo.catalogo',[]);

catalogo.component('catalogo',catalogoComponent.default);
catalogo.component('catalogoNuevo',catalogoNuevoComponent.default);

export default catalogo.name;