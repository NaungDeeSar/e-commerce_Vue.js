import Vue from 'vue'
import Vuex from 'vuex'
import Service from '@/service/Service.js'

Vue.use(Vuex)

const store =new Vuex.Store({
  state:{
    cart:[],
    token: '',
    user:{}
  },
  mutations:{     
    addToCart(state,payload){
      let item=state.cart.find(item=>item.id==payload.id);
      if(item){
        item.qty +=Number(payload.qty);
      }else {
        state.cart.push(payload);
      }
    },
   incCart(state,payload){
      state.cart[payload].qty++;
    },
    decCart(state,payload){
      state.cart[payload].qty--;
    },
    saveCart(state){
      localStorage.setItem('cart',JSON.stringify(state.cart));
    },
    getData(state){
      if (localStorage.getItem('cart')) {
        state.cart=JSON.parse(localStorage.getItem('cart'));
      }else {
        state.cart=[];
      }
    },
    REMOVE_FROM_CART(state, payload) { 
      state.Cart.splice(payload, 1);
    },
    storeToken(state,payload){
      state.token = payload
  
    },
    saveToken(state){
      localStorage.setItem('token', state.token);

    },
    setTokenState(state){
      if(localStorage.getItem('token')){
        state.token = localStorage.getItem('token');
      }else{
        state.token = '';
      }
    },
    getUser(state){
      Service.getUser(state.token)
        .then(response => {
          this.dispatch('storeUser',response.data)
        })
    },
    storeUser(state, payload){
      state.user = payload
    }

  },
  actions:{
    removeFromCart({commit}, payload) {
     commit('REMOVE_FROM_CART', payload);
    
      },
    addToCart({commit},payload){
      commit('addToCart',payload)
      commit('saveCart')
    },
    getData({commit}){
      commit('getData')
    },
     plusCart({commit}, payload){
      commit('incCart', payload)
      commit('storeCart')
    },
    minusCart({commit}, payload){
      commit('decCart', payload)
      commit('storeCart')
    },
    storeToken({commit}, payload){
   commit('storeToken', payload)
   commit('saveToken')
    },
    setToken({commit}){
      commit('setTokenState')     
      }, 
    getUser({commit}){
      commit('getUser')
    },
    storeUser({commit}, payload){
      commit('storeUser', payload)
    }
  
  },
  getters:{
  }
})
export default store
