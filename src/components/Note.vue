<template>
  <div class="note">
    <div class="header">
      <div class="date">
        <span>创建时间:{{current===''?'':current[0].createdAt}}</span>
        <span>更新时间:{{current===''?'':current[0].updatedAt}}</span>
      </div>
    </div>
    <div class="main">
        <input type="text" class="title" v-model="message.title" placeholder="选择标题"/>
        <textarea   class="content" v-model="message.content" maxlength="8000"></textarea>
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
      message:{
        title:'',
        content:'',
      },
    }
  },
  methods:{
    async getBook(){
      const {data:res}=await this.$http.get('/notes/from/'+this.current[0].id);
      this.message.title=this.current[0].title;
      if(res.data.length===0){
        this.message.content='';
        return;
      }
      const currentIndex=res.data.length;
      this.message.content=res.data[currentIndex-1].content;
    }
  },
  mounted() {
    Bus.$on('currentNote',function(val){
      this.current=val;
      this.getBook();
      Bus.$forceUpdate();
    }.bind(this));
  },
  beforeDestroy() {
    Bus.$off('currentNote');
  }
}
</script>

<style lang="scss" scoped>
.note {
  height: 100%;
  width: 100%;
  .title,span{
    padding:0 20px 0 20px;
  }
  .title{
    font-size: 16px;
    color:gray;
  }
  .header {
    height: 30px;
    border-bottom: 1px solid gray;
    .date{
      text-align: left;
      font-size: 10px;
      color: gray;
      line-height: 30px;
    }
  }
  .main{
    padding:30px 20px;
    font-size: 20px;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    .content{
      text-indent:32px;
      overflow: hidden;
      border: none;
      outline: none;
      margin: 30px;
      padding: 20px;
      height: 500px;
      resize: none;
    }
  }
}
</style>