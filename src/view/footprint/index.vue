 <template>
  <div> 
  	<ul class="footprint-list" v-for="item in foo"> 
  		<router-link :to="{name:'shopDetail',params:{ProductID:item.ProductID}}">
  		<li class="cle"> 
  			<div class="fl"> 
  				<img :src="item.Products.Pictures" lazy="loaded"> 
  			</div> 
  			<div class="fr"> 
  				<p class="p-subject">{{item.Products.Subject}}</p> 
  				<p class="p_price f15 c_red">￥{{item.Products.FinalPrice}}</p> 
  			</div> 
  		</li>
  		</router-link>
  	</ul> 
  </div>
</template>

<script>

export default {
  name: 'zuji', 
  data () {
    return {
      foo: []
    }
  },
  created () {
    this.getzuji()
  },
  methods: {
    getzuji () {
      this.$http.get('/api/zujiList').then(function (response) {
        this.foo=response.body.data
        console.log(this.foo)
      }, function (response) {
        console.log(response)
      })
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.footprint-list{
	.cle{
		display: -webkit-flex;
		border-bottom: 1px solid #eee;
		padding: .1rem;
		/*box-sizing:border-box;*/
		.fl{
			flex:2;
			img{
				width: 100%;
			}
		}
		.fr{
			flex:3;
			padding-left: .2rem;
			box-sizing:border-box;
			.c_red{
				color:#991f33;
			}
		}
	}
}
</style>
