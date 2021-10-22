const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    entry: {
        main: path.join(__dirname, '..', 'src', 'main'), // __dirname当前目录 ..上一个目录  src下 main  ../src/main
        error: path.join(__dirname, '..', 'src', 'error')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: path.join(__dirname, '..', 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                }
            },
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                type: 'asset'
            }
        ]
    },
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: '[name][chunkhash:8].js',
        // assetModuleFilename: 'images/[hash][ext][query]'
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '..', 'index.html'),
            filename:'index.html',
            chunks:['main'] // 只打包入口为main的JS  如不写 所有的入口的JS都会被引入
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, '..', 'error.html'),
            filename:'error.html',
            chunks:['error']
        })
    ]
}