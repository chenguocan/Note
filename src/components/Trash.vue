<template>
  <div class="note">
    <div class="header">
      <div class="date">
        <div class="noteDetail">
          <span>创建时间:{{ current === '' ? '' : current.createdAt | formateData(current.createdAt) }}</span>
          <span>更新时间:{{ current === '' ? '' : current.updatedAt | formateData(current.updatedAt) }}</span>
          <span>所属笔记本:{{ currentNote === '' ? '' : currentNote.title }}
          </span>
        </div>
        <div class="btns">
          <button @click="deleteNote(current.id)">彻底删除</button>
          <button @click="revertNote(current.id)">恢复</button>
        </div>
      </div>
    </div>
    <div class="main">
      <label><input type="text" class="title" v-model="current.title" placeholder="选择标题" readonly="readonly"/></label>
      <textarea class="content" readonly="readonly" v-model="current.content" maxlength="8000"></textarea>
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
      currentNote: '',
    }
  },
  computed: {
    noteList() {
      return this.$store.state.noteList;
    }
  },
  mounted() {
    Bus.$on('xxx', function (val) {
      this.current = val[0];
      this.searchNote(this.current.notebookId);
      Bus.$forceUpdate();
    }.bind(this))
  },
  beforeDestroy() {
    Bus.$off('xxx');
  },
  methods: {
    async deleteNote(id) {
      const res = await this.$api.deleteTrash(id);
      if (res.status === 200) {
        window.alert('彻底删除成功');
      }
      await this.getTrash();
    },
    async getTrash() {
      const res = await this.$api.getTrash();
      if (res.status !== 200) {
        //this.trashList = res2;
        return window.alert('删除失败');
      }
      this.$store.commit('getTrashList', res.data.data);
    },
    async revertNote(id) {
      const res = await this.$api.revertNote(id);
      if (res.status !== 200) {
        window.alert('恢复失败');
      }
      await this.getTrash();

    },
    searchNote(id) {
      this.currentNote = this.noteList.filter(item => item.id === id)[0];
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
          padding: 0 5px;
          box-shadow: 0 1px 2px lightgray;
        }
      }

      span {
        padding: 0 20px 0 20px;
      }
    }
  }
}
</style>