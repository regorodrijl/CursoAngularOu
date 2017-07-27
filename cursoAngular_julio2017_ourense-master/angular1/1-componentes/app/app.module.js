require('./routes/cabeza/cabeza.module');
require('./routes/extremidades/extremidades.module');
require('./routes/tronco/tronco.module');

angular.module('ejemplo',['ejemplo.cabeza','ejemplo.extremidades','ejemplo.tronco']);

function component() {
	var element = document.createElement('div');

    element.innerHTML = 
	'<cabeza></cabeza>'+
    '<br/>'+
    '<brazo></brazo>'+
    '<br/>'+
    '<brazo></brazo>'+
    '<br/>'+
    '<tronco></tronco>'+
    '<br/>'+
    '<pierna></pierna>'+
    '<br/>'+
    '<pierna></pierna>';

    return element;
}

document.body.appendChild(component());
