<template>
  <div id="app" style="margin: 0% !important;">
<!--    <Home/>-->
    <!-- <J2EE2 /> -->
    <!--         <router-view />-->
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home'
import Login from "./components/Login/Login";
import axios from 'axios'

axios.defaults.withCredentials = true;//让ajax携带cookie
export default {
  name: 'App', //一般就是文件名
  components: {
    //应声明于vm的data中
    //key:value
    Home,
    Login
  },
  methods: {},
  mounted() {
    this.$router.push('/login');
    this.$bus.$on('login', () => {
      console.log("11")
      this.$router.push('/home');
    });
  }

}
</script>

<style>

</style>