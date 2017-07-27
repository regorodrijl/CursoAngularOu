var habitaculoComponent = require('./habitaculo.component');
var habitaculoAsientoComponent = require('./asiento/asiento.component');
var habitaculoVolanteComponent = require('./volante/volante.component');

var habitaculo = angular.module('ejemplo.habitaculo',[]);

habitaculo.component('habitaculo',habitaculoComponent.default);
habitaculo.component('volante',habitaculoVolanteComponent.default);
habitaculo.component('asiento',habitaculoAsientoComponent.default);

export default habitaculo.name;