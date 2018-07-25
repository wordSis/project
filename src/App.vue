<template>
  <div id="app">
    <router-view> </router-view>
    <Tabbar></Tabbar>
  </div>
</template>

<script>

  export default {
    name: 'App',
    components:{
      Tabbar
    },
    beforeCreate:function(){
      this.$router.push('/home')
    }
  }
  import Tabbar from './components/tabbar'
    
</script>

<style>
*{
  margin:0;
  padding:0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
