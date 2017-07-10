 <template>
  <div class="bind-details"> 
  	<div> 
  		<img class="face" src="//m.haimi.com/static/images/web/default-avatar-square.png"> 
  		<div class="phone">您的手机号码：+86 18531527620</div> 
  		<a class="submit " href="/webapp/bind">确认更换</a> 
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
.bind-details{
	padding: 0 .1rem;
	.face{
		width: 50px;
		text-align: center;
		display: block;
    	margin: .15rem auto;
	}
	.phone{
		padding:0 .5rem;
		text-align: center;
	}
	.submit{
		background: #991f33;
	    color: #fff;
	    height: .35rem;
	    line-height: .35rem;
	    display: block;
	    text-align: center;
	    margin-top: .2rem;
	}
}
</style>
