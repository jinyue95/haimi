<template> 
    <!-- <div> -->
      <div class="catbrand">
        <dl v-for="item in CategoryBrand">
          <dt><img :src="item.PictureWebp" alt=""></dt>
          <dd>
            <p>{{item.SlideName}}</p>
            <span>{{item.Description}}</span>
          </dd>
        </dl>
      </div>
    <!-- </div> -->
</template>

<script> 
export default {
  name:'homepage',
  data() {
    return {
      CategoryBrand:[]
    }
  },
  created () {
    this.getclassData()
  },
  methods: {
    getclassData () {
      this.$http.get('/api/CategoryBrand').then(function (response) {
        this.CategoryBrand=response.data.data[0].Records
        console.log(this.CategoryBrand)
      }, function (response) {
        console.log(response)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.catbrand{
  display: -webkit-flex;
  flex-wrap:wrap;
  dl{
    width: 33%;
    dt{
      img{
        width:100%;
      }
    }     
    dd{
      p{
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        text-align: center;
      }
      span{
        padding: 5px 10px;
        box-sizing:border-box;
        display: block;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
        color:#999;
      }
    }
  }
}
</style>
