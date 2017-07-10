 <template>
  <div class='mainbox'>
    <div class='section'> 
      <div class="user-info"> 
        <span class="avatar">
          <img src="//m.haimi.com/static/images/web/default-avatar-square.png?imageView2/1/w/100/h/100">
          <input type="file" accept="image/*">
        </span>
        <span class="nickname f16">海蜜_cikwqy</span>
        <i class="fa fa-edit f16"></i>
      </div>
      <div class="user-menu"> 
        <ul> 
          <router-link to="/orderlist">
          <li class="line">
            <a class="mainlist" href="#">我的订单<i class="fa fa-angle-right rights"></i><span class="look">查看全部订单</span> </a>

          </li> 
          </router-link>
          <li class="column cle"> 
          <router-link to="/orderlist">
            <a href="#">
              <dl>
                <dt><i class="fa fa-credit-card"></i></dt>
                <dd>待付款</dd>
              </dl>   
            </a> 
          </router-link>
          <router-link to="/orderlist">
            <a href="#">
              <dl>
                <dt><i class="fa fa-list-alt"></i></dt>
                <dd>待发货</dd>
              </dl>   
            </a> 
          </router-link>
          <router-link to="/orderlist">
            <a href="#">
              <dl>
                <dt><i class="fa fa-truck"></i></dt>
                <dd>待收货</dd>
              </dl>   
            </a> 
            </router-link>
          <router-link to="/pingjia">
            <a href="#">
              <dl>
                <dt><i class="fa fa-calendar-check-o"></i></dt>
                <dd>待评价</dd>
              </dl>   
            </a> 
            </router-link>
          <router-link to="/orderlist">
            <a href="#">
              <dl>
                <dt><i class="fa fa-money"></i></dt>
                <dd>退款</dd>
              </dl>   
            </a> 
            </router-link>
          

          </li> 
          <li class="blank"></li> 
          <router-link to="/Collectbaby">
            <li class="line">
              <a class="f14" href="#"><span class="fa fa-shopping-bag"></span><i class="fa fa-angle-right"></i>收藏宝贝</a>
            </li> 
          </router-link>
          <router-link to="/favorable">
          <li class="line">
            <a class="f14" href="#"><span class="fa fa-heart-o"></span><i class="fa fa-angle-right"></i>红包优惠券</a>
          </li> 
          </router-link>
          <router-link to="/footprint">
          <li class="line">
            <a class="f14" href="#"><span class="fa fa-anchor"></span><i class="fa fa-angle-right"></i>足迹</a>
          </li> 
          </router-link>
          <router-link to="/store">
          <li class="line">
            <a href="#" class="f14"><span class="fa fa-database"></span><i class="fa fa-angle-right"></i>积分商城</a>
          </li> 
          </router-link>
          <router-link to="/address">
          <li class="line">
            <a class="f14" href="#"><span class="fa fa-map-marker"></span><i class="fa fa-angle-right"></i>收货地址</a>
          </li> 
          </router-link>
          <router-link to="/binding">
          <li class="line">
            <a class="f14" href="#"><span class="fa fa-smile-o"></span>绑定手机<i class="fa fa-angle-right"></i><span class="fr phone">18531527620</span>
            </a>
          </li>
          </router-link>
          <li class="line">
            <a class="f14" href="#"><span class="fa fa-volume-control-phone"></span><i class="fa fa-angle-right"></i>海蜜客服</a>
          </li> 
        </ul> 
      </div>
      <div class="logout f16">退出登录</div>
    </div>
   <footerNav></footerNav>
  </div> 
</template>

<script>
import footerNav from '@/components/Footer'
export default {
  components: {
    footerNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.user-info {
    background: #fff;
    height: .45rem;
    padding: .1rem;
    .avatar{
      position: relative;
      display: block;
      float: left;
      padding: 0;
      margin-right: .1rem;
      background: none;
      input {
        position: absolute;
        z-index: 100;
        top: 0;
        left: 0;
        opacity: 0;
    }
    img{
      width: .45rem;
      height: .45rem;
      vertical-align: top;
    }
  }
  .nickname {
    line-height: .45rem;
    display: block;
    overflow: hidden;
    max-width: 7rem;
    padding-right: .1rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    float: left;
  }
  i{
    display: block;
    float: left;
    height: .45rem;
    line-height: .45rem;
    background-size: 100%;
    color: #999;
    font-size: .16rem;
  }

}
.section{
  position: absolute;
  top: 0;
  bottom: .4rem;
  width: 100%;
  overflow-y: scroll;
  background: #f7f7f7;
}
.user-menu{
  background: #fff;
  margin-top: .1rem;
}

.user-menu ul li.line:first-child {
    margin-left: 0;
}
.user-menu ul li.line {
    border-bottom: 1px solid #eee;
    position: relative;
    padding-left: .17rem;
  }
  .user-menu ul{
  background: #f7f7f7;
  }
  .line{
    background: #fff;
  }
.cle{
  display: block;
  zoom: 1;
}
.look{
  float: right;
  padding-right: 10px;
  box-sizing:border-box;
  color:#999;
}
.line a i{
  float: right;
  padding-right: 10px;
  box-sizing:border-box;
  display: inline-block;
  line-height: .3rem;
  color:#999;
}
li{
  line-height: .35rem;
}
.column{
  background: #fff;
  display: -webkit-flex;
  margin-bottom: .1rem;
  a{
    flex:1;
    text-align: center;
  }
}


.logout {
    background: #fff;
    margin: .1rem 0;
    height: .4rem;
    line-height: .4rem;
    text-align: center;
}
a{
  color: #000;
}
dl dt {
  margin-top: .05rem;
}
dl dt i{
  font-size: .16rem;
  color: #999;
}
.line a span{
  color:red;
  font-size: .12rem;
  color:#999;
  padding-right: .1rem;
  box-sizing:bordrt-box;
}
.phone{
  float: right;
}
</style>
