<template>

	<div class="container my-5 py-4">
		<div class="py-2">
			<span>
		<a href="#">Home</a>
		</span>
		<i class="fa fa-chevron-right text-danger" style="font-size:12px"></i>
		<span><a href="#">Items</a>  <img src="../assets/heart.png"></span>
		<hr>
		</div>

		
		<div class="row">
			<div class="col-md-12">
				<h4 class="my-2"> 
				<img src="../assets/fg.png" style="height: 26px">All Items(8) <img src="../assets/good.png"></h4>
			</div>
			<div class="col-md-3 py-2" v-for="(row,index) in items" :key="index">
				<SingleItem :row="row"></SingleItem>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
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
