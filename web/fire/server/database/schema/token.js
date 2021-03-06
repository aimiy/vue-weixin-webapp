const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TokenSchema = new mongoose.Schema({
	name:String,
	token:String,
	expire_in:Number,
	meta:{
		created:{
			type:Date,
			default:Date.now()
		},
		updated:{
			type:Date,
			default:Date.now()
		}
	}
})

TokenSchema.pre('save',function(next){
	if(this.isNew) {
		this.meta.createdAt = this.meta.updatedAt = Date.now()
	}else{
		this.meta.updatedAt = Date.now()
	}
	next()
})

TokenSchema.statics = {
	async getAccessToken(){
		const token = await this.findOne({
			name:'access_token'
		}).exec()
		return token
	},
	async saveAccessToken(data){
		let token = await this.findOne({
			name:'access_token'
		}).exec()
		if (token) {
			token.token = data.access_token
			token.expires_in = data.expire_in
		}else{
			token = new Token({
				name:'access_token',
				token:data.access_token,
				expire_in:data.expire_in
			})
		}
		await token.save()

		return data
	}
}

const Token = mongoose.model('Token', TokenSchema)