const path = require('path')
const { merge } = require('webpack-merge');
const webpackCommonConf = require('./webpack-common')

module.exports = merge(webpackCommonConf, {
    mode: 'development',
    module:{
        rules: [
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                type: 'asset/resource'
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader', {
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
                use: ['style-loader', 'css-loader', {
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
    devServer: {
        port: 8000,
        compress: true, // 启动gzip压缩
        open:{
           app:{
               name:'Google Chrome'
           }
        },
        client: {
            progress: true, // 显示打包进度条
        },
        hot: true,
    }
})