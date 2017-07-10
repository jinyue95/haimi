<template>
  <div class='carbox'>   
   <section class='section'> 
      <div class="shopping">
      <img src="../../static/img/shopcar.png" alt="">
      <span><router-link to='/home' class="sea">去首页逛逛</router-link></span> 
    </div>
    <div class="product">
      <h3>大家都在买的宝贝</h3>
      <div class="product-list" >
        <router-link v-for="item in products" :to="{name:'shopDetail',params:{ProductID:item.ProductID}}">
        <dl >
          <dt>
              <img :src="item.Pictures">  
          </dt>
          <dd>
              <p>{{item.Subject}}</p>
              <p>￥{{item.FinalPrice}}</p>
          </dd>
        </dl>
        </router-link>


<!-- <router-link :to="{name:'shopDetail',params:{ProductID:item.ProductID}}">
          <dt>
              <img :src="item.Pictures">  
          </dt>
          <dd>
              <p>{{item.Subject}}</p>
              <p>￥{{item.FinalPrice}}</p>
          </dd>
        </router-link>
 -->

      </div>
  </div>
  </section>

   <footerNav></footerNav>
  </div>
</template>

<script>
import footerNav from '@/components/Footer'
import productList from '../home/component/product'
export default {
  name: 'homePage', 
  data () {
    return {
      products: []
    }
  },
  created () {
    this.getCar()
  },
  methods: {
    getCar () {
      this.$http.get('/api/car').then(function (response) {
        this.products=response.body.extra.Suggest
        console.log(this.products)
      }, function (response) {
        console.log(response)
      })
    }
  },
  components: {
    productList,
    footerNav
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.carbox{
  background: #f7f7f7;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: -webkit-flex;
  flex-direction: column;
  .section{
    .classImg{
      width:100%;
    }
    .shopping{
      background: #f7f7f7;
      padding: 38% 0 20% 0;
      img{
        display: block;
        width:30%;
        text-align: center;
        display:block;
        margin:0 auto;
      }
      span{
        display: block;
        margin: 0 auto;
        width: .7rem;
        line-height: .2rem;
        border: 1px solid #000;
        text-align: center;
        margin-top: 3%;
      }
    }
    .product{
      box-sizing:border-box;
      text-align:center;
      overflow: hidden;
      .banner{
        img{
          width: 100%;
        }
      }
      h3{
          font-size:.12rem;
          height:.4rem;
          line-height:.4rem;
          font-weight:normal;
          background: #fff;
          border-bottom: 1px solid #eee
      }
      .product-list{
        overflow: hidden;
        width: 100%;
        background: #eee;
        dl{
          width: 50%;
          float: left;
          box-sizing: border-box;
          margin-bottom: 0.06rem;
          &:nth-child(even){
            padding-left:0.03rem;
          }
          &:nth-child(odd){
            padding-right:0.03rem;
          }
          dt{
            width: 100%;
            position: relative;
            img{
              display: block;
              width: 100%;
              height: 100%;
              position: absolute;
            }
            &:after{
              content: "";
              padding-top: 100%;
              display: block;
              width: 100%;
            }
          }
          dd{
            background: #fff;
            width: 100%;
            padding:0.1rem;
            box-sizing: border-box;
            font-size: .12rem;
            text-align: left;
            p{
              display: block;
              overflow: hidden;
              width: 100%;
              text-overflow: ellipsis;
              white-space: nowrap;
              padding:0.05rem;
            }
            b{
              font-weight: normal;
              padding:0.05rem;
            }
          }
        }  
      } 
    }
  }
}
.sea{
  color:#000;
}
</style>
