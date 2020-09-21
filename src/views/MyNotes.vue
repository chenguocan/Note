<template>
  <div>
    <NoteBar>
      <div class="tag">
        <p>oK</p>
        <button class="addNote">添加笔记</button>
      </div>
    </NoteBar>
  </div>
</template>

<script lang="ts">
import NoteBar from '../components/NoteBar.vue';
export default {
  name: 'MyNotes',
  components: {NoteBar}
};
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

  .addNote {
    position: absolute;
    right: 0;
    color: gray;
    margin-right: 3px;
    padding: 1px;
    border: 1px solid $line-color;
    background: white;
  }
}
</style>