<template>
  <div class="myNotes">
    <slot></slot>
    <div class="titleBar">
      <div class="updateDate">更新时间</div>
      <div class="title">标题</div>
    </div>
    <div class="dateList">

    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NoteBar'
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/valiable.scss";

.myNotes {
  height: 100%;
  min-width: 250px;
  border: 1px solid $line-color;
  background: rgb(238, 238, 238);


  .titleBar {
    min-height: 30px;
    display: flex;
    justify-content: space-between;
    font-size: 10px;
    align-items: center;

    .title {
      line-height: 30px;
      padding: 0 100px 0 10px;
      border: 1px solid rgb(223, 223, 223);

    }

    .updateDate {
      line-height: 30px;
      padding-right: 100px;
      border: 1px solid rgb(223, 223, 223);
    }
  }

  .dateList {
    width: 100%;
    height: 90%;
    overflow: hidden;
  }
}
</style>