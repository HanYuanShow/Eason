<template>
    <div class="quan">
       <div class="header">
          <Installhead :headtitle="listtitle" :himg="himg" ></Installhead>
        </div> 
        <h4>{{title}}</h4>

            <form action="" >


                    <div class="ipt">
                        <input name="phone"  type="phone" placeholder="手机号" v-model="phone"/>
                    </div>
           
                    <button type="button" @click="sendcode()"  class="btns">{{btntxt}}</button>
                  
             
            
            </form>
            <div class="dl"  @click="fun1()">{{txt}}</div>
          <div class="footer">
              <footbar></footbar>
          </div>
    </div>
</template>
<script>
import Installhead from "../components/Install/Installhead"
import footbar from "../components/logon/footbar"


export default {
   
    components:{
      Installhead ,
      footbar 
    },
    data(){
        return{
            himg:"../../static/images/w/b1a.png",
           listtitle:"注册",
           title:"注册春雨账户",
           txt:"账号密码登录",
            mgs:"",
            disabled:false,
            time:0,
            btntxt:"获取验证码",
            phone:'',
            bool:"",
            
        }
    },
    methods: {
       fun1(){
            this.$router.push({path:"/denglu"})
        },
          //验证邮箱号码部分
   sendcode(){
   var regPhone= /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
    if(this.phone==''){
    this.$toast('请输入手机号');
    }else if(!regPhone.test(this.phone)){
   
     this.$toast('手机号格式不正确');
    }else{
        
          this.axios({
                    url:"http://10.12.156.148:8181/user/registerYZ?num="+this.phone,
                    method: "get",  
                    }).then((ok)=>{
                        console.log(ok)
                        if(ok.data == 0){
                            this.$toast('手机号已经注册');
                        }else{
                            this.$router.push("/test")
                        }
                    
                    })
                
                 }
            },        
      },

}
</script>
<style scoped>
.header{
    border-bottom: 1px solid #eeecec;
}
.quan{
    background:white;
}
h4{
    width: 100%;
    text-align: center;
    margin-top: 80px;
    letter-spacing:3px;
    
}

.mask{
 /* width: 150px;
 height: 40px;

opacity: .5;
position:fixed;
top: 65%;
left: 32%;
font-size: 19px;
line-height: 40px;
text-align: center;
color: rgb(179, 4, 4); */

}
.ipt{
    /* margin-top: 30px; */
    width: 88%;
    height: 40px;
    background: white;
    display: block;
    border: 1px solid #dad9d9;
    margin: 20px auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
.ipt input{
    width: 170px;
    height: 25px;
    display: block;
    margin: 0 auto;
    caret-color:#20c02d;
    border: none;
    background: white;
    text-align: center;
}

.btns{
    width: 88%;
    height: 40px;
    background: white;
    display: block;
    border: 1px solid #dad9d9;
    margin: 0 auto;
    margin-top: 15px;
    background: #20c02d;
    color: white;
    font-size: 17px;
       letter-spacing:2px;

}

form{
    width: 100%;
    display: block;

}

.dl{
    width: 100px;
    margin:20px auto;
    color: #20c02d;
    font-size: 15px;
}

</style>
