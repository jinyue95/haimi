<template>
  <!-- <div class='m-wrapper homePage'> -->
    <div class="detailTop">
      <div class="section">
        <banner :getData="getData"></banner>
        <div class="info" > 
          <div>{{Subject}}</div>  
          <div class='money'> 
            <i>¥68.00-¥136.00</i>    
            <span>月销59件</span> 
          </div> 
          <div class="other"> 
            <p><span>邮费0元</span></p> </div>
          </div>
        <div class='others b-box'> 
          <ul> g
            <li>
              <span v-for="(item,index) in Promises"><i class="fa fa-check-circle-o"></i>{{item}}</span>
            </li>  
          </ul> 
        </div> 
        <div class='othered b-box'> 
          <ul> 
            <li @click="lookbuy">
            </li> 
          </ul> 
        </div>  
        <div class="comment">
          <p class="product-score">
            <span>宝贝评分</span>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <i class="fa fa-star"></i>
            <span class="fen">{{ProductScore}}</span>
          </p>
          <ul class="comment-list" v-for="(item,index) in TopReviews">
            <li> 
              <div class="comment-info" >
                <div class="avatar">
                  <img :src="TopReviews[index].Buyer.Avatar" alt="">
                </div>
                <div class="nickname">{{TopReviews[index].Buyer.NickName}}</div>
                <div class="createTime c_ccc">{{item.CreateTime}}</div>
              </div> 
              <p class="comment-text">{{item.BuyerNote}}</p> 
              <div class="comment-img"> 
                <div class="fl"> 
                  <!-- <img :src="TopReviews[index].BuyerPicturesThumb"> -->


                  <ImgGroup :imgArr="imgArr"></ImgGroup>


                </div>

              </div>
            </li>
          </ul>
          <a class="all-btn" href="/webapp/comment-list/4433405">全部评价({{ProductScore}})</a>
        </div>
        <div class="haimichooe"> 
          <div class="shop-box"> 
            <img :src="Mall.LogoSrc"> 
            <div class="shopinfo"> 
              <h3>{{Mall.MallName}}</h3> 
              <p>{{Introduction}}</p> 
            </div> 
          </div> 
          <div class="shop-brand">
            <a>发现更多<span>{{BrandName}}</span>良品<i class="fa fa-angle-right"></i></a>
          </div> 
        </div> 
        <div class="details-box">
          <h3 class="title f14">商品详情</h3>
          <div class="weixin">
            <p>
              <img :src="Mall.WeixinQRCode" lazy="loaded">
            </p> 
          </div>
          <div class='des'><div v-html="Descriptioin"></div></div>
        </div>   
      </div>
      <!-- 购买 -->
      <account ref="lookbuy"></account>

      <div class="footer">
        <div class="footleft">
          <span><i class="fa fa-home"></i></span>
          <span><i class="fa fa-star"></i></span>
          <span><i class="fa fa-shopping-cart"></i></span>
        </div>
        <div class="footcen">
          <span @click="lookbuy">加入购物车</span>
        </div>
        <div class="footright">
          <span @click="lookbuy">立即购买</span>
        </div>
      </div>


      
    </div>
</template>
<script>
import banner from '../home/component/banner'
import ImgGroup from '../../components/ImgGroup'
import account from '../../components/account'
export default {
  name: 'hello',
  data(){
    return {
      getData:[],
      Subject:"",
      Promises:"",
      Descriptioin:[],
      Mall:'',
      Introduction:'',
      TopReviews:[],
      ReviewCount:'',
      ProductScore:'',
      BrandName:'',
      imgArr:[
        "//img.haimi.com/Fnftcu-Xh3_zGak_K_DmB7_q1q_b?imageView2/1/w/100/h/100",
        "//img.haimi.com/FjmC45qNCkWoILMpDmZtRw4_ucy6?imageView2/1/w/100/h/100",
        "//img.haimi.com/Fsxacm0iHWtwP5EdkyTxnHCMh_Ff?imageView2/1/w/100/h/100"
      ]
    }
  },
  components: {},
    created () {
    let ProductID = this.$route.params.ProductID;
    console.log(ProductID)

    this.$http.jsonp("http://m.haimi.com/api/product/detail-cdn?ProductID="+ProductID+"&platform=WAP",
      {
        jsonp: '_callback'
      }
      
    ).then(function(res){
      let data = res.data.data;
      this.getData = JSON.parse( data.ProductPictures );
      this.Subject = data.Subject;
      this.Promises = data.Promises;
      this.Descriptioin = data.Descriptioin;
      this.Mall = data.Mall;
      this.Introduction = data.Mall.Introduction;
      this.TopReviews = data.TopReviews;
      this.ReviewCount = data.ReviewCount;
      this.ProductScore = data.ProductScore;
      this.BrandName = data.BrandName;
      // this.BuyerPicturesThumb =         
    },function(res){
      alert(res)
    })
  },
   components: {
    banner,
    ImgGroup,
    account
  },
  methods:{
      lookbuy:function(index){
        console.log(this.$refs)
        this.$refs.lookbuy.$refs.mark.style.display = "block";
        this.$refs.lookbuy.$refs.buyInfo.style.display = "block";
      }
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.detailTop{
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
}
.section{
  position: absolute; 
  bottom: 0.4rem;
  top:0;
  width: 100%;
  overflow-y: scroll;
  background: #f7f7f7;
  .swiper-pagination-bullets {
    bottom: 10px;
    left: 0;
    width: 100%;
  }
  .info{
    background: #fff;
    padding: 0 .1rem;
    box-sizing: border-box;
    font-size: .14rem;
  }
  .money{
    margin: .1rem 0;
    padding-bottom: .1rem;
    border-bottom:1px solid #ccc;
    i{
      font-style: normal;
      color: #801a2a;
    }
    span{
      color: #999;
      float: right;

    }
  }
  .other{
    padding-bottom: .1rem;
    color: #999;
  }
  .others,.othered{
    padding: .1rem ;
    background: #fff;
    margin-top: .1rem;
    a{
      color:#000;
    }
    span{
      display: inline-block;
      margin-right: .05rem;
      i{
        display: inline-block;
        margin-right: .02rem;
        color: #801a2a;
        font-size: .14rem;
      }
    }
  }
  .othered{
    background: #fff;
    ul>li{
      position: relative;
      i{
        font-size: .14rem;
        color:#999;
        position: absolute;
        right: 10px;
        top:3px;
      }
    }
  }
  .comment{
    background: #fff;
    .product-score{
      line-height: .4rem;
      padding:0 .1rem ;
      box-sizing:border-box;
      border-bottom: 1px solid #eee;
    }
    
    i{
      color: #801a2a;
    }
    .fen{
      color: #801a2a;
    }
    .comment-list{
      li{
        padding-bottom: .1rem;
      }
      .comment-info{
        padding: .1rem; 
        line-height: .09rem;
        .avatar{
          display: inline-block;
          width: .3rem;
          height: .3rem;
          overflow: hidden;
          img{
            width: 100%;           
          }
        }
        .nickname{
          display: inline-block;
        }
        .createTime{
          display: inline-block;
        }
      }  
      p{
        padding:0 .1rem ;
        box-sizing:border-box;
        background: #fff;
        padding: .1rem;
      }
      .comment-img{
        padding:0 .1rem ;
        box-sizing:border-box;
        .fl{
          width: 100%;
          display: inline-block;
          padding: .05rem .01rem .05rem 0;
          img{
            width: 100%;
          }

        }
      }
    }
    .all-btn{
      border-top: 1px solid #eee;
      width: 100%;
      height: .3rem;
      line-height: .3rem;
      display: block;
      text-align: center;
    }
  }
  .haimichooe{
    
    margin-top: .1rem;
    .shop-box{
      background: #fff;
      padding: .1rem;
      height: .3rem;
      img{
        width: .3rem;
        display: inline-block;
      }
      .shopinfo{
        display: inline-block;
        margin-left: .1rem;
      }
    }
    .shop-brand{
      background: #fff;
      margin: .1rem 0;
      padding-left: .1rem;
      padding-right: .1rem;
      height: .3rem;
      line-height: .3rem;
      a{
        display: block;
        height: .5rem;
        line-height: .3rem;
        i{
          float: right;
          line-height: .3rem;
        }
      }
      
    }
  }
  .details-box{

    background: #fff;
    .title{
      line-height: .3rem;
      padding-left: .1rem; 
      box-sizing:border-box;
    }
    .weixin{
      padding: .1rem; 
      box-sizing:border-box;
      img{
        width: 100%;
        display: block;
      }
    }
    .des{
      padding:0 .1rem ;
      box-sizing:border-box;
      background: #fff;
      p{
        img{
          width: 100%;
        }
      }
    }
    
  } 
}
.footer{
  background: #fff;
  width: 100%;
  position: absolute;
  bottom: 0;
  border-top: 1px solid #999;
  /*display: -webkit-flex;*/
  height: .4rem;
  .footleft{
    display: inline-block;
    width: 32%;
    span{
      width: 30%;
      height: 50%;
      margin-top: 10%;
      text-align: center;
      border-right: 1px solid #999;
      display: inline-block;
      i{
        font-size: .16rem;
        color:#999;
      }
    }

  }
  .footcen{
    display: inline-block;
    width: 33%;
    /*flex:1;*/
    height: .4rem;
    line-height: .4rem;
    text-align: center;
  }
  .footright{
    display: inline-block;
    width: 33%;
    background: #801a2a;
    color: #fff;
    /*flex:1;*/
    height: .4rem;
    line-height: .4rem;
    text-align: center;
  }
 

}
.section .des p{
    img{
      width: 100%;
      display: block;
    }
  }

 
</style>
