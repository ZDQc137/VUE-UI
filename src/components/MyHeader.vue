<template>
  <div id="nav">
  <!--将App.vue中<router-view>上方的div剪切到这里-->
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> &nbsp;
    <router-link to="/exam1">Exam1</router-link> &nbsp;
    <router-link to="/exam2">Exam2</router-link> &nbsp;
    <router-link to="/exam3">Exam3</router-link> &nbsp;
    <router-link to="/exam4">Exam4</router-link> &nbsp;
    <router-link to="/exam5">Exam5</router-link> &nbsp;
    <br>
    <router-link to="/exam6">Exam6</router-link> &nbsp;
    <router-link to="/exam7">Exam7</router-link> &nbsp;
    <router-link to="/fa08">Fa08</router-link> &nbsp;
    <router-link to="/fa09">Fa09</router-link> &nbsp;
    <br>
    <router-link to="/wechat">微信消息</router-link> &nbsp;
  </div>
</template>
<!--如果组件对象中没有js内容，则<script>部分可省略！-->
<!--<script>
export default {
  
}
</script>-->

<style>
/*将App.vue中<style>里#nav开头的所有样式剪切到这里*/
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>