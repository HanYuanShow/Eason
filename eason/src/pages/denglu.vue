<template>
    <div class="quan">
       <div class="header">
          <Installhead :headtitle="listtitle" :himg="himg" ></Installhead>          
        </div> 
        <h4>{{title}}</h4>

        <form action="">
            <div class="text">
                <input name="phone"  type="phone" placeholder="输入手机号"  v-model="phone"/>
            </div>
            <div class="pass" >
                <input type="password"  placeholder="密 码" v-model="password"/>
            </div>
            <input type="button" value="登 陆"  class="longin" @click="sendcode()">
        </form>
        <div class="sect">
            <p  @click="funnew()">{{newzhuce}}</p>
            <p @click="funforfet()">{{nopass}}</p>
        </div>
            
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
        Installhead,
        footbar
   },
   data(){
       return{
            himg:"../../static/images/w/b1a.png",
            listtitle:"登录",
            title:"登录春雨医生",
            newzhuce:"新用户注册",
            nopass:"忘记密码?",
            phone:'',
            password:'',
           
       }
   },
   
   methods: {
        funnew(){
            this.$router.push({path:"/logon"})
        },
        funforfet(){
            this.$router.push({path:"/forgetpass"})
        },
        sendcode(){
//    var regPhone= /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
    if(this.phone==''){
    this.$toast('请输入手机号') 
    }else if(this.password ==''){
     this.$toast('密码不能为空');
    }
        var param=new URLSearchParams();
        this.axios({
                    url:"http://10.12.156.148:8181/user/loadUser",
                    method:"post",
                    params:{
                        userPhone:this.phone,
                        userPassword:this.password 
                    }
                    }).then((ok)=>{
                     console.log(ok)
                         console.log(ok.data)
                     if(ok.data==''){
                      this.$toast("您输入的用户名或密码有误")   
                     }else {
                         this.$router.push({path:"/personalCentter",query:{id:ok.data}})
                          this.$toast("登陆成功")
                            localStorage.setItem('userImg',ok.data.userImg)
                             localStorage.setItem('userId',ok.data.userId)
                            localStorage.setItem('userPassword',ok.data.userPassword)
                             localStorage.setItem('userNickname',ok.data.userNickname)
                             localStorage.setItem('userPhone',ok.data.userPhone)


                             localStorage.setItem('userBalance',ok.data.userBalance)
                             localStorage.setItem('Coupon',ok.data.coupon)
                             localStorage.setItem('Goldcoin ',ok.data.goldcoin)




                     }
                     

                    })      
     },
   },
}
</script>
<style scoped>

.header{
    border-bottom: 1px solid #f1f1f1;
}
h4{
    text-align: center;
    margin-top: 70px;
    letter-spacing:3px
}
from{
    width: 100%;
}
.text{
    width: 85%;
    height: 40px;
    margin: 0 auto;
    border: 1px solid #d5d3d5;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
}
.text input{
    width: 150px;
    height: 30px;
    display: block;
    letter-spacing:2px;
    border: none;
caret-color:#20c02d;
text-align: center;

    
}

.mask{
 width: 150px;
 height: 40px;
background:#b0adad;
opacity: .5;
position:fixed;
top: 75%;
left: 32%;
font-size: 19px;
line-height: 40px;
text-align: center;

}
.pass{
  width: 85%;
    height: 40px;
    margin: 0 auto;
    border: 1px solid #d5d3d5  ;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 15px;
}
.pass input{
    width: 110px;
    height: 30px;
    display: block;
    text-indent: 30px;
    border: none;
    caret-color:#20c02d;
}
.longin{
    width: 86%;
    height: 40px;
    margin: 15px auto;
    display: block;
    border: none;
    background: #20c02d;
    color:white;
    font-size: 17px;

}
.sect{
    width: 85%;
    display: flex;
    justify-content: space-between;
    margin:0 auto;
    color: #20c02d;
    font-size: 17px;
    height: 35px;
    align-items: center;

    
}
.sect p{
    line-height: 0px;
}
.footer{
    margin-top: 20px;
}
</style>
