module.exports = {
    entry: './app/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname
    },
    devtool: 'eval-source-map',
    module: {
        loaders: [
            {
            	test:/\.scss$/, 
            	loader:'style-loader!css-loader!sass-loader', 
            	exclude: /node_modules/
            }
        ]
    }
};