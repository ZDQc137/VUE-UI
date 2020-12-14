<template>
  <div>
    <h1>Exam06.vue</h1>
    <h2>面板</h2>
    <!-- 面板 -->
    <mt-tab-container v-model="active">
      <mt-tab-container-item id="tab1">
        美食子面板
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        购物子面板
      </mt-tab-container-item>
      <mt-tab-container-item id="tab3">
        休闲子面板
      </mt-tab-container-item>
    </mt-tab-container>
    <mt-button @click="m">美食</mt-button>
    <mt-button @click="m">购物</mt-button>
    <mt-button @click="m">休闲</mt-button>
  </div>
</template>

<script>
export default {
  data(){
    return {
      active:"tab1"
    }
  },
  methods:{
    m(e){
      console.log(e.target);
      if(e.target.innerHTML=="美食" && this.active!="tab1"){
        this.active="tab1";
      }else if(e.target.innerHTML=="购物" && this.active!="tab2"){
        this.active="tab2";
      }else if(e.target.innerHTML=="休闲" && this.active!="tab3"){
        this.active="tab3";
      }
    }
  }
}
</script>