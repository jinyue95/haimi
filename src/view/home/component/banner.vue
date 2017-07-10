<template>
  <div class="swiper-container b-box">
    <ul class="swiper-wrapper">
        <li class="swiper-slide" v-for="item in getData">
          <img v-if="item.picture" :src="item.picture" >
          <img v-else :src="item.PictureWebp" alt="">          
        </li>
    </ul>
    <div class="swiper-pagination"></div>
</div>
</template>

<script>

export default {
  name:'getData',
  props:['getData'],
  mounted () {
    this.swiperObj = new Swiper(this.$el,{
      pagination: '.swiper-pagination',
      paginationClickable: true,
      autoplay: 2000,
      loop: true
    })
  },
  updated(){
    this.swiperObj.update();
  }
}

</script>
<style scoped lang="less">
.swiper-slide{
  width:100%;
  img{
    width: 100%;
    display: block;
  }
} 
</style>
