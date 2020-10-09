<template>
  <div class="loginInterface">
    <h2>登录界面</h2>
    <div class="loginBox">
      <form method="post" class="formBox">
        <label class="mark"><i class="el-icon-s-custom"></i><input class="username" type="text" v-model="username"/></label>
        <label class="mark"><i class="el-icon-lock"></i><input type="password" class="password" v-model="password"/></label>
        <button class="buttons login" @click="login($event)">登录</button>
      </form>
    </div>
  </div>
</template>
<script>

export default {
  name: 'Login',
  data() {
    return {
      username: 'hunger',
      password: '123456',
    }
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    }
  },
  methods: {
    async login(e) {
      e.preventDefault();
      const res = await this.$api.login({username: this.username, password: this.password});
      if (res.status === 200) {
        this.$store.commit("changeLog", true);
        await this.$router.push("/home/noteList");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/valiable.scss";

.loginInterface {
  background:no-repeat url("https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=660373771,3596958404&fm=26&gp=0.jpg");
  background-size: cover;
  height: 100vh;

  h2 {
    transform: translateY(100px);
  }

  .loginBox {
    min-height: 400px;
    max-width: 350px;
    margin-right: auto;
    margin-left: auto;
    transform: translateY(30%);
    display: flex;
    flex-direction: column;
    opacity: 100%;
    .formBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
      .mark {
        display: flex;
        align-items: center;
        margin-top: 10px;
        border: 1px solid gray;
        border-radius: 3px;
        height: 30px;
        background: white;
        width: 250px;
        color: gray;
        i{
          padding:0 0.5em;
        }
      }
      .buttons {
        margin-top: 10px;
        width: 250px;
        height: 30px;
        border-radius: 3px;

        &.login {

          color:white;
          background: rgb(133, 206, 97);
        }

        &.signup {
          background: red;
        }
      }
    }
  }
}
</style>