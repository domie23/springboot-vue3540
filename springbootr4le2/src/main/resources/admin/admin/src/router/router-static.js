import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import cheliangyunying from '@/views/modules/cheliangyunying/list'
    import jiediaocheliang from '@/views/modules/jiediaocheliang/list'
    import baoxiaoshenqing from '@/views/modules/baoxiaoshenqing/list'
    import gongzuo from '@/views/modules/gongzuo/list'
    import jiashiyuan from '@/views/modules/jiashiyuan/list'
    import cheliangxinxi from '@/views/modules/cheliangxinxi/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/cheliangyunying',
        name: '车辆运营',
        component: cheliangyunying
      }
      ,{
	path: '/jiediaocheliang',
        name: '借调车辆',
        component: jiediaocheliang
      }
      ,{
	path: '/baoxiaoshenqing',
        name: '报销申请',
        component: baoxiaoshenqing
      }
      ,{
	path: '/gongzuo',
        name: '工作',
        component: gongzuo
      }
      ,{
	path: '/jiashiyuan',
        name: '驾驶员',
        component: jiashiyuan
      }
      ,{
	path: '/cheliangxinxi',
        name: '车辆信息',
        component: cheliangxinxi
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
