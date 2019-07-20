<template>
    <div class="quan">
        <div class="header">
          <Installhead :himg="himg" :headtitle="listtitle"></Installhead>            
        </div>

        <form action="">
            <div class="oldpass">
                <input type="password" placeholder="当前密码">
            </div>

             <div class="oldpass">
                <input type="password" placeholder="新密码（6-20位）">
            </div>

             <div class="oldpass">
                <input type="password" placeholder="确认密码">
            </div>

            <input type="submit" value="确定修改" class="sbm">
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
