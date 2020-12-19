<template>
  <div id="app">

<div class="container-fluid bg-light fixed-top">
     <nav class="container navbar navbar-expand-lg navbar-light  bg-light ">
       <img src="./assets/banner-img/go.png" alt="" style="width:5%">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-3">
        <li class="nav-item active">
          <a class="nav-link" href="#">
           <router-link to="/"> Home</router-link> <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Category
         </a>
         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <div v-for="(row,index) in categories" :key="index">
            <categoryItem :row="row"></categoryItem>
           
          </div>
         

        </div>
      </li>
      <li class="nav-item">
       <a class="nav-link" href="#">
         <router-link to="/item"> Shop</router-link>
       </a>
     </li>
     <li class="nav-item">
       <a class="nav-link" href="#">
          <router-link to="/about"> About</router-link>
       </a>
     </li>
     <li class="nav-item">
       <a class="nav-link" href="#">
        <router-link to="/contact"> Contact Us</router-link></a>
     </li>     
   </ul>
   <form class="form-inline my-2 my-lg-0 ml-auto ">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  <ul  class="navbar-nav ml-auto">
    <div v-if="!loginState">
     <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         <img src="./assets/users.png" style="height: 25px"> Account
         </a>
         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">
               <img src="./assets/login.png" alt="cart" class="img-fluid" style="height:20px;width:20px">   <router-link to="/login"> Login</router-link></a>
          <a class="dropdown-item" href="#">            
            <i class="fas fa-user-plus"></i> <router-link to="/register">Signup</router-link></a>

        </div>
      </li>
     </div>
      <li class="nav-item dropdown" v-if="loginState">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         {{user.name}}
         </a>
         <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#"><i class="fa fa-user" aria-hidden="true"></i> Profile</a>
          <a class="dropdown-item" href="#" @click="logout">
           <i class="fa fa-sign-in" aria-hidden="true"></i> Logout
          </a>

        </div>
      </li>
    <li class="nav-item">
       <a class="nav-link" href="#">
         <router-link to="/cart">
          <img src="./assets/shopping-cart.png" alt="cart" class="img-fluid" style="height: 25px">
           <!-- <b-icon-cart-plus-fill></b-icon-cart-plus-fill> -->
           <span class="badge rounded badge-danger" v-if="cartCount>0" >{{cartCount}}
           </span>

        </router-link>

       </a>
     </li>
   
  </ul>
 
</div>
</nav>
</div>
    <router-view/>
  </div>
</template>
<script type="text/javascript">
 import Service from '@/service/Service.js'
  import categoryItem from '@/components/categoryItem.vue'
  export default{
    components: {
      categoryItem
    },    
    data(){
      return {        
      categories:[]
      }
    },
    created(){
      Service.getCategories()
      .then(response=>this.categories=response.data.categories)
    },
  methods:{
    logout(){
     localStorage.removeItem('token')
      this.$store.dispatch('setToken')
      // this.$store.dispatch('getData')
       this.$router.push('')
    }
  },
    computed:{
      cartCount(){
        this.$store.dispatch('getData')
        return this.$store.state.cart.reduce((a, c) => (a + c.qty),0)
      },
      loginState(){
        this.$store.dispatch('setToken')
        this.$store.dispatch('getUser')
        return this.$store.state.token?true:false
      },
      total(){
        // this.$store.dispatch('getData')
        return this.$store.state.cart.reduce((a, c) => (a + (c.price*c.qty)),0)
      },
       user(){
        return this.$store.state.user
      }
    }

  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
.navbar-nav,.nav-item,.nav-link{
  text-decoration: none;
  color:#000;
  font-size: 18px;
}



</style>
