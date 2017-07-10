<template>
  <div class='classbox'>   
  
    <div class='section'>    
      <classHeader></classHeader>
      <router-view></router-view>
    </div>
    <footerNav></footerNav>
  </div>
</template>

<script> 
import classHeader from './component/classheader'
import footerNav from '@/components/Footer'
export default {
  name:'homepage',
  components: {
    classHeader,
    footerNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.classbox{
  background: #f7f7f7;
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
}
.section{
  position: absolute;
  top: 0;
  bottom: .4rem;
  width: 100%;
  overflow-y: scroll;
  .classlist{
    position: absolute;
    top: 0;
    span{
      display: block;
    }
  }
  
}

</style>
