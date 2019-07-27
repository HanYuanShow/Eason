<template>
    <div>
        <div class="header">
          <Installhead :headtitle="listtitle" :himg="himg" ></Installhead>                  
        </div>
        <h4>{{title}}</h4>
        <form action="">
                <div class="input"> 
                    <input type="text" placeholder="请填写手机号" class="text" v-model="phone" maxlength="11">
                    </div>
               
                <input type="button" value="获 取 验 证" class="submit" @click="funget()">
            </form>

            <div class="dl" @click="fundev()">
                       {{txt}}                    
            </div>
    </div>
</template>
<script>
import Installhead from "../components/Install/Installhead"

export default {
    components:{
        Installhead,
       

    },
    data(){
        return{
            himg:"../../static/images/w/b1a.png",
            listtitle:"忘记密码",
            title:"填写你注册时的手机号",
            txt:"手机号已停用？",
            phone:"",
         show: false,     
        }
    },
    methods: {
        funget(){

             var regPhone= /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
                if(this.phone==""){
                    this.$toast("请输入您注册时的手机号")
                }else if(!regPhone.test(this.phone)){
                    this.$toast("你输入的手机号格式不正确")
                }
                  var param=new URLSearchParams();
        this.axios({
                    url:"http://47.95.140.83:8181/user/ByPhone",
                    method:"post",
                    params:{
                        userPhone:this.phone
                      }
                    }).then((ok)=>{
                        if(ok.data==1){
                            this.$router.push({path:"/Resetpasswordauthentication"})
                        }
                    })
               
         },
         fundev(){

              this.$dialog.confirm({
             title: '拨打客服电话',
            message: '工作时间9:00~19:00'
            }).then(() => {
                x
            }).catch(() => {
    
                    }) 
         }
        
    },

    

}
</script>
<style scoped>
.header{
    border-bottom: 1px solid #dfdddd;
}
h4{
    width: 100%;
    text-align: center;
     margin-top: 70px;
    letter-spacing:3px
}
form{
    width: 100%;
    display: block;

}
form input{
    display: block;
    /* text-align:center; */
}
.input{
    width:85%;
    height: 40px;
    border: 1px solid #dddcdc;
    margin:0 auto;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

}
.text{
    width: 120px;
    height:30px;
    text-indent: 20px;
    border: none;
    caret-color:#20c02d;
}
.submit{
   width:86%;
    height: 40px;
    border: none;
    margin:0 auto;
    background: #20c02d; 
    margin-top: 15px; 
    color: white;
    font-size: 16px;
}
.dl{
    width: 150px;
    text-align: center;
    margin:30px auto;
    color: #20c02d;
    font-size: 15px;
}
</style>
