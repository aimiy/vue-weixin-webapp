// vue.js
// 实例
const app = new Vue({})
// 通过vuex管理实例中所有的数据，数据模型
const store = new Vuex.Store({})

//路由
const router = new Router({
	routes:[
		{path:'/p1',component:Page1},
		{path:'/p2',component:Page2},
		{path:'/p3',component:Page3},
	]
})


// 服务器的入口文件entry-server.js
export default context = {
	router.push(context.url)

	return Promise.all(router.getMatchedComponents().map(
		component => {
			if (component.fetchServerData) {
				return component.fetchServerData(store)
			}
		}
		))
	.then(() => {
		context.state = store.state
		return app
	})
}

store.replaceState(window.__INIRISL_STATE__)
app.$mount('#app')