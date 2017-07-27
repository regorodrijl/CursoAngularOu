var sobreComponent = require('./sobre.component');
var sobreEmpresaComponent = require('./empresa/empresa.component');

var sobre = angular.module('ejemplo.sobre',[]);

sobre.component('sobre',sobreComponent.default);
sobre.component('sobreEmpresa',sobreEmpresaComponent.default);

sobre.controller('sobreCtrl', function($scope) {
    this.empresa ={
        nombre: 'Empresa',
        pais: 'España'
    };
});

export default sobre.name;