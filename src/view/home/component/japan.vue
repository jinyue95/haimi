<template>
 
    <div class="ja-bot">
        <dl v-for="item in japanList">
            <dt><img :src="item.Picture" alt=""></dt>
            <dd>
                <h4>{{item.SlideName}}</h4>
                <span>{{item.Description}}</span>
            </dd>
        </dl>
    </div>

</template>

<script>
export default {
  name: 'japanList',
  props:['japanList']
}
</script>
<style scoped lang="less">

  .ja-bot{
    width: 100%;
    height: 100%;
    overflow-x: auto;
    display: -webkit-box;
    font-size:.12rem;
    background: #fff;
    dl{
      width: 25%;
      display: block;
      line-height: .35rem;
      text-decoration: none;
      color: #000;
      position: relative;
      text-align:center;
      dt{
        img{
          width:100%;
          display: block;
        }
      }
      dd{
        h4{
          padding: 0 5px;
          font-size: .14rem;
          font-weight: normal;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }

  }

  
</style>

