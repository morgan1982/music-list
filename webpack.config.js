const { resolve } = require('path');
const webpack = require('webpack');

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: [
        'react-hot-loader/patch',
        'react-hot-loader/babel',
        'webpack-hot-middleware/client',
        './index.jsx',
    ],
    output: {
        // name to reference the entry point
        filename: 'build.js',
        path: '/', // now it uses a virtual server fot he path so the location to the disc does not matter.
        publicPath: '/javascripts',
    },
    resolve: {
    // to look for certain extensions
    extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components|public\/)/,
                loader: 'babel-loader',
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ],
};
