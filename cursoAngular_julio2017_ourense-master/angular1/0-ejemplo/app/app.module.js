angular.module('ejemplo',[]);

function component() {
	var element = document.createElement('div');

    element.innerHTML = '<b>Esto es una página de inicio</b>';

    return element;
}

document.body.appendChild(component());
