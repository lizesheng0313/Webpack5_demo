const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin') // 生成html
const webpack = require('webpack')
module.exports = {
    entry: path.join(__dirname, '..', 'src', 'main'),
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include:path.join(__dirname,'..','src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                }
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader', { //从右到左的执行
                    loader: 'postcss-loader',
                    options: {
                        postcssOptions: {
                            plugins: [
                                ['postcss-preset-env'] // 兼容最新css样式,添加浏览器前缀
                            ]
                        }
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
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: '[name][contenthask:8].js',
        // assetModuleFilename: 'images/[hash][ext][query]'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV) // 设置全局环境变量
        }),
        new CleanWebpackPlugin(), // 清除output文件
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '..', 'index.html') // 生成index.html
        })
    ]
}