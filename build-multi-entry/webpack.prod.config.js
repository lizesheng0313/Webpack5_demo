const { merge } = require('webpack-merge')
const path = require('path')
const webpackCommonConf = require('./webpack-common') 
const MiniCssExtractPlugin = require('mini-css-extract-plugin') // 抽离css文件
const CssMinimizerWebpackPlguin = require('css-minimizer-webpack-plugin') // 压缩css
module.exports = merge(webpackCommonConf, {
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                type: 'asset'
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader', { // 使用MinCssExtractPlugin.loader替换style-loader
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                [
                                    'postcss-preset-env',
                                ]
                            ],
                        },
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', {
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                [
                                    'postcss-preset-env',
                                ]
                            ],
                        },
                    }
                }],
            }
        ]
    },
    plugins: [
        // 生成独立的文件 css抽离
        new MiniCssExtractPlugin({
            filename:'css/main.[contenthash:8].css'
        })
    ],
    optimization: {
        // 允许你通过提供一个或多个定制过的 TerserPlugin 实例， 覆盖默认压缩工具(minimizer) 所以配置了这个后我们需要重新指定 terser-webpack-plugin 为压缩工
        minimizer:[
            `...`, // webpack5开箱即带有最新版本的 terser-webpack-plugin 使用`...`即代表使用该插件来压缩JS
            new CssMinimizerWebpackPlguin() // 压缩css
        ],
        splitChunks:{
            chunks:'all',
        }
    }
})
