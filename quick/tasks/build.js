// build.js

require('shelljs/global')

const webpack = require('webpack')
//fs读取文件
const fs = require('fs')
//lodash提供工具函数
const _ = require('lodash')
//通过path引入resolve
const { resolve } = require('path')

//拿到运行脚本目录process.cwd，传入参数url
const r = url => resolve(process.cwd(),url)

//webpack配置文件
const webpackConf = require('./webpack.conf')
//根目录下的mina配置文件
const config = require(r('./mina-config'))
//需要部署的文件夹目录
const assetsPath = r('./mina')

//删除目录
rm('rf', assetsPath)
//新建
mkdir(assetsPath)

var renderConf = webpackConf
//核心内容
renderConf.entry = () => _.reduce(config.json.pages, (en,i) => {
	en[i] = resolve(process.cwd(),'./',`${i}.mina`)

	return entry
})

renderConf.entry = entry()
renderConf.entry.app = config.app

//通过输出配置路径
renderConf.output = {
	path:r('./mina'),
	filename:'[name].js'
}

var compiler = webpack(renderConf)

fs.writeFileSync(r('./mina/app.json'),JSON.stringify(config.json),'utf8')

compiler.watch({
	aggregateTimeout:300,
	poll:true
},(err,stats){
	process.stdout.write(status.toString({
		colors:true,
		modules:false,
		children:true,
		chunks:true,
		chunkModules
	}) + '\n\n')
})