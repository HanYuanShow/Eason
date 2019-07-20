<template>
<div class="quan">
    <div class="header">
         <Installhead :headtitle="listtitle" :himg="himg" :home="home"></Installhead>
      </div>

      <div class="conter">
          <Invitepeacher :imgs="imgs"></Invitepeacher>
      </div>
      <div class="footer">
          <kong :kongtext="kongtext" :kongimg="kongimg"></kong>
      </div>
</div>
</template>
<script>
import Installhead from "../components/Install/Installhead"
import Invitepeacher from "../components/inviteSomeOnce/invitepeacher"
import kong from "../components/inviteSomeOnce/kong"

export default {
   components:{
      Installhead ,
      Invitepeacher,
      kong
   } ,
   data(){
       return{
           himg:"../../static/images/w/b1a.png",
           listtitle:"意见反馈",
           home:"返回",
           imgs:"../../static/images/w/av3.png  ",
           kongtext:"暂 无 邀 请 记 录",
           kongimg:"../../static/images/w/ant.png"
       }
   },
}
</script>
<style scoped>
.quan{
      position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #f7f7f7;
}
</style>

