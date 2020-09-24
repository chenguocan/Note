<template>
  <div class="loginInterface">
    <h2>登录界面</h2>
    <div class="loginBox">
      <form method="post" class="formBox">
        <label class="mark">用户名:</label><input class="username" type="text" v-model="username"/>
        <label class="mark">密码:</label><input type="text" class="password" v-model="password"/>
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
    isLogin(){
      return this.$store.state.isLogin;
    }
  },
  methods: {
    async login(e) {
      e.preventDefault();
      const res = await this.$http.post("/auth/login",
          {username: this.username, password: this.password}
      ).catch(()=>{
        return window.alert('登录失败');
      });
      if(res.status===200){
        this.$store.commit("changeLog",true);
        await this.$router.push("/home/noteList");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/valiable.scss";

.loginInterface {
  background: $line-color;
  min-height: 750px;
  h2 {
    transform: translateY(100px);
  }
  .loginBox {
    background: white;
    min-height: 400px;
    max-width: 350px;
    margin-right: auto;
    margin-left: auto;
    transform: translateY(30%);
    display: flex;
    flex-direction: column;
    .formBox {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
      .mark{
        color:gray;
        width: 40px;
        transform: translateX(-80px);
        margin-top:10px;
        font-size: 10px;
        text-align: left;
        text-align-last: justify;
      }
      .username, .password {
        border:1px solid gray;
        border-radius: 3px;
        width: 200px;
        height: 30px;
        background: white;
      }
        .buttons {
          margin-top: 10px;
          width: 200px;
          height: 30px;
          border-radius: 3px;
          &.login {
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