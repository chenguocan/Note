<template>
  <div class="myNotes">
    <slot></slot>
    <div class="titleBar">
      <div class="updateDate">
        <div>
          <span>更新时间</span>
          <span>标题</span>
        </div>
        <ul>
          <li v-for="item in dateList" :key="item.id" @click="currentId(item.id)">
            <div class="dataMessage">{{ item.updatedAt }} </div>
            <div class="dataMessage">{{ item.title }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Bus from "@/event/Bus";
import dayjs from "dayjs";

export default {
  name: 'NoteBar',
  props: ['currentList'],
  data(){
    return{
      dateList:[],
      currentNote:[],
    }
  },
  methods:{
    currentId(id){
      this.currentNote=this.dateList.filter((item)=>item.id===id);
      Bus.$emit('currentNote',this.currentNote);
    },
    async getCurrentNote(id){
      const {data:res}=await this.$http.get('/notes/from/'+id);
      this.dateList=res.data;
      this.formatTime();
    },
    formatTime(){
      for(let i=0;i<this.dateList.length;i++){
        this.dateList[i].createdAt=dayjs(this.dateList[i].createdAt).format('YYYY-MM-DD');
        this.dateList[i].updatedAt=dayjs(this.dateList[i].updatedAt).format('YYYY-MM-DD');
      }
    }
  },
  watch:{
    currentList(){
      this.getCurrentNote(this.currentList.id);
    },
  },
  created(){
    if(this.currentList.id) {
      this.getCurrentNote(this.currentList.id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/valiable.scss";

.myNotes {
  height: 100%;
  width: 400px;
  border: 1px solid $line-color;
  background: rgb(238, 238, 238);

  .titleBar {
    display: flex;
    justify-content: flex-start;

    .updateDate {
      display: flex;
      flex-direction: column;
      text-align: left;
      width: 100%;
      span {
        display: inline-block;
        width: 50%;
        margin-bottom: 10px;
      }
      ul {
        li {
          .dataMessage {
            display: inline-block;
            width: 50%;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
          }
        }
      }
    }
  }
}
</style>