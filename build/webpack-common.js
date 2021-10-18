const path = require('path')
const { CleanWebpackPlugin }  = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
    entry:path.join(__dirname,'..','src','main'),
    module:{
      
    },
    output:{
       path:path.join(__dirname,'..','dist'),
       filename:'[chunk][hash].js'
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