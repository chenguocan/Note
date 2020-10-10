<template>
  <div class="note">
    <div class="header">
      <div class="date">
        <span>创建时间:{{ message === '' ? '' : message.createdAt | formateData(message.createdAt) }}</span>
        <span>更新时间:{{ message === '' ? '' : message.updatedAt | formateData(message.updatedAt) }}</span>
        <i class="el-icon-delete-solid delete" @click="deleteNote"></i>
      </div>
    </div>
    <div class="main">
      <label><input type="text" class="title" v-model="message.title" @input="changeInput" placeholder="选择标题"/></label>
      <textarea class="content" v-model="message.content" @input="changeInput" maxlength="8000"
                placeholder="输入内容"></textarea>
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
  computed: {
    notesList: {
      get() {
        return this.$store.state.notesList;
      },
      set(data) {
        return data;
      }
    }
  },
  methods: {
    async deleteNote() {
      const res = await this.$api.deleteNotes(this.message.id);
      if (res.status === 200) {
        window.alert('删除成功');
      }
      const {data: res2} = await this.$api.getNotes(this.message.notebookId);
      this.notesList = res2.data;
      this.$store.commit('getNotesList', res2.data);
    },
    async submitUpdate(id, messageInfo) {
      const res = await this.$api.updateNotes(id, messageInfo);
      if (res.status !== 200) {
        return window.alert('输入信息失败');
      }
    },
    changeInput() {
      this.changeMessage.title = this.message.title;
      this.changeMessage.content = this.message.content;
      this.submitUpdate(this.message.id, this.changeMessage);
    },
    async getCurrentNote(id) {
      const {data: res} = await this.$api.getNotes(id);
      if (res.data.length !== 0) {
        this.message = res.data[0];
      } else {
        this.message = '';
      }
    },
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
  watch: {
    current() {
      this.getCurrentNote(this.current.id);
    }
  }
}
</script>

<style lang="scss" scoped>
.note {
  @import '~@/assets/styles/mainStyle.scss';
  height: 100%;
  width: 100%;

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
}
</style>