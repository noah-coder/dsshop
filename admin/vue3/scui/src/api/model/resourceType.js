import http from "@/utils/request"
export default {
	list: {
		url: `${process.env.VUE_APP_API_URL}/resource_type`,
		name: "资源分类",
		get: async function(data={}){
			return await http.get(this.url, data);
		}
	},
	create: {
		url: `${process.env.VUE_APP_API_URL}/resource_type`,
		name: "创建资源分类",
		post: async function(data={}){
			return await http.post(this.url, data);
		}
	},
	edit: {
		url: `${process.env.VUE_APP_API_URL}/resource_type`,
		name: "保存资源分类",
		post: async function(data={}){
			return await http.post(this.url + '/' + data.id, data);
		}
	},
    destroy: {
		url: `${process.env.VUE_APP_API_URL}/resource_type/destroy`,
		name: "删除资源分类",
		post: async function(id,data){
			return await http.post(this.url + '/' + id, data);
		}
	},
}
