import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Exam01 from '../views/exam/Exam01.vue'
import Exam02 from '../views/exam/Exam02.vue'
import Exam03 from '../views/exam/Exam03.vue'
import Exam04 from '../views/exam/Exam04.vue'
import Exam05 from '../views/exam/Exam05.vue'
import Exam06 from '../views/exam/Exam06.vue'
import Exam07 from '../views/exam/Exam07.vue'
import Fa08 from '../views/exam/Fa08.vue'
import Fa09 from '../views/exam/Fa09.vue'
import WeChat from '../随便创建的weChat/WeChat.vue'
//因为首屏暂时用不到About页面，所以不要过早引入
//如果不引入，打包时，就不会将About页面的内容打入App.js中
// import About from "../views/About.vue"

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Home },
  // { path:"/about", component:About }
  { //这里是懒加载，暂时不要问，明天讲
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    /*
    function(){
      return import '../views/About.vue'
    }
    */
  },
  {name:'exam1',path:'/exam1',component: Exam01},
  {name:"exam2",path:"/exam2",component: Exam02},
  {name:"exam3",path:"/exam3",component: Exam03},
  {name:"exam4",path:"/exam4",component: Exam04},
  {name:"exam5",path:"/exam5",component: Exam05},
  {name:"exam6",path:"/exam6",component: Exam06},
  {name:"exam7",path:"/exam7",component: Exam07},
  {name:"fa08",path:"/fa08",component: Fa08},
  {name:"fa09",path:"/fa09",component: Fa09},
  {name:"wechat",path:"/wechat",component: WeChat},
]

const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
