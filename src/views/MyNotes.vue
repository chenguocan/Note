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
            <el-dropdown-item v-for="item in noteList" :key="item.id" :command="item.id">
              {{ item.title }}
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <!--添加笔记-->
        <el-button class="addNewBtn" type="text" @click="changeDialogVisible(true)">添加笔记</el-button>
        <el-dialog title="添加笔记" :visible.sync="addNoteVisible">
          <el-form :model="addNote">
            <el-form-item label="添加标题">
              <el-input v-model="addNote.title" placeholder="请输入标题"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="changeDialogVisible(false)">取 消</el-button>
            <el-button type="primary" @click="submitNote">确 定</el-button>
          </div>
        </el-dialog>
      </div>
    </NoteBar>
    <Note :current="current"></Note>
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
      addNoteVisible:false,
      addNote:{
        title:'',
      }
    }
  },
  computed: {
    noteList:{
      get(){
        return this.$store.state.noteList;
      },
      set(data){
        this.$store.commit('getNoteList', data);
      }
    }
  },
  created(){
      if(this.noteList.length!==0) {
        this.current = this.noteList[0];
      }
  },
  methods: {
    currentTitle(id) {
      this.current = this.noteList.filter(item=>item.id===id)[0];
    },
    changeDialogVisible(visible){
      this.addNoteVisible=visible;
    },
    submitNote(){
      this.addNoteVisible=false;
      this.createdNewNote();

    },
    async createdNewNote(){
      const res=await this.$http.post('/notebooks',{title:this.addNote.title});
      if(res.status!==200){
        return window.alert("添加笔记失败");
      }
      const {data: res2} = await this.$http.get('/notebooks');
      this.noteList=res2.data;
    },
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

    .addNewBtn {
      position: absolute;
      right: 0;
      color: gray;
      margin-right: 3px;
      padding: 1px;
    }
  }
}
</style>