<template>
    <div>
        <div class="header">
          <Installhead :headtitle="listtitle" :himg="himg" ></Installhead>                  
        </div>
        <h4>{{title}}</h4>
        <form action="">
                <div class="input"> 
                    <input type="password" placeholder="密码" class="text" v-model="phone" maxlength="16">
                </div>
                <div class="input"> 
                    <input type="password" placeholder="确认密码" class="text" v-model="phone1" maxlength="16">
                </div>
               
                <input type="button" value="确定重置" class="submit" @click="funget()">
            </form>

            <div class="dl" @click="fundev()">
                         
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
            listtitle:"重新设置密码",
            title:"重新设置你的密码",
            phone:"",
            phone1:"",
              show: false
            
        }
    },
    methods: {
        funget(){
                if(this.phone==""){
                    this.$toast("输入你的新密码")
                }else if(this.phone1==""){
                    this.$toast("请确认你的密码")
                }else if(this.phone!=this.phone1){
                     this.$toast("你输入的密码不一致")
                }
                    var param=new URLSearchParams();
        this.axios({
                    url:"http://10.12.156.148:8181/user/updatePwPhone",
                    method:"post",
                    params:{
                        userPassword:this.phone
                      }
                    }).then((ok)=>{
                        if(ok.data==1){
                              this.$toast("修改成功请重新登录")
                            this.$router.push({path:"/denglu"})
                        }
                    })


                // else{
                //       this.$router.push({path:"/denglu"})
                // }
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
    margin-top: 30px;

}
form input{
    display: block;
    text-align:center;
}
.input{
    width:85%;
    height: 40px;
    border: 1px solid #dddcdc;
    margin:0 auto;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

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
