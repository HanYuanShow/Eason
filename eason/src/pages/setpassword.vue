<template>
    <div>
        <div class="header">
          <Installhead :headtitle="listtitle" :himg="himg" ></Installhead>                  
        </div>
        <h4>{{title}}</h4>
        <form action="">
                <div class="input"> 
                    <input type="text" placeholder="请填写邮箱" class="text">
                    </div>
               
                <input type="submit" value="获 取 验 证" class="submit" @click="funget()">
            </form>

           
    </div>
</template>
<script>
import Installhead from "../components/Install/Installhead"
// import { Dialog } from 'vant'
export default {
    components:{
        Installhead,
       

    },
    data(){
        return{
            himg:"../../static/images/w/b1a.png",
            listtitle:"重新设置密码",
            title:"重新设置你的密码",
            // txt:"手机号已停用？"
        }
    },
    methods: {
        funget(){
            this.$router.push({path:"/getyanzheng"})
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
