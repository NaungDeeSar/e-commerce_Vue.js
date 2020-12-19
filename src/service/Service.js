import axios from 'axios'
const apiClient=axios.create({
	baseURL:'http://127.0.0.1:8000/api',
	withCredentials:false,
	headers:{
		Accept:'application/json',
		'Content-type':'application/json'
	}
})
export default{	
	getItemDetail(id){
		return apiClient.get('/items/'+id)
	},
	getItems(){
		return apiClient.get('/items')
	},
	getBrands(){
		return apiClient.get('/brand')
	},
	getCategories(){
		return apiClient.get('/category')
	},
	subCategories(){
		return apiClient.get('/subcategory')
	},
	login(email, password){
		return apiClient.post('/login',{email,password})
	},
	order(ls,notes,user_id){
		return apiClient.post('/orders',{ls,notes,user_id})
	},
	users(name,email,password,password_confirmation){
		return apiClient.post('/users',{name,email,password,password_confirmation})

	},
	getUser(token){
    apiClient.defaults.headers.common['Authorization'] = 'Bearer '+token
    return apiClient.get('/user')
  }
}
