var path = require('path');

module.exports = {
    entry: {
        practica0: './app/app.module.js',
        vendor: './app/core/vendor.js'
    },
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname,'app')
    }
};