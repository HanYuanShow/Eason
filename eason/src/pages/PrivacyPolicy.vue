<template>
    <div class="quan">
        <div class="header">
          <Installhead :himg="himg" :headtitle="listtitle"></Installhead>            
        </div>
        <h3>隐私政权</h3>
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
            listtitle:"隐私政权",
            
            
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
h3{
    margin-top: 50px;
    width: 100%;
    line-height: 40px;
    text-align: center;
    color: rgb(75, 75, 127)
}

</style>
