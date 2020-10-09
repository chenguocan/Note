<template>
  <div class="avatar">
    <p class="name">{{username}}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Avatar',
  data(){
    return{
      username:'',
    }
  },
  computed:{
    isLogin(){
      return this.$store.state.isLogin;
    }
  },
  created() {
    if(this.isLogin) {
      this.username=sessionStorage.getItem('username')[0].toUpperCase();
    }
  }
};
</script>

<style lang="scss" scoped>
.avatar{
  text-align: center;
  line-height: 30px;
  color:white;
  margin-top:10px;
  height: 30px;
  width: 30px;
  background: rgb(241, 183, 52);
  border-radius: 50%;
  @media (max-width: 500px){
    margin-top: 0;
    margin-left: 10px;
  }
}
</style>