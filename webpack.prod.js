const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');
module.exports = merge(common, {
    mode: 'production',
    // devtool: 'source-map'
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '渐进式网络应用程序'
        }),
        // new webpack.HashedModuleIdsPlugin(),
        new WorkboxPlugin.GenerateSW({
            // 这些选项帮助快速启用 ServiceWorkers
            // 不允许遗留任何“旧的” ServiceWorkers
            clientsClaim: true,
            skipWaiting: true
        })
    ],
    output: {
        filename: '[name].[contenthash].min.js',
        path: path.resolve(__dirname, 'dist')
    },
    // 将公共的依赖模块提取到已有的 entry chunk 中，或者提取到一个新生成的 chunk
    optimization: {
        runtimeChunk: {
            name: entrypoint => `runtimechunk~${entrypoint.name}`
        },
        // runtimeChunk: 'single',
        // splitChunks: {
        //     chunks: 'all'
        // },

        // // 提取引导模板　将vendor中的文件加到单独的文件中
        splitChunks: {
            chunks: 'async',
            minSize: 0,
            maxSize: 10000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 5,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all',
                    // reuseExistingChunk: true
                }
            }
        }
    },
});