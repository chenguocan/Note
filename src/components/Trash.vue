<template>
  <div class="note">
    <div class="header">
      <div class="date">
        <div class="noteDetail">
          <span>创建时间:{{ current === '' ? '' : current.createdAt | formateData(current.createdAt) }}</span>
          <span>更新时间:{{ current === '' ? '' : current.updatedAt | formateData(current.updatedAt) }}</span>
        </div>
        <div class="btns">
          <button @click="deleteNote(current.id)">彻底删除</button>
          <button @click="revertNote(current.id)">恢复</button>
        </div>
      </div>
    </div>
    <div class="main">
      <label><input type="text" class="title"  placeholder="选择标题"/></label>
      <textarea class="content"  maxlength="8000"></textarea>
    </div>
  </div>
</template>

<script>
import Bus from "@/event/Bus";

export default {
  name: "Note",
  data() {
    return {
      current: '',
    }
  },
  mounted() {
    Bus.$on('xxx', function (val) {
      this.current = val[0];
      Bus.$forceUpdate();
    }.bind(this))
  },
  beforeDestroy() {
    Bus.$off('xxx');
  },
  methods:{
    deleteNote(id){
      console.log(id);
    },
    revertNote(id){
      console.log(id);
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/valiable.scss";

.note {
  height: 100%;
  width: 100%;
  @import '~@/assets/styles/mainStyle.scss';
  .header {
    height: 30px;
    border-bottom: 1px solid gray;

    .date {
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      color: gray;
      line-height: 30px;

      .btns {
        button {
          color: gray;
          border: 1px solid $line-color;
          margin-right: 15px;
          font-size: 10px;
          padding:0 5px;
          box-shadow: 0 1px 2px lightgray ;
        }
      }

      span {
        padding: 0 20px 0 20px;
      }
    }
  }
}
</style>