<template>
    <div>
        <div class="header">
          <Installhead :headtitle="listtitle" :himg="himg" ></Installhead>                  
        </div>
        <h4>{{title}}</h4>
        <form action="">
                <div class="input"> 
                    <input type="password" placeholder="密码" class="text">
                    </div>
                    <div class="input1"> 
                    <input type="password" placeholder="确认密码" class="text">
                    </div>
               
                <input type="submit" value="确认重置" class="submit" @click="funset()">
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
            listtitle:"忘记密码",
            title:"短信已发至",
            // txt:"点击重新发送验证"
        }
    },
    methods: {
        funset(){
            this.$router.push({path:"/"})
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
.input1{
    width:85%;
    height: 40px;
    border: 1px solid #dddcdc;
    margin:0 auto;
    margin-top: 20px;
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
    text-indent: 30px;
     /* text-align: center; */
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
