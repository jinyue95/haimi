<template>
  <div>
    <div class="buy-info" ref="buyInfo"> 
      <div class="info cle"> 
        <img class="fl" src="//img.haimi.com/FhpWlSHNebKwU8OLa62Yt31m0UIX?imageView2/1/w/120/h/120"> 
        <div class="f2"> 
          <p class="f16 c_red">¥239.00</p> 
          <p class="c_999 f10 stock">(库存452件)</p> 
          <p class="c_666 f14">请选择：颜色分类</p> 
        </div> 
      </div>  
      <div> 
        <div class="sku"> 
          <h3>颜色分类</h3> 
          <div class="list"> 
            <span>黄色落柿3折伞</span>
            <span>红色梅染3折伞</span>
            <span>玫红苏桃3折伞</span> 
          </div> 
        </div> 
      </div> 
      <div class="nums cle"> 
      <span class="fl buynums">购买数量</span> 
      <div class="fr"> 
        <span class="f16">－</span> 
        <span class="tel">1</span>
        <span class="f16">＋</span> 
      </div> 
      </div> 
      <div class="submit f16 c_fff">确定</div>  
    </div>
     <!-- 遮罩层 -->
    <div class="img-group-marks" @click="displayNone" ref="mark"></div>
  </div>
</template>
<script>
export default {
  name: 'ImgGroup',
  data(){
    return{
      // 'getData':[],
      'display':'none'
    }
  },
  methods:{
      displayNone:function(index){
        this.$refs.mark.style.display = "none"
        this.$refs.buyInfo.style.display = "none"
      }
    } 
}
</script>
<style lang="less">
.img-group-marks{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,.2);
  z-index:100;
  width: 100%;
  height: 100%;
  display: none;
}
.buy-info{
  z-index: 101;
  width: 100%;
  background: #fff;
  position: fixed;
  left: 0;
  bottom: 0;
  display: none;
  .info{
    border-bottom: 1px solid #e0e0e0;
    height: .4rem;
    padding:.1rem;
    img{
      height: 100%;
    }
    .f2{
      display: inline-block;
      margin-left: .1rem;
    }
  }
  .sku{
    border-bottom: 1px solid #e0e0e0;
    padding: .1rem;
    .list{ 
      span{
        display: inline-block;
        border: 1px solid #000;
        padding: .05rem;
        margin-right: .08rem;
        margin-top: .1rem;
      }
    }
  }
  .nums{
    padding: .1rem;
    .buynums{
      line-height: .4rem;
      display: inline-block;
    }
    .fr{
      float:right;
      span{
        display: inline-block;
        width: .2rem;
        height: .2rem;
        border: 1px solid #e0e0e0;
        background: #fff;
        text-align: center;
        line-height: .2rem;
      }
    }
  }
  .submit{
    color:#fff;
    line-height: .4rem;
    text-align: center;
    background: #801a2a;
  }

}

</style>
