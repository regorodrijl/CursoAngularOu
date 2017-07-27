var extremidadesBrazoComponent = require('./brazo/brazo.component');
var extremidadesPiernaComponent = require('./pierna/pierna.component');

var extremidades = angular.module('ejemplo.extremidades',[]);

extremidades.component('brazo',extremidadesBrazoComponent.default);
extremidades.component('pierna',extremidadesPiernaComponent.default);

export default extremidades.name;