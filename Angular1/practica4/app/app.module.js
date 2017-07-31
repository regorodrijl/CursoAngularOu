var config = require('./app.config');

require('./routes/inicio/inicio.module');
require('./routes/sobre/sobre.module');


angular.module('ejemplo',['ui.router','oc.lazyLoad','ejemplo.inicio','ejemplo.sobre'])
    .config(config.default);

function component() {
	var element = document.createElement('div');

    element.innerHTML = 
	    '<app></app>';

    return element;
}

document.body.appendChild(component());
