<template>
  <div class="trashNote">
    <NoteBar :noteList="trashList">
      <div class="tag">
        <p>回收站</p>
      </div>
    </NoteBar>
    <Note></Note>
  </div>
</template>

<script lang="ts">
import NoteBar from '../components/NoteBar.vue';
import Note from '../components/Note.vue';

export default {
  name: 'CircleNotes',
  components: {Note, NoteBar},
  computed:{
    trashList(){
      return this.$store.state.trashList;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/valiable.scss";

.trashNote {
  width: 100%;
  display: flex;
  .tag {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    width: 100%;
    background: rgb(247, 247, 247);
  }
}
</style>