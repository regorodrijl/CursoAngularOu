angular.module('ejemplo',['ui.bootstrap','ui.router','oc.lazyLoad']);

function component() {
	var element = document.createElement('div');

    element.innerHTML = 
	'<strong>Esto es una página de inicio</strong>'+
	'<uib-accordion>'+
	'<div uib-accordion-group class="panel-default" is-open="status.open">'+
    '<uib-accordion-heading>'+
    '<i>Con este acordeón demostramos que bootstrap</i>'+
    '</uib-accordion-heading>'+
    'Funciona correctamente'+
    '</div>'+
	'</uib-accordion>';

    return element;
}

document.body.appendChild(component());
