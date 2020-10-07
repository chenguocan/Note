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
          <li v-for="(item,index) in dateList" class="dataMessage" :class="{active:index===current}" :key="item.id" @click="currentId(item.id,index)">
           <span class="title"> {{ item.updatedAt | formateData(item.updatedAt) }} </span> <span class="title">{{item.title}}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="js">
import Bus from "@/event/Bus";

export default {
  name: 'NoteBar',
  props: ['currentList'],
  data(){
    return{
      currentNote:[],
      current:false,
    }
  },
  computed:{
    notesList(){
      return this.$store.state.notesList;
    },
    dateList:{
      get() {
        return this.notesList;
      },
      set(data){
        return data;
      }
    }
  },
  methods:{
    currentId(id,index){
      this.current=index;
      this.currentNote=this.dateList.filter((item)=>item.id===id);
      Bus.$emit('currentNote',this.currentNote);
    },
    async getCurrentNote(id){
      const {data:res}=await this.$api.getNotes(id);
      this.$store.commit('getNotesList',res.data);
      this.dateList=this.notesList;
    },
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
span {
  display: inline-block;
  width: 50%;
}
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
      ul {
        .dataMessage{
          display: flex;
          white-space: nowrap;
          justify-content: space-between;
          .title{
            background: inherit;
            text-overflow: ellipsis;
            overflow: hidden;
          }
          &.active{
            background: red;
          }
        }
        :nth-child(odd) {
          background: $line-color;
        }
      }
    }
  }
}
</style>