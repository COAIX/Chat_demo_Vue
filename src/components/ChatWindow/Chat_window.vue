<template>
  <div class="block" style="height: 500px">
    <el-timeline>
      <el-timeline-item v-for="(item, index) in msglist" :timestamp="'用户 '+item.userid" placement="bottom"
                        :type="item.type">
        <el-card>
          <h4>{{ item.msg }}</h4>
        </el-card>
      </el-timeline-item>

<!--      <el-timeline-item timestamp="123213" placement="bottom" type="success">-->
<!--        <el-card>-->
<!--          <h4>更新 Github 模板</h4>-->
<!--        </el-card>-->
<!--      </el-timeline-item>-->
<!--      <el-timeline-item timestamp="2018/4/3" placement="bottom" type="info">-->
<!--        <el-card>-->
<!--          <h4>更新 Github 模板</h4>-->
<!--        </el-card>-->
<!--      </el-timeline-item>-->
<!--      <el-timeline-item timestamp="2018/4/2" placement="bottom" type="info">-->
<!--        <el-card>-->
<!--          <h4>更新 Github 模板</h4>-->
<!--        </el-card>-->
<!--      </el-timeline-item>-->
<!--      <el-timeline-item timestamp="2018/4/2" placement="bottom" type="info">-->
<!--        <el-card>-->
<!--          <h4>更新 Github 模板</h4>-->
<!--        </el-card>-->
<!--      </el-timeline-item>-->
<!--      <el-timeline-item timestamp="2018/4/2" placement="bottom" type="info">-->
<!--        <el-card>-->
<!--          <h4>更新 Github 模板</h4>-->
<!--        </el-card>-->
<!--      </el-timeline-item>-->
<!--      <el-timeline-item timestamp="2018/4/2" placement="bottom" type="info">-->
<!--        <el-card>-->
<!--          <h4>更新 Github 模板</h4>-->
<!--        </el-card>-->
<!--      </el-timeline-item>-->
<!--      <el-timeline-item timestamp="2018/4/2" placement="bottom" type="info">-->
<!--        <el-card>-->
<!--          <h4>更新 Github 模板</h4>-->
<!--        </el-card>-->
<!--      </el-timeline-item>-->
<!--      <el-timeline-item timestamp="2018/4/2" placement="bottom" type="info">-->
<!--        <el-card>-->
<!--          <h4>更新 Github 模板</h4>-->
<!--        </el-card>-->
<!--      </el-timeline-item>-->
<!--      <el-timeline-item timestamp="2018/4/2" placement="bottom" type="info">-->
<!--        <el-card>-->
<!--          <h4>更新 Github 模板</h4>-->
<!--          &lt;!&ndash;          <p>王小虎 提交于 2018/4/2 20:46</p>&ndash;&gt;-->
<!--        </el-card>-->
<!--      </el-timeline-item>-->
    </el-timeline>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Chat_window",
  data() {
    return {
      count: 0,
      msglist: [
        {
          userid: '1213',
          type: "success",
          msg: "Test msg 1!"
        }
      ]
    }
  },
  methods: {
    load() {
      this.count += 2
    },

    //  ---------------------- websocket ---------------------------------
    initWebSocket() {
      // 连接错误
      this.websocket.onerror = this.setErrorMessage

      // 连接成功
      this.websocket.onopen = this.setOnopenMessage

      // 收到消息的回调
      this.websocket.onmessage = this.setOnmessageMessage

      // 连接关闭的回调
      this.websocket.onclose = this.setOncloseMessage

      // 监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
      window.onbeforeunload = this.onbeforeunload
    },
    setErrorMessage() {
      console.log('WebSocket连接发生错误   状态码：' + this.websocket.readyState)
    },
    setOnopenMessage() {
      console.log('WebSocket连接成功    状态码：' + this.websocket.readyState)
    },
    setOnmessageMessage(event) {
      // 根据服务器推送的消息做自己的业务处理
      console.log('服务端返回：' + JSON.parse(event.data));
      this.msglist.push(JSON.parse(event.data));
    },
    setOncloseMessage() {
      console.log('WebSocket连接关闭    状态码：' + this.websocket.readyState)
    },
    onbeforeunload() {
      this.closeWebSocket()
    },
    closeWebSocket() {
      this.websocket.close()
    }
    //  ---------------------- websocket ---------------------------------
  },
  mounted() {
    axios.get('/api/getAll?id=' + this.$store.state.userid).then(
        //引入->import axios from 'axios'
        response => {
          //回调函数
          console.log('请求成功了', response.data)
          this.msglist = response.data
        },
        error => {
          //出错函数
          console.log('请求失败了', error.message)
        }
    );
    this.$bus.$on('newMsg', (msg) => {
      this.msglist.push(msg);
    });

    if ('WebSocket' in window) {
      this.websocket = new WebSocket('ws://localhost:8081/ws/WebSocketService/' + this.$store.state.userid)
      this.initWebSocket()
    } else {
      alert('当前浏览器 Not support websocket')
    }

  }
}
</script>

<style scoped>

</style>