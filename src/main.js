import Vue from 'vue'
//从App.vue文件中引入根组件的HTML内容
import App from './App.vue'
import router from './router'
import store from './store'
import MH from "./components/MyHeader"
import axios from "axios"

axios.defaults.baseURL="http://xzserver.applinzi.com"
Vue.prototype.axios=axios;

Vue.config.productionTip = false
Vue.component("my-header", MH);

//引入第三方组件库 mint-ui
import MintUI from 'mint-ui'
//引入mint-ui样式文件
import "mint-ui/lib/style.css"
//将mint-ui 注册vue
Vue.use(MintUI);

//引入下载的图标字体文件
import './assets/font/font_xm4bhrxbls/iconfont.css'


new Vue({
  router,
  store,
  //读取App组件中的HTML内容
  render: h => h(App)
}).$mount('#app')//用App中的HTML内容代替index.html中空的<div id="#app">
