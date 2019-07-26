<template>
    <div class="quan">
       <div class="head">
           <Installhead :himg="himg" :headtitle="listtitle"></Installhead>
           </div> 
           <!-- <div class="list" f>
               <personinformasationlist :arrb="arr[0]"></personinformasationlist>
           </div>
           <div class="list">
               <personinformasationlist :arrb="arr[1]"></personinformasationlist>
           </div>
           <div class="list">
               <personinformasationlist :arrb="arr[2]"></personinformasationlist>
           </div>
           <div class="list">
               <personinformasationlist :arrb="arr[3]"></personinformasationlist>
           </div> -->
           <div class="list">
               <div class="left">
                   头像
               </div>
               <div class="reig">
                   <img :src="getuserIMG" alt="">
               </div>
           </div>

            <div class="list">
               <div class="left">
                  昵称
               </div>
               <div class="reigjh">
                  {{userNickname}}
               </div>
           </div>
 

             <div class="list">
               <div class="left">
                  手机号
               </div>
               <div class="reigjh">
                  {{userPhone}}
               </div>
           </div>
 

 <div class="list">
               <div class="left">
                  春雨编号
               </div>
               <div class="reigjh">
                  {{userId}}
               </div>
           </div>
 
            
    </div>
</template>
<script>
import Installhead from "../components/Install/Installhead"
// import personinformasationlist from "../components/personinformation/personinformasationlist"


export default {
    components:{
        Installhead,
        // personinformasationlist
    },
    data(){
        return{
             himg:"../../static/images/w/b1a.png",
            listtitle:"个人信息",
            arr:[
                
            ],
            getuserIMG:"",
            userNickname:"",
            userPhone:"",
            userId:""

        }
    },
    methods: {
        mounted() {

                },
    },
    created() {
       this.getuserIMG=localStorage.getItem('userImg');
    this.userNickname = localStorage.getItem('userNickname');
    this.userPhone=localStorage.getItem('userPhone');
    this.userId=localStorage.getItem('userId');
    console.log(this.userId)
  
    },

}
</script>
<style scoped>
.head{
    border-bottom: 1px solid #fdfdfd;
}
.quan{
      position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #faf7f7;
}
.list{
    display: flex;
    justify-items: center;
    justify-content: space-between;
    width: 100%;
   padding: 15px;
   background: white;
   font-size: 16px;
   border-top: 1px solid #ebebeb;
   align-items: center;

}
.left{

    width: 70px;
    height: 20px;
    margin-left: 15px;
  
    
}
    .reig{
    margin-right: 30px;
    width: 60px;
    height: 60px;
    background: #ebebeb;
    border-radius: 50%;
    background: url("../../static/images/w/ab7.png")no-repeat center top;
  background-size: 60px 60px;


    
    }
    .reig img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .reigjh{
        line-height: 20px;
        margin-right:40px;
    }
</style>
