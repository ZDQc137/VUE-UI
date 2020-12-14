<template>
  <main>
    <h1>Exam02</h1>
    <button @click="remove">删除</button>
    <button @click="alt1">显示弹出式提示框</button>
    <button @click="alt2">显示确认框</button>
    <button @click="inp">输入框</button>
  </main>
</template>

<script>
export default {
  methods:{
    remove(){
      this.$toast({
        message:"删除成功", //消息内容
        position:"top", //消息位置
        iconClass:"iconfont icon-chenggong2" //消息图标
      });
    },
    alt1(){
      //显示提示框
      //this.$messagebox("messagebox","数据加载成功");
      this.$messagebox("","数据加载成功");
    },
    alt2(){
      //确认提示框
      console.log(1);
      this.$messagebox//异步:效率高 无序
                      //同步:效率低 有序
      .confirm("是否删除指定的数据")//确认内容
      .then(res=>{ //确认执行成功后回调用
        console.log(res);
      }).catch(err=>{ //取消后调用函数
        console.log(err);
      })
      //是异步执行
    },
    inp(){
      //输入交互框
      this.$messagebox.prompt("请输入卡号")
      .then((value,action)=>{ //输入结果回调函数
        console.log(value); //输入内容
        // consol.e.log(action); //选项
      }).catch(err=>{
        console.log(err);
      })
    }
  }
}
</script>