<template>
  <div class="myNote">
    <NoteBar :noteList="noteList">
      <div class="tag">
        <el-dropdown trigger="click">
          <span class="el-dropdown-link">
            下拉菜单<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <button class="addNewNote">添加笔记</button>
      </div>
    </NoteBar>
    <Note></Note>
  </div>
</template>

<script lang="js">
import NoteBar from '../components/NoteBar.vue';
import Note from '../components/Note.vue';

export default {
  name: 'MyNotes',
  components: {Note, NoteBar},
  computed: {
    noteList() {
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