<template>
  <div>
    <h1>微信消息主页</h1>
    <!-- 顶部导航条 -->
    <titebar :simg="require('../assets/search.png')" :aimg="require('../assets/add.png')" :msgs="msgs" :search="search" :add="add"></titebar>
    <!-- 面板 -->
    <mt-tab-container v-model="active" class="container">
      <mt-tab-container-item id="微信"></mt-tab-container-item>
      <mt-tab-container-item id="通讯录"></mt-tab-container-item>
      <mt-tab-container-item id="发现"></mt-tab-container-item>
      <mt-tab-container-item id="我"></mt-tab-container-item>
    </mt-tab-container>
    <!-- 底部导航条 -->
    <mt-tabbar fixed v-model="active" class="tabbar">
      <mt-tab-item id="微信">
        <img slot="icon" src="../assets/tabbar/message.png">
        微信
      </mt-tab-item>
      <mt-tab-item id="通讯录">
        <img slot="icon" src="../assets/tabbar/tongxunlu.png">
        通讯录
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img slot="icon" src="../assets/tabbar/faxian.png">
        发现
      </mt-tab-item>
      <mt-tab-item id="我">
        <img slot="icon" src="../assets/tabbar/wo.png">
        我
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
//引入顶部导航条子组件
import titebar from './views/TitleBar.vue'
export default {
  data(){
    return {
      msgs:"(16)",
      active:"微信"
    }
  },
  methods:{
    search(){
      this.$toast({
        message:"查找"
      });
    },
    add(){
      this.$toast({
        message:"其它"
      });
    }
  },
  components:{
    titebar
  }
}
</script>

<style scoped>
.container{
  width:100%;
  height:500px;
  background-color:rgba(0, 0, 0, 0.788);
}
.tabbar{
  color:#fff;
  background-color:black;
  z-index:999;
}
</style>