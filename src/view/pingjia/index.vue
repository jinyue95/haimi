 <template>
  <div class='collectboby'>
  	<div class='img'>
  	<div class='imgs'>
	   <img src="../../static/img/dingdan.png" alt="">
	   <span><router-link to='/home' class="sea">去首页逛逛</router-link></span>
	</div>
	</div>
  </div> 
</template>

<script>

export default {
  components: {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
/*body{
	background: #f7f7f7;
	width: 100%;
	height: 100%;
}*/
.collectboby{
	position: absolute;
	left: 0;
	top:0;
	right:0;
	left: 0;
	background: #f7f7f7;
	width: 100%;
	height: 100%;
	text-align: center;
	.img{
		width: 100%;
		height: 100%;
		display: flex;
		justify-content:center ;
		align-items:center;
		.imgs{
			width: 40%;
			/*height: 65px;*/
			img{			
				width: 100%;
				height: 100%; 
				}
			}
	}
	
	span{
        display: block;
        margin: 0 auto;
        width: .7rem;
        line-height: .2rem;
        border: 1px solid #000;
        text-align: center;
        margin-top: 3%;
        a{
        	color: #000;
        }
      }
}
</style>
