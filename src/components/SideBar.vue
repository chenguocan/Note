<template>
  <div class="sideBar">
    <slot></slot>
    <button class="iconfont exit" @click="logOut">&#xe66a;</button>
  </div>
</template>

<script lang="js">
export default {
  name: "SideBar",
  computed:{
    isLogin(){
      return this.$store.state.isLogin
    }
  },
  methods:{
    logOut(){
      this.$store.commit("changeLog",false);
      console.log("退出了");
      this.$router.push("/login");
    }
  }
}
</script>

<style lang="scss" scoped>
.sideBar {
  min-width: 45px;
  background: rgb(45, 51, 60);
  position: relative;
  .exit{
    bottom:20px;
    position: absolute;
  }
}
</style>