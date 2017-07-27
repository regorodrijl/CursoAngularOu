var troncoComponent = require('./tronco.component');

export default angular.module('ejemplo.tronco',[])
    .component('tronco',troncoComponent.default)
    .name;