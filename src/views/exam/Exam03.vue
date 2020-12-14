<template>
  <main>
    Exam03.vue
    <!--表单输入框 用户名-->
    <mt-field label="用户名" placeholder="请输入用户名" :attr="{maxlength:10}" v-model="uname"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" :attr="{maxlength:10}" v-model="upwd" type="password"></mt-field>
    <mt-field label="年龄" placeholder="请输入年龄" :attr="{maxlength:10}" v-model="age" type="number"></mt-field>
    <mt-button size="large" @click="reg">注册</mt-button>
  </main>
</template>

<script>
export default {
  data(){
    return {
      uname:'',
      upwd:'',
      age:''
    }
  },
  methods:{
    reg(){
      //验证用户输入表单
      //正则表达式1 用户名和密码 3~12位 字母数字
      var reg1 = /^\w{3,12}$/;
      //正则表达式2 年龄 2位 数字
      var reg2 = /^\d{2}$/;
      //验证各项 : uname upwd age
      if(!reg1.test(this.uname)){
        this.$messagebox("用户名格式错误","3~12位 字母数字");
        return;
      }else if(!reg1.test(this.upwd)){
        this.$messagebox("密码格式错误","3~12位 字母数字");
        return;
      }else if(!reg2.test(this.age)){
        this.$toast({
          message:"年龄:2位数字"
        });
        return;
      }else{
        this.$toast({
          message:"注册成功",
          iconClass:"iconfont icon-chenggong1"
        });
      }
    }
  }
}
</script>

<style scoped>

</style>