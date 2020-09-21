<template>
  <div class="loginBox">
    <h3>登录界面</h3>
    <form method="post" class="formBox">
      <label>用户名:<input type="text" class="username" v-model="username"/></label>
      <label>密码:<input type="text" class="password" v-model="password"/></label>
      <div class="buttonBox">
        <button class="buttons login" @click="login($event)">登录</button>
        <button class="buttons signin">注册</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: 'admin',
      password: '123456',
    }
  },
  methods: {
    async login(e) {
      e.preventDefault();
      //const message = {username: this.username, password: this.password};
      const res = await this.$http.post("/auth/login",
        {username:'hunger',password:"123456"}
      );
      console.log(res);

    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/valiable.scss";

.loginBox {
  min-height: 400px;
  max-width: 500px;
  margin-right: auto;
  margin-left: auto;
  background: $line-color;
  transform: translateY(30%);
  display: flex;
  flex-direction: column;
  align-items: center;

  .formBox {
    display: flex;
    flex-direction: column;

    .username, .password {
      margin-top: 20px;
      border-radius: 3px;
      width: 200px;
      height: 30px;
      background: white;
    }

    .buttonBox {
      margin-top: 10px;

      .buttons {
        width: 80px;
        height: 30px;
        border-radius: 3px;
        margin-right: 10px;

        &.login {
          background: palegreen;
        }

        &.signin {
          background: red;
        }
      }
    }

  }

}
</style>