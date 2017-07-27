var motorComponent = require('./motor/motor.component');
var capoComponent = require('./capo.component');

var capo = angular.module('ejemplo.capo',[]);

capo.component('motor',motorComponent.default);
capo.component('capo',motorComponent.default);

export default capo.name;
