require('./routes/habitaculo/habitaculo.module');
require('./routes/capo/capo.module');
require('./routes/maletero/maletero.module');

angular.module('ejemplo', ['ejemplo.capo', 'ejemplo.maletero', 'ejemplo.habitaculo']);

function component() {
    var element = document.createElement('div');

    element.innerHTML = '<capo></capo><br/>' +
        '<habitaculo></habitaculo><br/>' +
        '<maletero></maletero>';

    return element;
}

document.body.appendChild(component());