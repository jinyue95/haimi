<template> 
	<div>
    <div class="bonus-text"> 
      <i class="f14">提醒</i> 
      <p><span class="c_666">1、红包/优惠券每个订单</span>只可使用一个</p> 
      <p><span class="c_666">2、红包/优惠券金额大于订单应付金额时，</span>差额不予退回。</p> 
      <p><span class="c_666">3、使用红包/优惠券的订单发生退款，红包/优惠券不予退回</span>（特殊未指定的除外）</p>  
    </div>
    <div class="imgs"><img src="../../../static/img/juan.png" alt=""></div>
    </div>
</template>

<script> 
export default {
  name:'useData'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.imgs{
	width: 100%;
	height: 100%;
	margin-top: 20%;
	display: flex;
	justify-content:center ;
	align-items:center;
	img{
		width: 40%
	}
}
</style>

