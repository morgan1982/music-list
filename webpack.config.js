const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    context: resolve(__dirname, 'src'),
    // devtool: "inline-source-map",
    entry: [
        'react-hot-loader/patch',
        'react-hot-loader/babel',
        'webpack-hot-middleware/client',
        './index.jsx',
    ],
    output: {
        // name to reference the entry point
        filename: 'javascripts/build.js',
        path: '/', // now it uses a virtual server fot he path so the location to the disc does not matter.
        publicPath: '/',
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
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader',
                }),
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: [
                        {
                            loader: 'css-loader',
                        },
                        {
                            loader: 'sass-loader',
                        },

                    ],
                    fallback: 'style-loader',
                }),
            },
        ],
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin('stylesheets/style.css'),
    ],
};
