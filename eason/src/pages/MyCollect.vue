<template>
    <div class="quan">
        <div class="header">
            <Installhead :headtitle="title" :himg="himg"></Installhead>
        </div>
        <div class="section">
            <van-tabs v-model="active" title-active-color="#6bce72" line-width="50%" line-hight="2px"
            animated=true color = "#6bce72" swipeable	=true
            >
            <van-tab title="科普">
               <kong :kongtext="kongtext" :kongimg="kongimg"></kong>
            </van-tab>
            <van-tab title="问答">
               <kong :kongtext="kongtext" :kongimg="kongimg"></kong>
                
            </van-tab>
            </van-tabs>
        </div>
    </div>
</template>

<script>
import Installhead from "../components/Install/Installhead"
import kong from "../components/inviteSomeOnce/kong"


export default {
    components:{
       Installhead ,
       kong
    },
    data(){
        return{
             active: 2,
            title:"我的收藏",
              himg:"../../static/images/w/b1a.png",
              img:"../../static/images/w/ant.png",
              kongtext:"暂 无 邀 请 记 录",
           kongimg:"../../static/images/w/ant.png"
        }
    },
//     methods: {
//     onClick(name, title) {
//       this.$toast(title);
//     }
//   },

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
.header{
    border-bottom: 1px solid #cecdcd;
}
.content{
    margin:140px;
}
.img img{
    width: 70px;
    height: 70px;

}
.content p{
    font-size: 15px;
    color: rgb(164, 160, 160);
    width: 100%;
}
</style>
