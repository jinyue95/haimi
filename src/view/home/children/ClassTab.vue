<template>
  <div class='m-box'>
	<div v-for="item in img">
		<div class="pics" v-if="item.Picture"><img :src="item.Picture" alt=""></div>
	</div>  	
    <productList  :products="list"></productList>
  </div>
</template>
<script>
import productList from '../component/product'
export default {
  name: 'IndexTab',
  data () {
    return {    
      	img:'',
      	list:''      
    }
  },

  created(){
  	this.getpageId()
  	
  },

  methods:{
  	getpageId(){
  		var pageId=this.$route.params.id;
  		console.log(pageId)
	    this.$http.get('/api/jujia'+pageId).then(function (response) {
	      this.list=response.body.data[0]
	      console.log(this.list)
	    }, function (response) {
	       console.log(response)
	    })
	    this.$http.get('/api/jujiapic'+pageId).then(function (response) {
	      this.img=response.body.data[0].Records
	    }, function (response) {
	       console.log(response)
	    })
	}
},
  watch:{
    '$route':"getpageId"
   },
  components: {
    productList
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.pics{
	width: 100%;
	img{
		width: 100%;
		display: block;
	}
}
</style>