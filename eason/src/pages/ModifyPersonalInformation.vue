<template>
<div class="quan">
    <div class="header">
          <Installhead :headtitle="listtitle" :himg="himg" ></Installhead>                  
    </div>
    <form action="">
        <div class="content1">
            <div class="left">
                {{title}}
            </div>
            
            <div class="reight">
                <input type="text" placeholder="关系" class="name">
            </div>
        </div>


        <div class="content1">
            <div class="left">
                {{title1}}
            </div>
            
            <div class="reight">
                <input type="text" placeholder="姓名"  class="name">
            </div>
        </div>


        <div class="content1">
            <div class="left">
                {{title2}}
            </div>
            
            <div class="reight">
                <input name="sex" type="radio" checked="checked"/>男   
                 <input name="sex" type="radio" />女
            </div>
        </div>

        <div class="content1">
            <div class="left">
                {{title3}}
            </div>
            
            <div class="reight">
                <input type="text" placeholder=" " class="infor">
            </div>
        </div>

         <div class="content1">
            <div class="left">
                {{title4}}
            </div>
            
            <div class="reight">
                <input type="text" placeholder=" " class="infor">
            </div>
        </div>
        
        <input type="submit" value="保 存" class="submit">

    </form>
</div>
</template>
<script>
import Installhead from "../components/Install/Installhead"
// import installnav from "../components/Install/installnav"


export default {
    components:{
        Installhead,
        // installnav
    },
    data(){
        return{
             himg:"../../static/images/w/b1a.png",
            listtitle:"修改个人档案",
            arr:[
                {title:"与您的关系" ,action:"昵称"},
                {title:"隐私协议" ,},

            ],
            title:"与您的关系",
            title1:"姓名",
            title2:"性别",
            title3:"出生日期",
            title4:"手机号码"



            
        }
    }
}
</script>
<style scoped>
.quan{
      position: fixed;
        width: 100%;
        height:100%;
        top: 0px;
        background-color: #f7f7f7;
}
.header{
    border-bottom: 1px solid #e9e6e6;
}
.content1{
    display: flex;
    width: 100%;
    height: 40px;
    background: white;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e4e2e2;
}
.left{
    margin-left: 15px;
}
.reight{
    margin-right: 15px;
}
.reight input{
    text-align: center;
    /* width: 40px; */
    /* height: 20px; */
    border:none;
}
.submit{
    width: 75%;
    height: 35px;
    background: #43e263;
    border: none;
    display: block;
    margin:20px auto;
    font-size: 18px;
    color: white;
}
.infor{
    width: 100px;
}
.name{
    width: 60px;
}
</style>

