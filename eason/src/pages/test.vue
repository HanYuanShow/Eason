<template>
    <div>
        <div class="header">
          <Installhead :headtitle="listtitle" :himg="himg" ></Installhead>                  
        </div>
        <h4>{{title}} （邮箱号）</h4>
        <form action="">
                <div class="input"> 
                    <input type="text" placeholder="验证码" class="text">
                    </div>
               <div @click="funpass()">
                  
                 <input type="submit" value="注册" class="submit">

                </div>
            </form>

            <div class="dl" @click="funstop()">
                <!-- {{txt}} -->
                <!-- <van-count-down :time="time">
                    <template v-slot="timeData">
                        <span class="item">{{ timeData.hours }}</span>
                        <span class="item">{{ timeData.minutes }}</span>
                        <span class="item">{{ timeData.seconds }}</span>
                    </template>
                </van-count-down> -->
                <van-count-down
                    :time="30"
                    format="DD 天 HH 时 mm 分 ss 秒"
                    />
                       
            </div>
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
            listtitle:"验证手机号",
            title:"验证已发至到",
            // txt:"点击重新发送验证"
        }
    },
    methods: {
        
         funpass(){
            this.$router.push({path:"/password"})
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
    width: 80px;
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
