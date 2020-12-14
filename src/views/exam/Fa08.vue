<template>
  <div>
    <h1>父组件Fa08.vue</h1>

    <sub08 :detail="detail"></sub08>
  </div>
</template>

<script>
//引入当前组件的自组件
import sub08 from './Sub08.vue'
export default {
  data(){
    return {
      detail:''
    }
  },
  //注册子组件
  components:{
    sub08
  }
}
</script>