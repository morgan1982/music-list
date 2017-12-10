const { resolve } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const cssOutputLocation = process.env.NODE_ENV === 'production' ?
    'public/stylesheets/style-prod.css' :
    'stylesheets/style.css';

const jsProdOutput = {
    filename: 'public/javascripts/build-prod.js',
    path: resolve(__dirname),
    publicPath: '/',
};

const jsDevOutput = {
    filename: 'javascripts/build.js',
    path: '/',
    publicPath: '/',
};

const jsOutputLocation = process.env.NODE_ENV === 'production' ? jsProdOutput : jsDevOutput;

module.exports = {
    context: resolve(__dirname, 'src'),
    // devtool: "inline-source-map",
    entry: [
        'tether',
        // "lib/client",
        './index.jsx',
    ],
    output: jsOutputLocation,
    resolve: {
    // to look for certain extensions
       extensions: ['.js', '.jsx', 'scss'],
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
            {
                test: /bootstrap\/dist\/js\/umd\//,
                use: 'imports-loader?jQuery=jquery'
            },
        ],
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new ExtractTextPlugin({
            filename: cssOutputLocation,
            disable: process.env.NODE_ENV !== 'production',
        }),
        new webpack.ProvidePlugin({
          $: 'jquery',
          jQuery: 'jquery',
          'window.jQuery': 'jquery',
          tether: 'tether',
          Tether: 'tether',
          'window.Tether': 'tether',
          Popper: ['popper.js', 'default'],
          'window.Tether': 'tether',
          Alert: 'exports-loader?Alert!bootstrap/js/dist/alert',
          Button: 'exports-loader?Button!bootstrap/js/dist/button',
          Carousel: 'exports-loader?Carousel!bootstrap/js/dist/carousel',
          Collapse: 'exports-loader?Collapse!bootstrap/js/dist/collapse',
          Dropdown: 'exports-loader?Dropdown!bootstrap/js/dist/dropdown',
          Modal: 'exports-loader?Modal!bootstrap/js/dist/modal',
          Popover: 'exports-loader?Popover!bootstrap/js/dist/popover',
          Scrollspy: 'exports-loader?Scrollspy!bootstrap/js/dist/scrollspy',
          Tab: 'exports-loader?Tab!bootstrap/js/dist/tab',
          Tooltip: "exports-loader?Tooltip!bootstrap/js/dist/tooltip",
          Util: 'exports-loader?Util!bootstrap/js/dist/util'
        }),
    ],
};

if (process.env.NODE_ENV === 'production') {
    module.exports.plugins.push(new UglifyJsPlugin());
}

if (process.env.NODE_ENV !== 'production') {
    module.exports.entry.unshift(
        'react-hot-loader/patch',
        'react-hot-loader/babel',
        'webpack-hot-middleware/client',
        );
    module.exports.plugins.push(new webpack.HotModuleReplacementPlugin());
}
