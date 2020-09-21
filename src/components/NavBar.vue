<template>
  <div class="iconList">
    <router-link to="/home/notesDetail" class="iconfont icons" active-class="current">&#xe613;</router-link>
    <router-link to="/home/noteList" class="iconfont icons" active-class="current">&#xe60f;</router-link>
    <router-link to="/home/circle" class="iconfont icons" active-class="current">&#xe614;</router-link>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NavBar'
};
</script>

<style lang="scss" scoped>
.iconList {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
    .icons {
      width: 100%;
      padding: 10px 15px 10px 15px;
    }

    .exit {
      position: absolute;

    }
    .current {
      background: rgb(94, 98, 101);
  }
}

</style>