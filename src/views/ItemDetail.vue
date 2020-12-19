<template>
	<div class="container py-5 my-5">
		<span><a href="#">Home</a></span>
		<i class="fa fa-chevron-right text-danger" style="font-size:12px"></i>
		<span><a href="#">ItemDetail</a></span>
			<i class="fa fa-chevron-right text-danger" style="font-size:12px"></i> {{item.name}} <img src="../assets/heart.png">
		<div class="row py-3" v-if="!loading">
			<div class="col-md-5">
				<div class="view-product">
					<img :src="item.photo" alt="" class="img-fluid">
					<h3>Image</h3>
				</div>
				<div id="similar-product" class="carousel slide my-2" data-ride="carousel">
					<div class="carousel-inner">
						<div class="item active">
							<a href="#"><img :src="item.photo" alt="" class="sliderimg"></a>
							<a href="#"><img :src="item.photo"  alt=""  class="sliderimg"></a>
							<a href="#"><img :src="item.photo"  alt=""  class="sliderimg"></a>
						</div>
					</div>
					<a class="left item-control" href="#similar-product" data-slide="prev">
						<i class="fa fa-angle-left"></i>
					</a>
					<a class="right item-control" href="#similar-product" data-slide="next">
						<i class="fa fa-angle-right"></i>
					</a>
				</div>
			</div>
			<div class="col-md-7">
				<div class="product-information">
					<img src="../assets/new.jpg" class="newarrival" alt="" />
					<h2>{{item.name}} <img src="../assets/hp.png"></h2>
					<span>
						<span>{{item.discount}} Ks</span>
						<span class="text-danger">/<del>{{item.price}} Ks</del></span><br>
						<label>Quantity:</label>
						<input type="text" value="1" v-model="qty" />
						<button type="button" class="btn btn-fefault cart addtocart" @click="addToCart()" >
							<i class="fa fa-shopping-cart"></i>
							Add to cart
						</button>
					</span>
					<br>
					<h5 class="text-muted">Description</h5>
					<p class="text-justify p-2">{{item.description}}</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	import Service from '@/service/Service.js'
	export default{
		data(){
			return {
				qty:1,
				loading:true,
				item:Object
			}
		},
		created(){
			let id=this.$route.params.id;
			Service.getItemDetail(id)
							.then(response => {
								this.item = response.data.item
								this.loading = false
							})

		},
		methods:{
			addToCart(){
				let cartitem = {
					id: this.item.id,
					name: this.item.name,
					photo: this.item.photo,
					price: this.item.price,
					qty: this.qty
				}
				this.$store.dispatch('addToCart', cartitem)
			}
		}
	}
</script>
<style type="text/css" scoped>
	#similar-product {
		margin-top: 40px;
	}
	#reviews {
		padding-left: 25px;
		padding-right: 25px;
	}

	.product-details {
		margin-bottom: 40px;
		overflow: hidden;
		margin-top: 10px;
	}



	.view-product {
		position: relative;
	}

	.view-product img {
		border: 1px solid #F7F7F0;
		height: 380px;
		width: 100%;
	}

	.view-product h3 {
		background: #FE980F;
		bottom: 0;
		color: #FFFFFF;
		font-family: 'Roboto', sans-serif;
		font-size: 14px;
		font-weight: 700;
		margin-bottom: 0;
		padding: 8px 20px;
		position: absolute;
		right: 0;
	}

	#similar-product .carousel-inner .item{
		padding-left:0px;
	}

	#similar-product .carousel-inner .item img {
		display: inline-block;
		margin-left: 15px;
	}

	.item-control {
		position: absolute;
		top: 35%;
	}
	.item-control i {
		background: #FE980F;
		color: #FFFFFF;
		font-size: 20px;
		padding: 5px 10px;
	}

	.item-control i:hover{
		background:#ccccc6;
	}

	.product-information {
		border: 1px solid #F7F7F0;
		overflow: hidden;
		padding-bottom: 60px;
		padding-left: 60px;
		padding-top: 60px;
		position: relative;
	}

	.newarrival{
		position:absolute;
		top:0;
		left:0
	}

	.product-information h2 {
		color: #363432;
		font-family: 'Roboto', sans-serif;
		font-size: 20px;
		margin-top: 0;
	}

	.product-information p {
		color: #696763;
		font-family: 'Roboto', sans-serif;
		margin-bottom: 5px;
	}

	.product-information span {
		display: inline-block;
		margin-bottom: 8px;
		margin-top: 18px;
	}

	.product-information span span {
		color: #FE980F;
		float: left;
		font-family: 'Roboto', sans-serif;
		font-size: 20px;
		font-weight: 700;
		margin-right: 20px;
		margin-top: 0px;
	}
	.product-information span input {
		border: 1px solid #DEDEDC;
		color: #696763;
		font-family: 'Roboto', sans-serif;
		font-size: 20px;
		font-weight: 700;
		height: 33px;
		outline: medium none;
		text-align: center;
		width: 50px;
	}

	.product-information span label {
		color: #696763;
		font-family: 'Roboto', sans-serif;
		font-weight: 700;
		margin-right: 5px;
	}

	.share {
		margin-top: 15px;
	}


	.cart {
		background: #FE980F;
		border: 0 none;
		border-radius: 0;
		color: #FFFFFF;
		font-family: 'Roboto', sans-serif;
		font-size: 15px;
		margin-bottom: 10px;
		margin-left: 20px;
	}


	.sliderimg{
		width: 120px;
		border: 1px solid #FE980F;
		border-radius: 5px;
	}


</style>
