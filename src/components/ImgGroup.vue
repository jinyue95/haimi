<template>
  <div class='sw'>
    <div class="m-image-groups" v-for="(item,index) in imgArr">
      <img  :src="item" @click="lookImg(index)">
    </div>
    <div class="image-group-mark" :style="{display: display}"  @click="lookImg()">  <!-- :style="{display: display}" -->
        <banner ref='swiper' :getData="getData" z-index=101></banner>  <!-- ref='swiper' -->
    </div>
  </div>
</template>

<script>
import banner from '../view/home/component/banner'
export default {
  data () {
    return { 
      'getData':[],
      'display':'none'
    }
  },
  props:['imgArr'],
  
  created(){
    let that=this;
    this.imgArr.forEach(function(e,i){
        that.getData.push({
          picture:e
        })
    })
  },
  components:{
    banner
  },
  updated () {
    if(this.display!=''){
      this.$refs.swiper.swiperObj.update()
    }
  },
  methods:{
    lookImg(index){
      if(this.display=="none"){
          this.display="block";
      }else{
        this.display="none"
      }
    },
    createMark(){
      var mark=document.createElement("div");
      mark.className="image-group-mark";
      document.body.appendChild(mark);
      
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.sw{
  width: 100%;
}
.m-image-groups{
   width: 15%;
   display: inline-block;
   margin-right: .1rem;
  img{
    width: 100%;
    margin-right: 10px;
  }
}
.image-group-mark{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.3);
  z-index: 100;
  height: 100%;
  padding:  28% 0;
}

.swiper-slide{
  width:100%;
    img{
      width: 100%;
      display: block;
    }
  }
</style>