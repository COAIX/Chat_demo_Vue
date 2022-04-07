<template>
  <!-- <div class="TheButtom">
      <el-container>
          <el-aside width="200px">Aside</el-aside>
          <el-container>
            <el-header>Header</el-header>
            <el-main>Main</el-main>
            <el-footer>Footer</el-footer>
          </el-container>
        </el-container>
  </div> -->

  <!--    <DataBaseHome style="margin: 0% !important;"/>-->

  <el-container>
    <el-aside width="200px">
      <NavMenu_ct></NavMenu_ct>
    </el-aside>
    <el-container>
      <el-header style="text-align: center"><h1><font color="#ff7f50">Git id：{{ this.$store.state.userid }}</font></h1></el-header>
      <el-main>
        <Chat_window></Chat_window>
      </el-main>
      <el-footer width="200px">
        <Send widtm="200px"></Send>
      </el-footer>
    </el-container>
  </el-container>

<!--  <login></login>-->

</template>

<script>
// import UsermsgButtom from './UsermsgButtom.vue'
// import Top from './Top.vue'
// import ItemList from './ItemList.vue'
// import DataBaseHome from './DataBaseHome.vue'
import NavMenu_ct from "./Nav/NavMenu_ct";
import Chat_window from "./ChatWindow/Chat_window";
import Send from "./SendWindow/Send";
import Login from "./Login/Login";

export default { //暴露以便外界可以接收到
  name: 'Home', //与文件名一致
  components: {
    Login,
    NavMenu_ct,
    Chat_window,
    Send
    // DataBaseHome
    //Key:value if keyname!=valuename
    //Key:Key if keyname==valuename
  },
  //声明接收传递过来的数据，其中todos是自己用的，checkTodo和deleteTodo是给子组件MyItem用的
  // props:['todos','checkTodo','deleteTodo']
  data() {
    return {}
  },

}
</script>

<style>
/** {*/
/*  margin: 0%;*/
/*}*/

/* .el-header, .el-footer {
background-color: #B3C0D1;
color: #333;
text-align: center;
line-height: 60px;
}

.el-aside {
background-color: #D3DCE6;
color: #333;
text-align: center;
line-height: 300px;
}

.el-main {
background-color: #E9EEF3;
color: #333;
text-align: center;
line-height: 760px;
}

body > .el-container {
margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
line-height: 320px;
} */
</style>