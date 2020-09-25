<template>
  <div class="note">
    <div class="header">
      <div class="date">
        <span>创建时间:{{current===''?'':current[0].createdAt}}</span>
        <span>更新时间:{{current===''?'':current[0].updatedAt}}</span>
      </div>
    </div>
    <div class="main">
        <span>{{current===''?'选择标题':current[0].title}}</span>
        <textarea   class="message" v-model="message" maxlength="8000"></textarea>
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
      message:'',
    }
  },
  methods:{
    async getBook(){
      const {data:res}=await this.$http.get('/notes/from/'+this.current[0].id);
      console.log(res.data);
      if(res.data.length===0){
        this.message='';
        return;
      }
      console.log('length='+res.data.length);
      const currentIndex=res.data.length;
      this.message=res.data[currentIndex-1].content;
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
  span{
    padding:0 20px 0 20px;
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
    .message{
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