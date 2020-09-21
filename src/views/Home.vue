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

}
</script>
<style lang="scss">
@import "~@/assets/iconfont.css";

.home {
  height: 700px;
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