<template>
    <div class="quan">
        <div class="header">
          <Installhead :himg="himg" :headtitle="listtitle"></Installhead>            
        </div>

        <div class="passcenter">
            <div class="password">
                 <p>请输入您的密码</p>
                <div class="passlst">
               
                <van-password-input
                    :value="value"
                    :length="4"
                    :gutter="15"
                    info="请输入四位数密码"
                    @focus="showKeyboard = true"
                    />
                    <van-number-keyboard
                        :show="showKeyboard"
                        @input="onInput"
                        @delete="onDelete"
                        @blur="showKeyboard = false"
                        />

                    </div>

                    <div class="foter">
                        {{ppp}}
                    </div>
            </div>
            <img :src="imgsfoot" alt="">
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
            listtitle:"创建本地密码",
            imgsfoot:"../../static/w/b68.9.png",
            imghaed:"../../static/w/",
                  value: '',
            showKeyboard: true,
            ppp:"创近密码后，已登录用户每次进入系统时都要求输入密码，以保个人隐私",
            
        }
    },
    methods: {
        onInput(key) {
      this.value = (this.value + key).slice(0, 6);
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
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

.passcenter{
    width: 90%;
    border-top:1px solid #777777;
    margin-top: 15px;
    margin: 20px auto;
}
.password{
    padding-top: 20px;
    width: 97%;
    height: 220px;
    border-left: 0.5px solid rgb(171, 170, 170);
    border-right: 0.5px solid rgb(184, 184, 184);
    margin: 0 auto;
    background: ffffff;

}
.password p{
    text-align: center;
    color: #777777;
    margin-top: 13px;
}
.passcenter img{
    display: block;
   width: 88.6%;
   margin-left:0.7%;
   /* left: 5%; */
   border: none;
   position: fixed;

   /* height: 200px; */
}
.passlst{
margin-top: 15px;
}
.foter{
    width: 88%;
    padding: 15px ;
    text-align: center;
    margin:25px auto;
    border-top:  1px solid #d0cdcd;
    font-size: 14px;
    color: #c9c8c8;
    
}
</style>
