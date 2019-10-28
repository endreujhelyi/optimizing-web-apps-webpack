const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './app/app.js',
	output: {
		path: path.resolve(__dirname, 'app/dist'),
		filename: 'app.bundle.js'
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'app'),
		hot: true,
		publicPath: '/dist/',
		watchContentBase: true,
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
}