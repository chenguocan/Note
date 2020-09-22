<template>
  <div class="note">
    <div class="header">
      <div class="date">
        <span>创建时间:</span>
        <span>更新时间:</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Note",
}
</script>

<style lang="scss" scoped>
.note {
  height: 100%;
  width: 100%;

  .header {
    height: 30px;
    border-bottom: 1px solid gray;
    .date{
      text-align: left;
      font-size: 10px;
      color: gray;
      line-height: 30px;
      span{
        padding:0 20px 0 20px;
      }
    }
  }
}
</style>