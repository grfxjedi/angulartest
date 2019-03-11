const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');
const TransferWebpackPlugin = require('transfer-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');

const autoprefixer = require('autoprefixer');
const precss = require('precss');

var path = require('path');

module.exports = function () {
	return {
		entry: './src/main.ts',
		output: {
			path: __dirname + '/dist',
			filename: 'app.js',
			globalObject: `typeof self !== 'undefined' ? self : this`
		},
		resolve: {
			extensions: [ '.js', '.ts', '.css' ],
			modules: [ 'node_modules' ]
		},
		plugins: [
			new CopyWebpackPlugin([
				{ from: 'src/assets', to: 'assets' }
			]),
		new MiniCssExtractPlugin({
			filename: 'style.[contenthash].css',
		}),
			new HtmlWebpackPlugin({
				template: __dirname + '/src/index.html',
				output: __dirname + '/dist',
				inject: 'head'
			}),
			new webpack.ProvidePlugin({
				'$': 'jquery',
				'jQuery': 'jquery',
				'jquery': 'jquery',
				'window.jQuery': 'jquery',
				'window.$': 'jquery',
				'Tether': 'tether'
			}),
			new ScriptExtPlugin({
				defaultAttribute: 'defer'
			}),
			new AngularCompilerPlugin({
				tsConfigPath: './tsconfig.json',
				entryModule: './src/app/app.module#AppModule',
				sourceMap: true
			}),
		new webpack.HotModuleReplacementPlugin(),
// 		new ExtractTextPlugin('main.css'),
	//		new TransferWebpackPlugin([
	//			{ from: 'client' },
	//		])

		],
		module: {
			rules: [
				{
					test: /\.ts$/,
					loaders: [ '@ngtools/webpack' ]
				},
				{
					test: /\.scss$/,
					use: [
						{
							loader: 'style-loader' // creates style nodes from JS strings
						},
						{
							loader: 'css-loader' // translates CSS into CommonJS
						},
						{
							loader: 'sass-loader' // compiles Sass to CSS
						}
					]
				},
				{
					test: /\.css$/,
					use: ['raw-loader',]
				},
				{
					test: /font-awesome\.config\.js/,
					use: [
						{ loader: 'style-loader' },
						{ loader: 'font-awesome-loader' }
					]
				},
				{
					test: /\.html$/,
					loader: 'raw-loader'
				}
			]
		},
	};
}

