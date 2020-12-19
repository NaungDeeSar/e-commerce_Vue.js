<template>
  <div class="container my-4 py-5">
    <div class="py-2">

    <span><a href="#">Home</a></span>
    <i class="fa fa-chevron-right text-danger" style="font-size:12px"></i>
    <span><a href="#">My Cart</a></span>
       <hr>
    </div>
    <section v-if="orderStatus">
      <span class="text-center text-danger">Your order successfully</span>
    </section>
    <section v-else>
    <div class="row py-2">
      <div class="col-md-12">
        <table class="table table-bordered">
          <thead>
            <tr class="bg-info text-white">
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Qty</th>
              <th>Subtotal</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(row,index) in items" :key="index">
              <th scope="row">{{index +1}}</th>
              <td>
                <img :src="row.photo" class="img-fluid" width="70" style="border:2px double green;border-radius:5px">
                <span class="text-muted ml-2">  {{row.name}}</span>
              </td>
              <td>{{Number(row.price).toLocaleString() }} MMK</td>
              <td>
                <button class="btn btn-outline-info" @click="maxToCart(row)"> + </button>
                {{row.qty}}
                <button class="btn btn-outline-info" @click="minToCart(row)"> - </button>
              </td>
              <td>{{Number(row.qty*row.price).toLocaleString()}} MMK
              <button class="btn btn-sm btn-danger" @click="removeFromCart(index)">&times;</button>

              </td>
            </tr>
            <tr>
              <td colspan="4">Total:</td>
              <td>{{Number(total).toLocaleString()}} MMK

              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-12">
        <div class="form-group">
         <textarea name="notes" class="form-control" v-model="notes">
         </textarea>
       </div>
     </div>
     <div class="col-md-12">
      <router-link to="/item" class="btn btn-outline-info"> Continue Shopping</router-link>
      <button type="button" name="button" class="btn btn-info float-right" value="Checkout" @click="checkout">Checkout</button>
    </div>  
    </div>
      </section>
  </div>
</template>
<script type="text/javascript">
  import Service from '@/service/Service.js'
  export default{
    data(){
      return {
        notes: "",
        orderStatus:false
      }
    },
    methods:{
       removeFromCart(index) {    
      this.$store.dispatch('removeFromCart',index);
    },
      maxToCart(row){
        let myitem={
          id:row.id,
          name:row.name,
          photo:row.photo,
          price:row.price,
           qty:1
        }
        this.$store.dispatch('addToCart',myitem)
      },
  minToCart(row){
    let myitem={
      id:row.id,
      name:row.name,
      photo:row.photo,
      price:row.price,
       qty:-1
    }
    this.$store.dispatch('addToCart',myitem)

},
      checkout(){   
      let notes=this.notes     
      let ls=JSON.stringify(this.$store.state.cart)
      let user_id=this.$store.state.user.id
      console.log(user_id)
      Service.order(ls,notes,user_id)
      .then(response=>{
        console.log(response)
        localStorage.removeItem('cart')
        this.$store.dispatch('getData')
        this.orderStatus=true
        // this.$router.push('/')
      })
    }
},
    computed:{
      items(){
        // this.$store.dispatch('getData')
        return this.$store.state.cart
      },
      total(){
        // this.$store.dispatch('getData')
        return this.$store.state.cart.reduce((a, c) => (a + (c.price*c.qty)),0)
      }
    }
  }
</script>
<style type="text/css">
  span a{
		font-family: sans-serif;
		text-decoration: none;
		color: #555;
		font-size: 18px;
	}
	i{
		font-size: 14px;
		padding: 2px;
	}
</style>
