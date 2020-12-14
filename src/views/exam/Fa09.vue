<template>
  <div>
    <h1>Fa09.vue 父组件</h1>
    <mt-field label="输入消息" placeholder="请输入消息" v-model="msg"></mt-field>
    <!-- require()函数 加载资源/图片 -->
    <sub09 :msg="msg" :fk="fk" :image="require('../../assets/index.png')"></sub09>
  </div>
</template>

<script>
import Sub09 from './Sub09.vue'
export default {
  data(){
    return {
      msg:''
    }
  },
  methods:{
    fk(){
      this.$toast({
        message:"父组件创建函数 传入自组件中",
        iconClass:"iconfont icon-chenggong2"
      });
    }
  }
  ,
  components:{
    sub09:Sub09
  }
}
</script>