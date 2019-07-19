<template>
    <div class="quan">
       <div class="header">
          <Installhead :headtitle="listtitle" :himg="himg" ></Installhead>
        </div> 
        <h4>{{title}}</h4>

            <form action="">
                <div class="input"> 
                    <input type="text" placeholder="请填写邮箱" class="text">
                    </div>
               <div @click="funtest()">
                <input type="submit" value="获 取 验 证" class="submit" >
                </div>
            </form>

            <div class="dl" @click="fun1()">
                {{txt}}
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
      Installhead ,
      footbar 
    },
    data(){
        return{
            himg:"../../static/images/w/b1a.png",
           listtitle:"注册",
           title:"注册春雨账户",
           txt:"账号密码登录",
           
        }
    },
    methods: {
       fun1(){
            this.$router.push({path:"/denglu"})
        },
         funtest(){
            this.$router.push({path:"/test"})
        },
    },
}
</script>
<style scoped>
.header{
    border-bottom: 1px solid #c1bebe;
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
    margin-top: 20px; 
    color: white;
    font-size: 16px;
}
.dl{
    width: 100px;
    margin:40px auto;
    color: #20c02d;
    font-size: 15px;
}

</style>
