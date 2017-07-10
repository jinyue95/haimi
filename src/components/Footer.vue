<template>
  <nav class="hello">
    
      <dl>
        <router-link v-for="(item,index) in navList" :to="item.Link" active-class="active">
        <dt><span :class="item.icon"></span></dt>
        <dd>{{item.text}}</dd>
        </router-link>
      </dl>
       
  </nav>
</template>

<script>
export default {
  name: 'footerNav',
  data () {
    return {
      navList: [
        {
          icon: 'fa fa-home',
          text: '首页',
          Link: '/home'
        },
        {
          icon: 'fa fa-align-justify',
          text: '分类',
          Link: '/classify'
        },
        {
          icon: 'fa fa-shopping-cart ',
          text: '购物车',
          Link: '/car'
        },
        {
          icon: 'fa fa-user',
          text: '我的',
          Link: '/main'
        }
      ]
    }
  }
}
</script>
<style scoped lang="less">
nav{
  position: absolute;
  bottom: 0;
  background: #fff;
  border-top:1px solid #e5e5e5;;
  height:.4rem;
  width:100%;
  dl{
    display:-webkit-flex;
    dt{
        font-size:.18rem;
      }
      dd a{
        color: #999;
      }
    
    a{  
      flex:1;
      margin-top:.5%;  
      display: inline-block;        
      font-size:.12rem;
      text-align: center;
      color: #999;
      
    }
  }
}
.active{
  color:#801a2a;
}
</style>
