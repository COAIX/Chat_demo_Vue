<template>
  <div style="margin-left: 4%;margin-top: 1%">
    <el-input  v-model="newMsg.msg" placeholder="请输入内容" @change="sendMsg()">
      <el-button slot="prepend" icon="el-icon-search"></el-button>
      <el-button slot="prepend" icon="el-icon-position"></el-button>
      <el-button slot="prepend" icon="el-icon-folder"></el-button>
      <el-button slot="prepend" icon="el-icon-edit-outline"></el-button>
    </el-input>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Send",
  data() {
    return {
      newMsg: {
        type:'success',
        userid: this.$store.state.userid,
        msg: ''
      }
    }
  },
  methods: {
    sendMsg() {
      // this.$bus.$emit('newMsg', JSON.parse(JSON.stringify(this.newMsg)));
      axios.get('http://127.0.0.1:8081/add?userid=' + this.$store.state.userid + '&value=' + this.newMsg.msg).then(
          response => {
            //回调函数
            this.$bus.$emit('newMsg',JSON.parse(JSON.stringify(this.newMsg)));
            console.log('请求成功了', response.data)
            this.newMsg.msg = '';
          },
          error => {
            //出错函数
            console.log('请求失败了'+this.newMsg.userid, error.message)
            this.newMsg.msg = '';
          });
    }
  }
}
</script>

<style scoped>

</style>