<template>
       <div class="header">
            <div class="home">
                <img :src="himg" alt=""  @click="func()">
                <span>{{home}}</span>
            </div>
            <div class="p">
                {{dig}}
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
        dig:String,

    },
    methods: {
        func(){
             this.$router.push("/personalCentter")
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
.p{
    color: #6bce72;
    font-size: 25px;
}
.home img{
width:15px ;
height: 26px;
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
      font-size: 16px;
      color: #6bce72;
      width: 65px;
}

</style>
