<template>
  <div class="product">
    <h3>{{products.Title}}</h3>
    <div class="product-list" >
      <dl v-for="item in products.Products">
        <router-link :to="{name:'shopDetail',params:{ProductID:item.ProductID}}">
          <dt>
              <img :src="item.Pictures">  
          </dt>
          <dd>
              <p>{{item.Subject}}</p>
              <p>￥{{item.FinalPrice}}</p>
          </dd>
        </router-link>
      </dl>

    </div>
  </div>
</template>

<script>
export default {
  name: 'products',
  props:['products']
}
</script>
<style scoped lang="less">
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
      background: #eee;
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
  
</style>

