<template>
  <div>
    <el-card class="login-form-layout">
      <el-form
          autocomplete="on"
          :model="loginForm"
          ref="loginForm"
          label-position="left"
      >
        <h2 class="login-title color-main">GITHUB CHAT COAIX.io 2020 LW</h2>
        <el-form-item prop="username">
          <el-input
              name="username"
              type="text"
              v-model="loginForm.userid"
              autocomplete="on"
              placeholder="请输入账号"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
              name="password"
              :type="pwdType"
              v-model="loginForm.password"
              autocomplete="on"
              placeholder="请输入密码"
          >
          </el-input>
        </el-form-item>
        <el-form-item style="margin-bottom: 60px">
          <el-button
              style="width: 100%"
              type="primary"
              @click="loginAction()"
          >登录
          </el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        userid: "",
        password: ""
      },
      // loading: false,
      pwdType: "password",
    };
  },
  methods: {
    loginAction(){
      this.$store.commit('udpateuserid',this.loginForm.userid);
      this.$bus.$emit('login');
    }
  }
};
</script>

<style scoped>
.login-form-layout {
  position: absolute;
  left: 0;
  right: 0;
  width: 360px;
  margin: 140px auto;
  border-top: 10px solid #409eff;
}

.login-title {
  text-align: center;
}

.login-center-layout {
  background: #409eff;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 200px;
}
</style>