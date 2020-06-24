const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');

console.log(__dirname)

module.exports = {
    mode: 'development',
    // single entry
    // entry: './src/index.js',

    entry: {
        // // multi entry
        // app: './src/index.js',
        // print: './src/print.js'

        // HMR 模块热更新
        app: './src/index.js'
    },

    devtool: 'inline-source-map',

    // webpack-dev-server
    devServer: {
        contentBase: './dist',
        // HMR
        hot: true
    },

    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'Development'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],

    output: {
        // //one fileName
        // filename: 'bundle.js',
        // //multi fileName
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),

        // webpack-dev-middleware
        publicPath: '/'
    },
    optimization: {
        usedExports: true
    },
    module: {
        rules: [
            // load css
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // load image
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            // load font
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            // load data
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
};