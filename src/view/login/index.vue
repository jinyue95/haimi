 <template>
  <div class='mainbox'>
  <div class='section'> 
    <header class='header'>请输入手机号码验证码直接登录</header>
    <div class="mess">
      <div class="cle"> 
        <span class="fl f14 c_666">手机号：</span> 
        <input type="tel" class="fl f14" v-model="userPhone">  
        <span class="form-send form-clear" v-if="isshow" @click="clear">X</span>
      </div>
      <div class="cle"> 
        <span class="fl f14 c_666">验证码：</span> 
        <input type="tel" class="fl f14" v-model="userCode"> 
        <span class="c_red fr" @click="sendSms" v-if="sendSmsFlg">发送验证码</span> 
         <span class="c_red fr form-send-time" @click="sendSms" v-else>{{sendTime}}秒后重新发送</span>  
      </div>
      <div class="loging c_fff f16" @click="loginDo">登录</div>
    </div>
  </div>
   <footerNav></footerNav>
  </div> 
</template>

<script>
import footerNav from '@/components/Footer'
export default {
  data(){
    return {
      isshow:false,
      sendSmsFlg:true,
      sendTime:60,
      userPhone:"",
      userCode:"",
      smsCode:""
    }
  },
  watch:{
    userPhone:
      function(val){
        this.isshow = val.length > 0 ? true : false
      }
    
  }, 
  methods:{
    clear(){
      this.userPhone=""
    },
    sendSms(){
      this.sendSmsFlg=false;
      let  codeArr=[];
      for(var i=0;i<4;i++){
        codeArr.push(this.getRandom(0,9));
      };
      this.smsCode=codeArr=codeArr.join("");
      let that = this;
      let time = setInterval(function(){
        if(--that.sendTime ==0){
          clearInterval(time)
          that.sendTime=60;
          this.sendSmsFlg=true;
        }
      },1000)
      console.log(codeArr)
    },
    getRandom(min,max){
      var random = Math.random();
      return Math.floor((max-min+1)*random+min);
    }, 
    loginDo(){
      if(this.userPhone !="" && this.userCode!=""){
        //ajax请求
        var userData={
          userName:"哈哈哈",
          userPhone:54354353,
          userPhoto:"3251.jpg"
        }
        var url = this.$route.query.to;
        console.log(this.$route)
        window.localStorage.setItem("userInfor",JSON.stringify(userData))
        this.$router.push({name:url})
      }
    }
  },
  components: {
    footerNav
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.mainbox{
  background: #f7f7f7;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  display: -webkit-flex;
  flex-direction: column;
  .section{
    flex:1;
    overflow-y: scroll; 
    background: #fff;
    .header{
      background: #fff9f3;
      height:.32rem;
      line-height: .32rem;
      text-align: center;
      color: #991f33;
      font-size: .12rem;
    }
    .mess{
      padding:0 3%;
      box-sizing:border-box;
      .cle{
        height: .5rem;
        line-height: .7rem;
        border-bottom: 1px solid #ccc;
        input{
          background: #fff;
          border: none;
        }
        .c_red{
          color: #991f33;
        }
      }
      .loging{
        text-align: center;
        line-height: .3rem;
        background: #991f33;
        margin-top: .3rem;
        color:#fff;
      }
    }
  }
}
.form-send{
  float: right;
  color:#991f33;
}
.cls{
  display: -webkit-box;
}
input{
  webkit-box-flex-:1;
}
.form-send-time{
  color: #666;
}

</style>
