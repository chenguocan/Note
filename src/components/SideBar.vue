<template>
  <div class="sideBar">
    <slot></slot>
  </div>
</template>

<script lang="js">
export default {
  name: "SideBar"
}
</script>

<style lang="scss" scoped>
.sideBar {
  min-width: 45px;
  background: rgb(45, 51, 60);

}
</style>