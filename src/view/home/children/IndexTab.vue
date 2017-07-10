<template>
  <div class='m-box'>    
	  <banner :getData="getData"></banner>
    <giftList :getNews="getNews"></giftList>
    <imgList :getImg="getImg" :getImgs="getImgs"></imgList>
    <SectionBox :title="box1Title">
      <ImgCard :imageArr="box1Data"></ImgCard> 
    </SectionBox>
    <SectionBox :title="box2Title">
      <ImgCard :imageArr="box2Data"></ImgCard> 
    </SectionBox>
    <SectionBox :title="box3Title">
      <japanList :japanList="japanData"></japanList>
    </SectionBox>
    <SectionBox :title="box4Title">
      <japanList :japanList="watchs"></japanList>
    </SectionBox>
    <SectionBox :title="box5Title">
      <japanList :japanList="waters"></japanList>
    </SectionBox>
    <productList v-for="item in productList" :products="item"></productList>
       
  </div>
</template>   
<script>
import SectionBox from '@/components/SectionBox'
import positionStatic from '@/directive/positionStatic'
import ImgCard from '../component/ImgCard'
import banner from '../component/banner'
import giftList from '../component/giftlist'
import imgList from '../component/imglist'
import productList from '../component/product'
import japanList from '../component/japan'
export default {
  name: 'IndexTab',
  data () {
    return {
      getData: [],
      getNews:[],
      getImg:[],
      getImgs:[],
      box1Title:{},
      box1Data:[],
      box2Title:{},
      box2Data:[],
      box3Title:{},
      japanData:[],
      box4Title:{},
      watchs:[],
      box5Title:{},
      waters:[],
      productList:[]
      
    }
  },
  directives:{
    positionStatic
  },
  created(){
    this.$http.get('/api/getData').then(function (response) {
      this.getData=response.data.data[0].Records
      this.getNews=response.data.data[1].Records
      this.getImg=response.data.data[2].Records
      this.getImgs=response.data.data[3].Records
      this.box1Title={
        title:{
          text:response.data.data[4].Channel.Name,
          img:""
        }
      }
      this.box1Data=response.data.data[4].Records
      this.box2Title={
        title:{
          text:response.data.data[5].Channel.Name,
          img:""
        }
      }
      this.box2Data=response.data.data[5].Records
      this.box3Title={
        title:{
          text:"",
          img:response.data.data[6].Records[0].Picture
        }
      }
      this.japanData=response.data.data[7].Records
      this.box4Title={
        title:{
          text:"",
          img:response.data.data[8].Records[0].Picture
        }
      }
      this.watchs=response.data.data[9].Records
      this.box5Title={
        title:{
          text:"",
          img:response.data.data[10].Records[0].Picture
        }
      }
      this.waters=response.data.data[11].Records    
    }, function (response) {
      console.log(response)
    })
    
    this.$http.get('/api/productList').then(function (response) {
      this.productList=response.data.data
      // console.log(this.productList)
    }, function (response) {
       console.log(response)
    })
  },
  components: {
  	banner,
    giftList,
    imgList,
    japanList,
    productList,
    SectionBox,
    ImgCard
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>

