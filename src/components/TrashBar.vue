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
          <li v-for="(item,index) in trashList" class="dataMessage"  :class="{active:index===current}" :key="item.id" @click="currentId(item.id,index)">
            <span class="title"> {{ item.updatedAt | formateData(item.updatedAt) }} </span>
            <span class="title"> {{ item.title }}</span>
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
      currentNote:'',
      current:0,
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
    currentId(id,index){
      this.current = index;
      this.currentNote=this.trashList.filter(item=>item.id===id);
      Bus.$emit('xxx',this.currentNote);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/valiable.scss";
@import "~@/assets/styles/noteBar.scss";

</style>