<template>
    <div class="nav-box">
      <div class="nav-list">
          <router-link 
          v-for="item in navData" 
          :to="item.Link+'/'+item.NavID"
          class="nav-item"
          active-class="on"
          >{{item.Title}}</router-link>
      </div> 
    </div>
</template>
<script>
export default {
  name:'NavList',
  props:['navData'],
  methods:{
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.nav-box{
  background:#fff;
  width: 100%;
  height: .35rem;
  font-size: .12rem;
  .nav-list{
    width: 100%;
    height: 100%;
    overflow-x: auto;
    display: -webkit-box;
    border-bottom:1px solid #ccc;
    .nav-item{  
      margin: 0 10px;
      text-align: center;
      display:block;
      padding: 0 .08rem;
      line-height: .35rem;
      text-decoration:none;
      color: #000;
      position: relative;
      &.on:after{
        content:"";
        width: 100%;
        height: 0.03rem;
        background: #000;
        position: absolute;
        left:0;
        bottom: 0;
      }
    }
  }
}

</style>
