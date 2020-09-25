<template>
  <div class="myNote">
    <NoteBar :noteList="noteList">
      <div class="tag">
        <p>oK</p>
        <button class="addNewNote">添加笔记</button>
      </div>
    </NoteBar>
    <Note ></Note>
  </div>
</template>

<script lang="js">
import NoteBar from '../components/NoteBar.vue';
import Note from '../components/Note.vue';
export default {
  name: 'MyNotes',
  components: {Note, NoteBar},
  computed:{
    noteList(){
      return this.$store.state.noteList;
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/valiable.scss";

.myNote {
  width: 100%;
  display: flex;
  .tag {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    width: 100%;
    position: relative;
    background: rgb(247, 247, 247);
    .addNewNote {
      position: absolute;
      right: 0;
      color: gray;
      margin-right: 3px;
      padding: 1px;
      border: 1px solid $line-color;
      background: white;
    }
  }
}
</style>