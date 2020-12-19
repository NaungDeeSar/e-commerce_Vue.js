<template>
	<div class="col-12 col-md-12 col-lg-12">
		<div class="product-image-wrapper">
			<div class="single-products">
				<div class="productinfo text-center">
					<router-link :to="{name:'ItemDetail',params:{id:row.id}}">
						<img :src="row.photo" alt="" />
					</router-link>
					<h5 class="my-2 py-2">
						{{ row.discount }} Ks /<del class="text-danger">
						{{ row.price }} Ks</del></h5>
						<p>  {{row.name}}</p>
						<a  class="btn btn-default add-to-cart addtocart" @click="addToCart()">
							
							<!-- <i class="fa fa-shopping-cart"></i> -->
							 Add to cart</a>
						</div>

					</div>
				</div>
			</div>
</template>
<script type="text/javascript">
	export default{
		props:{
			row:Object
		},
		methods:{
			addToCart(){
				let myitem={
					id:this.row.id,
					name:this.row.name,
				 photo: this.row.photo,
					price:this.row.price,
					qty:1
				}
				this.$store.dispatch('addToCart',myitem)
			}
		}
	}
</script>
<style  scoped>
/*items show css
*/.product-image-wrapper{
    border:1px solid #F7F7F5;
    overflow: hidden;
    margin-bottom:30px;
}

.single-products {
  position: relative;
}


.productinfo h5{
    color: #FE980F;
    font-family: 'Roboto', sans-serif;
    font-size:18px;
    font-weight: 700;
}


.productinfo p{
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #696763;
}

.productinfo img{
  width: 100%;
}

.productinfo{
 position:relative;
}
.add-to-cart {
  background:#F5F5ED;
  border: 0 none;
  border-radius: 0;
  color: #696763;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  margin-bottom: 25px;
}

.add-to-cart:hover {
  background: #FE980F;
  border: 0 none;
  border-radius: 0;
  color: #FFFFFF;
}

.add-to{
  margin-bottom: 10px;
}

.add-to-cart i{
    margin-right:5px;
}

.add-to-cart:hover {
  background: #FE980F;
  color: #FFFFFF;
}
</style>
