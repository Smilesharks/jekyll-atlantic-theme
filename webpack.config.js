const path = require('path');
module.exports = {
	entry: './assets/js/main.js',
	output: {
		filename: 'main.min.js',
		path: path.resolve(__dirname, './assets/js/'),
	},
	module: {
	rules: [
		{
		test: /\.css$/i,
		use: ["style-loader", "css-loader"],
		},
	],
	},
};


