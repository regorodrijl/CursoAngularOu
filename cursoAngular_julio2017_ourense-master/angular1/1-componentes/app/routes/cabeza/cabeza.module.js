var cabezaComponent = require('./cabeza.component');
var cabezaOjoComponent = require('./ojo/ojo.component');
var cabezaNarizComponent = require('./nariz/nariz.component');
var cabezaBocaComponent = require('./boca/boca.component');

var cabeza = angular.module('ejemplo.cabeza',[]);

cabeza.component('cabeza',cabezaComponent.default);
cabeza.component('ojo',cabezaOjoComponent.default);
cabeza.component('nariz',cabezaNarizComponent.default);
cabeza.component('boca',cabezaBocaComponent.default);

export default cabeza.name;