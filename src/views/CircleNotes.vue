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
  data(){
    return{
      trashList:[],
    }
  },
  methods:{
   async getTrashList(){
      const {data:res}=await this.$http.get("/notes/trash");
      console.log(res.data);
      this.trashList=res.data;
    }
  },
  created() {
    this.getTrashList();
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