<template>
    <header :class="['header',color]">
      <div class="search">
          <i :class="icon"></i>
          <input type="text" placeholder="搜索宝贝">
      </div>
      <router-link to='/search' class="sea">搜索</router-link>  
    </header>
</template>
<script>
export default{
  name:"headerBar",
  props:{
      "color":{
          default:"black"
      }
  },
  data(){
      return{
          icon:'fa fa-search'
      }
  }
}
</script>
<style scoped lang="less">
.header{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height:.4rem;
    line-height:.4rem;
    display:flex;
    a{
        width: 8%;
        margin-left: 18%;
        text-align: center;
        }
    .search{
         width:68%;
         margin-left:2%;
         height:100%;
         color:#ccc;
         position: relative;
         i{
          position: absolute;
          left: 10px;
          top: 13px;
          font-size: .14rem;
         }
         input{
             width:100%;
             display: inline-block;
             height: .2rem;
             line-height:.2rm;
             padding-left:30px;
             padding-right:15px;
             color:#fff;
             border: none;
         }
     }
     a{
      color: #fff;
     }
     &.black{
        background: #242424;
        input{
            background:#000 !important;
        }
        span{
            color:#fff;
        }
        .sea{
          color:#fff;
        }
     }
     &.white{
        background: #fff;
        border-bottom: 1px solid #ccc;
        input{
            background:#f7f7f7 !important;
        }
        span{
            color:#000;
        }
        .sea{
          color:#000;
        }
     }
}

</style>
