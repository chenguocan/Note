<template>
  <div class="noteBooks">
    <button class="addNewNote">+新建笔记本</button>
    <hr/>
    <h5 class="title">笔记本列表({{ noteList.length }})</h5>
    <div class="booksBox">
      <div class="noteBooksList">
        <ul>
          <li v-for="item in noteList" :key="item.id" @click="intoNote(item.id)">{{ item.title }}--------({{item.noteCounts}})</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
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
        const {data: res} = await this.$http.get('/notebooks');
        this.noteList = res.data;
        this.$store.commit('getNoteList', this.noteList);
      }
    },
    async getTrashList() {
      if (this.isLogin === true) {
        const {data: res} = await this.$http.get('/notes/trash');
        this.trashList = res.data;
        this.$store.commit('getTrashList', this.trashList);

      }
    },
    intoNote(id){
      this.$router.push({
        path:'/home/notesDetail',
        query:{
          id:id
        }
      });
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
  .title{
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
        }
      }
    }
  }
}
</style>