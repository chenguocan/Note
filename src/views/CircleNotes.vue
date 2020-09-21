<template>
  <div>
    <div class="tag">
      <p>回收站</p>
    </div>
    <NoteBar />
  </div>
</template>

<script lang="ts">
import NoteBar from '../components/NoteBar.vue';
export default {
name: "CircleNotes",
  components: {NoteBar}
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/valiable.scss";
.tag {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  width: 100%;
  background: rgb(247, 247, 247);
  position: relative;
  border-right: 1px solid $line-color;
}
</style>