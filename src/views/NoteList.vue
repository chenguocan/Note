<template>
  <div class="noteBooks">
      <button class="addNote">+新建笔记本</button>
    <hr />
    <h5>笔记本列表(22)</h5>
    <div class="noteBooksList">

    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NoteList'
};
</script>

<style lang="scss" scoped>
.noteBooks{
  width: 95%;
  height: inherit;
  background: rgb(238, 238, 238);
  .addNote{
    padding: 3px 0;
    margin: 5px 0;
    color:rgb(132, 134, 132);
    background: white;
    border:1px solid rgb(132, 134, 132);
  }
  .noteBooksList{
    width: 70%;
    height: 80%;
    background: white;
    margin-left: auto;
    margin-right: auto;
    border-radius: 5px;
    transform: translateY(10px);
  }
}
</style>