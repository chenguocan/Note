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
          <li v-for="item in trashList" class="dataMessage" :key="item.id" @click="currentId(item.id)">
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
@import "~@/assets/styles/noteBar.scss";

</style>