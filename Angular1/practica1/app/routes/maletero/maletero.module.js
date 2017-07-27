var maleteroComponent = require('./maletero.component');

export default angular.module('ejemplo.maletero',[])
    .component('maletero',maleteroComponent.default)
    .name;