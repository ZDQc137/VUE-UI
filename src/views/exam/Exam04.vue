<template>
  <main>
    <h1>Exam04.vue</h1>
    <h2>开关组件:移动端项目使用</h2>
    <mt-switch v-model="val1" @change="changeval">
      开关选项
    </mt-switch>
    <h2>单选列表:移动端使用</h2>
    <mt-radio title="单选列表" :options="['a','b','c']" v-model="val2"></mt-radio>
    <mt-radio title="东哥今年多大了" v-model="val3" :options="options"></mt-radio>
    <h2>复选框列表</h2>
    <mt-checklist title="复选框" v-model="val4" :options="['a选项','b选项','c选项']"></mt-checklist>
  </main>
</template>

<script>
export default {
  data(){
    return { //原始状态值
      //开关
      val1:false,
      //单选框
      val2:"",
      val3:"",
      options:[
        //label: 显示到列表中的  value:真正选择的值 取出的值
        {label:"去年",value:"24"},
        {label:"今年",value:"2000"},
        {label:"明年",value:"3000"},
      ],
      //复选框
      val4:[] //保存复选框选中的多个值
    }
  },
  methods:{
    //开关
    changeval(){
      console.log(this.val1);
    }
  },
  watch:{
    //单选框
    val2(){
      console.log(this.val2);
    },
    val3(){
      console.log(this.val3);
    },
    //复选框
    val4(){
      console.log(this.val4);
    }
  }
}
/*作业
  1.复习vue脚手架使用
  2.预习tab-container面板 tabbar底部选项卡
    http://mint-ui.github.io/docs/#zh-cn2
  3.复习vue父子组件参数传递
*/
</script>

<style>
</style>
