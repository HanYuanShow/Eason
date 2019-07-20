<template>
    <div class="quan">
        <div class="header">
          <Installhead :himg="himg" :headtitle="listtitle"></Installhead>            
        </div>

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
            listtitle:"孕产信息",
            
            
        }
    },
    methods: {
        
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


</style>
