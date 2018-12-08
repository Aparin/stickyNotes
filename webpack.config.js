module.exports = {
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                { loader: 'style-loader' },
                { loader: 'css-loader' }
            ]
        }]
    },
    entry: {
        index: './src/index.js',
        tests: './src/tests.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }
};