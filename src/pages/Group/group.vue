<template>
	<div>
		<Myheader txt='社区'>
			<img src='../../assets/images/ic_actionbar_search_icon.png' class='leftImg' slot='left'/>
			<img src='../../assets/images/ic_chat_green.png' class='chatImg' slot='right'/>
		</Myheader>
	</div>

</template>

<script>
   //引入
	import Myheader from '../../components/header'
	//关联
	export default {
		components:{
			Myheader
		}
	}

</script>