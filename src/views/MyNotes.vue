<template>
  <div class="myNote">
    <NoteBar :currentList="current">
      <div class="tag">
        <el-dropdown trigger="click" @command="currentTitle">
              <span class="el-dropdown-link">
                {{ current.title === undefined ? '选择标题' : current.title }}
                <i class="el-icon-arrow-down el-icon--right"></i>
              </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item v-for="item in noteList" :key="item.id" :command="item.id">{{ item.title }}
            </el-dropdown-item>
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
  data() {
    return {
      current: '',
      currentList: '',
    }
  },
  computed: {
    noteList() {
      return this.$store.state.noteList;
    }
  },
  mounted() {
    console.log(this.noteList);
    console.log(this.current.title);
  },
  methods: {
    currentTitle(id) {
      this.current = this.noteList.filter(item=>item.id===id)[0];
      this.$emit('xxx','hi');
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/valiable.scss";
@import "~@/assets/styles/style.scss";

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