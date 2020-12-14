<template>
  <div class="titebar">
    <div class="left">微信{{msgs}}</div>
    <div class="right">
      <img :src="simg" @click="search"/>
      <img :src="aimg" @click="add"/>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    msgs:{default:''}, //消息数量
    simg:{default:""}, //搜索图标
    aimg:{default:""}, //加号图标
    //事件函数
    search:{type:Function}, //查找函数
    add:{type:Function}, //其它函数

  }
}
</script>

<style scoped>
.titebar{
  width:100%;
  overflow:hidden;
  line-height:50px;
  background-color:black;
  z-index:999;
}
.titebar .left{
  width:50%;
  color:#fff;
  float:left;
  font-size:18px;
  text-align:left;
  box-sizing:border-box;
  padding-left:50px;
}
.titebar .right{
  width:50%;
  float:right;
  text-align:right;
  box-sizing:border-box;
  padding-right:30px;
}
.titebar .right>img{
  width:30px;
  vertical-align:middle;
  margin-left:10px;
}
</style>