<template>
  <div class="trashNote">
    <NoteBar :currentList="trashList">
      <div class="tag">
        <p>回收站</p>
      </div>
    </NoteBar>
    <Trash></Trash>
  </div>
</template>

<script lang="ts">
import NoteBar from '../components/NoteBar.vue';
import Trash from '../components/Trash.vue';

export default {
  name: 'CircleNotes',
  components: {Trash, NoteBar},
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