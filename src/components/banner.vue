<template>
	<div class='banner'>
		<div class='swiper-container' :class='swiperid'>
			<div class='swiper-wrapper'>
				<slot name='swiper-con'></slot>
			</div>
			<div :class='{"swiper-pagination":paginationshow}' :style='{"text-align":paginationdesition}'></div>
		</div>
	</div>
</template>

<script>
    import Vue from 'vue'
	import '../assets/libs/swiper/js/swiper.js'
	import VueAwesomeSwiper from 'vue-awesome-swiper'
	import {swiper,swiperSlide} from 'vue-awesome-swiper'
	Vue.use(VueAwesomeSwiper)
	export default {
		props:{
			swiperid:{
				type:String,
				default:''
			},
			paginationshow:{
				type:Boolean,
				default:true
			}, 
			paginationdesition:{
				type:String,
				default:'center'
			},
			paginationType:{
				type:String,
				default:'bullets'
			},
			autoplay:{
				type:Number,
				default:2000
			},
			loop:{
				type:Boolean,
				default:true
			},
			direction:{
				type:String,
				default:'horizontal'
			},
			effect:{
				type:String,
				default:'slide'
			}
		},
		mounted: function(){
			var That = this;
			var mySwiper = new Swiper('.swiper-container'+ That.swiperid,{
				direction:That.direction,
				loop:That.loop,
				pagination:'.swiper-pagination',
				paginationType:That.paginationType,
				autoplay:That.autoplay,
				effect:That.effect
			})
		},
		components:{
			swiper,
			swiperSlide
		}
	}
</script>

<style>
	@import '../assets/libs/swiper/css/swiper.css';
	
	.banner{
		width:100%;
		height:200px;
		overflow:hidden;

	}
	.banner .swiper-container .swiper-slide img{
		width:100%;
	}
	.banner .swiper-container .swiper-pagination{
		width:100%;
		height:15px;
		background:green;
		display:block;
	}
	.swiper-pagination-bullet-active{
		background:white;
	}
</style>
















