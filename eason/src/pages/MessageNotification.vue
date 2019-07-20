<template>
    <div class="quan">
        <div class="header">
          <Installhead :himg="himg" :headtitle="listtitle"></Installhead>            
        </div>
        <div class="center">
            <MessageNotificationlist :arrb="arr[0]"></MessageNotificationlist>
            <MessageNotificationlist :arrb="arr[1]"></MessageNotificationlist>
            <MessageNotificationlist :arrb="arr[2]"></MessageNotificationlist>
            <MessageNotificationlist :arrb="arr[3]"></MessageNotificationlist>
            <MessageNotificationlist :arrb="arr[4]"></MessageNotificationlist>



        </div>
    </div>
</template>
<script>
import Installhead from "../components/Install/Installhead"
import MessageNotificationlist from "../components/MessageNotification/MessageNotificationlist"


export default {
    components:{
        Installhead,
        MessageNotificationlist
    },
    data(){
        return{
            himg:"../../static/images/w/b1a.png",
            listtitle:"消息通知",
            arr:[
                {title:"咨询更新回复",text:"医生有新回复，服务状态有更新" ,boen:true},
                {title:"关注医生消息",text:"关注医生发送了优惠券，话题等",boen:true},
                {title:"新闻直播推送",text:"有好的健康文章，直播",boen:true},
                {title:"健康计划姨妈助手提醒",text:"",boen:true},
                {title:"通知插件",text:"",boen:true},
                
            ],
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
.center{
    margin-top: 18px;
}
</style>
