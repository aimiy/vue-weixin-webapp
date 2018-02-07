// import { Route } from '../decorator/router'
// import { resolve } from 'path'
import Router from 'koa-router'
import sha1 from 'sha1'
import config from '../config'

// const r = path => resolve(__dirname, path)

export const router = app => {
  // const apiPath = r('../routes')
  // const router = new Route(app, apiPath)

  // router.init()
  const router = new Router()

  router.get('/wechat-hear', (ctx, next) => {
  	const token = config.wechat.token
  	const {
  		signature,
  		nonce,
  		timestamp,
  		echostr
  	} = ctx.query

  	const str = [token,timestamp,noncel].sort().join('')
  	const sha = sha1(str)

  	if (sha === signature) {
  		ctx.body = echostr
  	}else {
  		ctx.body = 'failed'
  	}
  	ctx.body = echostr
  })

  app.use(router.routes())
  app.use(router.allowedMethods())
}