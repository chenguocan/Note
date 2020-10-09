<template>
  <div class="noteBooks">
    <el-button class="addNewNote" type="text" @click="changeVisible(true)">+新建笔记本</el-button>
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
              <el-button type="text" @click="edit(item)">编辑</el-button>
            </div>
          </li>
        </ul>

        <!--对话框-->
        <el-dialog
            title="新建笔记本"
            :visible.sync="noteDialogVisible"
            width="50%"
            center>
          <el-form :model="addNote" label-width="100px">
            <el-form-item label="笔记本名称">
              <el-input v-model="addNote.title"></el-input>
            </el-form-item>
          </el-form>

          <span slot="footer" class="dialog-footer">
        <el-button @click="changeVisible(false)">取 消</el-button>
        <el-button type="primary" @click="submitNote">确 定</el-button>
      </span>
        </el-dialog>

        <el-dialog
            title="编辑笔记本"
            :visible.sync="editDialogVisible"
            width="50%"
            center>
          <el-form :model="editNote" label-width="100px">
            <el-form-item label="笔记本名称">
              <el-input v-model="editNote.title"></el-input>
            </el-form-item>
          </el-form>
          <span slot="footer" class="dialog-footer">
                   <el-button @click="changeEditVisible(false)">取 消</el-button>
                   <el-button type="primary"  @click="submitEdit">确 定</el-button>
                </span>
        </el-dialog>
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
      noteDialogVisible: false,
      editDialogVisible: false,
      addNote: {
        title: '',
      },
      editNote:{
        id:'',
        title:'',
      }
    };
  },
  computed: {
    isLogin() {
      return this.$store.state.isLogin;
    }
  },
  methods: {
    changeVisible(xxx) {
      this.noteDialogVisible = xxx;
    },
    async submitNote() {
      const res = await this.$api.createNote({title: this.addNote.title});
      this.changeVisible(false);
      if (res.status !== 200) {
        return window.alert("添加失败");
      }
      await this.getNoteList();
    },
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
    async deleteNote(id) {
      const res = await this.$api.deleteNote(id).catch(() => {
            return window.alert('笔记本不为空或者回收站中还有属于当前笔记本的笔记');
          }
      );
      if (res) {
        if (res.status !== 200) {
          window.alert('笔记本不为空或者回收站中还有属于当前笔记本的笔记');
        }
        await this.getNoteList();
      }
    },
    changeEditVisible(visible) {
      this.editDialogVisible = visible;
    },
    edit(item){
      this.editNote.id=item.id;
      this.editNote.title=item.title;
      this.changeEditVisible(true);
    },
    async submitEdit(){
      const res=await this.$api.editNote(this.editNote.id,{title:this.editNote.title});
      if (res) {
        if (res.status !== 200) {
          window.alert('编辑失败');
        }
        await this.getNoteList();
      }
      this.changeEditVisible(false);
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
    padding: 4px 5px;
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
      min-width: 700px;
      height: 100%;
      background: white;
      overflow: auto;

      ul {
        li {
          width: 100%;
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