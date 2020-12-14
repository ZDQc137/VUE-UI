<template>
  <div>
    <h2>Sub09.vue 子组件</h2>
    <!-- 显示父组件数据 -->
    <!-- 为h3绑定单击事件处理函数 由父组件传入 -->
    <h3 @click="fk">{{msg}}</h3>
    <!-- 接收图片 -->
    <img :src="image"/>
  </div>
</template>

<script>
export default {
  props:{ //声明接受父组件数据
    msg:{default:''}, //msg : 默认空字符串
    fk:{type:Function}, //type接受类型
    image:{default:''} //图片路径
  }
}
</script>

<style scoped>

</style>