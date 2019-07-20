<template>
    <div class="quan">
       <div class="header">
          <Installhead :headtitle="listtitle" :himg="himg" ></Installhead>          
        </div> 
        <h4>{{title}}</h4>

        <form action="">
            <div class="text">
                <input type="text" placeholder="请输入用户名">
            </div>
            <div class="pass" >
                <input type="password"  placeholder="密 码">
            </div>
            <input type="submit" value="登 陆"  class="longin" @click="funcenter()">
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
            nopass:"忘记密码?"
       }
   },
   
   methods: {
        funnew(){
            this.$router.push({path:"/logon"})
        },
        funforfet(){
            this.$router.push({path:"/forgetpass"})
        },
         funcenter(){
              this.$router.push({path:"PersonalCenter"})
          
        },
   },
}
</script>
<style scoped>
.quan{
    background: white;
    width: 100%;
    height: 100%;
}
.header{
    border-bottom: 1px solid #e2dfdf;
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
    width: 110px;
    height: 30px;
    display: block;
    letter-spacing:2px;
    border: none;
caret-color:#20c02d;

    
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
    
}
.sect p{
    line-height: 0px;
}
</style>
