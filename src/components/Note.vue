<template>
  <div class="note">
    <div class="header">
      <div class="date">
        <span>创建时间:{{current===''?'':current[0].createdAt}}</span>
        <span>更新时间:{{current===''?'':current[0].updatedAt}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Bus from "@/event/Bus";
export default {
  name: "Note",
  data(){
    return{
      current:'',
    }
  },
  methods:{

  },
  mounted() {
    Bus.$on('currentNote',function(val){//监听first组件的txt事件
      this.current=val;
      Bus.$forceUpdate();
      console.log(this.current);
    }.bind(this));
  },
  beforeDestroy() {
    Bus.$off('txt');
  }
}
</script>

<style lang="scss" scoped>
.note {
  height: 100%;
  width: 100%;

  .header {
    height: 30px;
    border-bottom: 1px solid gray;
    .date{
      text-align: left;
      font-size: 10px;
      color: gray;
      line-height: 30px;
      span{
        padding:0 20px 0 20px;
      }
    }
  }
}
</style>