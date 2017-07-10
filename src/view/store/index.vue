 <template>
  <div class='mainbox'>
   <header class="header-p">
        <h2>我的积分</h2>
        <a href="javascript:history.go(-1)" class="fa fa-angle-left"></a>
    </header>
    <!-- <section>
    	<div class="credit-nav f12">
        <ul>
            <li><p>积分商城</p></li>
            <li><p>积分明细</p></li>
            <li><p>兑换记录</p></li>
        </ul>
    </div>
    </section> -->
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
.minbox{
	background: #f7f7f7;
}
.header-p{
	position: relative;
	a{
		position: absolute;
	    left: 7%;
	    top: 20%;
	    color: #999;
	    font-size: .26rem;
	}
    h2 {
	    font-size: .18rem;
	    line-height: .4rem;
	    font-weight: 200;
	    text-align: center;
	}
}
</style>
