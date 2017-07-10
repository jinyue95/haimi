<template>
  <div class="img">
    
    <div class="imgs b-box" v-for="item in getImg" >
      <img :src="item.Picture" alt="">
    </div>
    <div class="imgs b-box" v-for="item in getImgs" >
      <img :src="item.Picture" alt="">
    </div>
    
  </div>
</template>

<script>
export default {
  name:'getImg',
  props:['getImg','getImgs']
}
</script>
<style scoped lang="less">
.img{
  width:100%; 
  .imgs{
    width:100%;
    img{
      width:100%;
      display: block;
    }
  }
}
  
</style>

