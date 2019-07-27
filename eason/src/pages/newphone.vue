<template>
    <div class="quan">
        <div class="header">
          <Installhead :himg="himg" :headtitle="listtitle"></Installhead>            
        </div>
        <div class="title">
            {{txt}}
        </div>
        <form action="">

            <div class="pass">
                <input type="text" placeholder="手机号" v-model="phone">
            </div>
            <input type="button" value="下一步" class="sub"  @click="fund()">
        </form>
        <!-- <p @click="fun1">{{forget}}</p> -->
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
            listtitle:"验证手机号",
            txt:"请输入新手机号",
            // forget:"忘记密码?"
            phone:"",
        }
    },
    methods: {
        fun1(){

            this.$router.push({path:"/forgetpass"})
        },
        fund(){
                  this.userId=localStorage.getItem('userId');
            var regPhone= /^1([38][0-9]|4[579]|5[0-3,5-9]|6[6]|7[0135678]|9[89])\d{8}$/;
            if(this.phone==''){
            this.$toast('请输入手机号');
            }else if(!regPhone.test(this.phone)){
        
            this.$toast('手机号格式不正确');
            }
                this.axios({
                    url:"http://47.95.140.83:8181/user/updateYZ?num="+this.phone,
                    method:"get",
                }).then((ok)=>{
                   if(ok.data==0){
                        this.$toast('手机号已存在');
                   } else{
                       this.$router.push({path:"/getyanzheng"})
                   }
                })              
        }
    },
}
</script>

<style scoped>
.header{
    border-bottom: 1px solid #c9c8c8;
}
.quan{
      position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #f7f7f7;
}
.title{
    text-align: center;
    margin: 20px auto;
    font-size: 16px;
    color: black;
    letter-spacing:2px;

}
.pass{
    width: 93%;
    height: 50px;
    background: white;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
.pass input{
    width: 200px;
    height: 25px;
    caret-color:#20c02d;
    text-indent: 20px;
    border: none;
    letter-spacing:3px;
    text-align: center;


}
.sub{
    width: 94%;
    height: 50px;
    background: #20c02d;
    color: white;
    display: block;
    margin: 17px auto;
    border: none;
    letter-spacing:2.5px;

}
p{
    text-align: center;
    margin: 0 auto;
    color: #20c02d;
    letter-spacing:2.5px;
    width: 100px;


}
</style>
