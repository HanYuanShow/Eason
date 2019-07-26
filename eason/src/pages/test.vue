<template>
    <div>
        <div class="header">
          <Installhead :headtitle="listtitle" :himg="himg" ></Installhead>                  
        </div>
        <h4>{{title}} （手机号）</h4>
        <form action="">
                <div class="input" > 
                    <input type="number" placeholder="验证码" class="text" v-model="number" maxlength="4"/>
                    </div>
               <div>
                  
                 <input type="button" value="注册" class="submit"  @click="funpass()">

                </div>
        </form>

            <div class="dl">
               <span v-show="show" @click="getnum">获取验证码</span>
               <span v-show="!show" class="count">{{count}} 秒后重新获取验证码</span>
            </div>


            <div class="foter">
                <p class="p1">点击注册表示您同意</p>
                <p class="p2">《春雨医生服务条款及协议》</p>

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
            listtitle:"验证手机号",
            title:"验证已发至到",
            number:"",
            show: true,
             count: '',
            timer: null,
            // activedCode:""
          
        }
    },

   

    methods: {
        
         funpass(){
        
            if(this.number==""){
                 this.$toast('验证码不能为空')
            } 
             this.axios({
                url:"http://10.12.156.148:8181/user/yanZheng?code="+this.number,
                method: "get",
                 }).then((ok)=>{  
                     console.log(ok);
                      if(ok.data ==1){ 
                            this.$router.push({path:"/password"})
                     }else{
                           this.$toast('你输入得验证码不正确')
                      }

               })
            
        },
        getnum(){
             
        const temcount = 60;
     if (!this.timer) {
       this.count = temcount;
       this.show = false;
       this.timer = setInterval(() => {
       if (this.count > 0 && this.count <= temcount) {
         this.count--;
        } else {
         this.show = true;
         clearInterval(this.timer);
         this.timer = null;
        }
       }, 1000)
      }
        }
    }
}
</script>
<style scoped>
.header{
    border-bottom: 1px solid #f5f3f3;
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
    width: 300px;
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
.foter{
    width: 100%;
    height: 60px;
    position: fixed;
    bottom: 8px;
}
.foter p{
    text-align: center;
    font-size: 15px;
    height: 45%;
}
.p2{
    color: #20c02d;
}

</style>
