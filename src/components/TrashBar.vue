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
          <li v-for="item in trashList" :key="item.id" @click="currentId(item.id)">
            {{ item.updatedAt | formateData(item.updatedAt) }} {{ item.title }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="js">

import Bus from "@/event/Bus";

export default {
  name: 'TrashBar',
  data(){
    return{
      current:'',
    }
  },
  computed:{
    trashList(){
      return this.$store.state.trashList
    }
  },
  created(){

  },
  methods:{
    currentId(id){
      this.current=this.trashList.filter(item=>item.id===id);
      Bus.$emit('xxx',this.current);
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
  overflow: auto;
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
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>