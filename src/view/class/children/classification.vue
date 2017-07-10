<template> 
    <div>
      <div v-for="item in classJson">
        <div v-for="items in item.Records" v-if="items.Picture">
          <img  class='classImg' :src="items.Picture">
        </div>
      </router-link>
        <div class="classlist" v-else>
          <span>{{items.SlideName}}</span>
        </div>
      </div>
    </div>
</template>

<script> 
export default {
  name:'homepage',
  data() {
    return {
      classJson:[],
      paramsId:''
    }
  },
  created () {
    this.getclassData()
  },
  methods: {
    getclassData () {
      this.paramsId = this.$route.params.Id;
      this.$http.get('/api/classData').then(function (response) {
        this.classJson=response.data.data
        
      }, function (response) {
        console.log(response)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.classbox{
  background: #f7f7f7;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: -webkit-flex;
  flex-direction: column;
}
.section{
  flex:1;
  overflow-y: scroll; 
  background: #fff;
  .classImg{
    width:100%;
  }
  .classlist{
    display: inline-block;
    border:1px solid #ccc;
    padding: 5px 10px;
    font-size:.12rem;
    margin-top: 5px;
    margin-bottom: 10px;
    margin-left : 10px;
    span{
      display: block;
    }
  }
}

</style>
