<template>
	<div class="my-5 py-4">
		<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
			<ol class="carousel-indicators">
				<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
				<li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
			</ol>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img src="../assets/banner-img/banner1.png" class="d-block w-100" alt="">
				</div>
				<div class="carousel-item">
					<img src="../assets/banner-img/banner2.png" class="d-block w-100" alt="">
				</div>
				<div class="carousel-item">
					<img src="../assets/banner-img/banner3.png" class="d-block w-100" alt="">
				</div>
			</div>
		</div>
		
		<div class="container">			
			<div class="row">
				<div class="col-md-12 my-4">
					<h4 class="text-muted "><img src="../assets/flag.png" style="height:26px">ပရိုမိုးရှင်းနောက်ဆုံးနေ့ပစ္စည်းများ <img src="../assets/hp.png"></h4>
					<hr class="divider">
				</div>
				<div class="col-md-3" v-for="(row,index) in items" :key="index">
					<SingleItem :row="row"></SingleItem>
				</div>
			</div>
		</div>
		
	</div>
	
</template>

<script>
	import Service from '@/service/Service.js'
	import SingleItem from '@/components/SingleItem.vue'
	export default{
		components: {
			SingleItem
		},		
		data(){
			return {				
				items:[]
			}
		},
		created(){
			Service.getItems()
			.then(response=>this.items=response.data.items)
		}
	}
</script>
<style type="text/css" scoped>
	hr.divider {  
		float: left;
		width: 10rem;
		border-width:2px;
		border-color: #f4623a;
	}
</style>
