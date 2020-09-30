<template>
  <div class="noteBooks">
    <button class="addNewNote">+新建笔记本</button>
    <hr/>
    <h5 class="title">笔记本列表({{ noteList.length }})</h5>
    <div class="booksBox">
      <div class="noteBooksList">
        <ul>
          <li v-for="item in noteList" :key="item.id">
            <i @click="intoNote(item.id)" class="el-icon-notebook-1">{{
                item.title
              }}<span>({{ item.noteCounts }})</span></i>
            <div class="btn">
              <el-button type="text delete" @click="deleteNote(item.id)">删除</el-button>
              <el-button type="text">编辑</el-button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="js">
export default {
  name: 'NoteList',
  data() {
    return {
      noteList: [],
      trashList: [],
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    }
  },
  methods: {
    async getNoteList() {
      if (this.isLogin === true) {
        const {data: res} = await this.$api.getNote();
        this.noteList = res.data;
        this.$store.commit('getNoteList', this.noteList);
      }
    },
    async getTrashList() {
      if (this.isLogin === true) {
        const {data: res} = await this.$api.getTrash();
        this.trashList = res.data;
        this.$store.commit('getTrashList', this.trashList);
      }
    },
    intoNote(id) {
      this.$router.push({path: '/home/notesDetail', query: {id: id}});
    },
    deleteNote(id){
      console.log(id);
    }
  },
  created() {
    this.getNoteList();
    this.getTrashList();
  }
};
</script>

<style lang="scss" scoped>
.noteBooks {
  width: 100%;
  height: inherit;
  background: rgb(238, 238, 238);
  .title {
    padding-bottom: 30px;
  }
  .addNewNote {
    padding: 3px 0;
    margin: 5px 0;
    color: rgb(132, 134, 132);
    background: white;
    border: 1px solid rgb(132, 134, 132);
  }
  .booksBox {
    width: 680px;
    height: 78%;
    margin-left: auto;
    margin-right: auto;
    overflow: hidden;
    .noteBooksList {
      width: 700px;
      height: 100%;
      background: white;
      border-radius: 5px;
      overflow: auto;
      ul {
        li {
          text-align: left;
          padding: 10px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgb(179, 192, 200);
          justify-content: space-between;
          i {
            cursor: pointer;
          }
          span {
            color: gray;
          }
          .btn {
            .el-button {
              color: rgb(179, 192, 200);
              &.delete {
                right: 0;
              }
            }
          }
        }
      }
    }
  }
}
</style>