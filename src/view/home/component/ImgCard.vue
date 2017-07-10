<template>
  <div class="brand b-box">
    <div class="bursa" v-if="getShowType==0" >
      <div class="left">
        <img :src="imageArr[0].PictureWebp" alt="">
        <img :src="imageArr[1].PictureWebp" alt="">
      </div>
    
      <div class="right">
        <img :src="imageArr[2].PictureWebp" alt="">
      </div>
    </div>
    <div v-else class="things b-box">
      <div v-for="item in imageArr"><img :src="item.PictureWebp" alt=""></div>
    </div>
  </div>    
</template>

<script>
export default {
  name:'ImgCard',
  props:['imageArr'],
  computed:{
    getShowType(){
      var showType=1;
      if(this.imageArr.length%2 !=0){
        showType=0
      }else{
        showType=1;
      }
      return showType;
    }
  }
}
</script>
<style scoped lang="less">
.brand{
  width: 100%;
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
.things{
  display:-webkit-flex;
  flex-wrap:wrap;
  div{
    width:50%;
    img{
      width:100%; 
      display: block;
    } 
  }
  
}

  
</style>
