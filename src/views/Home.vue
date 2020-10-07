<template>
  <div class="home">
    <side-bar>
      <Avatar></Avatar>
      <NavBar></NavBar>
    </side-bar>
    <router-view/>
  </div>
</template>

<script>

import SideBar from "@/components/SideBar";
import Avatar from "@/components/Avatar";
import NavBar from "@/components/NavBar";

export default {
  name: 'Home',
  components: {NavBar, Avatar, SideBar},
  computed:{
     isLogin(){
       return this.$store.state.isLogin;
     }
  },
  created(){
    if(this.isLogin===false){
      window.alert("请登录账号");
    }
  }
}
</script>
<style lang="scss">
@import "~@/assets/iconfont.css";

.home {
  height: 100vh;
  width: 100%;
  display: flex;
  overflow: hidden;
}

.sideBar {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>