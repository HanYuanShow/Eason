<template>
    <div class="quan">
       <div class="head">
           <Installhead :himg="himg" :headtitle="listtitle"></Installhead>
           </div> 
           <div class="list" f>
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
           </div>
 
    </div>
</template>
<script>
import Installhead from "../components/Install/Installhead"
import personinformasationlist from "../components/personinformation/personinformasationlist"


export default {
    components:{
        Installhead,
        personinformasationlist
    },
    data(){
        return{
             himg:"../../static/images/w/b1a.png",
            listtitle:"个人信息",
            arr:[
                {title:"头像",value:"放图片"},
                {title:"昵称",value:"放昵称"},
                {title:"手机号",value:"放手机号码"},
                {title:"春雨id",value:"id"},

            ],
        }
    },
    methods: {
        mounted() {
                
                },
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
</style>
