<template>
  <div class="note">
    <div class="header">
      <div class="date">
        <span>创建时间:{{message===''?'':message.createdAt}}</span>
        <span>更新时间:{{message===''?'':message.updatedAt}}</span>
        <button class="delete clearfix" @click="deleteNote">删除</button>
      </div>
    </div>
    <div class="main">
        <label><input type="text" class="title" v-model="message.title" placeholder="选择标题"/></label>
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
      noteList:'',
      message:'',
    }
  },
  methods:{
    async deleteNote(){
      if(this.message.content!==''){
        return window.alert('需要清空笔记内容才能删除');
      }
      const res=await this.$http.delete('/notebooks/'+this.current[0].id).catch(()=>{
        return window.alert("删除失败,回收站内还有该笔记本");
      });
      if(res.status===200){
        window.alert('删除成功');
        const {data: res} = await this.$http.get('/notebooks');
        this.noteList = res.data;
        this.$store.commit('getNoteList', this.noteList);
      }else{
        return window.alert("删除失败,回收站内还有该笔记本");
      }
    }
  },
  mounted() {
    Bus.$on('currentNote',function(val){
      this.message=val[0];
      console.log(this.message);
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
    color:#36292f;
  }
  .header {
    min-height: 30px;
    border-bottom: 1px solid gray;
    .date{
      display: flex;
      text-align: left;
      font-size: 10px;
      color: gray;
      line-height: 30px;
      position: relative;
      flex-wrap: nowrap;
      .delete{
        right: 30px;
        position: absolute;
        line-height: inherit;
      }
    }
  }
  .main {
    padding: 30px 20px;
    font-size: 20px;
    text-align: left;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
      .content {
        overflow: hidden;
        border: none;
        outline: none;
        margin: 30px;
        height: 500px;
        resize: none;
    }
  }
}
</style>