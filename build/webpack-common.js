const path = require('path')
const { CleanWebpackPlugin }  = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    entry:path.join(__dirname,'..','src','main'),
    module:{
        rules:[
            {
                test: /\.(png|jpe?g|svg|gif)$/,
                type: 'asset'
            },
            {
                test: /\.less$/,
                use: ['style-loader','css-loader','less-loader']
            }
        ]
    },
    output:{
       path:path.join(__dirname,'..','dist'),
       filename:'[name][hash:8].js'
    },
    plugins:[
        new webpack.DefinePlugin({
            'process.env.NODE_ENV':JSON.stringify(process.env.NODE_ENV)
        }),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:path.join(__dirname,'..','index.html')
        })
    ]
}