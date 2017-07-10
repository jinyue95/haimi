<template>
  <div class="brand b-box">
    <h3>
     <img v-if="title.title.img" :src="title.title.img" alt="">
     <span v-else>{{title.title.text}}</span>
    </h3>
    <div class="bursa-box">
        <slot>暂无数据</slot>  
    </div>
  </div>
</template>

<script>
export default {
  name:'hello',
  props:{
    'title':{
      default:{
        text:"",
        img:""
      }
    }
  }
}
</script>
<style scoped lang="less">
.brand{
  h3{
    background:#fff;
    line-height:.4rem;
    font-size:.12rem;
    text-align:center;
    img{
      width: 100%;
    }
  }
  .bursa{
    display:-webkit-flex;
    .left{
      flex:4.7;
      img{
        width:100%;
        display:block;
      }
    }
    .right{
      flex:4.33;
      img{
        width:100%;
        display:block;
      }
    }
  }
}
  
</style>
