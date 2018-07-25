<template>
	<div>
		<Myheader txt='广播'>
			<img src='../../assets/images/ic_status_search_user.png' class='leftImg' slot='left'/>
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