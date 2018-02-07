// import _ from 'lodash'
// import { resolve } from 'path'

// const host = process.env.HOST || 'localhost'
// const env = process.env.NODE_ENV || 'development'
// const conf = require(resolve(__dirname, `./${env}.json`))

// export default _.assign({
//   env,
//   host
// }, conf)
export default{
	db:'mongodb://local/ice',
	wechat:{
		appID:'wx60dc0e2941a192f8',
		appsecret:'57d577fe427fcd17c69a0e866c80e868',
		token:'zheshiyigeceshidetoken'
	}
}