<template>
    <div class="quan">
        <div class="header">
            <Installhead :headtitle="title" :himg="himg"></Installhead>
        </div>
        <div class="show" v-for="(v,i) in content" :key="i">
            <van-image fit="fill" height="60" width="60" :src="v.img" />
            <div>
                 <p>{{v.title}}</p>
             <p>{{v.date}}</p>
            </div>
           
        </div>
        
        <!-- <div class="section">
            <van-tabs v-model="active" title-active-color="#6bce72" line-width="50%" line-hight="2px"
            :animated="ceshi" color = "#6bce72">
            <van-tab title="科普">
               <kong :kongtext="kongtext" :kongimg="kongimg">
                   
               </kong>

          
               
            </van-tab>
            <van-tab title="问答">
               <kong :kongtext="kongtext" :kongimg="kongimg"></kong>
                
            </van-tab>
            </van-tabs>
        </div> -->
    </div>
</template>

<script>
import Installhead from "../components/Install/Installhead"
import kong from "../components/inviteSomeOnce/kong"


export default {
    components:{
       Installhead ,
       kong,
       userid:'',
    },
    data(){
        return{
             active: 2,
            title:"我的收藏",
              himg:"../../static/images/w/b1a.png",
              img:"../../static/images/w/ant.png",
              kongtext:"暂 无 邀 请 记 录",
           kongimg:"../../static/images/w/ant.png",
           active:"",
           ceshi:true,
                 content:{},
        }
    },
    created() {
    
                  //回踢效果
            this.userid = localStorage.getItem("userId");
            console.log(this.userid)

            if( this.userid == null){
            this.$router.push("/logon")
            }else if(this.userid!==null){
                            this.axios({
                        url:"http://47.95.140.83:8181/news/myCollectNews/50" ,
                        method:"get"
                    }).then((ok)=>{
                        this.content = ok.data  
                        console.log(this.content)
                    })
            }    
         
        }
    

}
</script>
<style scoped>
.show{
    display:flex;
    width: 100%;
    height: 80px;
    align-items: center;
    padding: 10px;
    border-bottom: 1px solid gainsboro;
}
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
