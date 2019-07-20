<template>
    <div class="noe">
        <div class="title">
            <div class="left">
                {{arrb.title}}
            </div>
            <div class="rights">
               
                         <img src="arrb.value" alt="">
           
                <span>{{arrb.value}} </span>
            </div>
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
      arrb:"",
  },
}
</script>
<style scoped>
.noe{
    width: 100%;
    padding: 18px 0;
    background: white;
      border-top: 1px solid #d5d5d5;
    
}
.title{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  
}
.left{
    margin:auto 0;
    
}
.right{
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: papayawhip;
    text-align: center;
    line-height: 60px;
}
.right img{
    display: block;
    width: 60px;
    height: 60px;
     border-radius: 50%;
}

</style>

