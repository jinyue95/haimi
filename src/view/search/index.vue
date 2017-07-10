<template>
  <div class='box'>
    <headerBar :class="['header',color]"></headerBar>
    <section>
      <div class="boby">
        <h3>热搜宝贝</h3>
        <div class='con'>
          <span>旅行</span>
          <span>人字拖</span>
          <span>零食</span>
          <span>瘦身</span>
          <span>DW手表</span>
        </div>
      </div>  
    </section>
  </div>
  <!-- style="z-index: 1000;" -->
</template>
<script>
import headerBar from '@/components/Header'
export default {
  name: 'ImgGroup',
  props:{
      "color":{
          default:"white"
          
      }
  },
  components: {
    headerBar
  }
}
</script>
<style lang="less">
.box{
  background: #f7f7f7;
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
}
.white{
  background: #fff;
}
section{
  border-top: 1px solid #e0e0e0;
  position: absolute;
  top:.4rem;
  bottom: 0;
  width: 100%;
  overflow-y: scroll;
  
  .boby{
    background: #fff;
    h3{
      box-sizing:border-box;
      padding:.1rem 0 0 .1rem;
      font-weight: normal;
    }
    .con{
      box-sizing:border-box;
      padding: .1rem;
      span{
        display: inline-block;
        width: .5rem;
        height: .2rem;
        line-height: .2rem;
        border: 1px solid #e0e0e0;
        text-align: center;
      }
    }
  }
  
}
</style>
