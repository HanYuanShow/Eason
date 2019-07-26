<template>
    <div class="quan">
        <div class="header">
          <Installhead :himg="himg" :headtitle="listtitle"></Installhead>            
        </div>

        <form action="">
            <div class="oldpass">
                <input type="password" placeholder="当前密码" v-model="passold">
            </div>

             <div class="oldpass">
                <input type="password" placeholder="新密码（6-20位）" v-model="passnew">
            </div>

             <div class="oldpass">
                <input type="password" placeholder="确认密码" v-model="passnewend">
            </div>

            <input type="button" value="确定修改" class="sbm" @click="soure()">
        </form>
        
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
            listtitle:"修改密码",
            passold:"",
            passnew:"",
            passnewend:"",
            userId:"",
      
            
        }
    },
    methods: {
        soure(){
                 this.userId=localStorage.getItem('userId');
                // this.passold=localStorage.getItem('userPassword');
                var reg=/^[A-Za-z]+[0-9]+[A-Za-z0-9]*|[0-9]+[A-Za-z]+[A-Za-z0-9]*$/g;
            if(this.passold==""){
                  this.$toast("请输入你的密码")
            }else if(this.passnew==''){
                 this.$toast("请输入新密码")
            }else if(this.passnewend==''){
                 this.$toast("请确认你的密码")
            }else if(!reg.test(this.passnew)){
                 this.$toast("新密码必是6-20位数字字母组成")
            }else if(this.passnew!=this.passnewend){
                this.$toast("你输入的密码不一致")
            }

              var param=new URLSearchParams();
        this.axios({
                    url:"http://10.12.156.148:8181/user/updatePassword",
                    method:"post",
                    params:{
                        userId:this.userId,
                        userPassword:this.passold,
                        newPassWord:this.passnew,                       
                    }
                    }).then((ok)=>{
                     console.log(ok)
                     if(ok.data== 0){
                        this.$toast("旧密码输入错误");                   
                     }else{
                          this.$toast("修改成功请重新登录");
                          this.$router.push({path:"/denglu"})
                     }
                     
                     
                 })     
         }
    },
    created() {
   

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
.oldpass{
    width: 90%;
    height: 50px;
    background: white;
    margin: 15px auto;
    display: flex;
    align-items: center;
       
}
.oldpass input{
    width: 150px;
    height: 25px;
    margin-left: 15px;
    text-indent: 5px;
    caret-color:#20c02d;
    border: none;
    letter-spacing:2px;


}
.sbm{
    width: 91%;
    height: 50px;

    background: #20c02d;
    color: white;
    display: block;
    margin: 25px auto;
    border: none;
    letter-spacing:2px;
}
</style>
