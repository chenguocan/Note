<template>
  <div class="note">
    <div class="header">
      <div class="date">
        <span>创建时间:{{ message === '' ? '' : message.createdAt }}</span>
        <span>更新时间:{{ message === '' ? '' : message.updatedAt }}</span>
        <i class="el-icon-delete-solid delete" @click="deleteNote"></i>
      </div>
    </div>
    <div class="main">
      <label><input type="text" class="title" v-model="message.title" @input="changeInput" placeholder="选择标题"/></label>
      <textarea class="content" v-model="message.content" @input="changeInput" maxlength="8000"></textarea>
    </div>
  </div>
</template>

<script>
import Bus from "@/event/Bus";

export default {
  name: "Note",
  props: ['current'],
  data() {
    return {
      message: '',
      changeMessage: {
        title: '',
        content: '',
      },
    }
  },
  methods: {
    async deleteNote() {
      console.log(this.message);
      const res = await this.$http.delete('/notes/' + this.message.id);
      if (res.status === 200) {
        window.alert('删除成功');
      }
    },
    async submitUpdate(id, messageInfo) {
      const res = await this.$http.patch('/notes/' + id, messageInfo)
      if(res.status!==200){
        return window.alert('输入信息失败');
      }
    },
    changeInput() {
      this.changeMessage.title = this.message.title;
      this.changeMessage.content = this.message.content;
      this.submitUpdate(this.message.id,this.changeMessage);
    }
  },
  mounted() {
    Bus.$on('currentNote', function (val) {
      this.message = val[0];
      Bus.$forceUpdate();
    }.bind(this));
  },
  beforeDestroy() {
    Bus.$off('currentNote');
  },
}
</script>

<style lang="scss" scoped>
.note {
  height: 100%;
  width: 100%;

  .title, span {
    padding: 0 20px 0 20px;
  }

  .title {
    font-size: 16px;
    color: #36292f;
  }

  .header {
    min-height: 30px;
    border-bottom: 1px solid gray;

    .date {
      display: flex;
      text-align: left;
      font-size: 10px;
      color: gray;
      line-height: 30px;
      position: relative;
      flex-wrap: nowrap;

      .delete {

        right: 30px;
        position: absolute;
        line-height: inherit;
        cursor: pointer;
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