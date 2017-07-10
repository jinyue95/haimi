import Vue from 'vue'
import Router from 'vue-router'
import IndexTab from '@/view/home/children/IndexTab'
import ClassTab from '@/view/home/children/ClassTab'
import trademark from '@/view/class/children/trademark'
import classification from '@/view/class/children/classification'

import Home from '@/view/home' //首页
import Classify from '@/view/class' //分类
import Car from '@/view/car'  //购物车

import Main from '@/view/main' //我的  
import orderlist from '@/view/orderlist' //我的->全部
import all from '@/view/orderlist/children/all'
import willget from '@/view/orderlist/children/willget'
import willsend from '@/view/orderlist/children/willsend'
import willpay from '@/view/orderlist/children/willpay'
import refund from '@/view/orderlist/children/refund'
import pingjia from '@/view/pingjia'  //我的 评价


import Collectbaby from '@/view/Collectbaby' //我的->收藏宝贝
import favorable from '@/view/favorable' //我的->红包优惠劵
import usable from '@/view/favorable/children/usable' //我的->红包优惠劵->可用
import beuse from '@/view/favorable/children/beuse' //我的->红包优惠劵->已使用
import expired from '@/view/favorable/children/expired' //我的->红包优惠劵->未使用

import footprint from '@/view/footprint' //我的->足迹
import address from '@/view/address' //我的->收货地址
import store from '@/view/store' //我的->积分商城
import binding from '@/view/binding' //我的->绑定手机

import ShopDetail from '@/view/shopDetail' //详情页
import Login from '@/view/login' //登录
import Search from '@/view/search' //搜索页

Vue.use(Router)
export default new Router({
  mode:'history',
  scrollBehavior(savePosition){
    if(savePosition){
      return savePosition
     }else{
      return{x:0,y:0}
    }
  },
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:'/home/index/2'
    },
    { /*主页路由*/
      path: '/home',
      redirect:'/home/index/2',
      name: 'Home',
      component: Home,
      children:[ /*主页子路由*/
        {
          path: 'index/:id',
          component: IndexTab,
        },
        {
          path: 'class/:id',
          
          component: ClassTab

        }
      ]
    },
    { /*分类页路由*/
  	  path: '/classify',
      name: 'classify',
  	  redirect:'/classify/classification',
      component: Classify,
      children:[  /*分类页子路由*/
        {
          path: 'trademark',
          component: trademark
        },
        {
          path: 'classification',
          component: classification
        }
      ]
    },
    {
      path: '/car',
      name: 'car',
      component: Car
      
    },
    {
      path: '/main',
      name: 'main',
      component: Main,
      beforeEnter:(to,from,next) =>{
        var user=window.localStorage["userInfor"];
        if(!user){
          next({path:'/login',query:{"to":to.name}});
        }else{
          next();
        }
      }
    },
    {
      path: '/Collectbaby',
      name: 'Collectbaby',
      component: Collectbaby 
    },
    {
      path: '/favorable',
      name: 'favorable',
      redirect:'/favorable/usable',
      component: favorable,  

      children:[  
        {
          path: 'usable',
          component: usable
        },
        {
          path: 'beuse',
          component: beuse
        },
        {
          path: 'expired',
          component: expired
        }
      ]
    },
    {
      path: '/footprint',
      name: 'footprint',
      component: footprint 
    },
    {
      path: '/store',
      name: 'store',
      component: store 
    },
    {
      path: '/address',
      name: 'address',
      component: address 
    },
    {
      path: '/binding',
      name: 'binding',
      component: binding 
    },
    {
      path: '/orderlist',
      name: 'orderlist',
      redirect:'/orderlist/all',
      component: orderlist,
      children:[  
        {
          path: 'all',
          component: all
        },
        {
          path: 'willget',
          component: willget
        },
        {
          path: 'willsend',
          component: willsend
        },
        {
          path: 'willpay',
          component: willpay
        },
        {
          path: 'refund',
          component: refund
        }
      ]
    },
    {
      path: '/pingjia',
      name: 'pingjia',
      component: pingjia
    },
    {
      path: '/login',
      params: {toUrl:''}, 
      component: Login
    },
    {
      path: '/shopDetail/:ProductID',
      name: 'shopDetail',
      component: ShopDetail
    },
    { /*搜索页*/
      path: '/search',
      name: 'search',
      component: Search
    }
  ]
})

