<template>
       <div class="header">
            <div class="home" @click="func()">
                <img :src="himg" alt="">
                <span>{{home}}</span>
            </div>
            <div class="title">
              {{headtitle}}
            </div>
            <div class="reght">
               {{righttitle}}
            </div>
        </div> 
</template>
<script>
export default {
    data(){
        return{
            
        }
    },
    props:{
        himg:String,
        headtitle:String,
        righttitle:String,
        home:String,

    },
    methods: {
        func(){
             this.$router.go(-1 )
        }
    },
}
</script>
<style scoped>
.header{
    width: 100%;
    height: 45px;
    background:white;
    display:flex;
    align-items: center;
    justify-content: space-between;
}
.home{
    width:80px;
    display: flex;
}
.home img{
width:12px ;
height: 24px;
margin-left:15px;
}
.home span{
    color: #6bce72;
    font-size: 17px;
    display: block;
    margin-left: 5px;
}
.title{
font-size: 16px;
width: 200px;
text-align: center;
}
.reght{
     margin-right:10px;
      font-size: 15px;
      color: #6bce72;
      width: 65px;
}

</style>
