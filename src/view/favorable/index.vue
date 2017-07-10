<template>
  <div class="header">
      <ul>
          <li v-for="item in titleData">
            <router-link :to="item.Link" active-class="onb">{{item.Title}}</router-link>
          </li>
      </ul>
      <section class="sect">
      	<router-view></router-view>
      </section>
  </div>
</template>   

<script>
export default {
  data () {
    return {
      titleData:[
        {
          Title:"可用",
          Link:"/favorable/usable"
        },
        {
          Title:"已使用",
          Link:"/favorable/beuse"
        },
        {
          Title:"已过期",
          Link:"/favorable/expired"
        }
      ]
    }
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.header{
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  background-color: #fff;
  border-bottom: 1px solid #e6e6e6;
  ul{
    li{
      display:inline-block;
      font-size:.12rem;
      padding:0 10px;

      a{
        color:#666;
        padding-bottom:10px;
      }
    }
  }
}
.onb{
    border-bottom: 2px solid #991f33;
    color: #991f33;
}
.sect{
	text-align: left;
	background: #f7f7f7;
	.bonus-text{
		background: #fff;
		padding-bottom: .1rem;
		margin-top: .1rem;
		color: #999;
		i{
			font-style: normal;
			padding: 0 .2rem;
			box-sizing:border-box;
		}
		p{
			line-height: .2rem;
			padding: 0 .2rem;

			box-sizing:border-box;
		}
	}
}
</style>
