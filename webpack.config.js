'use strict';

var config ={
	entry: './src/ex.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.js'
	},
	devtool: 'source-map',
	module: {
		loaders: [{
			test: /\.css$/,
			loader: 'style!css'
		}]
	}
}

module.exports = config;