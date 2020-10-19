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
          <li v-for="(item,index) in dateList" class="dataMessage" :class="{active:index===current}" :key="item.id"
              @click="currentId(item.id,index)">
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
  name: 'NoteBar',
  props: ['currentList'],
  data() {
    return {
      currentNote: [],
      current: 0,
    }
  },
  computed: {
    notesList() {
      return this.$store.state.notesList;
    },
    dateList: {
      get() {
        return this.notesList;
      },
      set(data) {
        return data;
      }
    },

  },
  methods: {
    currentId(id, index) {
      this.current = index;
      this.currentNote = this.dateList.filter((item) => item.id === id);
      Bus.$emit('currentNote', this.currentNote);
    },
    async getCurrentNote(id) {
      const {data: res} = await this.$api.getNotes(id);
      this.$store.commit('getNotesList', res.data);
      this.dateList = this.notesList;
    },
  },
  mounted() {
    Bus.$on('update', function (val) {
      if (val === 'update') {
        this.current = 0;
      }
      Bus.$forceUpdate();
    }.bind(this));
  },
  beforeDestroy() {
    Bus.$off('update');
  },
  watch: {
    currentList() {
      this.getCurrentNote(this.currentList.id);
    },
  },
  created() {
    if (this.currentList.id) {
      this.getCurrentNote(this.currentList.id);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "~@/assets/styles/valiable.scss";
@import "~@/assets/styles/noteBar.scss";
</style>