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
                <input type="password" placeholder="密码">
            </div>
            <input type="submit" value="下一步" class="sub"  @click="fund()">
        </form>
        <p @click="fun1">{{forget}}</p>
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
            listtitle:"账号验证",
            txt:"请输入密码",
            forget:"忘记密码?"
            
        }
    },
    methods: {
        fun1(){
            this.$router.push({path:"/forgetpass"})
        },
        fund(){
             this.$router.push({path:"/newphone"})
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
    width: 80px;
    height: 25px;
    caret-color:#20c02d;
    text-indent: 20px;
    border: none;
    letter-spacing:3px;


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
