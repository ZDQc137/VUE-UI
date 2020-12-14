<template>
  <div>
    <h1>Exam07.vue</h1>
    <h2>面板配合底部导航条</h2>
    <!-- 父面板 -->
    <mt-tab-container v-model="active">
      <!-- 子面板 -->
      <mt-tab-container-item id="tab1">首页子面板</mt-tab-container-item>
      <mt-tab-container-item id="tab2">购物车子面板</mt-tab-container-item>
    </mt-tab-container>

    <h2>底部导航栏</h2>
    <mt-tabbar fixed v-model="active">
      <mt-tab-item id="tab1">
        <!-- 为图片添加属性: 插槽 -->
        <img slot="icon" src="../../assets/car.png"/>
        首页
      </mt-tab-item>
      <mt-tab-item id="tab2">
        <img slot="icon" src="../../assets/index.png"/>
        购物车
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active:'tab1'
    }
  },
  watch:{
    active(){
      console.log(this.active);
    }
  }
}
</script>