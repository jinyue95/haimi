<template>
  <div class='box'>    
     <headerBar></headerBar>
    <div class='section'>
      <div class="m-content">
         <navList :navData="navData" v-position-static=""></navList>
         <router-view></router-view>  
      </div>     
    </div>    
    <footerNav></footerNav>
  </div>
</template>
<script>
import headerBar from '@/components/Header'
import navList from './component/navlist'
import positionStatic from '@/directive/positionStatic'
import footerNav from '@/components/Footer'
export default {
  name: 'homePage', 
  data () {
    return {
      navData: []
    }
  },
  created () {
    this.getNav()
  },
  methods: {
    getNav () {
      this.$http.get('/api/navList').then(function (response) {
        this.navData=response.data.data
      }, function (response) {
        console.log(response)
      })
    }
  },
  directives:{
    positionStatic
  },

  components: {
    headerBar,
    navList,
    footerNav
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.b-box{
  margin-bottom: 10px;
}
.box{
  background: #f7f7f7;
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
}
.section{
  position: absolute;
  top: .37rem;
  bottom: .4rem;
  width: 100%;
  overflow-y: scroll;
}
</style>
