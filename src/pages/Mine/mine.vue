<template>
	<div>
		<Myheader txt='我的'>
			<img src='../../assets/images/ic_settings.png' class='chatImg' slot='right'/>

		</Myheader>
		<Cell title='提醒'>
			<img src='../../assets/images/ic_mine_notification.png' slot='icon' class='cell-img'/>
			<img src='../../assets/images/ic_arrow_gray_small.png' slot='cell-right' class='cell-right-img'/>
		</Cell>
	</div>

</template>

<script>
   //引入
	import Myheader from '../../components/header'
	import Cell from '../../components/cell'
	//关联
	export default {
		components:{
			Myheader,
			Cell
		}
	}

</script>