<template>
    <div class="content">
        <div v-for="(v,i) in arrb" :key="i" class="contentlist">
            <div class="img">
                <img :src="v.images" alt="">
            </div>
           <div class="text">{{v.title}}</div>
        </div>
    </div>
</template>
<script>
export default {
    components:{

    },
  data() {
    return {
       
    };
  },
  props:{ 
      arrb:"",
    //   images:String,
    //   title:String
  },
}
</script>
<style scoped>
.content{
    width: 100%;
    height: 100px;
    background: white;
    display: flex;
    justify-content: space-around;
}

.img{
 
    text-align: center; 
    margin-top: 15px; 
}
.content img{
    width: 50px;
    height: 50px;
    display: inline-block;
    text-align: center;
  
}
.contentlist{
    width: 33.3%;
   

}
.text{
    text-align: center;
}

</style>
