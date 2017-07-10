<template>
  <div class="b-box gift ">
    <dl v-for="item in getNews">
      <dt> <img :src="item.PictureWebp" alt=""></dt>
      <dd>{{item.SlideName}}</dd>
    </dl>
  </div>
</template>

<script>
export default {
  name:'getNews',
  props:['getNews']
}
</script>
<style scoped lang="less">
.gift{
  display: -webkit-box;
  width: 100%;
  background: #fff;
  dl{  
    width: 100%;
    padding-bottom: 10px;
    flex:1;
    font-size: .14rem;
    text-align: center;
  }
  dt{
    font-size: .3rem;
    color: #darkgray;
    img{
      width: 100%;
    }
  }
  dd{
    margin-top: 5%;
  }
  
}
  
</style>
