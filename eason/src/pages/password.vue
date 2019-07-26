<template>
    <div>
        <div class="header">
          <Installhead :headtitle="listtitle" :himg="himg" ></Installhead>                  
        </div>
        <h4>{{title}}</h4>
        <form action="">
                <div class="input"> 
                    <input type="password" placeholder="密码" class="text" v-model="pass">
                    </div>

                <input type="button" value="开始使用" class="submit"  @click="fun3()">
            </form>

    </div>
</template>
<script>
import Installhead from "../components/Install/Installhead"
// import { Dialog } from 'vant'
export default {
    components:{
        Installhead,
        //  [Dialog.Component.name]: Dialog.Component,

    },
    data(){
        return{
            himg:"../../static/images/w/b1a.png",
            listtitle:"完善账户",
            title:"继续完善账户",
            pass:"",
            // txt:"点击重新发送验证"
        }
    },
    methods: {
        
         fun3(){
             var regex=/^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/g;
            if(this.pass==""){
                 this.$toast("请设置您的密码")
             }else if(!regex.test(this.pass)){
                 this.$toast("你的密码必须是6-16位数字，字母组成")
             }
                 var param=new URLSearchParams();
                    param.append("password",this.pass);
                    this.axios({
                        url:"http://10.12.156.148:8181/user/szPassword",
                        method:"post",
                        data:param,
                    }).then((ok)=>{
                            console.log(ok)
                             this.$toast("注册成功请登录")
                             this.$router.push({path:"/denglu"})
                    })      
        },
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
    width: 150px;
    height:30px;
    text-indent: 20px;
    border: none;
    caret-color:#20c02d;
    text-align: center;
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
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #1989fa;
}
</style>
