const { merge } = require('webpack-merge')
const path = require('path')
const webpackCommonConf = require('./webpack-common')

module.exports = merge(webpackCommonConf,{
    mode:'production'
})
