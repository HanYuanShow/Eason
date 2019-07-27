<template>
    <div class="quan">
        <div class="header">
          <Installhead :himg="himg" :headtitle="listtitle"></Installhead>            
        </div>
        <p>用户协议</p>
        <div class="content">
            <Useragreementlist></Useragreementlist>
        </div>
        
</div>
</template>
<script>
import Installhead from "../components/Install/Installhead"
import Useragreementlist from "../components/useragreement/useragreementlist"

export default {
    components:{
        Installhead,
        Useragreementlist
     
    },
    data(){
        return{
            himg:"../../static/images/w/b1a.png",
            listtitle:"用户协议",
            
            
        }
    },
    methods: {
       
    },
}
</script>

<style scoped>
.header{
    border-bottom: 1px solid #c9c8c8;
    position: fixed;
    top: 0;
}
.quan{
      position: fixed;
        width: 100%;
        height: 100%;
        top: 0px;
        background-color: #f7f7f7;
}
p{
    width: 100%;
    line-height: 35px;
    text-align: center;
    font-size: 17px;
    margin-top: 60px;
}

</style>
