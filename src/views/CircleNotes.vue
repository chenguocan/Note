<template>
  <div class="trashNote">
    <TrashBar>
      <div class="tag">
        <p>回收站</p>
      </div>
    </TrashBar>
    <Trash></Trash>
  </div>
</template>

<script lang="ts">
import TrashBar from '../components/TrashBar.vue';
import Trash from '../components/Trash.vue';

export default {
  name: 'CircleNotes',
  components: {Trash, TrashBar},
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
  @media (max-width: 500px) {
    flex-wrap: wrap;
    flex-direction: row;
  }
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