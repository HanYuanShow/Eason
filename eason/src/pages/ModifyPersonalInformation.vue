<template>
    <div class="header">
          <Installhead :headtitle="listtitle" :himg="himg" ></Installhead>          
        
    </div>
</template>
<script>
import Installhead from "../components/Install/Installhead"

export default {
    components:{
        Installhead
    },
    data(){
        return{
             himg:"../../static/images/w/b1a.png",
            listtitle:"修改个人档案",
        }
    }
}
</script>
<style scoped>
/* body{
    background: pink;
} */
.header{
    border-bottom: 1px solid #e9e6e6;
}
</style>

